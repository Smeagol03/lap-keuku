# TypeScript

TypeScript is a language for application-scale JavaScript development created by Microsoft. It adds optional static types to JavaScript that enable tooling support for large-scale applications across any browser, host, and operating system. TypeScript compiles to clean, readable, standards-based JavaScript, making it an essential tool for building robust applications with enhanced developer experience through IntelliSense, refactoring, and error detection.

The TypeScript package provides multiple programmatic APIs: the Compiler API for building custom compilation pipelines, the Language Service API for editor integration features like autocompletion and diagnostics, and the standalone tsserver for JSON-based editor communication. These APIs enable developers to create custom build tools, IDE plugins, linters, documentation generators, and code transformation utilities that leverage TypeScript's powerful type system and AST capabilities.

## Installation

Install TypeScript as a development dependency in your project.

```bash
# Install stable version
npm install -D typescript

# Install nightly builds
npm install -D typescript@next

# Install Node.js type definitions for API usage
npm install -D @types/node
```

## ts.createProgram - Create a TypeScript Program

Creates a compilation program from a set of root files and compiler options. The Program is the core entry point that provides access to type checking, diagnostics, and emit functionality.

```typescript
import * as ts from "typescript";

function compile(fileNames: string[], options: ts.CompilerOptions): void {
  // Create program from root files
  let program = ts.createProgram(fileNames, options);

  // Emit JavaScript output
  let emitResult = program.emit();

  // Collect all diagnostics (pre-emit + emit)
  let allDiagnostics = ts
    .getPreEmitDiagnostics(program)
    .concat(emitResult.diagnostics);

  // Report diagnostics with file location
  allDiagnostics.forEach(diagnostic => {
    if (diagnostic.file) {
      let { line, character } = ts.getLineAndCharacterOfPosition(
        diagnostic.file,
        diagnostic.start!
      );
      let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
      console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
    } else {
      console.log(ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"));
    }
  });

  let exitCode = emitResult.emitSkipped ? 1 : 0;
  console.log(`Process exiting with code '${exitCode}'.`);
  process.exit(exitCode);
}

// Usage: compile TypeScript files to ES5 CommonJS
compile(process.argv.slice(2), {
  noEmitOnError: true,
  noImplicitAny: true,
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS
});
```

## ts.transpileModule - Quick String-to-String Transformation

Provides a simple string-to-string TypeScript to JavaScript transformation without creating a full program. Ideal for single-file transformations and quick prototyping.

```typescript
import * as ts from "typescript";

const source = `
interface User {
  name: string;
  age: number;
}

const greet = (user: User): string => {
  return \`Hello, \${user.name}! You are \${user.age} years old.\`;
};

export { greet, User };
`;

let result = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2020,
    removeComments: true
  }
});

console.log(result.outputText);
// Output:
// const greet = (user) => {
//   return `Hello, ${user.name}! You are ${user.age} years old.`;
// };
// export { greet };
```

## ts.createSourceFile - Parse TypeScript/JavaScript to AST

Creates a SourceFile AST from source text without full compilation. Useful for syntax analysis, linting, and code transformation tools.

```typescript
import { readFileSync } from "fs";
import * as ts from "typescript";

// Parse source file to AST
const sourceFile = ts.createSourceFile(
  "example.ts",
  readFileSync("example.ts").toString(),
  ts.ScriptTarget.ES2015,
  /*setParentNodes*/ true
);

// Simple linter: check for loose equality operators
function lintFile(sourceFile: ts.SourceFile) {
  function visit(node: ts.Node) {
    if (node.kind === ts.SyntaxKind.BinaryExpression) {
      const op = (node as ts.BinaryExpression).operatorToken.kind;
      if (op === ts.SyntaxKind.EqualsEqualsToken ||
          op === ts.SyntaxKind.ExclamationEqualsToken) {
        const { line, character } = sourceFile.getLineAndCharacterOfPosition(
          node.getStart()
        );
        console.log(
          `${sourceFile.fileName} (${line + 1},${character + 1}): ` +
          `Use '===' and '!==' instead of '==' and '!='.`
        );
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
}

lintFile(sourceFile);
```

## ts.createCompilerHost - Custom File System Abstraction

Creates a compiler host that abstracts file system operations. Override methods to customize module resolution, file reading, and output handling.

```typescript
import * as ts from "typescript";
import * as path from "path";

function createCompilerHost(
  options: ts.CompilerOptions,
  moduleSearchLocations: string[]
): ts.CompilerHost {
  return {
    getSourceFile,
    getDefaultLibFileName: () => "lib.d.ts",
    writeFile: (fileName, content) => ts.sys.writeFile(fileName, content),
    getCurrentDirectory: () => ts.sys.getCurrentDirectory(),
    getDirectories: (path) => ts.sys.getDirectories(path),
    getCanonicalFileName: (fileName) =>
      ts.sys.useCaseSensitiveFileNames ? fileName : fileName.toLowerCase(),
    getNewLine: () => ts.sys.newLine,
    useCaseSensitiveFileNames: () => ts.sys.useCaseSensitiveFileNames,
    fileExists,
    readFile,
    resolveModuleNames
  };

  function fileExists(fileName: string): boolean {
    return ts.sys.fileExists(fileName);
  }

  function readFile(fileName: string): string | undefined {
    return ts.sys.readFile(fileName);
  }

  function getSourceFile(
    fileName: string,
    languageVersion: ts.ScriptTarget
  ): ts.SourceFile | undefined {
    const sourceText = ts.sys.readFile(fileName);
    return sourceText !== undefined
      ? ts.createSourceFile(fileName, sourceText, languageVersion)
      : undefined;
  }

  // Custom module resolution with fallback locations
  function resolveModuleNames(
    moduleNames: string[],
    containingFile: string
  ): ts.ResolvedModule[] {
    const resolvedModules: ts.ResolvedModule[] = [];
    for (const moduleName of moduleNames) {
      // Try standard resolution first
      let result = ts.resolveModuleName(moduleName, containingFile, options, {
        fileExists,
        readFile
      });
      if (result.resolvedModule) {
        resolvedModules.push(result.resolvedModule);
      } else {
        // Check fallback locations for .d.ts files
        for (const location of moduleSearchLocations) {
          const modulePath = path.join(location, moduleName + ".d.ts");
          if (fileExists(modulePath)) {
            resolvedModules.push({ resolvedFileName: modulePath });
            break;
          }
        }
      }
    }
    return resolvedModules;
  }
}

// Usage with custom module paths
const host = createCompilerHost(
  { module: ts.ModuleKind.AMD, target: ts.ScriptTarget.ES5 },
  ["./custom-types", "./vendor-types"]
);
const program = ts.createProgram(["app.ts"], {}, host);
```

## ts.createLanguageService - Editor Integration Service

Creates a language service for IDE features like autocompletion, go-to-definition, and diagnostics. The service maintains incremental state for efficient updates.

```typescript
import * as fs from "fs";
import * as ts from "typescript";

function createLanguageServiceHost(
  rootFileNames: string[],
  options: ts.CompilerOptions
): ts.LanguageServiceHost {
  const files: Map<string, { version: number }> = new Map();

  // Initialize file versions
  rootFileNames.forEach(fileName => files.set(fileName, { version: 0 }));

  return {
    getScriptFileNames: () => rootFileNames,
    getScriptVersion: (fileName) => {
      const file = files.get(fileName);
      return file ? file.version.toString() : "0";
    },
    getScriptSnapshot: (fileName) => {
      if (!fs.existsSync(fileName)) return undefined;
      return ts.ScriptSnapshot.fromString(fs.readFileSync(fileName, "utf8"));
    },
    getCurrentDirectory: () => process.cwd(),
    getCompilationSettings: () => options,
    getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
    fileExists: ts.sys.fileExists,
    readFile: ts.sys.readFile,
    readDirectory: ts.sys.readDirectory,
    directoryExists: ts.sys.directoryExists,
    getDirectories: ts.sys.getDirectories,
  };
}

// Create language service
const host = createLanguageServiceHost(
  ["./src/app.ts", "./src/utils.ts"],
  { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
);
const service = ts.createLanguageService(host, ts.createDocumentRegistry());

// Get completions at position
const completions = service.getCompletionsAtPosition(
  "./src/app.ts",
  100, // character offset
  undefined
);
console.log("Completions:", completions?.entries.map(e => e.name));

// Get semantic diagnostics
const diagnostics = service.getSemanticDiagnostics("./src/app.ts");
diagnostics.forEach(d => {
  const message = ts.flattenDiagnosticMessageText(d.messageText, "\n");
  console.log(`Error: ${message}`);
});

// Get quick info (hover information)
const quickInfo = service.getQuickInfoAtPosition("./src/app.ts", 50);
if (quickInfo) {
  console.log("Type:", ts.displayPartsToString(quickInfo.displayParts));
  console.log("Docs:", ts.displayPartsToString(quickInfo.documentation));
}
```

## ts.createWatchProgram - File Watching and Incremental Builds

Creates a watch-mode program that automatically rebuilds when files change. Uses incremental compilation for optimal performance on large codebases.

```typescript
import * as ts from "typescript";

const formatHost: ts.FormatDiagnosticsHost = {
  getCanonicalFileName: (path) => path,
  getCurrentDirectory: ts.sys.getCurrentDirectory,
  getNewLine: () => ts.sys.newLine
};

function watchMain() {
  // Find tsconfig.json
  const configPath = ts.findConfigFile(
    "./",
    ts.sys.fileExists,
    "tsconfig.json"
  );
  if (!configPath) {
    throw new Error("Could not find 'tsconfig.json'.");
  }

  // Use semantic diagnostics builder for incremental type checking
  const createProgram = ts.createSemanticDiagnosticsBuilderProgram;

  // Create watch compiler host
  const host = ts.createWatchCompilerHost(
    configPath,
    {},
    ts.sys,
    createProgram,
    reportDiagnostic,
    reportWatchStatusChanged
  );

  // Optional: Hook into program creation lifecycle
  const origCreateProgram = host.createProgram;
  host.createProgram = (rootNames, options, host, oldProgram) => {
    console.log("Starting compilation...");
    return origCreateProgram(rootNames, options, host, oldProgram);
  };

  const origPostProgramCreate = host.afterProgramCreate;
  host.afterProgramCreate = (program) => {
    console.log("Compilation finished!");
    origPostProgramCreate?.(program);
  };

  // Start watching
  ts.createWatchProgram(host);
}

function reportDiagnostic(diagnostic: ts.Diagnostic) {
  console.error(
    "Error",
    diagnostic.code,
    ":",
    ts.flattenDiagnosticMessageText(diagnostic.messageText, formatHost.getNewLine())
  );
}

function reportWatchStatusChanged(diagnostic: ts.Diagnostic) {
  console.info(ts.formatDiagnostic(diagnostic, formatHost));
}

watchMain();
```

## program.getTypeChecker - Type System Queries

The TypeChecker provides methods for querying types, symbols, and type relationships. Essential for building documentation generators, type-aware linters, and refactoring tools.

```typescript
import * as ts from "typescript";
import * as fs from "fs";

interface DocEntry {
  name?: string;
  documentation?: string;
  type?: string;
  constructors?: DocEntry[];
  parameters?: DocEntry[];
  returnType?: string;
}

function generateDocumentation(fileNames: string[]): DocEntry[] {
  const program = ts.createProgram(fileNames, {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS
  });
  const checker = program.getTypeChecker();
  const output: DocEntry[] = [];

  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      ts.forEachChild(sourceFile, visit);
    }
  }

  return output;

  function visit(node: ts.Node) {
    // Process exported class declarations
    if (ts.isClassDeclaration(node) && node.name && isNodeExported(node)) {
      const symbol = checker.getSymbolAtLocation(node.name);
      if (symbol) {
        output.push(serializeClass(symbol));
      }
    } else if (ts.isModuleDeclaration(node)) {
      ts.forEachChild(node, visit);
    }
  }

  function serializeSymbol(symbol: ts.Symbol): DocEntry {
    return {
      name: symbol.getName(),
      documentation: ts.displayPartsToString(
        symbol.getDocumentationComment(checker)
      ),
      type: checker.typeToString(
        checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration!)
      )
    };
  }

  function serializeClass(symbol: ts.Symbol): DocEntry {
    const details = serializeSymbol(symbol);
    const constructorType = checker.getTypeOfSymbolAtLocation(
      symbol,
      symbol.valueDeclaration!
    );
    details.constructors = constructorType
      .getConstructSignatures()
      .map(serializeSignature);
    return details;
  }

  function serializeSignature(signature: ts.Signature): DocEntry {
    return {
      parameters: signature.parameters.map(serializeSymbol),
      returnType: checker.typeToString(signature.getReturnType()),
      documentation: ts.displayPartsToString(
        signature.getDocumentationComment(checker)
      )
    };
  }

  function isNodeExported(node: ts.Node): boolean {
    return (
      (ts.getCombinedModifierFlags(node as ts.Declaration) &
        ts.ModifierFlags.Export) !== 0 ||
      (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
    );
  }
}

// Generate and save documentation
const docs = generateDocumentation(["./src/models.ts"]);
fs.writeFileSync("api-docs.json", JSON.stringify(docs, null, 2));
console.log("Documentation generated:", docs);
```

## ts.factory - AST Node Generation

The factory API creates TypeScript AST nodes programmatically. Combined with the printer, enables code generation and transformation tools.

```typescript
import * as ts from "typescript";

// Generate a factorial function programmatically
function makeFactorialFunction(): ts.FunctionDeclaration {
  const functionName = ts.factory.createIdentifier("factorial");
  const paramName = ts.factory.createIdentifier("n");

  const parameter = ts.factory.createParameterDeclaration(
    undefined,      // modifiers
    undefined,      // dotDotDotToken
    paramName,
    undefined,      // questionToken
    ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
  );

  // if (n <= 1) { return 1; }
  const condition = ts.factory.createBinaryExpression(
    paramName,
    ts.SyntaxKind.LessThanEqualsToken,
    ts.factory.createNumericLiteral(1)
  );
  const ifBody = ts.factory.createBlock(
    [ts.factory.createReturnStatement(ts.factory.createNumericLiteral(1))],
    true
  );

  // return n * factorial(n - 1);
  const decrementedArg = ts.factory.createBinaryExpression(
    paramName,
    ts.SyntaxKind.MinusToken,
    ts.factory.createNumericLiteral(1)
  );
  const recurse = ts.factory.createBinaryExpression(
    paramName,
    ts.SyntaxKind.AsteriskToken,
    ts.factory.createCallExpression(functionName, undefined, [decrementedArg])
  );

  const statements = [
    ts.factory.createIfStatement(condition, ifBody),
    ts.factory.createReturnStatement(recurse)
  ];

  return ts.factory.createFunctionDeclaration(
    [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
    undefined,      // asteriskToken
    functionName,
    undefined,      // typeParameters
    [parameter],
    ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
    ts.factory.createBlock(statements, true)
  );
}

// Print the generated AST to code
const resultFile = ts.createSourceFile(
  "generated.ts",
  "",
  ts.ScriptTarget.Latest,
  false,
  ts.ScriptKind.TS
);
const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
const result = printer.printNode(
  ts.EmitHint.Unspecified,
  makeFactorialFunction(),
  resultFile
);

console.log(result);
// Output:
// export function factorial(n: number): number {
//     if (n <= 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
```

## tsserver Protocol - JSON-based Editor Communication

The TypeScript standalone server (tsserver) provides a JSON protocol for editor integration. It handles requests via stdin and responds via stdout with content-length headers.

```bash
# Install TypeScript and locate tsserver
npm install typescript
ls node_modules/typescript/lib/tsserver.js

# Start tsserver with logging enabled
TSS_LOG="-level verbose -file tsserver.log" node node_modules/typescript/lib/tsserver.js
```

```javascript
// Example: Send request to tsserver via stdin
// Request format (single line JSON):
{"seq":1,"type":"request","command":"open","arguments":{"file":"/path/to/file.ts"}}

// Response format (with Content-Length header):
// Content-Length: 116
//
// {"seq":0,"type":"response","command":"open","request_seq":1,"success":true}

// Request completions at position
{"seq":2,"type":"request","command":"completions","arguments":{"file":"/path/to/file.ts","line":10,"offset":15}}

// Request quick info (hover)
{"seq":3,"type":"request","command":"quickinfo","arguments":{"file":"/path/to/file.ts","line":5,"offset":8}}

// Request diagnostics
{"seq":4,"type":"request","command":"geterr","arguments":{"files":["/path/to/file.ts"],"delay":0}}

// Event response for diagnostics:
// Content-Length: 261
//
// {"seq":0,"type":"event","event":"semanticDiag","body":{"file":"/path/to/file.ts","diagnostics":[{"start":{"line":10,"offset":5},"end":{"line":10,"offset":15},"text":"Type 'string' is not assignable to type 'number'.","code":2322}]}}
```

```typescript
// Programmatic tsserver client (Node.js)
import { spawn } from "child_process";
import * as readline from "readline";

class TSServerClient {
  private server: ReturnType<typeof spawn>;
  private seq = 0;
  private pending = new Map<number, (response: any) => void>();

  constructor() {
    this.server = spawn("node", [
      "node_modules/typescript/lib/tsserver.js",
      "--useSingleInferredProject"
    ]);

    const rl = readline.createInterface({ input: this.server.stdout });
    let contentLength = 0;

    rl.on("line", (line) => {
      if (line.startsWith("Content-Length:")) {
        contentLength = parseInt(line.split(":")[1].trim());
      } else if (line === "" && contentLength > 0) {
        // Next line is JSON body - handled by data event
      } else if (line.startsWith("{")) {
        const response = JSON.parse(line);
        const callback = this.pending.get(response.request_seq);
        if (callback) {
          callback(response);
          this.pending.delete(response.request_seq);
        }
      }
    });
  }

  async request(command: string, args: any): Promise<any> {
    return new Promise((resolve) => {
      const seq = ++this.seq;
      this.pending.set(seq, resolve);
      const request = JSON.stringify({ seq, type: "request", command, arguments: args });
      this.server.stdin.write(request + "\n");
    });
  }

  async openFile(file: string) {
    return this.request("open", { file });
  }

  async getCompletions(file: string, line: number, offset: number) {
    return this.request("completions", { file, line, offset });
  }

  close() {
    this.server.kill();
  }
}

// Usage
const client = new TSServerClient();
await client.openFile("/path/to/file.ts");
const completions = await client.getCompletions("/path/to/file.ts", 10, 15);
console.log("Completions:", completions.body);
client.close();
```

## Declaration File Generation from JavaScript

Generate TypeScript declaration files (.d.ts) from JavaScript files with JSDoc annotations. Useful for adding type information to JavaScript libraries.

```typescript
import * as ts from "typescript";

function generateDeclarations(fileNames: string[]): void {
  // In-memory storage for generated files
  const createdFiles: Record<string, string> = {};

  const options: ts.CompilerOptions = {
    allowJs: true,
    declaration: true,
    emitDeclarationOnly: true,
    outDir: "./types"
  };

  const host = ts.createCompilerHost(options);
  host.writeFile = (fileName, contents) => {
    createdFiles[fileName] = contents;
  };

  const program = ts.createProgram(fileNames, options, host);
  program.emit();

  // Output generated declarations
  fileNames.forEach(file => {
    console.log("### Source:", file);
    console.log(host.readFile(file));

    const dtsFile = file.replace(/\.js$/, ".d.ts");
    const dtsPath = Object.keys(createdFiles).find(f => f.endsWith(dtsFile.split("/").pop()!));
    if (dtsPath) {
      console.log("\n### Generated Declaration:");
      console.log(createdFiles[dtsPath]);
    }
  });
}

// Example JavaScript file with JSDoc (utils.js):
// /**
//  * Adds two numbers together
//  * @param {number} a - First number
//  * @param {number} b - Second number
//  * @returns {number} Sum of a and b
//  */
// export function add(a, b) {
//   return a + b;
// }

generateDeclarations(["./utils.js"]);
// Output: export function add(a: number, b: number): number;
```

TypeScript's programmatic APIs enable a wide range of development tools and workflows. The Compiler API is ideal for building custom build pipelines, bundlers, and code generation tools that need fine-grained control over compilation. The Language Service API powers editor features including IntelliSense, refactoring, and real-time error detection, making it essential for IDE plugin development. The tsserver provides a portable JSON-based interface used by VS Code, Sublime Text, Vim/Neovim, and other editors.

Common integration patterns include: embedding the compiler in build tools like webpack or esbuild for type-checking during bundling; using the Language Service for custom linting rules that leverage type information; implementing documentation generators that extract JSDoc comments and type signatures; and building code transformation tools using the AST factory and printer APIs. The watch APIs enable efficient incremental builds that only recompile affected files, crucial for large codebases where full rebuilds would be prohibitively slow.
