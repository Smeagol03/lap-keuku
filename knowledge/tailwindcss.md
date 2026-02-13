### Create TanStack Start Project

Source: https://tailwindcss.com/docs/installation/framework-guides/tanstack-start

Initialize a new TanStack Start project using Create Start App. This command creates a new project directory and installs all necessary dependencies for a TanStack Start application.

```bash
npx create-start-app@latest my-project
cd my-project
```

--------------------------------

### Create Vite Project with npm

Source: https://tailwindcss.com/docs/installation/using-vite

Initialize a new Vite project using Create Vite. This command creates a new project directory and navigates into it for subsequent setup steps.

```bash
npm create vite@latest my-project
cd my-project
```

--------------------------------

### Start Development Server

Source: https://tailwindcss.com/docs/installation/framework-guides/astro

Run the npm run dev command to start the Astro development server. This compiles your project and enables hot module reloading for real-time development.

```bash
npm run dev
```

--------------------------------

### Create a new Qwik project using npm

Source: https://tailwindcss.com/docs/installation/framework-guides/qwik

This command initializes a new Qwik project named 'my-project' using the latest Qwik starter template. After creation, it navigates into the project directory, preparing for further setup.

```Terminal
npm create qwik@latest empty my-project
cd my-project
```

--------------------------------

### Start Parcel development server

Source: https://tailwindcss.com/docs/installation/framework-guides/parcel

Run the Parcel build process with the entry point specified as src/index.html. This command starts the development server and watches for file changes to rebuild the project automatically.

```bash
npx parcel src/index.html
```

--------------------------------

### Start Gatsby Development Server

Source: https://tailwindcss.com/docs/installation/framework-guides/gatsby

Run the gatsby develop command to start the development server and build process. This compiles your Tailwind CSS and watches for changes.

```bash
gatsby develop
```

--------------------------------

### Include compiled Tailwind CSS in HTML and use utility classes

Source: https://tailwindcss.com/docs/installation/tailwind-cli

This HTML snippet demonstrates how to link the compiled `output.css` file in your document's `<head>` section. It also shows a basic example of using Tailwind's utility classes (e.g., `text-3xl`, `font-bold`, `underline`) to style an `<h1>` element.

```html
<!doctype html><html><head>  <meta charset="UTF-8">  <meta name="viewport" content="width=device-width, initial-scale=1.0">  <link href="./output.css" rel="stylesheet"></head><body>  <h1 class="text-3xl font-bold underline">    Hello world!  </h1></body></html>
```

--------------------------------

### Start Angular development server

Source: https://tailwindcss.com/docs/installation/framework-guides/angular

Execute this command in your terminal to start the Angular development server. This compiles your application and serves it locally, allowing you to view changes in your browser.

```Terminal
ng serve
```

--------------------------------

### Create a new Nuxt.js project using npm

Source: https://tailwindcss.com/docs/installation/framework-guides/nuxt

This command initializes a fresh Nuxt.js project named 'my-project' in the current directory. It then navigates into the newly created project folder, preparing the environment for further setup and dependency installation.

```Terminal
npm create nuxt my-project
cd my-project
```

--------------------------------

### Start Meteor Development Server

Source: https://tailwindcss.com/docs/installation/framework-guides/meteor

Run the Meteor development server using npm start. This initiates the build process and watches for file changes, compiling Tailwind CSS utilities automatically.

```bash
npm run start
```

--------------------------------

### Install Tailwind CSS and CLI via npm

Source: https://tailwindcss.com/docs/installation/tailwind-cli

This command installs the core Tailwind CSS library and the Tailwind CLI tool as development dependencies in your project. It's the first step to get the necessary packages for building your CSS.

```Terminal
npm install tailwindcss @tailwindcss/cli
```

--------------------------------

### Start Development Build Process

Source: https://tailwindcss.com/docs/installation/framework-guides/ruby-on-rails

Run the development server with the Tailwind CSS build process. This command starts both the Rails server and watches for CSS changes.

```bash
./bin/dev
```

--------------------------------

### Start Development Build Process

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/vite

Run the npm development script to start the Vite build process. This watches for file changes and recompiles your CSS with Tailwind utilities in real-time during development.

```bash
npm run dev
```

--------------------------------

### Snap Start Alignment with Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-snap-align

Demonstrates using the snap-start utility to align scrollable elements to their start point within a snap container. This example shows a horizontally scrollable grid of images where each item snaps to start alignment.

```html
<div class="snap-x ...">
  <div class="snap-start ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-05.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-06.jpg" />
  </div>
</div>
```

--------------------------------

### Start Development Server

Source: https://tailwindcss.com/docs/installation/framework-guides/adonisjs

Run the npm dev script to start the AdonisJS development server with Vite. This enables hot module replacement and automatic CSS compilation with Tailwind CSS.

```bash
npm run dev
```

--------------------------------

### Start Phoenix server with Tailwind CSS build

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Run the `mix phx.server` command to start your Phoenix development server. This will also trigger the configured Tailwind CSS build process, compiling your styles and making them available in your application.

```bash
mix phx.server
```

--------------------------------

### Run Tailwind CLI to build CSS with watch mode

Source: https://tailwindcss.com/docs/installation/tailwind-cli

Execute the Tailwind CLI to scan your source files for utility classes, process your input CSS, and generate the final output CSS file. The `--watch` flag keeps the process running, automatically recompiling your CSS whenever changes are detected in your source files.

```Terminal
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

--------------------------------

### Start Laravel Mix build process with watch mode

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/mix

Run the npm watch command to start the build process in watch mode. This automatically recompiles your CSS and JavaScript whenever files change during development.

```bash
npm run watch
```

--------------------------------

### Create SvelteKit Project

Source: https://tailwindcss.com/docs/installation/framework-guides/sveltekit

Initialize a new SvelteKit project using the official scaffolding tool. This command creates the project directory structure and installs base dependencies required for a SvelteKit application.

```bash
npx sv create my-project
cd my-project
```

--------------------------------

### Create a new Phoenix project

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Initialize a new Phoenix application from scratch. This command sets up the basic project structure and necessary files, preparing the environment for further configuration.

```bash
mix phx.new myproject
cd myproject
```

--------------------------------

### Apply place-items-start utility in Tailwind CSS

Source: https://tailwindcss.com/docs/place-items

This example demonstrates how to use the `place-items-start` utility class to position grid items at the start of their grid areas along both axes. It requires a parent element with `display: grid` and `grid-template-columns` defined to establish the grid context.

```html
<div class="grid grid-cols-3 place-items-start gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div>  <div>05</div>  <div>06</div></div>
```

--------------------------------

### Create a new Vite project using npm

Source: https://tailwindcss.com/docs/index

This command initializes a new Vite project in the current directory. It uses `npm create vite@latest` to scaffold a modern web project, setting up the basic file structure and dependencies. The `cd my-project` command then navigates into the newly created project directory.

```Shell
npm create vite@latest my-project
cd my-project
```

--------------------------------

### Create New Laravel Project

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/vite

Initialize a new Laravel project using the Laravel installer and navigate to the project directory. This sets up the basic Laravel application structure needed for Tailwind CSS integration.

```bash
laravel new my-project
cd my-project
```

--------------------------------

### Link CSS File in Root Route

Source: https://tailwindcss.com/docs/installation/framework-guides/tanstack-start

Import the compiled CSS file in your root route component using the ?url query parameter. This ensures the stylesheet is loaded globally for all pages in your TanStack Start application.

```typescript
// other imports...
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      // your meta tags and site config
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
    // other head config
  }),
  component: RootComponent,
})
```

--------------------------------

### Create New Rails Project

Source: https://tailwindcss.com/docs/installation/framework-guides/ruby-on-rails

Initialize a new Ruby on Rails project using the Rails command line interface. This creates the project directory structure and installs default dependencies.

```bash
rails new my-project
cd my-project
```

--------------------------------

### Basic HTML structure with Tailwind CSS styling

Source: https://tailwindcss.com/docs/installation/using-postcss

This HTML example demonstrates a basic document structure, including the necessary `<link>` tag to reference the compiled CSS. It showcases how to apply Tailwind's utility classes, such as `text-3xl`, `font-bold`, and `underline`, directly to HTML elements for styling.

```html
<!doctype html><html><head>  <meta charset="UTF-8">  <meta name="viewport" content="width=device-width, initial-scale=1.0">  <link href="/dist/styles.css" rel="stylesheet"></head><body>  <h1 class="text-3xl font-bold underline">    Hello world!  </h1></body></html>
```

--------------------------------

### Create Gatsby Project with CLI

Source: https://tailwindcss.com/docs/installation/framework-guides/gatsby

Initialize a new Gatsby project using the Gatsby CLI tool. This creates a basic project structure and installs core Gatsby dependencies.

```bash
gatsby new my-project
cd my-project
```

--------------------------------

### Apply Styles for Element Initial Render or Display Transition (Tailwind CSS HTML)

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This example uses the `starting` variant to define the initial appearance of an element when it is first rendered in the DOM or transitions from `display: none` to visible. This is particularly useful for smooth entry animations or transitions.

```html
<div>
  <button popovertarget="my-popover">Check for updates</button>
  <div popover id="my-popover" class="opacity-0 starting:open:opacity-0 ...">
    <!-- ... -->
  </div>
</div>
```

--------------------------------

### Create Meteor Project with CLI

Source: https://tailwindcss.com/docs/installation/framework-guides/meteor

Initialize a new Meteor project using the Meteor command-line interface. This creates the project directory structure and installs core Meteor dependencies.

```bash
npx meteor create my-project
cd my-project
```

--------------------------------

### Create Astro Project with npm

Source: https://tailwindcss.com/docs/installation/framework-guides/astro

Initialize a new Astro project using the create-astro command-line tool. This sets up the basic project structure and configuration files needed for an Astro application.

```bash
npm create astro@latest my-project
cd my-project
```

--------------------------------

### Create new SolidJS project with Vite template

Source: https://tailwindcss.com/docs/installation/framework-guides/solidjs

Initializes a new SolidJS project using `npx degit` with the SolidJS Vite template. This command sets up the basic project structure and navigates into the new directory, preparing for development.

```Terminal
npx degit solidjs/templates/js my-project
cd my-project
```

--------------------------------

### HTML Template with Tailwind CSS Utilities

Source: https://tailwindcss.com/docs/installation

Basic HTML template demonstrating Tailwind CSS utility classes. Includes the compiled CSS link in the head and uses Tailwind utility classes like text-3xl, font-bold, and underline to style content.

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/style.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

--------------------------------

### Align items to start of main axis with Tailwind CSS `justify-start`

Source: https://tailwindcss.com/docs/justify-content

This example demonstrates how to use the `justify-start` utility class in Tailwind CSS to align flex items to the beginning of the container's main axis. It ensures content is pushed to the start, useful for left-aligned layouts in LTR contexts.

```html
<div class="flex justify-start ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

--------------------------------

### flex-initial Utility Example

Source: https://tailwindcss.com/docs/flex

Shows how to use flex-initial to allow flex items to shrink but not grow, while respecting their initial size. Items 02 and 03 will shrink if needed but won't expand beyond their defined widths.

```html
<div class="flex">
  <div class="w-14 flex-none ...">01</div>
  <div class="w-64 flex-initial ...">02</div>
  <div class="w-32 flex-initial ...">03</div>
</div>
```

--------------------------------

### Create a New Next.js Project with TypeScript and ESLint

Source: https://tailwindcss.com/docs/installation/framework-guides/nextjs

Initialize a new Next.js application using `create-next-app`, configuring it with TypeScript and ESLint, and then navigate into the newly created project directory.

```Terminal
npx create-next-app@latest my-project --typescript --eslint --app
cd my-project
```

--------------------------------

### Responsive Margin Utility HTML Example

Source: https://tailwindcss.com/docs/margin

HTML example showing responsive margin utilities with breakpoint variants (md:) to apply different margin values at specific screen sizes.

```html
<div class="mt-4 md:mt-8 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Configure Vite Plugin for Tailwind CSS

Source: https://tailwindcss.com/docs/installation/framework-guides/tanstack-start

Add the @tailwindcss/vite plugin to your Vite configuration file. This plugin must be placed before other plugins in the plugins array to ensure proper CSS processing and integration with TanStack Start.

```typescript
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart(),
    tsConfigPaths(),
  ]
});
```

--------------------------------

### Create a new Symfony web application project

Source: https://tailwindcss.com/docs/installation/framework-guides/symfony

Initializes a new Symfony project with webapp features. This command uses the Symfony CLI to set up a basic project structure, then navigates into the newly created project directory.

```Terminal
symfony new --webapp my-project
cd my-project
```

--------------------------------

### Use Tailwind CSS Utility Classes in Components

Source: https://tailwindcss.com/docs/installation/framework-guides/tanstack-start

Apply Tailwind CSS utility classes to HTML elements in your React components. This example demonstrates using text sizing, font weight, and text decoration utilities to style a heading.

```typescript
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ 
  component: App,
})

function App() {
  return (
    <h1 class="text-3xl font-bold underline">
      Hello World!
    </h1>
  )
}
```

--------------------------------

### Install Tailwind CSS standalone CLI

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Execute the `mix tailwind.install` command to download the standalone Tailwind CSS CLI executable. This command fetches the necessary binary for Tailwind to function within your Phoenix project.

```bash
mix tailwind.install
```

--------------------------------

### Use Tailwind CSS Utility Classes in HTML

Source: https://tailwindcss.com/docs/installation/using-vite

Apply Tailwind CSS utility classes to HTML elements for styling. This example demonstrates using text-3xl, font-bold, and underline classes to style a heading element.

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/style.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

--------------------------------

### Create Parcel project with npm

Source: https://tailwindcss.com/docs/installation/framework-guides/parcel

Initialize a new Parcel project by creating a project directory, initializing npm, installing Parcel as a dev dependency, and creating the source directory structure. This sets up the basic project layout needed for Tailwind CSS integration.

```bash
mkdir my-project
cd my-project
npm init -y
npm install parcel
mkdir src
touch src/index.html
```

--------------------------------

### Example React Component Using Tailwind CSS Classes

Source: https://tailwindcss.com/docs/installation/framework-guides/rspack/react

Provides a simple React component (`App.jsx`) demonstrating the use of Tailwind CSS utility classes to style an `<h1>` element. This shows how to apply Tailwind styles directly within JSX.

```jsx
export default function App() {  return (    <h1 className="text-3xl font-bold underline">      Hello world!    </h1>  )}
```

--------------------------------

### Configure Tailwind CSS Vite plugin in vite.config.ts

Source: https://tailwindcss.com/docs/index

This configuration snippet adds the `@tailwindcss/vite` plugin to the Vite build process. By importing `defineConfig` from `vite` and `tailwindcss` from `@tailwindcss/vite`, it enables Tailwind CSS to process class names found in project files and generate the corresponding CSS. This setup is crucial for Tailwind's JIT (Just-In-Time) compilation.

```TypeScript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

--------------------------------

### Create AdonisJS Project

Source: https://tailwindcss.com/docs/installation/framework-guides/adonisjs

Initialize a new AdonisJS project using the Create AdonisJS CLI tool with the web kit. This command scaffolds a complete AdonisJS application structure ready for Tailwind CSS integration.

```bash
npm init adonisjs@latest my-project -- --kit=web
cd my-project
```

--------------------------------

### Logical Properties Margin Utilities HTML Example

Source: https://tailwindcss.com/docs/margin

HTML example demonstrating logical margin properties (ms-, me-) for margin-inline-start and margin-inline-end with bidirectional support (LTR and RTL).

```html
<div>
  <div dir="ltr">
    <div class="ms-8 ...">ms-8</div>
    <div class="me-8 ...">me-8</div>
  </div>
  <div dir="rtl">
    <div class="ms-8 ...">ms-8</div>
    <div class="me-8 ...">me-8</div>
  </div>
</div>
```

--------------------------------

### Apply Tailwind CSS utility classes in Phoenix template

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Demonstrates how to use Tailwind's utility classes directly within your Phoenix HTML templates. This example applies text size, font weight, and underline styles to an `<h1>` element.

```html
<h1 class="text-3xl font-bold underline">
  Hello world!</h1>
```

--------------------------------

### Basic flex-1 Utility Example

Source: https://tailwindcss.com/docs/flex

Demonstrates using flex-1 utility class to allow flex items to grow and shrink proportionally. The example shows a flex container with three items where items 02 and 03 use flex-1 to share available space equally while item 01 remains fixed width with flex-none.

```html
<div class="flex">
  <div class="w-14 flex-none ...">01</div>
  <div class="w-64 flex-1 ...">02</div>
  <div class="w-32 flex-1 ...">03</div>
</div>
```

--------------------------------

### Space Reverse Direction Utility HTML Example

Source: https://tailwindcss.com/docs/margin

HTML example demonstrating space-x-reverse utility combined with flex-row-reverse to apply spacing to the correct side of reversed child elements.

```html
<div class="flex flex-row-reverse space-x-4 space-x-reverse ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

--------------------------------

### Create a new Ember.js project

Source: https://tailwindcss.com/docs/installation/framework-guides/emberjs

Initializes a new Ember.js project using `ember-cli` with Embroider enabled and no welcome page. After creation, it changes the current directory into the newly created project.

```Terminal
npx ember-cli new my-project --embroider --no-welcome
cd my-project
```

--------------------------------

### Configure Tailwind CSS plugin in Phoenix

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Configure the Tailwind plugin in `config/config.exs` to specify the desired Tailwind CSS version and define the input/output paths for your stylesheets. This setup directs where Tailwind should read your source CSS and where to output the compiled CSS.

```elixir
config :tailwind,
  version: "4.1.10",
  myproject: [
    args: ~w(
      --input=assets/css/app.css
      --output=priv/static/assets/app.css
    ),
    cd: Path.expand("..", __DIR__)
  ]
```

--------------------------------

### Custom CSS Property Margin HTML Example

Source: https://tailwindcss.com/docs/margin

HTML example demonstrating margin utilities with custom CSS properties using m-(<custom-property>) syntax for dynamic spacing values.

```html
<div class="m-(--my-margin) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Create new Angular project using Angular CLI

Source: https://tailwindcss.com/docs/installation/framework-guides/angular

This command initializes a new Angular project named 'my-project' with CSS as the default styling preprocessor. After creation, it navigates into the newly created project directory.

```Terminal
ng new my-project --style css
cd my-project
```

--------------------------------

### Create a new React Router project using npx

Source: https://tailwindcss.com/docs/installation/framework-guides/react-router

This command initializes a new React Router project with the specified name and then navigates into the newly created project directory. It's the essential first step for setting up a new application.

```Terminal
npx create-react-router@latest my-project
cd my-project
```

--------------------------------

### Install Webpack Encore for asset management in Symfony

Source: https://tailwindcss.com/docs/installation/framework-guides/symfony

Removes default Symfony UX components and installs Webpack Encore, along with `symfony/ux-turbo` and `symfony/stimulus-bundle`, to handle asset compilation and management within the Symfony project.

```Terminal
composer remove symfony/ux-turbo symfony/asset-mapper symfony/stimulus-bundle
composer require symfony/webpack-encore-bundle symfony/ux-turbo symfony/stimulus-bundle
```

--------------------------------

### place-content-start - Align Grid Content to Start

Source: https://tailwindcss.com/docs/place-content

Packs grid items against the start of both inline and block axes using the place-content-start class. This utility applies CSS place-content: start; for alignment at the beginning of the container.

```html
<div class="grid h-48 grid-cols-2 place-content-start gap-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

--------------------------------

### Use Tailwind CSS Utility Classes

Source: https://tailwindcss.com/docs/installation/framework-guides/sveltekit

Apply Tailwind CSS utility classes to HTML elements and use the @reference directive in style blocks to access Tailwind's theme tokens. This example demonstrates text styling and accessing theme colors for global styles.

```svelte
<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>

<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>
```

--------------------------------

### Responsive line-clamp with breakpoint variants

Source: https://tailwindcss.com/docs/line-clamp

Demonstrates responsive design using line-clamp utilities with breakpoint prefixes. This example applies line-clamp-3 on mobile screens and line-clamp-4 on medium screens and above using the md: variant.

```html
<div class="line-clamp-3 md:line-clamp-4 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Tailwind CSS classes in a Qwik component

Source: https://tailwindcss.com/docs/installation/framework-guides/qwik

This example demonstrates how to use Tailwind CSS utility classes directly within a Qwik component's JSX. It applies `text-3xl`, `font-bold`, and `underline` classes to an `<h1>` element, styling the text.

```typescript
import { component$ } from '@builder.io/qwik'

export default component$(() => {
  return (
    <h1 class="text-3xl font-bold underline">
      Hello World!
    </h1>
  )
})
```

--------------------------------

### Basic Margin Utility HTML Example

Source: https://tailwindcss.com/docs/margin

HTML example demonstrating basic margin utility usage with m-8 class to apply equal margin on all sides of an element.

```html
<div class="m-8 ...">m-8</div>
```

--------------------------------

### Applying responsive list-style-position utilities in HTML

Source: https://tailwindcss.com/docs/list-style-position

This example illustrates how to apply `list-style-position` utilities responsively using breakpoint variants. By prefixing a utility with `md:`, the `list-inside` style will only be applied at medium screen sizes and above, allowing for adaptive list layouts.

```html
<ul class="list-outside md:list-inside ...">  <!-- ... --></ul>
```

--------------------------------

### Apply Tailwind CSS utility classes in SolidJS `App.jsx` component

Source: https://tailwindcss.com/docs/installation/framework-guides/solidjs

Demonstrates how to use Tailwind CSS utility classes directly within a SolidJS component's JSX to style elements. This example applies text size, font weight, and underline styles to an `<h1>` tag, showcasing basic usage.

```JSX
export default function App() {
  return (
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  )}

```

--------------------------------

### Tailwind CSS `start` Utilities for Inline Start Placement

Source: https://tailwindcss.com/docs/top-right-bottom-left

These utilities control the `inset-inline-start` CSS property, setting the logical start position of an element within its inline direction. They offer options for numeric, fractional, pixel, full percentage, auto, custom property, and arbitrary values, including negative variants.

```css
/* start-<number> */
inset-inline-start: calc(var(--spacing) * <number>);
```

```css
/* -start-<number> */
inset-inline-start: calc(var(--spacing) * -<number>);
```

```css
/* start-<fraction> */
inset-inline-start: calc(<fraction> * 100%);
```

```css
/* -start-<fraction> */
inset-inline-start: calc(<fraction> * -100%);
```

```css
/* start-px */
inset-inline-start: 1px;
```

```css
/* -start-px */
inset-inline-start: -1px;
```

```css
/* start-full */
inset-inline-start: 100%;
```

```css
/* -start-full */
inset-inline-start: -100%;
```

```css
/* start-auto */
inset-inline-start: auto;
```

```css
/* start-(<custom-property>) */
inset-inline-start: var(<custom-property>);
```

```css
/* start-[<value>] */
inset-inline-start: <value>;
```

--------------------------------

### place-content with Responsive Breakpoints - Tailwind CSS

Source: https://tailwindcss.com/docs/place-content

Applies place-content utilities conditionally at different screen sizes using breakpoint prefixes like md:. This example changes alignment from start on mobile to center on medium screens and above.

```html
<div class="grid place-content-start md:place-content-center ...">
  <!-- ... -->
</div>
```

--------------------------------

### Create Rspack Project using npm CLI

Source: https://tailwindcss.com/docs/installation/framework-guides/rspack/react

Initializes a new Rspack project using the Rspack CLI. This is the first step before integrating Tailwind CSS and sets up the basic project structure.

```Terminal
npm create rspack@latest
```

--------------------------------

### Configure Tailwind CSS Vite Plugin

Source: https://tailwindcss.com/docs/installation/using-vite

Add the @tailwindcss/vite plugin to the Vite configuration file. This enables Tailwind CSS processing during the build process for frameworks like Laravel, SvelteKit, React Router, Nuxt, and SolidJS.

```typescript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

--------------------------------

### Distribute items with space between using Tailwind CSS `justify-between`

Source: https://tailwindcss.com/docs/justify-content

This example demonstrates the `justify-between` utility, which distributes flex items along the main axis with equal space between them. The first item is at the start, and the last item is at the end of the container.

```html
<div class="flex justify-between ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

--------------------------------

### Align rows to the start of the cross axis using Tailwind CSS

Source: https://tailwindcss.com/docs/align-content

This example demonstrates how to use the `content-start` utility class in Tailwind CSS to pack rows in a grid container against the beginning of the cross axis. This class applies the CSS property `align-content: flex-start;` to the container.

```html
<div class="grid h-56 grid-cols-3 content-start gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div>  <div>05</div></div>
```

--------------------------------

### Apply responsive justify-content with Tailwind CSS breakpoint variants

Source: https://tailwindcss.com/docs/justify-content

This example illustrates how to apply `justify-content` utilities responsively using Tailwind CSS breakpoint variants. The `md:justify-between` class ensures that items are justified to the start by default, but switch to space-between alignment on medium screens and above.

```html
<div class="flex justify-start md:justify-between ...">  <!-- ... --></div>
```

--------------------------------

### Use Tailwind CSS Utility Classes in Astro Component

Source: https://tailwindcss.com/docs/installation/framework-guides/astro

Import the global CSS file in an Astro component and apply Tailwind utility classes to HTML elements. This example demonstrates basic text styling with Tailwind's text-3xl, font-bold, and underline utilities.

```astro
---
import "../styles/global.css";
---

<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>
```

--------------------------------

### Vertical Margin Utility HTML Example

Source: https://tailwindcss.com/docs/margin

HTML example demonstrating vertical margin utility (my-) for controlling top and bottom margins of an element.

```html
<div class="my-8 ...">my-8</div>
```

--------------------------------

### flex-auto Utility Example

Source: https://tailwindcss.com/docs/flex

Demonstrates flex-auto utility which allows flex items to grow and shrink while accounting for their initial size. Items 02 and 03 will expand or contract based on available space.

```html
<div class="flex ...">
  <div class="w-14 flex-none ...">01</div>
  <div class="w-64 flex-auto ...">02</div>
  <div class="w-32 flex-auto ...">03</div>
</div>
```

--------------------------------

### Update Tailwind CLI Commands for v4 Package

Source: https://tailwindcss.com/docs/upgrade-guide

This example illustrates the change in how to invoke the Tailwind CSS CLI in v4. The CLI now resides in the dedicated `@tailwindcss/cli` package, replacing the direct `tailwindcss` command. The second line shows the updated command for processing input and output CSS files.

```bash
npx tailwindcss -i input.css -o output.css
npx @tailwindcss/cli -i input.css -o output.css
```

--------------------------------

### Import application CSS file into Ember.js main application file

Source: https://tailwindcss.com/docs/installation/framework-guides/emberjs

Modifies `./app/app.js` to import the `./app/app.css` file. This ensures that the main application CSS, including the imported Tailwind CSS, is loaded when the Ember.js application starts.

```javascript
import Application from '@ember/application';import Resolver from 'ember-resolver';import loadInitializers from 'ember-load-initializers';import config from 'my-project/config/environment';import 'my-project/app.css';export default class App extends Application {  modulePrefix = config.modulePrefix;  podModulePrefix = config.podModulePrefix;  Resolver = Resolver;}loadInitializers(App, config.modulePrefix);
```

--------------------------------

### justify-self with responsive breakpoints

Source: https://tailwindcss.com/docs/justify-self

Apply justify-self utilities conditionally at different screen sizes using breakpoint prefixes like md:, lg:, etc. This example changes alignment from start on mobile to end on medium screens and above.

```html
<div class="justify-self-start md:justify-self-end ...">
  <!-- ... -->
</div>
```

--------------------------------

### Install Tailwind CSS and Vite Plugin

Source: https://tailwindcss.com/docs/installation/framework-guides/astro

Install the @tailwindcss/vite plugin and Tailwind CSS as npm dependencies. The @tailwindcss/vite package provides the necessary integration between Tailwind CSS and Astro's Vite build tool.

```bash
npm install tailwindcss @tailwindcss/vite
```

--------------------------------

### Install Tailwind CSS and PostCSS dependencies via npm

Source: https://tailwindcss.com/docs/installation/framework-guides/angular

This command installs `tailwindcss`, `@tailwindcss/postcss`, and `postcss` as project dependencies. The `--force` flag is included to help resolve potential peer dependency conflicts during installation.

```Terminal
npm install tailwindcss @tailwindcss/postcss postcss --force
```

--------------------------------

### Horizontal Margin Utility HTML Example

Source: https://tailwindcss.com/docs/margin

HTML example demonstrating horizontal margin utility (mx-) for controlling left and right margins of an element.

```html
<div class="mx-8 ...">mx-8</div>
```

--------------------------------

### Import Tailwind CSS in Global Styles

Source: https://tailwindcss.com/docs/installation/framework-guides/gatsby

Create a global CSS file at ./src/styles/global.css and import the Tailwind CSS framework using the @import directive.

```css
@import "tailwindcss";
```

--------------------------------

### Use Tailwind Utility Classes in React Components

Source: https://tailwindcss.com/docs/installation/framework-guides/gatsby

Apply Tailwind CSS utility classes to JSX elements using the className attribute. This example demonstrates styling a heading with text size, font weight, and underline utilities.

```javascript
export default function IndexPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </Layout>
  )
}
```

--------------------------------

### Use Tailwind Utility Classes in React Component

Source: https://tailwindcss.com/docs/installation/framework-guides/meteor

Apply Tailwind CSS utility classes to React components using the className attribute. This example demonstrates styling a heading with text size, font weight, and text decoration utilities.

```javascript
export const App = () => (
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
)
```

--------------------------------

### Use Tailwind Utility Classes in Vue Component

Source: https://tailwindcss.com/docs/installation/framework-guides/rspack/vue

Apply Tailwind CSS utility classes to HTML elements in a Vue component template. This example demonstrates using text sizing, font weight, and text decoration utilities.

```vue
<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>
```

--------------------------------

### Custom Margin Value HTML Example

Source: https://tailwindcss.com/docs/margin

HTML example showing custom margin values using bracket notation (m-[<value>]) to set arbitrary margin values not in the default scale.

```html
<div class="m-[5px] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Responsive transition-behavior with Breakpoint Variant

Source: https://tailwindcss.com/docs/transition-behavior

Shows how to apply transition-behavior utilities responsively using breakpoint prefixes. The example uses md: prefix to apply transition-normal at medium screen sizes and above, while using transition-discrete at smaller breakpoints.

```html
<button class="transition-discrete md:transition-normal ...">
  <!-- ... -->
</button>
```

--------------------------------

### Configure PostCSS Plugins

Source: https://tailwindcss.com/docs/installation/framework-guides/gatsby

Create a postcss.config.js file at the project root and add the @tailwindcss/postcss plugin to enable Tailwind CSS processing through PostCSS.

```javascript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

--------------------------------

### Configure PostCSS for Tailwind CSS v4 Migration

Source: https://tailwindcss.com/docs/upgrade-guide

This `postcss.config.mjs` example shows a configuration during the v3 to v4 upgrade. In v4, the PostCSS plugin is `@tailwindcss/postcss`, and `postcss-import` and `autoprefixer` can often be removed as their functionalities are now handled automatically by Tailwind CSS.

```javascript
export default {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
    "@tailwindcss/postcss": {},
  },
};
```

--------------------------------

### Install Tailwind CSS and Vite Plugin

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/vite

Install the Tailwind CSS package and the @tailwindcss/vite plugin along with their peer dependencies using npm. This provides the necessary tools to integrate Tailwind CSS into your Laravel project.

```bash
npm install tailwindcss @tailwindcss/vite
```

--------------------------------

### Apply basic mask-mode utilities in HTML

Source: https://tailwindcss.com/docs/mask-mode

This example demonstrates the basic application of `mask-alpha` and `mask-luminance` utilities within HTML elements. It shows how to combine these mask modes with other masking properties and background images to achieve different visual effects.

```html
<div class="mask-alpha mask-r-from-black mask-r-from-50% mask-r-to-transparent bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-luminance mask-r-from-white mask-r-from-50% mask-r-to-black bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### Integrate compiled CSS and use Tailwind classes in Twig template

Source: https://tailwindcss.com/docs/installation/framework-guides/symfony

Demonstrates how to include the compiled CSS in a Symfony Twig template (`base.html.twig`) using `encore_entry_link_tags`. It also shows an example of using Tailwind's utility classes (`text-3xl font-bold underline`) to style an HTML element.

```html
<!doctype html><html>  <head>    <meta charset="utf-8" />    <meta      name="viewport"      content="width=device-width, initial-scale=1.0"    />    {% block stylesheets %}      {{ encore_entry_link_tags('app') }}    {% endblock %}  </head>  <body>    <h1 class="text-3xl font-bold underline">      Hello world!    </h1>  </body></html>
```

--------------------------------

### Space Between Children Utility HTML Example

Source: https://tailwindcss.com/docs/margin

HTML example showing space-x utility for adding consistent horizontal spacing between flex child elements.

```html
<div class="flex space-x-4 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

--------------------------------

### Apply responsive place-items utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/place-items

This example shows how to apply `place-items` utilities conditionally based on screen size using responsive prefixes. The `place-items-start` class is applied by default, and `md:place-items-center` overrides it for medium screens and above, demonstrating adaptive layout behavior.

```html
<div class="grid place-items-start md:place-items-center ...">  <!-- ... --></div>
```

--------------------------------

### Apply responsive grid-auto-columns utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/grid-auto-columns

This example illustrates how to apply `grid-auto-columns` utilities responsively using breakpoint variants like `md:`, allowing different column sizing based on screen size.

```html
<div class="grid grid-flow-col auto-cols-max md:auto-cols-min ...">  <!-- ... --></div>
```

--------------------------------

### Responsive Perspective Design with Breakpoint Variants

Source: https://tailwindcss.com/docs/perspective

Demonstrates how to apply different perspective utilities at different screen sizes using breakpoint prefixes like md:. This example applies perspective-midrange by default and switches to perspective-dramatic at medium screen sizes and above.

```html
<div class="perspective-midrange md:perspective-dramatic ...">
  <!-- ... -->
</div>
```

--------------------------------

### Create HTML template with Tailwind CSS

Source: https://tailwindcss.com/docs/installation/framework-guides/parcel

Set up an index.html file that links to the compiled CSS file and demonstrates Tailwind utility classes. This template includes proper meta tags for responsive design and applies Tailwind classes to style content.

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="./index.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
</html>
```

--------------------------------

### Sort Tailwind CSS Classes with Prettier Plugin (HTML)

Source: https://tailwindcss.com/docs/editor-setup

This example demonstrates the effect of the official Prettier plugin for Tailwind CSS, which automatically reorders utility classes in HTML markup according to recommended best practices. It shows a 'before' state with unsorted classes and an 'after' state with the classes reordered for consistency, improving readability and maintainability.

```html
<!-- Before --><button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">Submit</button><!-- After --><button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">Submit</button>
```

--------------------------------

### Install Tailwind CSS npm dependencies

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/mix

Install the required npm packages for Tailwind CSS integration with Laravel. This command installs @tailwindcss/postcss, tailwindcss, and postcss as dependencies for your project.

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

--------------------------------

### Undo line clamping with line-clamp-none

Source: https://tailwindcss.com/docs/line-clamp

Shows how to use the line-clamp-none utility to remove previously applied line clamping. This example demonstrates responsive design by applying line-clamp-3 on mobile and line-clamp-none on large screens using the lg: breakpoint variant.

```html
<p class="line-clamp-3 lg:line-clamp-none">
  <!-- ... -->
</p>
```

--------------------------------

### Apply Prefixed Tailwind CSS Classes in HTML

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4.0 introduces a new syntax for prefixes, where they act like variants and are placed at the beginning of the class name. This HTML example demonstrates how to use prefixed classes for styling elements.

```html
<div class="tw:flex tw:bg-red-500 tw:hover:bg-red-600">  <!-- ... --></div>
```

--------------------------------

### Basic HTML structure with Tailwind CSS classes

Source: https://tailwindcss.com/docs/index

This HTML snippet demonstrates how to include the compiled CSS and apply Tailwind's utility classes to style elements. The `<link>` tag points to the generated stylesheet, and classes like `text-3xl`, `font-bold`, and `underline` are used directly on the `<h1>` element to apply styling. This shows the final integration of Tailwind CSS into an application's UI.

```HTML
<!doctype html><html><head>  <meta charset="UTF-8">  <meta name="viewport" content="width=device-width, initial-scale=1.0">  <link href="/src/style.css" rel="stylesheet"></head><body>  <h1 class="text-3xl font-bold underline">    Hello world!  </h1></body></html>
```

--------------------------------

### Apply Tailwind CSS Opacity Responsively with Breakpoint Variants

Source: https://tailwindcss.com/docs/opacity

This example shows how to use breakpoint variants, such as `md:`, to apply opacity utilities only at specific screen sizes and above, enabling responsive design for element transparency.

```html
<button class="opacity-50 md:opacity-100 ...">  <!-- ... --></button>
```

--------------------------------

### Apply flex-basis using percentage fractions in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-basis

Shows how to set the initial size of flex items using Tailwind CSS `basis-<fraction>` utilities, which represent percentage-based widths. This example uses `basis-1/3` and `basis-2/3`.

```html
<div class="flex flex-row">  <div class="basis-1/3">01</div>  <div class="basis-2/3">02</div></div>
```

--------------------------------

### Applying Responsive Flex Grow Utilities with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/flex-grow

This example illustrates how to use responsive design with Tailwind CSS `flex-grow` utilities by prefixing them with breakpoint variants like `md:`. This allows applying different grow behaviors based on screen sizes, such as `grow` by default and `grow-0` on medium screens and above.

```html
<div class="grow md:grow-0 ...">  <!-- ... --></div>
```

--------------------------------

### Apply Responsive backface-visibility Utility in HTML

Source: https://tailwindcss.com/docs/backface-visibility

This example shows how to apply the `backface-hidden` utility responsively using Tailwind CSS. The `md:backface-hidden` class ensures that the backface is hidden only on medium screen sizes and above, while it remains visible by default or on smaller screens.

```html
<div class="backface-visible md:backface-hidden ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Tailwind Utility Classes in ERB Template

Source: https://tailwindcss.com/docs/installation/framework-guides/ruby-on-rails

Use Tailwind CSS utility classes in Rails ERB templates to style HTML elements. This example demonstrates applying text sizing, font weight, and text decoration utilities to a heading element.

```erb
<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>
```

--------------------------------

### Responsive touch-action with Breakpoint Variants HTML

Source: https://tailwindcss.com/docs/touch-action

Shows how to use responsive design patterns with touch-action utilities by combining breakpoint prefixes. This example applies touch-pan-x at mobile sizes and switches to touch-auto at medium screen sizes and above using the md: breakpoint variant.

```html
<div class="touch-pan-x md:touch-auto ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply responsive grid column utilities with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/grid-template-columns

Explains how to make grid column layouts responsive by using breakpoint variants like `md:` with Tailwind CSS utilities. This example sets a single column grid by default and switches to a 6-column grid on medium screens and above.

```html
<div class="grid grid-cols-1 md:grid-cols-6 ...">  <!-- ... --></div>
```

--------------------------------

### Apply Tailwind CSS classes in an Ember.js Handlebars template

Source: https://tailwindcss.com/docs/installation/framework-guides/emberjs

Demonstrates how to use Tailwind CSS utility classes within an Ember.js Handlebars template (`application.hbs`). This example applies text size, font weight, and underline styles to an `<h1>` element, showcasing basic Tailwind usage.

```handlebars
{{page-title "MyProject"}}<h1 class="text-3xl font-bold underline">  Hello world!</h1>{{outlet}}
```

--------------------------------

### Implementing responsive text wrapping with Tailwind CSS

Source: https://tailwindcss.com/docs/text-wrap

This example illustrates how to apply text wrapping utilities responsively using breakpoint variants. By prefixing a utility like `text-pretty` with `md:`, the `text-balance` style will only be applied on medium screen sizes and above, allowing for adaptive text layout across different devices.

```html
<h1 class="text-pretty md:text-balance ...">  <!-- ... --></h1>
```

--------------------------------

### Install Tailwind CSS and Dependencies

Source: https://tailwindcss.com/docs/installation/framework-guides/gatsby

Install Tailwind CSS PostCSS plugin, core Tailwind package, PostCSS, and the Gatsby PostCSS plugin using npm. These are required peer dependencies for Tailwind CSS integration.

```bash
npm install @tailwindcss/postcss tailwindcss postcss gatsby-plugin-postcss
```

--------------------------------

### Apply Tailwind CSS classes in a Vue component template

Source: https://tailwindcss.com/docs/installation/framework-guides/nuxt

This example demonstrates how to directly apply Tailwind's utility classes within the `<template>` section of a Vue component, specifically in `app.vue`. It shows styling an `<h1>` element with `text-3xl`, `font-bold`, and `underline` classes, illustrating the direct application of Tailwind for rapid UI development.

```vue
<template>  <h1 class="text-3xl font-bold underline">    Hello world!  </h1></template>
```

--------------------------------

### Install Tailwind CSS and Vite Plugin

Source: https://tailwindcss.com/docs/installation/framework-guides/adonisjs

Install the Tailwind CSS package and the @tailwindcss/vite plugin along with peer dependencies. These packages enable Tailwind CSS processing through the Vite build tool.

```bash
npm install tailwindcss @tailwindcss/vite
```

--------------------------------

### Install Tailwind CSS and PostCSS dependencies

Source: https://tailwindcss.com/docs/installation/framework-guides/parcel

Install the @tailwindcss/postcss package and its peer dependencies via npm. This provides the necessary Tailwind CSS framework and PostCSS plugin for processing Tailwind directives.

```bash
npm install tailwindcss @tailwindcss/postcss
```

--------------------------------

### Apply responsive min-height utilities in HTML

Source: https://tailwindcss.com/docs/min-height

Prefix min-height utilities with breakpoint variants like md: to apply the utility only at specific screen sizes. This example applies min-h-0 by default and min-h-full at medium screen sizes and above.

```html
<div class="h-24 min-h-0 md:min-h-full ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply responsive gap in Tailwind CSS

Source: https://tailwindcss.com/docs/gap

Explains how to use responsive prefixes like `md:` with `gap` utilities to apply different gap values based on screen sizes, for example, `md:gap-6`.

```html
<div class="grid gap-4 md:gap-6 ...">  <!-- ... --></div>
```

--------------------------------

### Apply basic grid-auto-columns utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/grid-auto-columns

This example demonstrates how to use Tailwind CSS utilities like `auto-cols-max` to control the size of implicitly-created grid columns within a `grid` and `grid-flow-col` layout.

```html
<div class="grid auto-cols-max grid-flow-col">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

--------------------------------

### Creating a responsive profile card with Tailwind CSS

Source: https://tailwindcss.com/docs/styling-with-utility-classes

This HTML snippet illustrates building a responsive profile card component using Tailwind CSS utility classes. It includes an image, text, and a button, demonstrating responsive design with `sm:` variants, hover, and active states for the button.

```html
<div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="" />  <div class="space-y-2 text-center sm:text-left">    <div class="space-y-0.5">      <p class="text-lg font-semibold text-black">Erin Lindford</p>      <p class="font-medium text-gray-500">Product Engineer</p>    </div>    <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">      Message    </button>  </div></div>
```

--------------------------------

### Use Tailwind CSS in AdonisJS Edge Template

Source: https://tailwindcss.com/docs/installation/framework-guides/adonisjs

Include the compiled CSS file in the HTML head using @vite helper and apply Tailwind utility classes to HTML elements. This example demonstrates basic Tailwind styling with text size, font weight, and text decoration utilities.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
</html>
```

--------------------------------

### Complex Arbitrary Grid Values in Tailwind CSS

Source: https://tailwindcss.com/docs/styling-with-utility-classes

HTML example showing inline styles for complex CSS grid template columns with calculations and CSS variables. Demonstrates when arbitrary values are too complicated to express as Tailwind class names and require direct style attribute application.

```html
<div class="grid-[2fr_max(0,var(--gutter-width))_calc(var(--gutter-width)+10px)]">
  <div style="grid-template-columns: 2fr max(0, var(--gutter-width)) calc(var(--gutter-width) + 10px)">
    <!-- ... -->
  </div>
</div>
```

--------------------------------

### Using logical scroll-padding properties in HTML

Source: https://tailwindcss.com/docs/scroll-padding

Shows how to use scroll-ps and scroll-pe utilities with logical properties that adapt to text direction. The example demonstrates the same utility class applied to both left-to-right and right-to-left text directions.

```html
<div dir="ltr">
  <div class="snap-x scroll-ps-6 ...">
    <!-- ... -->
  </div>
</div>
<div dir="rtl">
  <div class="snap-x scroll-ps-6 ...">
    <!-- ... -->
  </div>
</div>
```

--------------------------------

### Use CSS Variables in CSS Modules to Improve Tailwind Performance

Source: https://tailwindcss.com/docs/compatibility

This example shows an alternative approach for CSS modules, utilizing standard CSS variables instead of Tailwind's `@apply` directive. By directly using CSS variables, Tailwind can skip processing these files, which significantly improves build performance and avoids context sharing complexities.

```css
button {  background: var(--color-blue-500);}
```

--------------------------------

### Use Tailwind CSS utility classes in Laravel Blade template

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/mix

Include the compiled CSS file in your Blade template's head section and apply Tailwind utility classes to HTML elements. This example demonstrates basic styling with text size, font weight, and text decoration utilities.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
</html>
```

--------------------------------

### Controlling pointer events for elements in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/pointer-events

This example demonstrates how to use Tailwind CSS `pointer-events-auto` and `pointer-events-none` utilities. The `pointer-events-none` class makes an element ignore pointer events like clicks and hovers, while `pointer-events-auto` restores the default browser behavior. This is shown with two search input setups, one where the overlay icon is interactive and another where it is not.

```html
<div class="relative ...">  <div class="pointer-events-auto absolute ...">    <svg class="absolute h-5 w-5 text-gray-400">      <!-- ... -->    </svg>  </div>  <input type="text" placeholder="Search" class="..." /></div><div class="relative ...">  <div class="pointer-events-none absolute ...">    <svg class="absolute h-5 w-5 text-gray-400">      <!-- ... -->    </svg>  </div>  <input type="text" placeholder="Search" class="..." /></div>
```

--------------------------------

### Add Radial Mask with Gradient and Position in Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

Creates a radial gradient mask on an image element using mask-radial utilities. The example combines mask-radial-[100%_100%] for the gradient size, mask-radial-from-75% for the gradient start, and mask-radial-at-left to position the gradient center. By default, radial masks transition from black to transparent.

```html
<div class="flex items-center gap-4">
  <img class="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-left ..." src="/img/keyboard.png" />
  <div class="font-medium">
    <p class="font-mono text-xs text-blue-500 uppercase dark:text-blue-400">Speed</p>
    <p class="mt-2 text-base text-gray-700 dark:text-gray-300">Built for power users</p>
    <p class="mt-1 text-sm leading-relaxed text-balance text-gray-500">
      Work faster than ever with customizable keyboard shortcuts
    </p>
  </div>
</div>
```

--------------------------------

### Import Tailwind CSS in Global Stylesheet

Source: https://tailwindcss.com/docs/installation/framework-guides/astro

Create a global CSS file at ./src/styles/global.css and import Tailwind CSS using the @import directive. This loads all Tailwind utility classes and base styles into your project.

```css
@import "tailwindcss";
```

--------------------------------

### Align items to end of main axis with Tailwind CSS `justify-end` and `justify-end-safe`

Source: https://tailwindcss.com/docs/justify-content

These examples show how to use `justify-end` and `justify-end-safe` to align flex items to the end of the container's main axis. Similar to `justify-center-safe`, `justify-end-safe` ensures items align to the start if space is limited, preventing overflow.

```html
<div class="flex justify-end ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>03</div></div>
```

```html
<div class="flex justify-end-safe ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>03</div></div>
```

--------------------------------

### Directional Margin Utilities HTML Example

Source: https://tailwindcss.com/docs/margin

HTML example showing directional margin utilities (mt-, mr-, mb-, ml-) applied to individual elements for controlling margin on specific sides.

```html
<div class="mt-6 ...">mt-6</div>
<div class="mr-4 ...">mr-4</div>
<div class="mb-8 ...">mb-8</div>
<div class="ml-2 ...">ml-2</div>
```

--------------------------------

### Apply Important Modifier in Tailwind CSS v4.0 HTML

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4.0 changes the syntax for the important modifier. Instead of placing `!` at the beginning (after variants), it should now be placed at the very end of the class name. This HTML example demonstrates the new syntax, while the old way is deprecated.

```html
<div class="flex! bg-red-500! hover:bg-red-600/50!">  <!-- ... --></div>
```

--------------------------------

### Set Tailwind CSS Opacity with Custom CSS Variables

Source: https://tailwindcss.com/docs/opacity

This example demonstrates using the `opacity-(<custom-property>)` syntax to apply opacity based on a CSS custom property, like `--my-opacity`. This is a shorthand for `opacity-[var(<custom-property>)]`.

```html
<button class="opacity-(--my-opacity) ...">  <!-- ... --></button>
```

--------------------------------

### Basic transition-behavior HTML Example

Source: https://tailwindcss.com/docs/transition-behavior

Demonstrates the use of transition-discrete utility to create fade-out transitions on elements that change from hidden to visible states. Uses Tailwind CSS classes with peer selectors and checkbox interactions to control visibility and opacity transitions.

```html
<label class="peer ...">
  <input type="checkbox" checked />
</label>
<button class="hidden transition-all not-peer-has-checked:opacity-0 peer-has-checked:block ...">
  I hide
</button>
<label class="peer ...">
  <input type="checkbox" checked />
</label>
<button class="hidden transition-all transition-discrete not-peer-has-checked:opacity-0 peer-has-checked:block ...">
  I fade out
</button>
```

--------------------------------

### Import CSS in SvelteKit Layout

Source: https://tailwindcss.com/docs/installation/framework-guides/sveltekit

Create a root layout component (+layout.svelte) and import the app.css file. This ensures Tailwind CSS styles are available throughout the entire SvelteKit application and all child routes.

```svelte
<script>
  let { children } = $props();
  import "../app.css";
</script>

{@render children()}
```

--------------------------------

### Install Tailwind CSS and Dependencies via npm

Source: https://tailwindcss.com/docs/installation/framework-guides/meteor

Install Tailwind CSS packages including @tailwindcss/postcss and required peer dependencies (postcss and postcss-load-config) into the Meteor project.

```bash
npm install tailwindcss @tailwindcss/postcss postcss postcss-load-config
```

--------------------------------

### place-self-start - Align item to start on both axes

Source: https://tailwindcss.com/docs/place-self

Positions an item at the start position on both horizontal and vertical axes within a grid container. Useful for aligning specific grid items independently.

```html
<div class="grid grid-cols-3 gap-4 ...">
  <div>01</div>
  <div class="place-self-start ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
```

--------------------------------

### Apply responsive sepia filters to images with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/filter-sepia

Demonstrates how to apply sepia filters conditionally based on screen size using responsive prefixes like `md:`. This example applies a full sepia filter by default and removes it (`md:sepia-0`) on medium screens and above, allowing for adaptive designs.

```html
<img class="sepia md:sepia-0 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply justify-items-end and justify-items-end-safe to grid items in HTML

Source: https://tailwindcss.com/docs/justify-items

These snippets illustrate the use of `justify-items-end` and `justify-items-end-safe` utility classes to align grid items to the end of their inline axis. The `safe` variant provides a fallback to the start of the container when space is insufficient, preventing content overflow. Both examples use a `grid grid-flow-col` container.

```html
<div class="grid grid-flow-col justify-items-end ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

```html
<div class="grid grid-flow-col justify-items-end-safe ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

--------------------------------

### flex-none Utility Example

Source: https://tailwindcss.com/docs/flex

Shows how to use flex-none to prevent flex items from growing or shrinking. Items 01 and 02 maintain their fixed widths regardless of container size, while item 03 with flex-1 takes remaining space.

```html
<div class="flex ...">
  <div class="w-14 flex-none ...">01</div>
  <div class="w-32 flex-none ...">02</div>
  <div class="flex-1 ...">03</div>
</div>
```

--------------------------------

### Apply justify-items-center and justify-items-center-safe to grid items in HTML

Source: https://tailwindcss.com/docs/justify-items

These snippets show how to use `justify-items-center` and `justify-items-center-safe` utility classes to center grid items along their inline axis. Similar to the end variants, the `safe` variant ensures items align to the start if centering would cause overflow. Both examples use a `grid grid-flow-col` container.

```html
<div class="grid grid-flow-col justify-items-center ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

```html
<div class="grid grid-flow-col justify-items-center-safe ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

--------------------------------

### Basic line-clamp HTML example

Source: https://tailwindcss.com/docs/line-clamp

Demonstrates using the line-clamp-3 utility class to truncate a paragraph to 3 lines. The utility applies -webkit-line-clamp: 3 along with necessary display and overflow properties to achieve text truncation in a typical article layout.

```html
<article>
  <time>Mar 10, 2020</time>
  <h2>Boost your conversion rate</h2>
  <p class="line-clamp-3">
    Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut
    sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat
    dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt
    ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur
    enim.
  </p>
  <div>
    <img src="/img/lindsay.jpg" />
    Lindsay Walton
  </div>
</article>
```

--------------------------------

### Correct Prop Mapping for Static Class Names in JSX

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

This JSX example shows the recommended way to handle dynamic classes with props. By mapping prop values to complete, static class strings, Tailwind can correctly identify and generate the necessary CSS utilities at build time.

```jsx
function Button({ color, children }) {
  const colorVariants = {
    blue: "bg-blue-600 hover:bg-blue-500",
    red: "bg-red-600 hover:bg-red-500",
  };
  return <button className={`${colorVariants[color]} ...`}>{children}</button>;
}
```

--------------------------------

### Apply Responsive Utility Variants with Breakpoint Prefixes

Source: https://tailwindcss.com/docs/responsive-design

Demonstrates how to use breakpoint prefixes (sm:, md:, lg:, xl:, 2xl:) to conditionally apply utility classes at different screen sizes. The example shows an image element that changes width based on breakpoint: 16 units by default, 32 on medium screens, and 48 on large screens.

```html
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="..." />
```

--------------------------------

### Install Tailwind CSS and PostCSS Dependencies

Source: https://tailwindcss.com/docs/installation/framework-guides/rspack/react

Installs Tailwind CSS, its PostCSS plugin, PostCSS itself, and the PostCSS loader as development dependencies. These packages are essential for processing Tailwind CSS with Rspack.

```Terminal
npm install tailwindcss @tailwindcss/postcss postcss postcss-loader
```

--------------------------------

### Customize Tailwind CSS v4 `container` utility with `@utility` directive

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 removes direct configuration options for the `container` utility. To customize its behavior, such as setting `margin-inline` or `padding-inline`, use the `@utility` directive within your CSS. This example demonstrates how to define custom container styles.

```css
@utility container {
  margin-inline: auto;
  padding-inline: 2rem;}
```

--------------------------------

### Generated CSS for Tailwind CSS Arbitrary Variants

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Provides the simplified CSS output for the arbitrary variant example. This clarifies how Tailwind compiles complex arbitrary selectors, such as sibling and attribute selectors, into standard CSS rules.

```CSS
div > [data-active] + span {  color: var(--color-blue-600);}
```

--------------------------------

### Customize Conic Gradient Mask Start Color

Source: https://tailwindcss.com/docs/mask-image

Set the starting color of conic gradient masks using mask-conic-from-<color>, mask-conic-from-<number>, mask-conic-from-<percentage>, or mask-conic-from-[<value>] utilities. Supports custom properties and arbitrary values.

```css
.mask-conic-from-red-500 {
  mask-image: conic-gradient(from var(--tw-mask-conic-position), red var(--tw-mask-conic-from), transparent var(--tw-mask-conic-to));
}

.mask-conic-from-50 {
  mask-image: conic-gradient(from var(--tw-mask-conic-position), black calc(var(--spacing) * 50), transparent var(--tw-mask-conic-to));
}

.mask-conic-from-50% {
  mask-image: conic-gradient(from var(--tw-mask-conic-position), black 50%, transparent var(--tw-mask-conic-to));
}
```

--------------------------------

### Retrieve Resolved CSS Variable Value in JavaScript

Source: https://tailwindcss.com/docs/upgrade-guide

If you need to programmatically access the resolved value of a Tailwind CSS theme variable in JavaScript, you can use `getComputedStyle`. This snippet demonstrates how to get the computed style of the document root and then retrieve the value of a specific CSS variable, such as `--shadow-xl`.

```JavaScript
let styles = getComputedStyle(document.documentElement);let shadow = styles.getPropertyValue("--shadow-xl");
```

--------------------------------

### Install Tailwind CSS Rails Gem

Source: https://tailwindcss.com/docs/installation/framework-guides/ruby-on-rails

Add the tailwindcss-rails gem to your Gemfile and run the install command to configure Tailwind CSS in your Rails project. This sets up necessary configuration files and build scripts.

```bash
bundle add tailwindcss-rails
./bin/rails tailwindcss:install
```

--------------------------------

### Basic touch-action Utilities HTML

Source: https://tailwindcss.com/docs/touch-action

Demonstrates how to apply touch-action utilities to control scrolling and zooming behavior on touchscreen devices. The example shows four different containers with varying touch behaviors: auto (default), none (disabled), pan-x (horizontal panning), and pan-y (vertical panning). Each container includes an oversized image to demonstrate the touch interaction differences.

```html
<div class="h-48 w-full touch-auto overflow-auto ...">
  <img class="h-auto w-[150%] max-w-none" src="..." />
</div>
<div class="h-48 w-full touch-none overflow-auto ...">
  <img class="h-auto w-[150%] max-w-none" src="..." />
</div>
<div class="h-48 w-full touch-pan-x overflow-auto ...">
  <img class="h-auto w-[150%] max-w-none" src="..." />
</div>
<div class="h-48 w-full touch-pan-y overflow-auto ...">
  <img class="h-auto w-[150%] max-w-none" src="..." />
</div>
```

--------------------------------

### Add Play CDN Script to HTML

Source: https://tailwindcss.com/docs/installation/play-cdn

Add the Tailwind CSS Play CDN script tag to the HTML head element to enable Tailwind utility classes without any build step. This method is designed for development purposes only and not recommended for production use. Allows immediate styling of content using Tailwind's utility classes.

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
</html>
```

--------------------------------

### Define Custom Component Utilities with Tailwind CSS v4.0 `@utility` API

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4.0's `@utility` API also replaces `@layer components` for defining component-like classes. This CSS example shows how to define a `.btn` component utility using the new API, which benefits from automatic sorting based on property count, allowing easier overwriting.

```css
@layer components {  .btn {    border-radius: 0.5rem;    padding: 0.5rem 1rem;    background-color: ButtonFace;  }}@utility btn {  border-radius: 0.5rem;  padding: 0.5rem 1rem;  background-color: ButtonFace;}
```

--------------------------------

### Advanced Prop Mapping for Varied Class Names in JSX

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

This JSX example expands on prop mapping, demonstrating how different prop values can correspond to distinct sets of complete Tailwind classes, including varied color shades and text colors. This ensures all classes are statically detectable by Tailwind's scanning process.

```jsx
function Button({ color, children }) {
  const colorVariants = {
    blue: "bg-blue-600 hover:bg-blue-500 text-white",
    red: "bg-red-500 hover:bg-red-400 text-white",
    yellow: "bg-yellow-300 hover:bg-yellow-400 text-black",
  };
  return <button className={`${colorVariants[color]} ...`}>{children}</button>;
}
```

--------------------------------

### Apply Percentage-Based Widths with Tailwind CSS `w-<fraction>` Utilities

Source: https://tailwindcss.com/docs/width

This example illustrates how to use Tailwind CSS `w-full` or `w-<fraction>` utilities to assign percentage-based widths to elements. It shows various fractional widths like `w-1/2`, `w-2/5`, `w-1/3`, `w-1/4`, `w-1/5`, and `w-1/6` within a flex container to demonstrate responsive layout capabilities.

```html
<div class="flex ...">  <div class="w-1/2 ...">w-1/2</div>  <div class="w-1/2 ...">w-1/2</div></div><div class="flex ...">  <div class="w-2/5 ...">w-2/5</div>  <div class="w-3/5 ...">w-3/5</div></div><div class="flex ...">  <div class="w-1/3 ...">w-1/3</div>  <div class="w-2/3 ...">w-2/3</div></div><div class="flex ...">  <div class="w-1/4 ...">w-1/4</div>  <div class="w-3/4 ...">w-3/4</div></div><div class="flex ...">  <div class="w-1/5 ...">w-1/5</div>  <div class="w-4/5 ...">w-4/5</div></div><div class="flex ...">  <div class="w-1/6 ...">w-1/6</div>  <div class="w-5/6 ...">w-5/6</div></div><div class="w-full ...">w-full</div>
```

--------------------------------

### Starting and ending grid lines with row-start and row-end

Source: https://tailwindcss.com/docs/grid-row

Use row-start-<number> and row-end-<number> utilities to position elements at specific grid lines. These can be combined with row-span utilities to create precise grid layouts with elements starting and ending at nth grid positions.

```html
<div class="grid grid-flow-col grid-rows-3 gap-4">
  <div class="row-span-2 row-start-2 ...">01</div>
  <div class="row-span-2 row-end-3 ...">02</div>
  <div class="row-start-1 row-end-4 ...">03</div>
</div>
```

--------------------------------

### Basic Perspective Transform with Tailwind CSS

Source: https://tailwindcss.com/docs/perspective

Demonstrates how to use perspective utilities like perspective-dramatic and perspective-normal to control 3D depth. The example shows a container with six child elements rotated in 3D space to visualize the perspective effect. This creates a visual comparison of how different perspective values affect the appearance of 3D-transformed elements.

```html
<div class="size-20 perspective-dramatic ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div>
</div>
<div class="size-20 perspective-normal ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div>
</div>
```

--------------------------------

### Apply Percentage-Based Minimum Width with Tailwind CSS `min-w-<fraction>` Utilities

Source: https://tailwindcss.com/docs/min-width

This example illustrates how to use Tailwind CSS `min-w-full` or `min-w-<fraction>` utilities to apply a percentage-based minimum width to elements. It shows a `min-w-3/4` element alongside a `w-full` element within a flex container.

```html
<div class="flex ...">  <div class="min-w-3/4 ...">min-w-3/4</div>  <div class="w-full ...">w-full</div></div>
```

--------------------------------

### Basic grid-auto-flow Example - Tailwind HTML

Source: https://tailwindcss.com/docs/grid-auto-flow

Demonstrates basic usage of grid-auto-flow utilities with a 3x3 grid layout. Uses grid-flow-row-dense to control auto-placement algorithm, combined with grid-cols-3 and grid-rows-3 for grid dimensions and col-span-2 for spanning multiple columns.

```html
<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

--------------------------------

### Import Global CSS in Gatsby Browser

Source: https://tailwindcss.com/docs/installation/framework-guides/gatsby

Create a gatsby-browser.js file at the project root and import the global CSS file to ensure styles are applied across all pages.

```javascript
import './src/styles/global.css';
```

--------------------------------

### Update Tailwind CSS v3 `ring` utility to `ring-3` in v4

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 changes the default `ring` utility width from `3px` to `1px`. To maintain the v3 `3px` ring width, projects must explicitly use `ring-3` instead of just `ring`. This example demonstrates the required update for ring utilities.

```html
<input class="ring ring-blue-500" /><input class="ring-3 ring-blue-500" />
```

--------------------------------

### Configure Custom Tailwind CSS Theme with Play CDN

Source: https://tailwindcss.com/docs/installation/play-cdn

Use the Play CDN with custom CSS by adding a style tag with type="text/tailwindcss" to define theme variables and custom styles. This approach supports all of Tailwind's CSS features including theme customization, allowing developers to extend the default color palette and other design tokens directly in HTML.

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
      @theme {
        --color-clifford: #da373d;
      }
    </style>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline text-clifford">
      Hello world!
    </h1>
  </body>
</html>
```

--------------------------------

### Apply flex-basis using spacing scale in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-basis

Demonstrates how to set the initial size of flex items using Tailwind CSS `basis-<number>` utilities, which are based on the predefined spacing scale. This example uses `basis-64` and `basis-128` to illustrate different widths.

```html
<div class="flex flex-row">  <div class="basis-64">01</div>  <div class="basis-64">02</div>  <div class="basis-128">03</div></div>
```

--------------------------------

### Apply responsive mix-blend-mode utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/mix-blend-mode

This example shows how to apply `mix-blend-mode` utilities conditionally based on screen size using responsive prefixes like `md:`. The element will use `mix-blend-multiply` by default and switch to `md:mix-blend-overlay` on medium screens and above, adapting its blending behavior.

```html
<div class="mix-blend-multiply md:mix-blend-overlay ...">
  <!-- ... -->
</div>
```

--------------------------------

### Negative Margin Utility HTML Example

Source: https://tailwindcss.com/docs/margin

HTML example showing negative margin usage with -mt-8 class to apply negative top margin, useful for overlapping elements.

```html
<div class="h-16 w-36 bg-sky-400 opacity-20 ..."></div>
<div class="-mt-8 bg-sky-300 ...">-mt-8</div>
```

--------------------------------

### Configure Tailwind CSS Vite Plugin

Source: https://tailwindcss.com/docs/installation/framework-guides/sveltekit

Add the @tailwindcss/vite plugin to the Vite configuration file. This enables Tailwind CSS processing during the build and development processes alongside SvelteKit's plugin.

```typescript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
  ],
});
```

--------------------------------

### Animate with Tailwind CSS Variables in React using Motion

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 encourages using generated CSS variables directly instead of a `resolveConfig` function for accessing theme values in JavaScript. This example shows how to animate a React component's background color using a Tailwind CSS variable with the popular Motion library.

```JSX
<motion.div animate={{ backgroundColor: "var(--color-blue-500)" }} />
```

--------------------------------

### Install Tailwind CSS and PostCSS dependencies via npm

Source: https://tailwindcss.com/docs/installation/framework-guides/emberjs

Installs `tailwindcss`, `@tailwindcss/postcss`, `postcss`, and `postcss-loader` as project dependencies using npm. These packages are essential for integrating Tailwind CSS with PostCSS in an Ember.js application's build process.

```Terminal
npm install tailwindcss @tailwindcss/postcss postcss postcss-loader
```

--------------------------------

### Define grid columns with Tailwind CSS `grid-cols-<number>` utility

Source: https://tailwindcss.com/docs/grid-template-columns

Demonstrates how to use Tailwind CSS `grid-cols-<number>` utilities to create a grid with a specified number of equally sized columns. This example creates a 4-column grid.

```html
<div class="grid grid-cols-4 gap-4">  <div>01</div>  <!-- ... -->  <div>09</div></div>
```

--------------------------------

### Apply responsive styles with Tailwind breakpoint prefixes

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Use breakpoint prefixes like sm:, md:, lg: to apply utilities only at specific screen sizes. The sm: prefix applies styles at 40rem and above by default, enabling mobile-first responsive design patterns.

```html
<div class="grid grid-cols-2 sm:grid-cols-3">
  <!-- ... -->
</div>
```

```css
.sm\:grid-cols-3 {
  @media (width >= 40rem) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

--------------------------------

### Apply custom gap value in Tailwind CSS

Source: https://tailwindcss.com/docs/gap

Shows how to use arbitrary value syntax like `gap-[<value>]` to set a completely custom gap size, for example, `gap-[10vw]`.

```html
<div class="gap-[10vw] ...">  <!-- ... --></div>
```

--------------------------------

### Update Tailwind CSS v3 shadow, radius, and blur scales to v4

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 renames default shadow, radius, and blur scales. Projects must update v3 utilities like `shadow-sm` to their v4 equivalents, such as `shadow-xs` for the smallest scale, and `shadow-sm` for the new default shadow. This example illustrates the updated utility names.

```html
<input class="shadow-sm" /><input class="shadow-xs" /><input class="shadow" /><input class="shadow-sm" />
```

--------------------------------

### Apply Basic Saturation Filters with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-saturate

This example demonstrates how to use Tailwind CSS's built-in `saturate-<number>` utility classes to apply different levels of saturation to an image. These classes provide predefined saturation percentages for quick application.

```html
<img class="saturate-50 ..." src="/img/mountains.jpg" /><img class="saturate-100 ..." src="/img/mountains.jpg" /><img class="saturate-150 ..." src="/img/mountains.jpg" /><img class="saturate-200 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Applying responsive `object-fit` utilities with Tailwind CSS

Source: https://tailwindcss.com/docs/object-fit

This example demonstrates how to apply `object-fit` utilities responsively using Tailwind CSS breakpoint variants. The image will `object-contain` by default and `object-cover` on medium screens and above.

```html
<img class="object-contain md:object-cover" src="/img/mountains.jpg" />
```

--------------------------------

### Setting Tailwind's Base Path for Source Detection in CSS

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

This CSS example shows how to define a custom base path for Tailwind's source detection using the `source()` function within the `@import` statement. This can be beneficial when working with monorepos or complex project structures where the build command runs from a different directory than the project root.

```css
@import "tailwindcss" source("../src");
```

--------------------------------

### Set custom grid-auto-columns value in Tailwind CSS

Source: https://tailwindcss.com/docs/grid-auto-columns

This example shows how to use the arbitrary value syntax `auto-cols-[<value>]` to set a custom size for implicitly-created grid columns, such as `minmax(0,2fr)`.

```html
<div class="auto-cols-[minmax(0,2fr)] ...">  <!-- ... --></div>
```

--------------------------------

### Apply Tailwind CSS Opacity Conditionally with Variants

Source: https://tailwindcss.com/docs/opacity

This example shows how to use a variant, such as `disabled:*`, to apply an opacity utility only when a specific condition is met. Here, an input field has reduced opacity when disabled.

```html
<input class="opacity-100 disabled:opacity-75 ..." type="text" />
```

--------------------------------

### Setting Custom Flex Grow Values with Tailwind CSS `grow-[<value>]` Syntax

Source: https://tailwindcss.com/docs/flex-grow

This example shows how to use the arbitrary value syntax `grow-[<value>]` in Tailwind CSS to apply a completely custom flex grow factor. This allows for precise control over an item's growth behavior using any valid CSS value.

```html
<div class="grow-[25vw] ...">  <!-- ... --></div>
```

--------------------------------

### Example React Component Using Tailwind CSS Classes (JSX)

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Provides a React/JSX component demonstrating how Tailwind CSS classes are dynamically applied based on component props. This illustrates Tailwind's build-time scanning process, where it identifies potential class names in project files to generate the necessary CSS.

```JSX
export default function Button({ size, children }) {  let sizeClasses = {    md: "px-4 py-2 rounded-md text-base",    lg: "px-5 py-3 rounded-lg text-lg"  }[size];  return (    <button type="button" className={`font-bold ${sizeClasses}`}>      {children}    </button>  );}
```

--------------------------------

### Allowing Flex Items to Grow with Tailwind CSS `grow` Utility

Source: https://tailwindcss.com/docs/flex-grow

This example demonstrates how to use the `grow` utility in Tailwind CSS to make a flex item expand and fill any available space within its flex container. It shows a basic flex layout where one item is allowed to grow while others maintain their fixed size.

```html
<div class="flex ...">  <div class="size-14 flex-none ...">01</div>  <div class="size-14 grow ...">02</div>  <div class="size-14 flex-none ...">03</div></div>
```

--------------------------------

### Responsive background-attachment with breakpoint variants

Source: https://tailwindcss.com/docs/background-attachment

Apply background-attachment utilities responsively using breakpoint prefixes like md:, lg:, etc. This example uses bg-local by default and switches to bg-fixed at medium screen sizes and above.

```html
<div class="bg-local md:bg-fixed ...">  <!-- ... --></div>
```

--------------------------------

### Basic Border Color Example - HTML

Source: https://tailwindcss.com/docs/border-color

Apply border color utilities to styled div elements using Tailwind CSS classes. The example demonstrates applying different border colors (indigo-500, purple-500, sky-500) with a 4-pixel border width to create visually distinct bordered containers.

```html
<div class="border-4 border-indigo-500 ..."></div>
<div class="border-4 border-purple-500 ..."></div>
<div class="border-4 border-sky-500 ..."></div>
```

--------------------------------

### Tailwind CSS v4 `space-x/y` selector change and `gap` migration

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 updates the internal CSS selector for `space-x-*` and `space-y-*` utilities for performance, changing margin application. If issues arise, it's recommended to migrate to flex or grid layouts using the `gap` utility. The examples show the CSS selector change and an HTML migration to `flex flex-col gap-4`.

```css
/* Before */.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 1rem;}
/* Now */.space-y-4 > :not(:last-child) {
  margin-bottom: 1rem;}
```

```html
<div class="space-y-4 p-4"><div class="flex flex-col gap-4 p-4">  <label for="name">Name</label>  <input type="text" name="name" /></div>
```

--------------------------------

### Custom flex Value with Bracket Notation

Source: https://tailwindcss.com/docs/flex

Demonstrates using the flex-[<value>] syntax to apply custom flex shorthand values not covered by standard utilities. This example uses flex-[3_1_auto] to set custom grow, shrink, and basis values.

```html
<div class="flex-[3_1_auto] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Build Responsive Marketing Component with Tailwind CSS

Source: https://tailwindcss.com/docs/responsive-design

Complete example of a responsive marketing card component that uses a stacked layout on small screens and a side-by-side flex layout on medium screens and larger. Demonstrates mobile-first approach with unprefixed utilities and responsive prefixes for layout changes, image sizing, and text styling.

```html
<div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img
        class="h-48 w-full object-cover md:h-full md:w-48"
        src="/img/building.jpg"
        alt="Modern building architecture"
      />
    </div>
    <div class="p-8">
      <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
      <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
        Incredible accommodation for your team
      </a>
      <p class="mt-2 text-gray-500">
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
        places to do just that.
      </p>
    </div>
  </div>
</div>
```

--------------------------------

### Apply Basic Text Decoration Styles with Tailwind CSS

Source: https://tailwindcss.com/docs/text-decoration-style

This example demonstrates how to apply various text decoration styles (solid, double, dotted, dashed, wavy) to underlined text using Tailwind CSS utility classes. It shows the visual effect of each style on a sample sentence.

```html
<p class="underline decoration-solid">The quick brown fox...</p><p class="underline decoration-double">The quick brown fox...</p><p class="underline decoration-dotted">The quick brown fox...</p><p class="underline decoration-dashed">The quick brown fox...</p><p class="underline decoration-wavy">The quick brown fox...</p>
```

--------------------------------

### Apply backface-visibility Utilities in HTML

Source: https://tailwindcss.com/docs/backface-visibility

This example demonstrates how to use Tailwind CSS `backface-hidden` and `backface-visible` utilities on HTML elements. It shows two sets of elements, simulating a 3D cube, where one set hides the backface when rotated away, and the other keeps it visible, illustrating the visual difference.

```html
<div class="size-20 ...">  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 backface-hidden ...">1</div>  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-hidden ...">2</div>  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 backface-hidden ...">3</div>  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-hidden ...">4</div>  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-hidden ...">5</div>  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-hidden ...">6</div></div><div class="size-20 ...">  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 backface-visible ...">1</div>  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-visible ...">2</div>  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 backface-visible ...">3</div>  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-visible ...">4</div>  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-visible ...">5</div>  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-visible ...">6</div></div>
```

--------------------------------

### justify-self-start - Align grid item to inline start

Source: https://tailwindcss.com/docs/justify-self

Aligns a grid item to the start of its inline axis within the grid area. Useful for positioning items at the beginning of their grid cell.

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-start ...">02</div>
  <!-- ... -->
</div>
```

--------------------------------

### Apply responsive font-stretch utilities in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/font-stretch

This example shows how to make `font-stretch` utilities responsive by prefixing them with breakpoint variants, such as `md:font-stretch-expanded`. This allows the font width to change based on screen size, adapting the design for different devices as explained in the variants documentation.

```html
<div class="font-stretch-normal md:font-stretch-expanded ...">  <!-- ... --></div>
```

--------------------------------

### Restoring forced colors with Tailwind CSS

Source: https://tailwindcss.com/docs/forced-color-adjust

This example illustrates how to use the `forced-color-adjust-auto` utility class in HTML to make an element adhere to colors enforced by forced color modes. It also shows how to combine it with `forced-color-adjust-none` and responsive variants to conditionally apply or revert the behavior.

```html
<form>  <fieldset class="forced-color-adjust-none lg:forced-color-adjust-auto ...">    <legend>Choose a color:</legend>    <select class="hidden lg:block">      <option value="White">White</option>      <option value="Gray">Gray</option>      <option value="Black">Black</option>    </select>    <div class="lg:hidden">      <label>        <input class="sr-only" type="radio" name="color-choice" value="White" />        <!-- ... -->      </label>      <!-- ... -->    </div>  </fieldset></form>
```

--------------------------------

### Apply responsive aspect ratios using Tailwind CSS variants

Source: https://tailwindcss.com/docs/aspect-ratio

Explains how to use responsive variants like `md:` to apply different aspect ratios based on screen size. This example shows an `<iframe>` that is `aspect-video` by default and transitions to `aspect-square` on medium screens and above.

```html
<iframe class="aspect-video md:aspect-square ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

--------------------------------

### Set Tailwind CSS Opacity with Custom Numeric Values

Source: https://tailwindcss.com/docs/opacity

This example illustrates how to use the `opacity-[<value>]` syntax to apply a completely custom numeric opacity value to an HTML element, such as `opacity-[.67]`.

```html
<button class="opacity-[.67] ...">  <!-- ... --></button>
```

--------------------------------

### Basic scroll-padding with directional utilities in HTML

Source: https://tailwindcss.com/docs/scroll-padding

Demonstrates using scroll-pt, scroll-pr, scroll-pb, and scroll-pl utilities to set scroll offset on a snap container. The example shows a horizontally scrollable grid of images with left padding applied using the scroll-pl-6 class.

```html
<div class="snap-x scroll-pl-6 ...">
  <div class="snap-start ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-start ...">
    <img src="/img/vacation-05.jpg" />
  </div>
</div>
```

--------------------------------

### Apply Tailwind CSS `appearance` Utilities Responsively

Source: https://tailwindcss.com/docs/appearance

This example demonstrates how to apply `appearance` utilities conditionally based on screen size using responsive variants. By prefixing `appearance-none` with `md:`, the default styling is removed only on medium screens and above, while `appearance-auto` is applied by default.

```html
<select class="appearance-auto md:appearance-none ...">  <!-- ... --></select>
```

--------------------------------

### Apply responsive filter utilities with breakpoints

Source: https://tailwindcss.com/docs/filter

Shows how to use breakpoint variants like md: to apply filter utilities only at specific screen sizes. This example applies blur-sm at small sizes and removes filters at medium breakpoints and above.

```html
<img class="blur-sm md:filter-none ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Custom CSS Variable for Minimum Width with Tailwind CSS

Source: https://tailwindcss.com/docs/min-width

This example demonstrates how to use a custom CSS variable for minimum width with the `min-w-(<custom-property>)` syntax in Tailwind CSS. This is a shorthand for `min-w-[var(<custom-property>)]`.

```html
<div class="min-w-(--my-min-width) ...">  <!-- ... --></div>
```

--------------------------------

### Enable Gatsby PostCSS Plugin

Source: https://tailwindcss.com/docs/installation/framework-guides/gatsby

Configure the gatsby-plugin-postcss in the gatsby-config.js file to enable PostCSS processing in your Gatsby build pipeline.

```javascript
module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    // ...
  ],
}
```

--------------------------------

### Apply grid-auto-columns with CSS variables in Tailwind CSS

Source: https://tailwindcss.com/docs/grid-auto-columns

This example demonstrates using the `auto-cols-(<custom-property>)` syntax to apply a CSS variable as the value for `grid-auto-columns`, which is a shorthand for `auto-cols-[var(<custom-property>)]`.

```html
<div class="auto-cols-(--my-auto-cols) ...">  <!-- ... --></div>
```

--------------------------------

### Responsive Animation with Breakpoint Variants

Source: https://tailwindcss.com/docs/animation

Shows how to use breakpoint prefixes like `md:` to conditionally apply animations at specific screen sizes. In this example, the animation is disabled by default but enabled at medium screen sizes and above.

```html
<div class="animate-none md:animate-spin ...">
  <!-- ... -->
</div>
```

--------------------------------

### Tailwind CSS v4 gradient variant behavior and `via-none` usage

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 preserves gradient values when a variant overrides part of a gradient, unlike v3 which would reset the entire gradient. To explicitly 'unset' a three-stop gradient back to a two-stop gradient in a specific state, use `via-none`. The examples illustrate v3's resetting behavior and v4's preservation with `via-none` for explicit control.

```html
<div class="bg-gradient-to-r from-red-500 to-yellow-400 dark:from-blue-500">  <!-- ... --></div>
```

```html
<div class="bg-linear-to-r from-red-500 via-orange-400 to-yellow-400 dark:via-none dark:from-blue-500 dark:to-teal-400">  <!-- ... --></div>
```

--------------------------------

### Apply responsive mask-clip utilities with breakpoint variants

Source: https://tailwindcss.com/docs/mask-clip

Use breakpoint prefixes like md: to apply mask-clip utilities conditionally at specific screen sizes. This example applies mask-clip-border by default and switches to mask-clip-padding at medium screen sizes and above.

```html
<div class="mask-clip-border md:mask-clip-padding ...">  <!-- ... --></div>
```

--------------------------------

### Applying list-style-position utilities in HTML

Source: https://tailwindcss.com/docs/list-style-position

This example demonstrates how to use the `list-inside` and `list-outside` classes on `<ul>` elements to control the positioning of list markers relative to the list item's text. It shows how these classes affect the indentation and alignment of bullet points or numbers.

```html
<ul class="list-inside">  <li>5 cups chopped Porcini mushrooms</li>  <!-- ... --></ul><ul class="list-outside">  <li>5 cups chopped Porcini mushrooms</li>  <!-- ... --></ul>
```

--------------------------------

### Apply Responsive Height with Tailwind CSS Breakpoint Variants

Source: https://tailwindcss.com/docs/height

This example illustrates how to apply different height utilities based on screen size using Tailwind CSS responsive variants. By prefixing a height utility with a breakpoint (e.g., `md:`), the utility only applies at that breakpoint and above. This is fundamental for creating adaptive layouts that look good on various devices.

```html
<div class="h-1/2 md:h-full ...">  <!-- ... --></div>
```

--------------------------------

### Configure PostCSS for Tailwind CSS

Source: https://tailwindcss.com/docs/installation/framework-guides/parcel

Create a .postcssrc configuration file in the project root to enable the @tailwindcss/postcss plugin. This file tells PostCSS to process Tailwind CSS directives during the build process.

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

--------------------------------

### Apply Tailwind CSS Opacity Utilities for Basic Elements

Source: https://tailwindcss.com/docs/opacity

This example demonstrates how to use `opacity-<number>` utilities like `opacity-100`, `opacity-75`, `opacity-50`, and `opacity-25` to set the transparency of HTML button elements in Tailwind CSS.

```html
<button class="bg-indigo-500 opacity-100 ..."></button><button class="bg-indigo-500 opacity-75 ..."></button><button class="bg-indigo-500 opacity-50 ..."></button><button class="bg-indigo-500 opacity-25 ..."></button>
```

--------------------------------

### Apply responsive column layouts with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/columns

This example illustrates how to use responsive breakpoint variants like `sm:` with column utilities in Tailwind CSS. This allows column layouts to adapt to different screen sizes, providing an optimal user experience across devices. Input is an HTML `div` with `columns-<number>` and `gap-<width>` classes prefixed with breakpoint variants, resulting in a responsive multi-column layout.

```html
<div class="columns-2 gap-4 sm:columns-3 sm:gap-8 ...">  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />  <img class="aspect-square ..." src="/img/mountains-2.jpg" />  <img class="aspect-square ..." src="/img/mountains-3.jpg" />  <!-- ... --></div>
```

--------------------------------

### Apply Brightness Filters with Tailwind CSS and CSS Variables

Source: https://tailwindcss.com/docs/filter-brightness

This example illustrates applying brightness filters using CSS variables in Tailwind CSS with the `brightness-(<custom-property>)` syntax. This shorthand automatically wraps the custom property in `var()`, enabling dynamic brightness control via CSS variables for more flexible styling.

```html
<img class="brightness-(--my-brightness) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply responsive break-inside utilities in HTML

Source: https://tailwindcss.com/docs/break-inside

Illustrates how to use responsive variants like `md:break-inside-auto` with `break-inside-avoid-column` to control column breaks based on screen size. The `break-inside-avoid-column` applies by default, and `break-inside-auto` overrides it for medium screens and above.

```html
<div class="break-inside-avoid-column md:break-inside-auto ...">  <!-- ... --></div>
```

--------------------------------

### Proportionally Growing Flex Items with Tailwind CSS `grow-<number>` Utilities

Source: https://tailwindcss.com/docs/flex-grow

This example illustrates the use of `grow-<number>` utilities, such as `grow-3` and `grow-7`, to make flex items grow proportionally based on a specified growth factor. This allows items to distribute available space relative to each other within a flex container.

```html
<div class="flex ...">  <div class="size-14 grow-3 ...">01</div>  <div class="size-14 grow-7 ...">02</div>  <div class="size-14 grow-3 ...">03</div></div>
```

--------------------------------

### Enable Tailwind CSS watcher in Phoenix development

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Add the Tailwind watcher to your `config/dev.exs` file. This configuration enables live reloading of your CSS during development, automatically recompiling Tailwind styles whenever changes are detected.

```elixir
watchers: [
  # Start the esbuild watcher by calling Esbuild.install_and_run(:default, args)
  esbuild: {Esbuild, :install_and_run, [:myproject, ~w(--sourcemap=inline --watch)]},
  tailwind: {Tailwind, :install_and_run, [:myproject, ~w(--watch)]}
]
```

--------------------------------

### Configure PostCSS for Tailwind CSS in Next.js

Source: https://tailwindcss.com/docs/installation/framework-guides/nextjs

Create a `postcss.config.mjs` file in the project root and add the `@tailwindcss/postcss` plugin to the PostCSS configuration, enabling Tailwind CSS processing for your styles.

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};export default config;
```

--------------------------------

### Remove all filters with filter-none utility

Source: https://tailwindcss.com/docs/filter

Shows how to use the filter-none utility to remove all filters applied to an element. This example demonstrates removing filters at medium breakpoints and above using the md: responsive variant.

```html
<img class="blur-md brightness-150 invert md:filter-none" src="/img/mountains.jpg" />
```

--------------------------------

### Responsive hyphens utility with breakpoint variant

Source: https://tailwindcss.com/docs/hyphens

Apply hyphens utilities responsively by prefixing with a breakpoint variant like md:. This example prevents hyphenation on small screens and enables automatic hyphenation at medium screen sizes and above.

```html
<p class="hyphens-none md:hyphens-auto ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Responsive background-origin with breakpoint variants

Source: https://tailwindcss.com/docs/background-origin

Apply background-origin utilities responsively by prefixing with breakpoint variants like md:. This example shows how to use bg-origin-border by default and switch to bg-origin-padding at medium screen sizes and above.

```html
<div class="bg-origin-border md:bg-origin-padding ...">  <!-- ... --></div>
```

--------------------------------

### Configure Tailwind CSS Vite plugin in vite.config.ts

Source: https://tailwindcss.com/docs/installation/framework-guides/qwik

This configuration snippet integrates the `@tailwindcss/vite` plugin into the Vite build process for your Qwik project. It ensures that Tailwind CSS is correctly recognized and processed by Vite, enabling its utility classes in your application.

```typescript
import { defineConfig } from 'vite'import { qwikVite } from "@builder.io/qwik/optimizer";import { qwikCity } from "@builder.io/qwik-city/vite";// …import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command, mode }): UserConfig => {
  return {
    plugins: [
      tailwindcss(),
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
    ],
    // …
  }
})
```

--------------------------------

### Set Fixed Minimum Width with Tailwind CSS `min-w-<number>` Utilities

Source: https://tailwindcss.com/docs/min-width

This example demonstrates how to use Tailwind CSS `min-w-<number>` utilities to set a fixed minimum width for elements based on the spacing scale. It shows different `min-w` values applied within a parent container.

```html
<div class="w-20 ...">  <div class="min-w-80 ...">min-w-80</div>  <div class="min-w-64 ...">min-w-64</div>  <div class="min-w-48 ...">min-w-48</div>  <div class="min-w-40 ...">min-w-40</div>  <div class="min-w-32 ...">min-w-32</div>  <div class="min-w-24 ...">min-w-24</div></div>
```

--------------------------------

### Apply Amber 400 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `amber-400` color variable using a Tailwind CSS utility class. This utility applies a specific shade of amber to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-amber-400
```

```css
border-inline-start-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */
```

--------------------------------

### Apply predefined transition durations with Tailwind CSS

Source: https://tailwindcss.com/docs/transition-duration

This example demonstrates how to set standard transition durations using Tailwind CSS utilities like `duration-150`, `duration-300`, and `duration-700`. These classes apply a `transition-duration` CSS property in milliseconds to elements, enabling smooth visual changes upon interaction.

```html
<button class="transition duration-150 ease-in-out ...">Button A</button><button class="transition duration-300 ease-in-out ...">Button B</button><button class="transition duration-700 ease-in-out ...">Button C</button>
```

--------------------------------

### Apply Amber 600 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `amber-600` color variable using a Tailwind CSS utility class. This utility applies a specific shade of amber to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

--------------------------------

### Safelist Utilities with Variants in Tailwind CSS

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

Generate classes with multiple variants using @source inline() with variant prefixes in braces. This example generates the underline class with hover and focus variants for responsive styling.

```css
@import "tailwindcss";
@source inline("{hover:,focus:,}underline");
```

--------------------------------

### Apply basic mix-blend-mode utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/mix-blend-mode

This example demonstrates how to use `mix-blend-multiply` to control blending between overlapping elements within the same stacking context. It shows two `div` elements with different background colors blending their content.

```html
<div class="flex justify-center -space-x-14">
  <div class="bg-blue-500 mix-blend-multiply ..."></div>
  <div class="bg-pink-500 mix-blend-multiply ..."></div>
</div>
```

--------------------------------

### Apply responsive `flex-direction` with Tailwind CSS variants

Source: https://tailwindcss.com/docs/flex-direction

This example shows how to use responsive variants like `md:flex-row` in Tailwind CSS to apply `flex-direction` utilities conditionally based on screen size, changing from a column to a row layout on medium screens and above.

```html
<div class="flex flex-col md:flex-row ...">  <!-- ... --></div>
```

--------------------------------

### Apply custom `background-size` value in Tailwind CSS

Source: https://tailwindcss.com/docs/background-size

This example shows how to use arbitrary values with the `bg-size-[<value>]` syntax in Tailwind CSS to set a custom background size, such as `auto 100px`.

```html
<div class="bg-size-[auto_100px] ...">  <!-- ... --></div>
```

--------------------------------

### Responsive Scroll Snap Alignment with Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-snap-align

Demonstrates using breakpoint variants with scroll-snap-align utilities to apply different snap alignments at different screen sizes. The md: prefix applies snap-start alignment only at medium screen sizes and above.

```html
<div class="snap-center md:snap-start ...">
  <!-- ... -->
</div>
```

--------------------------------

### Configure PostCSS Plugins for Tailwind

Source: https://tailwindcss.com/docs/installation/framework-guides/meteor

Create a postcss.config.mjs file in the project root to register the @tailwindcss/postcss plugin. This enables PostCSS to process Tailwind directives during the build process.

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

--------------------------------

### Applying Responsive Shrink Utilities with Tailwind CSS

Source: https://tailwindcss.com/docs/flex-shrink

Explains how to use responsive prefixes like `md:` with `flex-shrink` utilities in Tailwind CSS to apply different shrinking behaviors based on screen sizes, enabling adaptive layouts.

```html
<div class="shrink md:shrink-0 ...">  <!-- ... --></div>
```

--------------------------------

### Applying forced-color-adjust responsively with Tailwind CSS

Source: https://tailwindcss.com/docs/forced-color-adjust

This example demonstrates how to apply `forced-color-adjust` utilities conditionally based on screen size using responsive variants in Tailwind CSS. Here, `forced-color-adjust-none` is applied by default, and `forced-color-adjust-auto` is applied on medium screens and above.

```html
<div class="forced-color-adjust-none md:forced-color-adjust-auto ...">  <!-- ... --></div>
```

--------------------------------

### transition-delay with motion-reduce variant

Source: https://tailwindcss.com/docs/transition-delay

HTML example showing how to use the motion-reduce variant to conditionally disable transition delays for users who prefer reduced motion. The motion-reduce:delay-0 class overrides the delay-300 utility when reduced motion is preferred.

```html
<button type="button" class="delay-300 motion-reduce:delay-0 ...">  <!-- ... --></button>
```

--------------------------------

### Apply flex-basis using container scale in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-basis

Illustrates setting the initial size of flex items using Tailwind CSS `basis-<size>` utilities, which are derived from the container scale. This example showcases `basis-3xs`, `basis-2xs`, `basis-xs`, and `basis-sm`.

```html
<div class="flex flex-row">  <div class="basis-3xs">01</div>  <div class="basis-2xs">02</div>  <div class="basis-xs">03</div>  <div class="basis-sm">04</div></div>
```

--------------------------------

### Responsive flex Utility with Breakpoint Variant

Source: https://tailwindcss.com/docs/flex

Demonstrates responsive design using breakpoint variants with flex utilities. The flex-none class applies at small screen sizes, then switches to flex-1 at medium screen sizes and above using the md: variant.

```html
<div class="flex-none md:flex-1 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply responsive text indentation with breakpoint variants

Source: https://tailwindcss.com/docs/text-indent

Prefix text-indent utilities with breakpoint variants like md: to apply different indentation values at different screen sizes. This example applies indent-4 on small screens and indent-8 on medium screens and above.

```html
<p class="indent-4 md:indent-8 ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply Amber 500 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `amber-500` color variable using a Tailwind CSS utility class. This utility applies a specific shade of amber to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-amber-500
```

```css
border-inline-start-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */
```

--------------------------------

### Apply Amber 300 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `amber-300` color variable using a Tailwind CSS utility class. This utility applies a specific shade of amber to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-amber-300
```

```css
border-inline-start-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */
```

--------------------------------

### Apply Multiple Tailwind CSS Variants for Complex Styling (HTML)

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Shows an HTML example of applying multiple Tailwind CSS variants (dark mode, large breakpoint, data attribute, hover) to a single element. This demonstrates how to combine various conditions to create highly specific and conditional styles.

```HTML
<button class="dark:lg:data-current:hover:bg-indigo-600 ...">  <!-- ... --></button>
```

--------------------------------

### Apply responsive field sizing with Tailwind CSS

Source: https://tailwindcss.com/docs/field-sizing

This example illustrates how to apply `field-sizing` utilities conditionally based on screen size using responsive variants. The input will be content-sized by default and fixed-sized on medium screens and above. This allows for adaptive form control behavior across different devices and screen resolutions.

```html
<input class="field-sizing-content md:field-sizing-fixed ..." />
```

--------------------------------

### Apply responsive mask-size utilities in HTML

Source: https://tailwindcss.com/docs/mask-size

Shows how to use responsive prefixes like `md:` with `mask-size` utilities in HTML to apply different mask sizes based on specific screen breakpoints.

```html
<div class="mask-auto md:mask-contain ...">  <!-- ... --></div>
```

--------------------------------

### Apply Amber 200 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `amber-200` color variable using a Tailwind CSS utility class. This utility applies a specific shade of amber to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-amber-200
```

```css
border-inline-start-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */
```

--------------------------------

### Apply Amber 100 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `amber-100` color variable using a Tailwind CSS utility class. This utility applies a specific shade of amber to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-amber-100
```

```css
border-inline-start-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */
```

--------------------------------

### Apply Basic Brightness Filters with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-brightness

This example demonstrates how to apply standard brightness filters to an image using Tailwind CSS utility classes like `brightness-50`, `brightness-100`, `brightness-125`, and `brightness-200`. These classes control the element's brightness level, where `brightness-100` represents normal brightness.

```html
<img class="brightness-50 ..." src="/img/mountains.jpg" /><img class="brightness-100 ..." src="/img/mountains.jpg" /><img class="brightness-125 ..." src="/img/mountains.jpg" /><img class="brightness-200 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply responsive hue-rotate utilities in HTML

Source: https://tailwindcss.com/docs/filter-hue-rotate

Use breakpoint prefixes like md: with hue-rotate utilities to apply different hue rotation values at different screen sizes. This example applies hue-rotate-60 on small screens and hue-rotate-0 on medium screens and above.

```html
<img class="hue-rotate-60 md:hue-rotate-0" src="/img/mountains.jpg" />
```

--------------------------------

### Apply Amber 50 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `amber-50` color variable using a Tailwind CSS utility class. This utility applies a specific shade of amber to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-amber-50
```

```css
border-inline-start-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */
```

--------------------------------

### Set Both Width and Height with Tailwind CSS size-* Utilities

Source: https://tailwindcss.com/docs/height

This example shows how to simultaneously set both the width and height of an element using Tailwind CSS `size-*` utilities. These utilities provide a convenient way to create square or uniformly sized elements based on the spacing scale. They are useful for icons, avatars, or fixed-size containers.

```html
<div class="size-16 ...">size-16</div><div class="size-20 ...">size-20</div><div class="size-24 ...">size-24</div><div class="size-32 ...">size-32</div><div class="size-40 ...">size-40</div>
```

--------------------------------

### Apply Orange 950 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `orange-950` color variable using a Tailwind CSS utility class. This utility applies a specific shade of orange to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-orange-950
```

```css
border-inline-start-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */
```

--------------------------------

### Apply Orange 400 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `orange-400` color variable using a Tailwind CSS utility class. This utility applies a specific shade of orange to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-orange-400
```

```css
border-inline-start-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */
```

--------------------------------

### Apply Orange 700 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `orange-700` color variable using a Tailwind CSS utility class. This utility applies a specific shade of orange to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-orange-700
```

```css
border-inline-start-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */
```

--------------------------------

### Apply Orange 600 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `orange-600` color variable using a Tailwind CSS utility class. This utility applies a specific shade of orange to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-orange-600
```

```css
border-inline-start-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */
```

--------------------------------

### Set Widths Based on Container Scale with Tailwind CSS Utilities

Source: https://tailwindcss.com/docs/width

This example demonstrates how to apply fixed widths to elements using Tailwind CSS utilities like `w-sm` and `w-xl`, which are based on a predefined container scale. These utilities provide consistent sizing relative to common container breakpoints.

```html
<div class="w-xl ...">w-xl</div><div class="w-lg ...">w-lg</div><div class="w-md ...">w-md</div><div class="w-sm ...">w-sm</div><div class="w-xs ...">w-xs</div><div class="w-2xs ...">w-2xs</div><div class="w-3xs ...">w-3xs</div>
```

--------------------------------

### break-after Basic Example with Columns

Source: https://tailwindcss.com/docs/break-after

Demonstrates using break-after-column utility to control column breaks in a multi-column layout. The break-after-column class forces a column break after the specified paragraph element within a two-column container.

```html
<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-after-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

--------------------------------

### Apply Orange 900 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `orange-900` color variable using a Tailwind CSS utility class. This utility applies a specific shade of orange to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-orange-900
```

```css
border-inline-start-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */
```

--------------------------------

### Responsive resize utilities with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/resize

Combine resize utilities with responsive breakpoint variants like md: to apply different resize behaviors at specific screen sizes. This example prevents resizing on small screens and enables resizing on medium screens and above.

```html
<div class="resize-none md:resize ...">  <!-- ... --></div>
```

--------------------------------

### Configure Tailwind CSS Vite Plugin in Astro

Source: https://tailwindcss.com/docs/installation/framework-guides/astro

Add the @tailwindcss/vite plugin to the Vite configuration in the astro.config.mjs file. This enables Tailwind CSS processing during the build process and development server.

```javascript
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

--------------------------------

### Generated CSS for Multiple Tailwind CSS Variants

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Provides the simplified CSS output corresponding to the complex Tailwind CSS variants applied in the HTML example. This clarifies how Tailwind compiles multi-variant classes into standard CSS rules, including media queries and attribute selectors.

```CSS
@media (prefers-color-scheme: dark) and (width >= 64rem) {  button[data-current]:hover {    background-color: var(--color-indigo-600);  }}
```

--------------------------------

### Applying CSS Variables for Flex Grow with Tailwind CSS `grow-(<custom-property>)`

Source: https://tailwindcss.com/docs/flex-grow

This example demonstrates the `grow-(<custom-property>)` syntax in Tailwind CSS, which is a shorthand for `grow-[var(<custom-property>)]`. It allows applying a custom flex grow factor defined by a CSS variable, enhancing reusability and dynamic styling.

```html
<div class="grow-(--my-grow) ...">  <!-- ... --></div>
```

--------------------------------

### Apply Tailwind CSS background-position utilities for basic positioning

Source: https://tailwindcss.com/docs/background-position

This example demonstrates how to use predefined Tailwind CSS classes like `bg-center`, `bg-right`, and `bg-top-left` to control the position of an element's background image. These utilities map directly to common `background-position` values.

```html
<div class="bg-[url(/img/mountains.jpg)] bg-top-left"></div><div class="bg-[url(/img/mountains.jpg)] bg-top"></div><div class="bg-[url(/img/mountains.jpg)] bg-top-right"></div><div class="bg-[url(/img/mountains.jpg)] bg-left"></div><div class="bg-[url(/img/mountains.jpg)] bg-center"></div><div class="bg-[url(/img/mountains.jpg)] bg-right"></div><div class="bg-[url(/img/mountains.jpg)] bg-bottom-left"></div><div class="bg-[url(/img/mountains.jpg)] bg-bottom"></div><div class="bg-[url(/img/mountains.jpg)] bg-bottom-right"></div>
```

--------------------------------

### Apply `flex-col` for vertical flex items in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-direction

This example illustrates the use of the `flex-col` utility class in Tailwind CSS to stack flex items vertically.

```html
<div class="flex flex-col ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

--------------------------------

### Responsive transform-style with breakpoint variant

Source: https://tailwindcss.com/docs/transform-style

Shows how to use responsive design with transform-style utilities by prefixing with breakpoint variants like md:. In this example, transform-3d is applied by default and switches to transform-flat at medium screen sizes and above.

```html
<div class="transform-3d md:transform-flat ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Orange 800 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `orange-800` color variable using a Tailwind CSS utility class. This utility applies a specific shade of orange to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-orange-800
```

```css
border-inline-start-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */
```

--------------------------------

### Correct Dynamic Class Name Usage in HTML

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

This HTML example demonstrates the correct approach for dynamic class names. By ensuring the full class names (`text-red-600` or `text-green-600`) are present as complete strings, Tailwind can properly detect and generate the corresponding CSS.

```html
<div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>
```

--------------------------------

### Apply Tailwind CSS Classes in a Next.js React Component

Source: https://tailwindcss.com/docs/installation/framework-guides/nextjs

Demonstrate how to use Tailwind's utility classes directly within a React component, such as `page.tsx`, to style HTML elements with responsive and pre-defined styles.

```tsx
export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

--------------------------------

### Set Minimum Width with Tailwind CSS Container Scale Utilities

Source: https://tailwindcss.com/docs/min-width

This example demonstrates how to use Tailwind CSS `min-w-sm` and `min-w-xl` utilities to set an element's minimum width based on the predefined container scale. It applies various container scale `min-w` utilities to elements within a parent container.

```html
<div class="w-40 ...">  <div class="min-w-lg ...">min-w-lg</div>  <div class="min-w-md ...">min-w-md</div>  <div class="min-w-sm ...">min-w-sm</div>  <div class="min-w-xs ...">min-w-xs</div>  <div class="min-w-2xs ...">min-w-2xs</div>  <div class="min-w-3xs ...">min-w-3xs</div></div>
```

--------------------------------

### Globally link main.css in nuxt.config.ts for Nuxt

Source: https://tailwindcss.com/docs/installation/framework-guides/nuxt

This update to `nuxt.config.ts` adds the path to your `main.css` file to the global `css` array. By doing so, Nuxt automatically includes your Tailwind CSS styles across all pages and components of your application, ensuring consistent styling.

```typescript
import tailwindcss from "@tailwindcss/vite";export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
```

--------------------------------

### Configure PostCSS plugins with Tailwind CSS in postcss.config.mjs

Source: https://tailwindcss.com/docs/installation/framework-guides/symfony

Creates a `postcss.config.mjs` file to define PostCSS plugins. This configuration adds `@tailwindcss/postcss` to the plugin list, allowing Tailwind CSS to be processed by PostCSS.

```javascript
export default {  plugins: {    "@tailwindcss/postcss": {},  },};
```

--------------------------------

### Applying Responsive Overflow Utilities with Tailwind CSS

Source: https://tailwindcss.com/docs/overflow

Demonstrates how to apply overflow utilities conditionally based on screen size using responsive prefixes. For example, `md:overflow-scroll` will apply `overflow-scroll` only on medium screens and above, overriding `overflow-auto`.

```html
<div class="overflow-auto md:overflow-scroll ...">  <!-- ... --></div>
```

--------------------------------

### Explicitly setting sort order with numeric classes

Source: https://tailwindcss.com/docs/order

Use order-<number> utilities to render flex and grid items in a different order than they appear in the document. This example demonstrates reordering three items using order-1, order-2, and order-3 classes.

```html
<div class="flex justify-between ...">
  <div class="order-3 ...">01</div>
  <div class="order-1 ...">02</div>
  <div class="order-2 ...">03</div>
</div>
```

--------------------------------

### Apply custom contrast value with bracket notation

Source: https://tailwindcss.com/docs/filter-contrast

Use the contrast-[<value>] syntax to set contrast with completely custom values not covered by predefined utilities. This allows arbitrary contrast values to be applied directly.

```html
<img class="contrast-[.25] ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Red 700 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `red-700` color variable using a Tailwind CSS utility class. This utility applies a specific shade of red to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-red-700
```

```css
border-inline-start-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */
```

--------------------------------

### Apply Orange 500 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `orange-500` color variable using a Tailwind CSS utility class. This utility applies a specific shade of orange to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-orange-500
```

```css
border-inline-start-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */
```

--------------------------------

### Apply Orange 300 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `orange-300` color variable using a Tailwind CSS utility class. This utility applies a specific shade of orange to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-orange-300
```

```css
border-inline-start-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */
```

--------------------------------

### Apply Red 900 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `red-900` color variable using a Tailwind CSS utility class. This utility applies a specific shade of red to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-red-900
```

```css
border-inline-start-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */
```

--------------------------------

### Apply Red 600 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `red-600` color variable using a Tailwind CSS utility class. This utility applies a specific shade of red to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-red-600
```

```css
border-inline-start-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */
```

--------------------------------

### Apply Red 950 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `red-950` color variable using a Tailwind CSS utility class. This utility applies a specific shade of red to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-red-950
```

```css
border-inline-start-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */
```

--------------------------------

### Apply Orange 100 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `orange-100` color variable using a Tailwind CSS utility class. This utility applies a specific shade of orange to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-orange-100
```

```css
border-inline-start-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */
```

--------------------------------

### Apply Orange 200 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `orange-200` color variable using a Tailwind CSS utility class. This utility applies a specific shade of orange to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-orange-200
```

```css
border-inline-start-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */
```

--------------------------------

### Apply Tailwind CSS utilities at a single breakpoint

Source: https://tailwindcss.com/docs/responsive-design

This HTML example shows how to target a single breakpoint by combining a responsive variant with the `max-*` variant of the *next* breakpoint. For instance, `md:max-lg:flex` will apply the `flex` utility only at the `md` breakpoint, before `lg` takes effect.

```html
<div class="md:max-lg:flex">  <!-- ... --></div>
```

--------------------------------

### Configure PostCSS to Use Tailwind CSS Plugin

Source: https://tailwindcss.com/docs/installation/framework-guides/rspack/react

Creates a `postcss.config.mjs` file in the project root to define PostCSS plugins. This configuration adds the `@tailwindcss/postcss` plugin, enabling Tailwind CSS processing for your styles.

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

--------------------------------

### Apply Orange 50 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `orange-50` color variable using a Tailwind CSS utility class. This utility applies a specific shade of orange to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-orange-50
```

```css
border-inline-start-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */
```

--------------------------------

### Resizing to cover using Tailwind CSS `object-cover`

Source: https://tailwindcss.com/docs/object-fit

This example demonstrates how to use the `object-cover` utility in Tailwind CSS to resize an image. The content will cover the entire container, potentially cropping parts of the image to maintain its aspect ratio.

```html
<img class="h-48 w-96 object-cover ..." src="/img/mountains.jpg" />
```

--------------------------------

### Match Viewport Width with Tailwind CSS `w-screen` Utility

Source: https://tailwindcss.com/docs/width

This example shows how to use the Tailwind CSS `w-screen` utility to make an element span the entire width of the viewport. It also mentions `w-lvw`, `w-svw`, and `w-dvw` for matching large, small, or dynamic viewports, respectively, providing flexible viewport-relative sizing.

```html
<div class="w-screen">  <!-- ... --></div>
```

--------------------------------

### Update Phoenix deployment script for Tailwind CSS

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Modify the `assets.deploy` alias in `mix.exs` to include the Tailwind CSS build step for production deployments. This ensures that your CSS is minified and prepared correctly when deploying your Phoenix application.

```elixir
defp aliases do  [
    # …
    "assets.deploy": [
      "tailwind myproject --minify",
      "esbuild myproject --minify",
      "phx.digest"
    ]
  ]end
```

--------------------------------

### Responsive caption-side with breakpoint variants

Source: https://tailwindcss.com/docs/caption-side

Apply caption-side utilities responsively using breakpoint prefixes like md:. This example shows caption-top on mobile and caption-bottom on medium screens and above.

```html
<caption class="caption-top md:caption-bottom ...">
  <!-- Caption content -->
</caption>
```

--------------------------------

### Apply 3D Rotations with Tailwind CSS

Source: https://tailwindcss.com/docs/rotate

This example illustrates how to apply 3D rotations to image elements using Tailwind CSS `rotate-x-<number>`, `rotate-y-<number>`, and `rotate-z-<number>` utilities. Combining these classes allows for complex transformations in 3D space.

```html
<img class="rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" /><img class="rotate-x-15 -rotate-y-30 ..." src="/img/mountains.jpg" /><img class="rotate-y-25 rotate-z-30 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Red 800 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `red-800` color variable using a Tailwind CSS utility class. This utility applies a specific shade of red to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-red-800
```

```css
border-inline-start-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */
```

--------------------------------

### CSS stylesheet demonstrating utility class conflict resolution

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Shows the CSS rules for conflicting flex and grid utilities, demonstrating that the .grid class defined later in the stylesheet will take precedence over .flex, resulting in display: grid being applied.

```css
.flex {
  display: flex;
}

.grid {
  display: grid;
}
```

--------------------------------

### Apply place-items-stretch utility in Tailwind CSS

Source: https://tailwindcss.com/docs/place-items

This example demonstrates how to use the `place-items-stretch` utility class to stretch grid items along both axes within their grid areas. It requires a parent element with `display: grid` and `grid-template-columns` defined, and often a defined height for the grid container to visibly demonstrate the effect.

```html
<div class="grid h-56 grid-cols-3 place-items-stretch gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div>  <div>05</div>  <div>06</div></div>
```

--------------------------------

### Apply responsive align-items utilities in Tailwind CSS HTML

Source: https://tailwindcss.com/docs/align-items

This example demonstrates how to apply `align-items` utilities responsively using Tailwind CSS breakpoint variants. By prefixing utilities like `md:items-center`, the alignment changes only at medium screen sizes and above, allowing for adaptive layouts.

```html
<div class="flex items-stretch md:items-center ...">  <!-- ... --></div>
```

--------------------------------

### Apply Red 500 Border Start Color with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Sets the `border-inline-start-color` CSS property to the `red-500` color variable using a Tailwind CSS utility class. This utility applies a specific shade of red to the logical start edge of an element's border. The color is defined using a CSS variable, with its Oklch representation provided for reference.

```tailwindcss
border-s-red-500
```

```css
border-inline-start-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */
```

--------------------------------

### Configure Tailwind CSS Vite Plugin

Source: https://tailwindcss.com/docs/installation/framework-guides/adonisjs

Add the @tailwindcss/vite plugin to the Vite configuration file. This integrates Tailwind CSS processing into the AdonisJS build pipeline alongside the AdonisJS Vite plugin.

```typescript
import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    adonisjs({
      // …
    }),
  ],
})
```

--------------------------------

### Safelist Utilities with Ranges in Tailwind CSS

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

Use brace expansion with ranges to generate multiple classes at once. This example generates all red background colors from 50 to 950 with hover variants using range syntax {100..900..100}.

```css
@import "tailwindcss";
@source inline("{hover:,}bg-red-{50,{100..900..100},950}");
```

--------------------------------

### Snap Center Alignment with Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-snap-align

Demonstrates using the snap-center utility to align scrollable elements to their center point within a snap container. This example shows a horizontally scrollable grid of images where each item snaps to center alignment.

```html
<div class="snap-x ...">
  <div class="snap-center ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-05.jpg" />
  </div>
  <div class="snap-center ...">
    <img src="/img/vacation-06.jpg" />
  </div>
</div>
```

--------------------------------

### Snap End Alignment with Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-snap-align

Demonstrates using the snap-end utility to align scrollable elements to their end point within a snap container. This example shows a horizontally scrollable grid of images where each item snaps to end alignment.

```html
<div class="snap-x ...">
  <div class="snap-end ...">
    <img src="/img/vacation-01.jpg" />
  </div>
  <div class="snap-end ...">
    <img src="/img/vacation-02.jpg" />
  </div>
  <div class="snap-end ...">
    <img src="/img/vacation-03.jpg" />
  </div>
  <div class="snap-end ...">
    <img src="/img/vacation-04.jpg" />
  </div>
  <div class="snap-end ...">
    <img src="/img/vacation-05.jpg" />
  </div>
  <div class="snap-end ...">
    <img src="/img/vacation-06.jpg" />
  </div>
</div>
```

--------------------------------

### Apply responsive `background-size` utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/background-size

This example illustrates how to apply responsive `background-size` utilities in Tailwind CSS using breakpoint variants. The `bg-auto` utility is applied by default, and `md:bg-contain` is applied for medium screen sizes and above.

```html
<div class="bg-auto md:bg-contain ...">  <!-- ... --></div>
```

--------------------------------

### Styling Unstyled Lists with Tailwind CSS Utilities

Source: https://tailwindcss.com/docs/preflight

This HTML example demonstrates how to apply styling to an unstyled list using Tailwind CSS utility classes. The `list-inside` and `list-disc` classes are used to add disc-style bullets positioned inside the list items.

```html
<ul class="list-inside list-disc">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

--------------------------------

### Apply responsive word breaking with Tailwind CSS

Source: https://tailwindcss.com/docs/word-break

Demonstrates how to use responsive variants like `md:` to apply `word-break` utilities conditionally based on screen size. This example sets `break-normal` by default and switches to `break-all` on medium screens and above, allowing for adaptive text layout.

```html
<p class="break-normal md:break-all ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply responsive transition timing functions with Tailwind CSS

Source: https://tailwindcss.com/docs/transition-timing-function

Demonstrates how to apply different transition timing functions based on screen size using responsive variants like `md:`. This allows for adaptive transition behaviors across various devices and breakpoints.

```html
<button class="ease-out md:ease-in ...">  <!-- ... --></button>
```

--------------------------------

### Apply Basic Backdrop Filters with Tailwind CSS

Source: https://tailwindcss.com/docs/backdrop-filter

Demonstrates applying basic backdrop filters like blur and grayscale to an element's backdrop using Tailwind CSS utility classes. It shows individual filters and a combined example on background images.

```html
<div class="bg-[url(/img/mountains.jpg)] ...">  <div class="backdrop-blur-xs ..."></div></div><div class="bg-[url(/img/mountains.jpg)] ...">  <div class="backdrop-grayscale ..."></div></div><div class="bg-[url(/img/mountains.jpg)] ...">  <div class="backdrop-blur-xs backdrop-grayscale ..."></div></div>
```

--------------------------------

### Create Inline Grid Containers with Tailwind CSS Inline-Grid Utility

Source: https://tailwindcss.com/docs/display

This example showcases the `inline-grid` utility in Tailwind CSS. It creates an inline-level grid container, allowing it to integrate seamlessly within text flow while providing a grid layout for its children. This is useful for small, grid-based components that need to appear inline.

```html
<span class="inline-grid grid-cols-3 gap-4">  <span>01</span>  <span>02</span>  <span>03</span>  <span>04</span>  <span>05</span>  <span>06</span></span><span class="inline-grid grid-cols-3 gap-4">  <span>01</span>  <span>02</span>  <span>03</span>  <span>04</span>  <span>05</span>  <span>06</span></span>
```

--------------------------------

### Add Tailwind CSS PostCSS plugin configuration

Source: https://tailwindcss.com/docs/installation/framework-guides/emberjs

Creates a `postcss.config.mjs` file at the project root to define PostCSS plugins. This configuration adds `@tailwindcss/postcss` to the plugin list, enabling Tailwind CSS processing during the build.

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}
```

--------------------------------

### Responsive order utility with breakpoint variants

Source: https://tailwindcss.com/docs/order

Prefix an order utility with a breakpoint variant like md: to apply the utility only at specific screen sizes, enabling responsive reordering across different device sizes.

```html
<div class="order-first md:order-last ...">
  <!-- ... -->
</div>
```

--------------------------------

### Responsive text-overflow with breakpoint variants - HTML

Source: https://tailwindcss.com/docs/text-overflow

Apply text-overflow utilities responsively by prefixing with breakpoint variants like md:. This example applies text-ellipsis by default and switches to text-clip at medium screen sizes and above.

```html
<p class="text-ellipsis md:text-clip ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Configure PostCSS to use Tailwind CSS plugin

Source: https://tailwindcss.com/docs/installation/framework-guides/angular

Create a `.postcssrc.json` file in your project's root directory. This JSON configuration instructs PostCSS to use the `@tailwindcss/postcss` plugin, enabling Tailwind CSS processing for your stylesheets.

```JSON
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

--------------------------------

### Apply `flex-row` for horizontal flex items in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-direction

This example demonstrates how to use the `flex-row` utility class in Tailwind CSS to position flex items horizontally, following the natural text direction.

```html
<div class="flex flex-row ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

--------------------------------

### Generated CSS for Tailwind CSS `group-hover` Variant

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Shows the simplified CSS output for the `group-hover` variant example. This illustrates how Tailwind translates the `group-hover` utility into standard CSS `:hover` selectors targeting both the parent and child elements.

```CSS
@media (hover: hover) {  a:hover span {    text-decoration-line: underline;  }}
```

--------------------------------

### Create Block Formatting Contexts with Tailwind CSS Flow Root Utility

Source: https://tailwindcss.com/docs/display

This example illustrates the `flow-root` utility in Tailwind CSS. It creates a block-level element that establishes its own block formatting context, effectively containing its internal floats. This is useful for clearing floats without adding extra markup.

```html
<div class="p-4">  <div class="flow-root ...">    <div class="my-4 ...">Well, let me tell you something, ...</div>  </div>  <div class="flow-root ...">    <div class="my-4 ...">Sure, go ahead, laugh if you want...</div>  </div></div>
```

--------------------------------

### transition-delay with custom CSS property

Source: https://tailwindcss.com/docs/transition-delay

HTML example using the delay-(<custom-property>) syntax to reference a custom CSS property for the transition delay. This is shorthand for delay-[var(<custom-property>)] and automatically wraps the value with the var() function.

```html
<button class="delay-(--my-delay) ...">  <!-- ... --></button>
```

--------------------------------

### Configure Vite Plugin for Tailwind CSS

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/vite

Add the @tailwindcss/vite plugin to your Vite configuration file. This enables Tailwind CSS processing during the build process and allows Vite to handle CSS compilation with Tailwind utilities.

```typescript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    // …
  ],
})
```

--------------------------------

### Apply background-position using CSS variables in Tailwind CSS

Source: https://tailwindcss.com/docs/background-position

This example shows how to use the `bg-position-(<custom-property>)` syntax in Tailwind CSS to set the `background-position` based on a CSS variable. This is a shorthand for `bg-position-[var(<custom-property>)]`, providing dynamic positioning.

```html
<div class="bg-position-(--my-bg-position) ...">  <!-- ... --></div>
```

--------------------------------

### Add Tailwind plugin dependency in Phoenix

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Add the official Tailwind plugin to your Phoenix project's dependencies. This entry in `mix.exs` ensures the plugin is available during development, allowing Phoenix to manage Tailwind CSS integration.

```elixir
defp deps do  [
    # …
    {:tailwind, "~> 0.3", runtime: Mix.env() == :dev},
  ]end
```

--------------------------------

### Opting out of forced colors with Tailwind CSS

Source: https://tailwindcss.com/docs/forced-color-adjust

This example demonstrates how to use the `forced-color-adjust-none` utility class in HTML to prevent an element from adhering to forced color modes. This is particularly useful for components where a limited color palette would degrade usability, such as product color choosers.

```html
<form>  <img src="/img/shirt.jpg" />  <div>    <h3>Basic Tee</h3>    <h3>$35</h3>    <fieldset>      <legend class="sr-only">Choose a color</legend>      <div class="forced-color-adjust-none ...">        <label>          <input class="sr-only" type="radio" name="color-choice" value="White" />          <span class="sr-only">White</span>          <span class="size-6 rounded-full border border-black/10 bg-white"></span>        </label>        <!-- ... -->      </div>    </fieldset>  </div></form>
```

--------------------------------

### Apply `flex-col-reverse` for reversed vertical flex items in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-direction

This example demonstrates how to use the `flex-col-reverse` utility class in Tailwind CSS to position flex items vertically in the opposite direction.

```html
<div class="flex flex-col-reverse ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

--------------------------------

### Apply place-items-center utility in Tailwind CSS

Source: https://tailwindcss.com/docs/place-items

This example demonstrates how to use the `place-items-center` utility class to position grid items in the center of their grid areas along both axes. It requires a parent element with `display: grid` and `grid-template-columns` defined, and often a defined height for the grid container to visibly demonstrate the effect.

```html
<div class="grid h-56 grid-cols-3 place-items-center gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div>  <div>05</div>  <div>06</div></div>
```

--------------------------------

### Use custom theme transition timing function utility in HTML

Source: https://tailwindcss.com/docs/transition-timing-function

Shows how to apply a custom transition timing function utility, previously defined in the theme, to an HTML element. This demonstrates the usage of a newly created utility like `ease-in-expo`.

```html
<button class="ease-in-expo">  <!-- ... --></button>
```

--------------------------------

### Implement responsive `grid-auto-rows` with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/grid-auto-rows

Explains how to make `grid-auto-rows` utilities responsive by prefixing them with breakpoint variants, such as `md:auto-rows-min`. This allows for different implicit row sizing based on screen sizes, adapting the layout for various devices.

```html
<div class="grid grid-flow-row auto-rows-max md:auto-rows-min ...">  <!-- ... --></div>
```

--------------------------------

### Apply responsive backdrop sepia with breakpoint variants

Source: https://tailwindcss.com/docs/backdrop-filter-sepia

Use breakpoint prefixes like md: to apply backdrop-sepia utilities conditionally at specific screen sizes. This example applies full sepia on small screens and removes it on medium screens and above.

```html
<div class="backdrop-sepia md:backdrop-sepia-0 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Responsive Minimum Width with Tailwind CSS Breakpoint Variants

Source: https://tailwindcss.com/docs/min-width

This example illustrates how to use breakpoint variants like `md:` to apply `min-width` utilities conditionally based on screen size in Tailwind CSS. It sets a default `min-w-full` and overrides it to `min-w-0` for medium screens and above.

```html
<div class="w-24 min-w-full md:min-w-0 ...">  <!-- ... --></div>
```

--------------------------------

### Remove Backdrop Filters with Tailwind CSS

Source: https://tailwindcss.com/docs/backdrop-filter

Illustrates how to remove all backdrop filters from an element using the `backdrop-filter-none` utility class. This can be applied conditionally, for example, at specific breakpoints.

```html
<div class="backdrop-blur-md backdrop-brightness-150 md:backdrop-filter-none"></div>
```

--------------------------------

### Stretching content to fit container using Tailwind CSS `object-fill`

Source: https://tailwindcss.com/docs/object-fit

This example illustrates the use of the `object-fill` utility in Tailwind CSS. The image content will be stretched to completely fill the container, potentially distorting its aspect ratio.

```html
<img class="h-48 w-96 object-fill ..." src="/img/mountains.jpg" />
```

--------------------------------

### Responsive scroll-snap-type with breakpoint variant

Source: https://tailwindcss.com/docs/scroll-snap-type

Applies scroll-snap-type utilities conditionally at specific breakpoints using Tailwind CSS variant syntax. Example shows snap-none by default and snap-x at medium screen sizes and above.

```html
<div class="snap-none md:snap-x ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Responsive Text Decoration Styles with Tailwind CSS

Source: https://tailwindcss.com/docs/text-decoration-style

This example illustrates how to apply text decoration styles conditionally based on screen size using Tailwind CSS responsive variants. The `md:decoration-dashed` class ensures the dashed style is only applied on medium screens and above.

```html
<p class="underline md:decoration-dashed ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply `bg-cover` for background image fill in Tailwind CSS

Source: https://tailwindcss.com/docs/background-size

This example demonstrates how to use the `bg-cover` utility in Tailwind CSS to scale a background image to fill its container, potentially cropping the image. It also sets the background position to center.

```html
<div class="bg-[url(/img/mountains.jpg)] bg-cover bg-center"></div>
```

--------------------------------

### Style Popovers in Open State

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use the open variant with the :popover-open pseudo-class to conditionally style popover elements. This example changes opacity from 0 to 100 when the popover is opened.

```html
<div>
  <button popovertarget="my-popover">Open Popover</button>
  <div popover id="my-popover" class="opacity-0 open:opacity-100 ...">
    <!-- ... -->
  </div>
</div>
```

--------------------------------

### Apply Responsive Caret Colors with Tailwind CSS

Source: https://tailwindcss.com/docs/caret-color

This example demonstrates how to use responsive prefixes, such as `md:`, with caret color utilities. It allows the caret color to change based on screen sizes, applying `caret-rose-500` by default and `caret-lime-600` on medium screens and above.

```html
<textarea class="caret-rose-500 md:caret-lime-600 ..."></textarea>
```

--------------------------------

### Custom transition-property with bracket notation

Source: https://tailwindcss.com/docs/transition-property

Uses the transition-[<value>] syntax to apply custom CSS property values for transitions. This example transitions the height property specifically, allowing fine-grained control over which properties animate.

```html
<button class="transition-[height] ...">  <!-- ... --></button>
```

--------------------------------

### Apply responsive box-sizing with Tailwind CSS breakpoint variants

Source: https://tailwindcss.com/docs/box-sizing

Use breakpoint variants like md: to apply box-sizing utilities conditionally at specific screen sizes. This example applies box-content by default and switches to box-border at medium screen sizes and above, enabling responsive design patterns.

```html
<div class="box-content md:box-border ...">  <!-- ... --></div>
```

--------------------------------

### Distribute items with space around using Tailwind CSS `justify-around`

Source: https://tailwindcss.com/docs/justify-content

This example uses the `justify-around` utility to distribute flex items with equal space around each item. This means there's half the space at the ends compared to the space between items.

```html
<div class="flex justify-around ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

--------------------------------

### Aligning Flex/Grid Item to Start of Cross Axis (self-start) in HTML

Source: https://tailwindcss.com/docs/align-self

Illustrates the use of the `self-start` utility in Tailwind CSS to align an individual flex or grid item to the beginning of its container's cross axis, overriding the container's `align-items` value.

```html
<div class="flex items-stretch ...">  <div>01</div>  <div class="self-start ...">02</div>  <div>03</div></div>
```

--------------------------------

### Apply responsive border width with breakpoint variants

Source: https://tailwindcss.com/docs/border-width

Prefix border-width utilities with breakpoint variants like md: to apply the utility only at medium screen sizes and above. This example applies a 2px border by default and 4px top border on medium screens.

```html
<div class="border-2 md:border-t-4 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply content-based field sizing with Tailwind CSS

Source: https://tailwindcss.com/docs/field-sizing

This example demonstrates how to use the `field-sizing-content` utility class to make a `<textarea>` element automatically adjust its size based on its content. This is useful for creating dynamic input fields that expand as the user types, improving user experience.

```html
<textarea class="field-sizing-content ..." rows="2">  Latex Salesman, Vanderlay Industries</textarea>
```

--------------------------------

### Scaling down content with Tailwind CSS `object-scale-down`

Source: https://tailwindcss.com/docs/object-fit

This example demonstrates the `object-scale-down` utility in Tailwind CSS. The image content will be displayed at its original size, but scaled down to fit the container if it's larger, preserving the aspect ratio.

```html
<img class="h-48 w-96 object-scale-down ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply responsive contrast filter with breakpoint variants

Source: https://tailwindcss.com/docs/filter-contrast

Prefix contrast utilities with breakpoint variants like md: to apply different contrast levels at specific screen sizes. This enables responsive contrast adjustments across different device widths.

```html
<img class="contrast-125 md:contrast-150 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Basic 2D Rotations with Tailwind CSS

Source: https://tailwindcss.com/docs/rotate

This example demonstrates how to apply basic 2D rotations to image elements using Tailwind CSS `rotate-<number>` utilities. These classes rotate an element clockwise by the specified degrees.

```html
<img class="rotate-45 ..." src="/img/mountains.jpg" /><img class="rotate-90 ..." src="/img/mountains.jpg" /><img class="rotate-210 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply responsive transition durations with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/transition-duration

This example shows how to make transition durations responsive using Tailwind CSS breakpoint variants. The `md:duration-150` class applies a 150ms duration only at medium screen sizes and above, while `duration-0` acts as a default for smaller screens, enabling adaptive UI behavior.

```html
<button class="duration-0 md:duration-150 ...">  <!-- ... --></button>
```

--------------------------------

### Apply mask-cover utility in HTML

Source: https://tailwindcss.com/docs/mask-size

Demonstrates how to use the `mask-cover` utility class in HTML to scale a mask image until it fills the mask layer, cropping the image if necessary.

```html
<div class="mask-cover mask-[url(/img/scribble.png)] bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### Apply 2D Translation with Percentage Values in Tailwind CSS

Source: https://tailwindcss.com/docs/translate

This snippet illustrates how to translate an HTML element by a percentage of its own size using Tailwind CSS utility classes. Examples include negative and positive percentage translations.

```html
<img class="-translate-1/4 ..." src="/img/mountains.jpg" /><img class="translate-1/6 ..." src="/img/mountains.jpg" /><img class="translate-1/2 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Responsive Backdrop Opacity with Tailwind CSS

Source: https://tailwindcss.com/docs/backdrop-filter-opacity

Demonstrates how to make backdrop opacity filters responsive using Tailwind CSS breakpoint variants. This example applies a default `backdrop-opacity-100` and then overrides it with `md:backdrop-opacity-60` for medium screens and above, ensuring adaptive styling.

```html
<div class="backdrop-opacity-100 md:backdrop-opacity-60 ...">  <!-- ... --></div>
```

--------------------------------

### Implement basic Tailwind CSS container queries

Source: https://tailwindcss.com/docs/responsive-design

This HTML example shows how to use Tailwind CSS container queries. Mark a parent element with `@container` to make it a query container, then apply responsive styles to its children using variants like `@md` based on the container's width, not the viewport.

```html
<div class="@container">
  <div class="flex flex-col @md:flex-row">
    <!-- ... -->
  </div>
</div>
```

--------------------------------

### Override default theme variable value

Source: https://tailwindcss.com/docs/theme

Redefine a default theme variable to change its value. This example overrides the sm breakpoint from 40rem to 30rem, affecting all sm: responsive variants.

```css
@import "tailwindcss";
@theme {
  --breakpoint-sm: 30rem;
}
```

--------------------------------

### Create Inline Flex Containers with Tailwind CSS Inline-Flex Utility

Source: https://tailwindcss.com/docs/display

This example demonstrates the `inline-flex` utility in Tailwind CSS. It creates an inline-level flex container, allowing it to flow with surrounding text while still providing flexbox capabilities for its children. This is ideal for components that need flex layout but should not break the text flow.

```html
<p>  Today I spent most of the day researching ways to ...  <span class="inline-flex items-baseline">    <img src="/img/kramer.jpg" class="mx-1 size-5 self-center rounded-full" />    <span>Kramer</span>  </span>  keeps telling me there is no way to make it work, that ...</p>
```

--------------------------------

### Responsive transition-property with breakpoint variant

Source: https://tailwindcss.com/docs/transition-property

Uses the md: breakpoint variant to conditionally apply transition utilities at medium screen sizes and above. This example applies no transition by default and enables all transitions on medium and larger screens.

```html
<button class="transition-none md:transition-all ...">  <!-- ... --></button>
```

--------------------------------

### Configure Tailwind CSS in Laravel Mix webpack.mix.js

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/mix

Add Tailwind CSS as a PostCSS plugin in your webpack.mix.js configuration file. This processes your CSS files through Tailwind's PostCSS plugin during the build process.

```javascript
mix
  .js("resources/js/app.js", "public/js")
  .postCss("resources/css/app.css", "public/css", [
    require("@tailwindcss/postcss")
  ]);
```

--------------------------------

### Applying Tailwind CSS Arbitrary Variants with Space Selectors

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Demonstrates how to use underscores in arbitrary variants to represent spaces in CSS selectors, allowing for targeting descendant elements. This example applies a top margin to all `p` elements within the parent element where the class is applied.

```html
<div class="[&_p]:mt-4">
  <p>Lorem ipsum...</p>
  <ul>
    <li>
      <p>Lorem ipsum...</p>
    </li>
    <!-- ... -->
  </ul>
</div>
```

--------------------------------

### Apply responsive Tailwind CSS mask-position utilities

Source: https://tailwindcss.com/docs/mask-position

This example shows how to make `mask-position` utilities responsive in Tailwind CSS using breakpoint variants. By prefixing a utility like `mask-top` with `md:`, the `mask-top` style will only apply at medium screen sizes and above, overriding the default `mask-center` at smaller screens. This enables adaptive mask positioning based on viewport size.

```html
<div class="mask-center md:mask-top ...">  <!-- ... --></div>
```

--------------------------------

### Align items to the cross-start with items-start in HTML

Source: https://tailwindcss.com/docs/align-items

This snippet illustrates the `items-start` utility, which aligns flex items to the beginning of the container's cross axis. This is useful for positioning content at the top in a column layout or left in a row layout.

```html
<div class="flex items-start ...">  <div class="py-4">01</div>  <div class="py-12">02</div>  <div class="py-8">03</div></div>
```

--------------------------------

### Stretch items to fill space with Tailwind CSS `justify-stretch`

Source: https://tailwindcss.com/docs/justify-content

This example demonstrates the `justify-stretch` utility, which allows auto-sized content items to expand and fill the available space along the container's main axis. It's particularly useful for grid layouts where items need to stretch.

```html
<div class="grid grid-cols-[4rem_auto_4rem] justify-stretch ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

--------------------------------

### Custom line-clamp value with bracket notation

Source: https://tailwindcss.com/docs/line-clamp

Demonstrates using the line-clamp-[<value>] syntax to set a custom number of lines based on arbitrary values. This allows for dynamic line clamping using calc() expressions or other custom CSS values not covered by the default utility classes.

```html
<p class="line-clamp-[calc(var(--characters)/100)] ...">
  Lorem ipsum dolor sit amet...
</p>
```

--------------------------------

### Distribute items with space evenly using Tailwind CSS `justify-evenly`

Source: https://tailwindcss.com/docs/justify-content

This example showcases the `justify-evenly` utility, which distributes flex items such that there is equal space around each item, including the space at the ends of the container. This results in visually balanced spacing across all items.

```html
<div class="flex justify-evenly ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

--------------------------------

### Custom line-height values with bracket notation in Tailwind CSS

Source: https://tailwindcss.com/docs/line-height

Use leading-[<value>] syntax to apply arbitrary line-height values not covered by default utilities. This example sets a custom line-height of 1.5 using bracket notation.

```html
<p class="leading-[1.5] ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply custom CSS variable for `background-size` in Tailwind CSS

Source: https://tailwindcss.com/docs/background-size

This example demonstrates using the `bg-size-(<custom-property>)` syntax in Tailwind CSS to apply a custom CSS variable for the `background-size` property. This is a shorthand for `bg-size-[var(<custom-property>)]`.

```html
<div class="bg-size-(--my-image-size) ...">  <!-- ... --></div>
```

--------------------------------

### Apply Custom Minimum Width with Tailwind CSS `min-w-[<value>]` Syntax

Source: https://tailwindcss.com/docs/min-width

This example shows how to use the arbitrary value syntax `min-w-[<value>]` to set a completely custom minimum width for an element in Tailwind CSS. It sets a fixed pixel value for the minimum width.

```html
<div class="min-w-[220px] ...">  <!-- ... --></div>
```

--------------------------------

### Ordering items first or last with utility classes

Source: https://tailwindcss.com/docs/order

Use order-first and order-last utilities to render flex and grid items at the beginning or end of the layout, regardless of their position in the DOM.

```html
<div class="flex justify-between ...">
  <div class="order-last ...">01</div>
  <div class="...">02</div>
  <div class="order-first ...">03</div>
</div>
```

--------------------------------

### justify-self-center - Center grid item on inline axis

Source: https://tailwindcss.com/docs/justify-self

Centers a grid item along the center of its inline axis. The justify-self-center-safe variant will align to the start if insufficient space is available, preventing content overflow.

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-center ...">02</div>
  <!-- ... -->
</div>
```

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-center-safe ...">02</div>
  <!-- ... -->
</div>
```

--------------------------------

### Apply Responsive Rotations with Tailwind CSS

Source: https://tailwindcss.com/docs/rotate

This example demonstrates how to apply responsive rotation utilities using breakpoint variants like `md:`. The `md:rotate-60` class will apply a 60-degree rotation only on medium screens and above, overriding any default rotation for smaller screens.

```html
<img class="rotate-45 md:rotate-60 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Enable PostCSS Loader in webpack.config.js for Symfony Encore

Source: https://tailwindcss.com/docs/installation/framework-guides/symfony

Configures Webpack Encore to enable PostCSS processing. This line should be added to your `webpack.config.js` file to ensure that PostCSS plugins, including Tailwind CSS, are applied during asset compilation.

```javascript
Encore  .enablePostCssLoader();
```

--------------------------------

### Apply mask-auto utility in HTML

Source: https://tailwindcss.com/docs/mask-size

Shows how to use the `mask-auto` utility class in HTML to display a mask image at its default size.

```html
<div class="mask-auto mask-[url(/img/scribble.png)] bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### Apply automatic table column sizing with Tailwind CSS `table-auto`

Source: https://tailwindcss.com/docs/table-layout

This example demonstrates how to use the `table-auto` utility class in Tailwind CSS to automatically size table columns based on their content. This is useful for tables where column widths should adapt dynamically to the data.

```html
<table class="table-auto">  <thead>    <tr>      <th>Song</th>      <th>Artist</th>      <th>Year</th>    </tr>  </thead>  <tbody>    <tr>      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>      <td>Malcolm Lockyer</td>      <td>1961</td>    </tr>    <tr>      <td>Witchy Woman</td>      <td>The Eagles</td>      <td>1972</td>    </tr>    <tr>      <td>Shining Star</td>      <td>Earth, Wind, and Fire</td>      <td>1975</td>    </tr>  </tbody></table>
```

--------------------------------

### Apply Responsive Accent Color with Breakpoint Variant

Source: https://tailwindcss.com/docs/accent-color

Use the accent-color utility with breakpoint prefixes to apply different accent colors at specific screen sizes. This example applies accent-black by default and switches to accent-pink-500 at medium screen sizes and above using the md: variant.

```html
<input class="accent-black md:accent-pink-500 ..." type="checkbox" />
```

--------------------------------

### Custom outline-width value with bracket notation in HTML

Source: https://tailwindcss.com/docs/outline-width

Demonstrates using the outline-[<value>] syntax to set outline width with completely custom values. Example uses 2vw (viewport width units) for responsive outline sizing.

```html
<div class="outline-[2vw] ...">  <!-- ... --></div>
```

--------------------------------

### Apply responsive align-content utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/align-content

This example demonstrates how to apply `align-content` utilities conditionally based on screen size using responsive variants in Tailwind CSS. The `md:content-around` class applies `content-around` only for medium screens and above, while `content-start` is the default for smaller screens.

```html
<div class="grid content-start md:content-around ...">  <!-- ... --></div>
```

--------------------------------

### Balancing text wrapping with Tailwind CSS `text-balance`

Source: https://tailwindcss.com/docs/text-wrap

This example showcases the `text-balance` utility, which distributes text evenly across each line for improved readability. It is particularly effective for headings and short blocks of text, as browsers typically limit balancing to content around 6 lines or less for performance reasons.

```html
<article>  <h3 class="text-balance">Beloved Manhattan soup stand closes</h3>  <p>New Yorkers are facing the winter chill...</p></article>
```

--------------------------------

### Apply place-items-end utility in Tailwind CSS

Source: https://tailwindcss.com/docs/place-items

This example demonstrates how to use the `place-items-end` utility class to position grid items at the end of their grid areas along both axes. It requires a parent element with `display: grid` and `grid-template-columns` defined, and often a defined height for the grid container to visibly demonstrate the effect.

```html
<div class="grid h-56 grid-cols-3 place-items-end gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div>  <div>05</div>  <div>06</div></div>
```

--------------------------------

### Apply Different Sized Box Shadows in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/box-shadow

This example demonstrates how to apply various outer box shadow sizes to HTML elements using Tailwind CSS utility classes like `shadow-md`, `shadow-lg`, and `shadow-xl`. These classes provide pre-defined shadow styles for quick application, enhancing the visual depth of elements.

```html
<div class="shadow-md ..."></div><div class="shadow-lg ..."></div><div class="shadow-xl ..."></div>
```

--------------------------------

### Conditional Styling for Print Media (Tailwind CSS HTML)

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This example demonstrates the `print` variant, which applies styles exclusively when the document is being printed. It allows for hiding elements from printouts or displaying print-specific content.

```html
<div>
  <article class="print:hidden">
    <h1>My Secret Pizza Recipe</h1>
    <p>This recipe is a secret, and must not be shared with anyone</p>
    <!-- ... -->
  </article>
  <div class="hidden print:block">Are you seriously trying to print this? It's secret!</div>
</div>
```

--------------------------------

### Apply `flex-row-reverse` for reversed horizontal flex items in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-direction

This example shows how to use the `flex-row-reverse` utility class in Tailwind CSS to position flex items horizontally in the opposite direction of text flow.

```html
<div class="flex flex-row-reverse ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

--------------------------------

### Handle Outline-Color Transitions - HTML

Source: https://tailwindcss.com/docs/upgrade-guide

Set outline color unconditionally or explicitly for both states to avoid unintended color transitions. The transition and transition-colors utilities now include outline-color property in v4.

```html
<button class="outline-cyan-500 transition hover:outline-2"></button>
```

--------------------------------

### Apply responsive mask-mode utilities in HTML

Source: https://tailwindcss.com/docs/mask-mode

This example illustrates how to apply `mask-mode` utilities conditionally based on screen size using Tailwind CSS responsive variants. The `md:mask-luminance` class ensures that the `mask-luminance` utility is only active on medium screen sizes and above, while `mask-alpha` serves as the default.

```html
<div class="mask-alpha md:mask-luminance ...">  <!-- ... --></div>
```

--------------------------------

### Correct Mobile-First Responsive Styling Pattern

Source: https://tailwindcss.com/docs/responsive-design

Demonstrates the correct mobile-first approach in Tailwind CSS. Use unprefixed utilities to target mobile devices, then override them at larger breakpoints using responsive prefixes. This example centers text on mobile and left-aligns it on screens 640px and wider.

```html
<!-- This will center text on mobile, and left align it on screens 640px and wider -->
<div class="text-center sm:text-left"></div>
```

--------------------------------

### Apply responsive backdrop contrast with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/backdrop-filter-contrast

Use breakpoint variants like md: to apply backdrop-contrast utilities only at specific screen sizes. This example applies backdrop-contrast-125 by default and backdrop-contrast-150 at medium screen sizes and above.

```html
<div class="backdrop-contrast-125 md:backdrop-contrast-150 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Customize Animation Theme with CSS Variables

Source: https://tailwindcss.com/docs/animation

Demonstrates how to define custom animations in the theme configuration using `--animate-*` CSS variables and `@keyframes`. This creates reusable animation utilities that can be applied throughout the project.

```css
@theme {
  --animate-wiggle: wiggle 1s ease-in-out infinite;
  @keyframes wiggle {
    0%,
    100% {
      transform: rotate(-3deg);
    }
    50% {
      transform: rotate(3deg);
    }
  }
}
```

--------------------------------

### Implement Responsive Text Decoration Colors with Tailwind CSS

Source: https://tailwindcss.com/docs/text-decoration-color

This snippet demonstrates how to apply different text decoration colors based on screen size using responsive variants. By prefixing a utility with a breakpoint (e.g., `md:decoration-blue-400`), the color will only be applied at that specific screen size and above, allowing for adaptive designs.

```html
<p class="underline decoration-sky-600 md:decoration-blue-400 ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply responsive justify-items utilities in HTML

Source: https://tailwindcss.com/docs/justify-items

This snippet illustrates how to apply `justify-items` utilities conditionally based on screen size using responsive prefixes like `md:`. The grid items will start aligned by default and center align on medium screens and above, demonstrating Tailwind's responsive design capabilities.

```html
<div class="grid justify-items-start md:justify-items-center ...">  <!-- ... --></div>
```

--------------------------------

### Responsive user-select with breakpoint variants

Source: https://tailwindcss.com/docs/user-select

Applies user-select utilities conditionally at different screen sizes using Tailwind CSS breakpoint variants like md:. This example disables selection on small screens and enables select-all behavior on medium screens and above.

```html
<div class="select-none md:select-all ...">  <!-- ... --></div>
```

--------------------------------

### Displaying content at original size using Tailwind CSS `object-none`

Source: https://tailwindcss.com/docs/object-fit

This example shows how to use the `object-none` utility in Tailwind CSS. The image content will be displayed at its original size, ignoring the container's dimensions and potentially overflowing or being cut off.

```html
<img class="h-48 w-96 object-none ..." src="/img/mountains.jpg" />
```

--------------------------------

### Control Grid Column Start/End with Tailwind CSS `col-start`/`col-end`

Source: https://tailwindcss.com/docs/grid-column

Illustrates the use of `col-start-<number>` and `col-end-<number>` utilities in Tailwind CSS to position elements at specific grid lines. This example combines these with `col-span-<number>` to precisely place and size elements within a 6-column grid, showcasing advanced grid placement.

```html
<div class="grid grid-cols-6 gap-4">
  <div class="col-span-4 col-start-2 ...">01</div>
  <div class="col-start-1 col-end-3 ...">02</div>
  <div class="col-span-2 col-end-7 ...">03</div>
  <div class="col-start-1 col-end-7 ...">04</div></div>
```

--------------------------------

### Apply custom Tailwind CSS breakpoints in HTML

Source: https://tailwindcss.com/docs/responsive-design

After defining custom breakpoints in your Tailwind CSS theme, this HTML example demonstrates how to use them as utility prefixes (e.g., `xs:grid-cols-2`, `3xl:grid-cols-6`) directly in your markup to apply styles at those custom sizes.

```html
<div class="grid xs:grid-cols-2 3xl:grid-cols-6">  <!-- ... --></div>
```

--------------------------------

### Define Breakpoint Theme Variable

Source: https://tailwindcss.com/docs/theme

Create responsive breakpoint theme variables in the --breakpoint-* namespace to generate responsive variants. This example defines a 3xl breakpoint at 120rem that enables the 3xl: variant for responsive design.

```css
@import "tailwindcss";
@theme {
  --breakpoint-3xl: 120rem;
}
```

--------------------------------

### Define Custom Grid Columns with Tailwind CSS Arbitrary Values (HTML)

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Illustrates how to leverage Tailwind CSS's arbitrary value syntax to create a complex, custom grid column definition. This approach is beneficial for implementing layouts that require specific, non-standard column tracks not covered by default theme values.

```HTML
<div class="grid grid-cols-[24rem_2.5rem_minmax(0,1fr)]">  <!-- ... --></div>
```

--------------------------------

### Apply color utilities with Tailwind hover states

Source: https://tailwindcss.com/docs/compatibility

Illustrates using Tailwind's predefined color palette with utility classes and hover variants instead of preprocessor color functions like darken() or lighten(). Demonstrates the recommended workflow of using a comprehensive color palette with light and dark shades.

```html
<button class="bg-indigo-500 hover:bg-indigo-600 ...">
  <!-- ... -->
</button>
```

--------------------------------

### Use Custom Data Variants in HTML

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Apply custom data-* variants created in your configuration to conditionally style elements. This example uses the data-checked variant to underline elements with matching data-ui attributes.

```html
<div data-ui="checked active" class="data-checked:underline">
  <!-- ... -->
</div>
```

--------------------------------

### Explicitly Exclude Classes in Tailwind CSS

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

Use @source not inline() to prevent specific classes from being generated, even if they are detected in source files. This example excludes red background utilities and their hover and focus variants.

```css
@import "tailwindcss";
@source not inline("{hover:,focus:,}bg-red-{50,{100..900..100},950}");
```

--------------------------------

### Responsive font-style with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/font-style

Apply font-style utilities responsively using breakpoint variants like md:. This example makes text italic by default and switches to normal style at medium screen sizes and above.

```html
<p class="italic md:not-italic ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Isolate mix-blend-mode effects in Tailwind CSS

Source: https://tailwindcss.com/docs/mix-blend-mode

This example illustrates how to use the `isolate` utility on a parent element to create a new stacking context. This prevents child elements from blending with content outside of the parent, ensuring their blend effects are contained within the isolated context.

```html
<div class="isolate flex justify-center -space-x-14">
  <div class="bg-yellow-500 mix-blend-multiply ..."></div>
  <div class="bg-green-500 mix-blend-multiply ..."></div>
</div><div class="flex justify-center -space-x-14">
  <div class="bg-yellow-500 mix-blend-multiply ..."></div>
  <div class="bg-green-500 mix-blend-multiply ..."></div>
</div>
```

--------------------------------

### Apply Custom Rotation with CSS Variables in Tailwind CSS

Source: https://tailwindcss.com/docs/rotate

This example shows how to use a CSS variable for rotation with the `rotate-(<custom-property>)` syntax. This is a shorthand for `rotate-[var(<custom-property>)]`, enabling dynamic rotation values defined elsewhere in CSS.

```html
<img class="rotate-(--my-rotation) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Responsive Underline Offset in Tailwind CSS

Source: https://tailwindcss.com/docs/text-underline-offset

This example illustrates how to apply a `text-underline-offset` utility conditionally at different screen sizes using responsive prefixes. By adding a breakpoint variant like `md:`, the utility `md:underline-offset-4` will only apply the specified offset on medium screens and above.

```html
<p class="underline md:underline-offset-4 ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Configure Tailwind CSS PostCSS plugin in JavaScript

Source: https://tailwindcss.com/docs/installation/using-postcss

This JavaScript configuration snippet for `postcss.config.mjs` adds `@tailwindcss/postcss` to your PostCSS plugins. This step ensures that Tailwind CSS processes your stylesheets during the build, enabling its utility-first approach.

```javascript
export default {  plugins: {    "@tailwindcss/postcss": {},  }}
```

--------------------------------

### Reset justify-content to normal with Tailwind CSS `justify-normal`

Source: https://tailwindcss.com/docs/justify-content

This example uses the `justify-normal` utility to reset the `justify-content` property to its default behavior. It packs content items in their default position, effectively removing any explicit `justify-content` alignment.

```html
<div class="flex justify-normal ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

--------------------------------

### Create visual effects with ::before pseudo-element

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use the `before` variant to create decorative background effects behind text. This example creates a skewed pink background behind the word 'annoyed' in a blockquote using absolute positioning and transform utilities.

```html
<blockquote class="text-center text-2xl font-semibold text-gray-900 italic dark:text-white">
  When you look
  <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
    <span class="relative text-white dark:text-gray-950">annoyed</span>
  </span>
  all the time, people think that you're busy.
</blockquote>
```

--------------------------------

### Responsive text-transform with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/text-transform

Use breakpoint variants like md: to apply text-transform utilities conditionally at specific screen sizes. This example capitalizes text on small screens and uppercases on medium screens and above.

```html
<p class="capitalize md:uppercase ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Configure Rspack to Use PostCSS Loader for CSS

Source: https://tailwindcss.com/docs/installation/framework-guides/rspack/react

Modifies the `rspack.config.ts` file to enable the PostCSS loader for processing CSS files. This ensures that PostCSS plugins, including Tailwind CSS, are applied during the Rspack build process.

```typescript
export default defineConfig({  // ...  module: {    rules: [      {        test: /\.css$/,        use: ["postcss-loader"],        type: "css",      },      // ...    ],  },})
```

--------------------------------

### Stacking Tailwind CSS Arbitrary and Built-in Variants

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Shows that arbitrary variants can be combined with built-in Tailwind CSS variants or other arbitrary variants for complex conditional styling. This example applies a `cursor-grabbing` style when an element with `is-dragging` is also in an active state.

```html
<ul role="list">
  {#each items as item}
    <li class="[&.is-dragging]:active:cursor-grabbing">{item}</li>
  {/each}
</ul>
```

--------------------------------

### Apply Responsive Grid Row Utilities with Tailwind CSS

Source: https://tailwindcss.com/docs/grid-template-rows

This example shows how to apply responsive grid row utilities in Tailwind CSS using breakpoint variants like `md:`. This allows the number of grid rows to change based on screen size, enabling adaptive layouts for different devices.

```html
<div class="grid grid-rows-2 md:grid-rows-6 ...">  <!-- ... --></div>
```

--------------------------------

### Apply `bg-auto` for default background image size in Tailwind CSS

Source: https://tailwindcss.com/docs/background-size

This example demonstrates how to use the `bg-auto` utility in Tailwind CSS to display a background image at its default size. It also sets the background position to center and prevents repetition.

```html
<div class="bg-[url(/img/mountains.jpg)] bg-auto bg-center bg-no-repeat"></div>
```

--------------------------------

### Set Percentage-Based Height with Tailwind CSS h-full and h-<fraction> Utilities

Source: https://tailwindcss.com/docs/height

This example illustrates how to set an element's height as a percentage of its parent using Tailwind CSS `h-full` or `h-<fraction>` utilities. These classes are ideal for responsive layouts where an element's height needs to scale relative to its container. Ensure the parent element has a defined height for these utilities to work effectively.

```html
<div class="h-full ...">h-full</div><div class="h-9/10 ...">h-9/10</div><div class="h-3/4 ...">h-3/4</div><div class="h-1/2 ...">h-1/2</div><div class="h-1/3 ...">h-1/3</div>
```

--------------------------------

### justify-self-end - Align grid item to inline end

Source: https://tailwindcss.com/docs/justify-self

Aligns a grid item to the end of its inline axis within the grid area. The justify-self-end-safe variant will align to the start if insufficient space is available to prevent overflow.

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-end ...">02</div>
  <!-- ... -->
</div>
```

```html
<div class="grid justify-items-stretch ...">
  <!-- ... -->
  <div class="justify-self-end-safe ...">02</div>
  <!-- ... -->
</div>
```

--------------------------------

### Apply min-height with percentage-based utilities in HTML

Source: https://tailwindcss.com/docs/min-height

Use min-h-full or min-h-<fraction> utilities like min-h-1/2, min-h-3/4, and min-h-9/10 to set percentage-based minimum heights. These utilities calculate the minimum height as a fraction of 100%.

```html
<div class="min-h-full ...">min-h-full</div>
<div class="min-h-9/10 ...">min-h-9/10</div>
<div class="min-h-3/4 ...">min-h-3/4</div>
<div class="min-h-1/2 ...">min-h-1/2</div>
<div class="min-h-1/3 ...">min-h-1/3</div>
```

--------------------------------

### Responsive background-repeat with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/background-repeat

Apply different background-repeat utilities at different screen sizes using breakpoint variants like md:. This example repeats the background on all sizes but switches to horizontal-only repeat at medium screens and above.

```html
<div class="bg-repeat md:bg-repeat-x ...">  <!-- ... --></div>
```

--------------------------------

### Reference Global Styles in CSS Modules for Tailwind @apply

Source: https://tailwindcss.com/docs/compatibility

This snippet demonstrates how to explicitly import global styles (e.g., `app.css`) into a CSS module (`Button.module.css`) using `@reference`. This is necessary to ensure that Tailwind's `@apply` directive can access globally defined theme variables, as CSS modules are processed in isolation.

```css
@reference "../app.css";
button {  @apply bg-blue-500;}
```

--------------------------------

### Apply Y-axis Translation in Tailwind CSS

Source: https://tailwindcss.com/docs/translate

This snippet demonstrates how to translate an HTML element specifically along the y-axis using Tailwind CSS utility classes. Examples are provided for both spacing scale numbers and percentage values.

```html
<img class="-translate-y-4 ..." src="/img/mountains.jpg" /><img class="translate-y-2 ..." src="/img/mountains.jpg" /><img class="translate-y-1/2 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Set Content for Pseudo-elements with Tailwind CSS

Source: https://tailwindcss.com/docs/content

Demonstrates using the `content-[<value>]` syntax with `before:` and `after:` variants to set static text content for `::before` and `::after` pseudo-elements in HTML.

```html
<p>Higher resolution means more than just a better-quality image. With aRetina 6K display, <a class="text-blue-600 after:content-['_↗']" href="...">Pro Display XDR</a> gives you nearly 40 percent more screen real estate thana 5K display.</p>
```

--------------------------------

### Apply Arbitrary Values with Responsive Modifiers in Tailwind CSS HTML

Source: https://tailwindcss.com/docs/adding-custom-styles

Shows how to combine arbitrary values with Tailwind's responsive modifiers. This example demonstrates applying different arbitrary `top` values based on screen sizes, such as `lg:top-[344px]`.

```html
<div class="top-[117px] lg:top-[344px]">
  <!-- ... -->
</div>
```

--------------------------------

### Align items to the cross-end with items-end in HTML

Source: https://tailwindcss.com/docs/align-items

This example uses the `items-end` utility to align flex items to the end of the container's cross axis. This positions content at the bottom in a column layout or right in a row layout.

```html
<div class="flex items-end ...">  <div class="py-4">01</div>  <div class="py-12">02</div>  <div class="py-8">03</div></div>
```

--------------------------------

### Update Grid and Object-Position Arbitrary Values - HTML

Source: https://tailwindcss.com/docs/upgrade-guide

Replace commas with underscores in grid-cols-*, grid-rows-*, and object-* utilities to represent spaces. Comma replacement for space compatibility with v2 is no longer supported in v4.

```html
<div class="grid-cols-[max-content_auto]"></div>
```

--------------------------------

### Use CSS Variables for Saturation with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-saturate

This example shows how to dynamically apply saturation using a CSS custom property with Tailwind CSS's `saturate-(<custom-property>)` syntax. This shorthand automatically wraps the custom property in `var()` for flexible styling.

```html
<img class="saturate-(--my-saturation) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Logical text alignment with text-start and text-end utilities

Source: https://tailwindcss.com/docs/text-align

Apply logical text alignment using text-start and text-end utilities, which automatically map to left or right based on text direction. Useful for multilingual content and RTL (right-to-left) languages like Arabic.

```html
<div dir="rtl" lang="ar">
  <p class="text-end">فبدأت بالسير نحو الماء...</p>
</div>
```

--------------------------------

### Style Details Elements in Open State

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use the open variant to conditionally apply styles when a <details> or <dialog> element is in an open state. This example applies border and background styles when the details element is open.

```html
<details class="border border-transparent open:border-black/10 open:bg-gray-100 ..." open>
  <summary class="text-sm leading-6 font-semibold text-gray-900 select-none">Why do they call it Ovaltine?</summary>
  <div class="mt-3 text-sm leading-6 text-gray-600">
    <p>The mug is round. The jar is round. They should call it Roundtine.</p>
  </div>
</details>
```

--------------------------------

### Set custom border width with bracket notation

Source: https://tailwindcss.com/docs/border-width

Use the border-[<value>] syntax to apply a completely custom border width value that isn't available in the default Tailwind scale. This example sets a border width of 2vw.

```html
<div class="border-[2vw] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Combine Multiple Numeric Font Variants with Tailwind CSS

Source: https://tailwindcss.com/docs/font-variant-numeric

The `font-variant-numeric` utilities are composable, allowing you to combine multiple variants for specific typographic needs. This example demonstrates using `slashed-zero` and `tabular-nums` together for financial figures.

```html
<dl class="...">  <dt class="...">Subtotal</dt>  <dd class="text-right slashed-zero tabular-nums ...">$100.00</dd>  <dt class="...">Tax</dt>  <dd class="text-right slashed-zero tabular-nums ...">$14.50</dd>  <dt class="...">Total</dt>  <dd class="text-right slashed-zero tabular-nums ...">$114.50</dd></dl>
```

--------------------------------

### Configure Tailwind CSS Vite Plugin in nuxt.config.ts

Source: https://tailwindcss.com/docs/installation/framework-guides/nuxt

This configuration snippet adds the `@tailwindcss/vite` plugin to the `vite.plugins` array within your `nuxt.config.ts` file. It ensures that Tailwind CSS is properly recognized and processed by Vite, which Nuxt uses for its build system, allowing for correct compilation of Tailwind utilities.

```typescript
import tailwindcss from "@tailwindcss/vite";export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
```

--------------------------------

### Style Elements Based on Data Attribute Existence

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use the data-* variant to apply styles when a data attribute exists, regardless of its value. This example applies a purple border when the data-active attribute is present on an element.

```html
<!-- Will apply -->
<div data-active class="border border-gray-300 data-active:border-purple-500">
  <!-- ... -->
</div>
<!-- Will not apply -->
<div class="border border-gray-300 data-active:border-purple-500">
  <!-- ... -->
</div>
```

--------------------------------

### Apply filter utilities on hover state

Source: https://tailwindcss.com/docs/filter

Demonstrates using the hover: variant prefix with filter utilities to conditionally apply filters only when an element is hovered. This example removes filters on hover using the hover:filter-none utility.

```html
<img class="blur-sm hover:filter-none ..." src="/img/mountains.jpg" />
```

--------------------------------

### Use a custom aspect ratio utility defined in Tailwind CSS theme

Source: https://tailwindcss.com/docs/aspect-ratio

Shows how to apply a custom aspect ratio utility, previously defined in the Tailwind CSS theme, to an HTML element. This example uses the `aspect-retro` utility on an `<iframe>` to apply the custom 4/3 ratio.

```html
<iframe class="aspect-retro" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

--------------------------------

### Remove Mask Image with Tailwind CSS `mask-none` Utility

Source: https://tailwindcss.com/docs/mask-image

This example illustrates the use of the `mask-none` utility to effectively remove any existing mask image from an HTML element. This is useful for resetting or conditionally removing mask effects.

```html
<div class="mask-none">  <!-- ... --></div>
```

--------------------------------

### Add borders between child elements with divide utilities

Source: https://tailwindcss.com/docs/border-width

Use divide-x and divide-y utilities to add borders between child elements in a grid or flex layout. The example shows a 3-column grid with vertical dividers using divide-x-4.

```html
<div class="grid grid-cols-3 divide-x-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

--------------------------------

### Apply directional border radius (start) with Tailwind CSS

Source: https://tailwindcss.com/docs/border-radius

Tailwind CSS utilities for applying border-radius to start-side corners (logical direction). Supports predefined scales, custom properties, and arbitrary values for inline-start and block-start corners.

```css
/* Start-side directional radius */
.rounded-s-xs { border-start-start-radius: var(--radius-xs); /* 0.125rem (2px) */ border-end-start-radius: var(--radius-xs); /* 0.125rem (2px) */ }
.rounded-s-sm { border-start-start-radius: var(--radius-sm); /* 0.25rem (4px) */ border-end-start-radius: var(--radius-sm); /* 0.25rem (4px) */ }
.rounded-s-md { border-start-start-radius: var(--radius-md); /* 0.375rem (6px) */ border-end-start-radius: var(--radius-md); /* 0.375rem (6px) */ }
.rounded-s-lg { border-start-start-radius: var(--radius-lg); /* 0.5rem (8px) */ border-end-start-radius: var(--radius-lg); /* 0.5rem (8px) */ }
.rounded-s-xl { border-start-start-radius: var(--radius-xl); /* 0.75rem (12px) */ border-end-start-radius: var(--radius-xl); /* 0.75rem (12px) */ }
.rounded-s-2xl { border-start-start-radius: var(--radius-2xl); /* 1rem (16px) */ border-end-start-radius: var(--radius-2xl); /* 1rem (16px) */ }
.rounded-s-3xl { border-start-start-radius: var(--radius-3xl); /* 1.5rem (24px) */ border-end-start-radius: var(--radius-3xl); /* 1.5rem (24px) */ }
.rounded-s-4xl { border-start-start-radius: var(--radius-4xl); /* 2rem (32px) */ border-end-start-radius: var(--radius-4xl); /* 2rem (32px) */ }
.rounded-s-none { border-start-start-radius: 0; border-end-start-radius: 0; }
.rounded-s-full { border-start-start-radius: calc(infinity * 1px); border-end-start-radius: calc(infinity * 1px); }
.rounded-s-(<custom-property>) { border-start-start-radius: var(<custom-property>); border-end-start-radius: var(<custom-property>); }
.rounded-s-[<value>] { border-start-start-radius: <value>; border-end-start-radius: <value>; }
```

--------------------------------

### Specify column gap with Tailwind CSS

Source: https://tailwindcss.com/docs/columns

This example illustrates how to use `gap-<width>` utilities in conjunction with column utilities to specify the spacing between columns in Tailwind CSS. This allows for precise control over the visual separation of content. Input is an HTML `div` with both `columns-<number>` and `gap-<width>` classes, producing a multi-column layout with defined spacing.

```html
<div class="columns-3 gap-8 ...">  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />  <img class="aspect-square ..." src="/img/mountains-2.jpg" />  <img class="aspect-square ..." src="/img/mountains-3.jpg" />  <!-- ... --></div>
```

--------------------------------

### Preventing Flex Items from Growing with Tailwind CSS `grow-0` Utility

Source: https://tailwindcss.com/docs/flex-grow

This example demonstrates how to use the `grow-0` utility in Tailwind CSS to explicitly prevent a flex item from growing, even when other items are allowed to expand. It ensures that the specified item maintains its initial size.

```html
<div class="flex ...">  <div class="size-14 grow ...">01</div>  <div class="size-14 grow-0 ...">02</div>  <div class="size-14 grow ...">03</div></div>
```

--------------------------------

### Replace pseudo-elements with real HTML elements for simplicity

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use actual HTML elements instead of ::before and ::after pseudo-elements for better readability and less code. This example achieves the same visual effect as the pseudo-element version but with explicit span elements.

```html
<blockquote class="text-center text-2xl font-semibold text-gray-900 italic">
  When you look
  <span class="relative">
    <span class="absolute -inset-1 block -skew-y-3 bg-pink-500" aria-hidden="true"></span>
    <span class="relative text-white">annoyed</span>
  </span>
  all the time, people think that you're busy.
</blockquote>
```

--------------------------------

### Import Tailwind CSS and configure source in app.css

Source: https://tailwindcss.com/docs/installation/framework-guides/symfony

Adds an `@import` statement to `app.css` to include Tailwind CSS. The `@source not "../../public";` directive is used to prevent recompilation loops in watch mode by ignoring the public directory.

```css
@import "tailwindcss";@source not "../../public";
```

--------------------------------

### Implement Subgrid with Tailwind CSS `grid-rows-subgrid`

Source: https://tailwindcss.com/docs/grid-template-rows

This example shows how to use the `grid-rows-subgrid` utility in Tailwind CSS to make a nested grid item adopt the row tracks defined by its parent. This allows for more complex grid layouts where child elements align with the parent's grid.

```html
<div class="grid grid-flow-col grid-rows-4 gap-4">  <div>01</div>  <!-- ... -->  <div>05</div>  <div class="row-span-3 grid grid-rows-subgrid gap-4">    <div class="row-start-2">06</div>  </div>  <div>07</div>  <!-- ... -->  <div>10</div></div>
```

--------------------------------

### Responsive line-height with breakpoint variants in Tailwind CSS

Source: https://tailwindcss.com/docs/line-height

Prefix line-height utilities with breakpoint variants like md: to apply different line heights at specific screen sizes. This example uses leading-5 on mobile and leading-6 on medium screens and above.

```html
<p class="leading-5 md:leading-6 ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Styling a basic card component with Tailwind CSS

Source: https://tailwindcss.com/docs/styling-with-utility-classes

This HTML snippet demonstrates how to create a simple card component using various Tailwind CSS utility classes. It showcases layout, sizing, background, shadow, and text styling for a 'ChitChat' message card, including dark mode support.

```html
<div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">  <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />  <div>    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>  </div></div>
```

--------------------------------

### Apply justify-items-start to grid items in HTML

Source: https://tailwindcss.com/docs/justify-items

This snippet demonstrates how to use the `justify-items-start` utility class in Tailwind CSS to align grid items to the start of their inline axis. It applies the class to a `div` element acting as a grid container, with child `div` elements as grid items.

```html
<div class="grid justify-items-start ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div>  <div>05</div>  <div>06</div></div>
```

--------------------------------

### Apply responsive `overflow-wrap` utilities in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/overflow-wrap

Demonstrates how to use responsive prefixes like `md:` to apply `overflow-wrap` utilities conditionally based on screen size. This allows for different text wrapping behaviors at various breakpoints, enhancing responsive design.

```html
<p class="wrap-normal md:wrap-break-word ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Style ::before and ::after pseudo-elements

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use `before` and `after` variants to style pseudo-elements. Tailwind automatically adds `content: ''` by default. This example shows adding a required asterisk to a label using the `after` variant with custom content.

```html
<label>
  <span class="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">
    Email
  </span>
  <input type="email" name="email" class="..." placeholder="you@example.com" />
</label>
```

--------------------------------

### Reference Global Styles in Vue/Svelte/Astro Components for Tailwind @apply

Source: https://tailwindcss.com/docs/compatibility

This code illustrates how to import global styles (e.g., `app.css`) into a scoped style block within a Vue component (also applicable to Svelte and Astro) using `@reference`. This ensures that Tailwind's `@apply` directive can correctly access globally defined theme variables, addressing context sharing limitations in component-scoped styles.

```vue
<template>
  <button><slot /></button>
</template>
<style scoped>
  @reference "../app.css";
  button {
    @apply bg-blue-500;
  }
</style>
```

--------------------------------

### Apply responsive list-style-type utilities with breakpoint variants

Source: https://tailwindcss.com/docs/list-style-type

Use breakpoint prefixes like md: to apply list-style-type utilities conditionally at specific screen sizes. This example removes list markers on small screens and displays disc markers at medium screen sizes and above.

```html
<ul class="list-none md:list-disc ...">
  <!-- ... -->
</ul>
```

--------------------------------

### Using Custom Shrink Values with Tailwind CSS

Source: https://tailwindcss.com/docs/flex-shrink

Shows how to apply a custom `flex-shrink` value using arbitrary values like `calc()` with the `shrink-[<value>]` syntax in Tailwind CSS, providing fine-grained control over item shrinking behavior.

```html
<div class="shrink-[calc(100vw-var(--sidebar))] ...">  <!-- ... --></div>
```

--------------------------------

### Update Transform Transitions - HTML

Source: https://tailwindcss.com/docs/upgrade-guide

Include individual transform properties (rotate, scale, translate) in custom transition lists instead of the generic transform property. Utilities will no longer transition if only transform is specified.

```html
<button class="transition-[opacity,scale] hover:scale-150"></button>
```

--------------------------------

### Upgrade Tailwind CSS Project using `npx @tailwindcss/upgrade`

Source: https://tailwindcss.com/docs/upgrade-guide

This command executes the Tailwind CSS upgrade tool, automating the migration of projects from v3 to v4. It handles dependency updates, configuration file migration, and template file changes. Requires Node.js 20 or higher and should be run in a new branch for safe review.

```bash
npx @tailwindcss/upgrade
```

--------------------------------

### Allowing text to wrap with Tailwind CSS `text-wrap`

Source: https://tailwindcss.com/docs/text-wrap

This example demonstrates the use of the `text-wrap` utility class to allow text to wrap onto multiple lines. It ensures that overflowing text breaks at logical points, fitting within its container. This is the default browser behavior but can be explicitly set.

```html
<article class="text-wrap">  <h3>Beloved Manhattan soup stand closes</h3>  <p>New Yorkers are facing the winter chill...</p></article>
```

--------------------------------

### Apply fixed field sizing with Tailwind CSS

Source: https://tailwindcss.com/docs/field-sizing

This example shows how to use the `field-sizing-fixed` utility class to maintain a constant size for a `<textarea>` element, regardless of its content. It also combines it with a `w-80` class for a specific width. This is useful when you need consistent layout and prevent elements from resizing unexpectedly.

```html
<textarea class="field-sizing-fixed w-80 ..." rows="2">  Latex Salesman, Vanderlay Industries</textarea>
```

--------------------------------

### Overriding Block Display for Images with Tailwind CSS Utility

Source: https://tailwindcss.com/docs/preflight

This HTML example demonstrates how to override Preflight's default `display: block` for images. By adding the `inline` utility class, an image can be explicitly set to `display: inline`, allowing for different layout behaviors.

```html
<img class="inline" src="..." alt="..." />
```

--------------------------------

### Configure Vite plugin for Tailwind CSS in SolidJS `vite.config.ts`

Source: https://tailwindcss.com/docs/installation/framework-guides/solidjs

Modifies the `vite.config.ts` file to include the `@tailwindcss/vite` plugin, enabling Tailwind CSS processing within the Vite build pipeline. It also configures the SolidJS plugin and server settings for development.

```TypeScript
import { defineConfig } from 'vite';import solidPlugin from 'vite-plugin-solid';import tailwindcss from '@tailwindcss/vite';export default defineConfig({
  plugins: [
    tailwindcss(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
```

--------------------------------

### Specify Grid Rows with Tailwind CSS `grid-rows-<number>`

Source: https://tailwindcss.com/docs/grid-template-rows

This example demonstrates how to use Tailwind CSS `grid-rows-<number>` utilities to create a grid with a specified number of equally sized rows. The `grid-rows-4` class sets up a grid with four rows.

```html
<div class="grid grid-flow-col grid-rows-4 gap-4">  <div>01</div>  <!-- ... -->  <div>09</div></div>
```

--------------------------------

### Use Simple Custom Utilities in HTML (HTML)

Source: https://tailwindcss.com/docs/adding-custom-styles

Shows how to apply a custom utility class, defined with `@utility`, directly in HTML. These custom utilities behave like built-in Tailwind utilities and can be combined with variants.

```html
<div class="content-auto">  <!-- ... --></div>
```

--------------------------------

### Implement Responsive Grid Column Spanning with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/grid-column

Explains how to make grid column utilities responsive using breakpoint variants like `md:` in Tailwind CSS. This example shows an element spanning 2 columns by default and 6 columns on medium screens and above, adapting layout to different screen sizes for optimal user experience.

```html
<div class="col-span-2 md:col-span-6 ...">
  <!-- ... --></div>
```

--------------------------------

### Apply responsive mask-origin with breakpoint variants

Source: https://tailwindcss.com/docs/mask-origin

Use breakpoint prefixes like md: to apply mask-origin utilities conditionally at specific screen sizes. This example applies mask-origin-border by default and switches to mask-origin-padding at medium screen sizes and above.

```html
<div class="mask-origin-border md:mask-origin-padding ...">  <!-- ... --></div>
```

--------------------------------

### Apply X-axis Translation in Tailwind CSS

Source: https://tailwindcss.com/docs/translate

This snippet shows how to translate an HTML element specifically along the x-axis using Tailwind CSS utility classes. It includes examples using both spacing scale numbers and percentage values.

```html
<img class="-translate-x-4 ..." src="/img/mountains.jpg" /><img class="translate-x-2 ..." src="/img/mountains.jpg" /><img class="translate-x-1/2 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Repeated Avatar List with Utility Classes in HTML

Source: https://tailwindcss.com/docs/styling-with-utility-classes

HTML markup showing a contributors section with multiple avatar images using repeated Tailwind utility classes. Demonstrates the duplication problem when the same utility class patterns appear multiple times in static markup.

```html
<div>
  <div class="flex items-center space-x-2 text-base">
    <h4 class="font-semibold text-slate-900">Contributors</h4>
    <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
  </div>
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
  </div>
  <div class="mt-3 text-sm font-medium">
    <a href="#" class="text-blue-500">+ 198 others</a>
  </div>
</div>
```

--------------------------------

### Style Elements Based on Data Attribute Values

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use arbitrary data-* variants with square brackets to apply styles based on specific data attribute values. This example applies padding-8 only when data-size equals 'large'.

```html
<!-- Will apply -->
<div data-size="large" class="data-[size=large]:p-8">
  <!-- ... -->
</div>
<!-- Will not apply -->
<div data-size="medium" class="data-[size=large]:p-8">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Numeric Text Decoration Thickness with Tailwind CSS

Source: https://tailwindcss.com/docs/text-decoration-thickness

This example demonstrates how to use Tailwind CSS `decoration-<number>` utilities to set a fixed pixel thickness for text decorations. It shows `decoration-1`, `decoration-2`, and `decoration-4` classes applied to `underline` elements.

```html
<p class="underline decoration-1">The quick brown fox...</p><p class="underline decoration-2">The quick brown fox...</p><p class="underline decoration-4">The quick brown fox...</p>
```

--------------------------------

### Responsive font-smoothing with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/font-smoothing

Combine font-smoothing utilities with breakpoint variants like md: to apply different antialiasing at specific screen sizes. This example uses antialiased on mobile and switches to subpixel-antialiased at medium breakpoint and above.

```html
<p class="antialiased md:subpixel-antialiased ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply responsive isolation utility with breakpoint variant

Source: https://tailwindcss.com/docs/isolation

Use the `md:isolation-auto` responsive variant to apply the isolation utility only at medium screen sizes and above. This allows different stacking context behavior at different breakpoints, enabling responsive design patterns.

```html
<div class="isolate md:isolation-auto">  <!-- ... --></div>
```

--------------------------------

### Configure Vite to use Tailwind CSS and React Router plugins

Source: https://tailwindcss.com/docs/installation/framework-guides/react-router

This configuration file (`vite.config.ts`) integrates the `@tailwindcss/vite` and `@react-router/dev/vite` plugins into the Vite build process. It ensures that both Tailwind CSS processing and React Router development tools are properly set up for the project.

```typescript
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
});
```

--------------------------------

### Tailwind important modifier for forcing utility class precedence

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Shows how to use the ! suffix on Tailwind utility classes to force them to take effect by adding !important to the CSS declaration. This example demonstrates bg-red-500! overriding bg-teal-500 through increased specificity.

```html
<div class="bg-teal-500 bg-red-500!">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Basic Text Decoration Colors with Tailwind CSS

Source: https://tailwindcss.com/docs/text-decoration-color

This example demonstrates how to use standard Tailwind CSS color utilities like `decoration-sky-500` and `decoration-pink-500` to set the text decoration color for `<a>` elements. These classes apply predefined colors from the Tailwind palette to the `text-decoration-color` CSS property.

```html
<p>  I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings  at <a class="underline decoration-sky-500">My Company, Inc</a>. Outside  of work, I like to <a class="underline decoration-pink-500">watch pod-racing</a>  and have <a class="underline decoration-indigo-500">light-saber</a> fights.</p>
```

--------------------------------

### Control Column/Page Breaks with Tailwind CSS `break-before` Utilities

Source: https://tailwindcss.com/docs/break-before

This example demonstrates how to use Tailwind CSS `break-before-column` to force a column break before a specific paragraph within a multi-column layout. It shows the application of `break-before` utilities to manage content flow in a columnar structure.

```html
<div class="columns-2">  <p>Well, let me tell you something, ...</p>  <p class="break-before-column">Sure, go ahead, laugh...</p>  <p>Maybe we can live without...</p>  <p>Look. If you think this is...</p></div>
```

--------------------------------

### Apply contrast filter using CSS custom properties

Source: https://tailwindcss.com/docs/filter-contrast

Use the contrast-(<custom-property>) syntax as shorthand for contrast-[var(<custom-property>)] to reference CSS variables. This automatically wraps the custom property in the var() function.

```html
<img class="contrast-(--my-contrast) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Import Tailwind CSS and Configure Source Scanning

Source: https://tailwindcss.com/docs/installation/framework-guides/adonisjs

Add @import directive to import Tailwind CSS styles and use @source directive to specify the views directory for utility class scanning. This enables Tailwind to detect and generate only used utility classes.

```css
@import "tailwindcss";
@source "../views";
```

--------------------------------

### Apply Responsive Flex Wrap Utilities with Tailwind CSS

Source: https://tailwindcss.com/docs/flex-wrap

Implement responsive design by prefixing `flex-wrap` utilities with breakpoint variants like `md:`. This allows you to apply different wrapping behaviors based on screen sizes, for example, `flex-wrap` by default and `flex-wrap-reverse` on medium screens and above.

```html
<div class="flex flex-wrap md:flex-wrap-reverse ...">  <!-- ... --></div>
```

--------------------------------

### Apply Custom Rotation Values with Tailwind CSS

Source: https://tailwindcss.com/docs/rotate

This example demonstrates setting a custom rotation value using Tailwind CSS's arbitrary value syntax `rotate-[<value>]`. This allows for precise control over rotation, accepting any valid CSS rotation unit like radians.

```html
<img class="rotate-[3.142rad] ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Negative 2D Rotations with Tailwind CSS

Source: https://tailwindcss.com/docs/rotate

This example shows how to apply counter-clockwise 2D rotations to image elements using Tailwind CSS `-rotate-<number>` utilities. These classes rotate an element in the opposite direction by the specified degrees.

```html
<img class="-rotate-45 ..." src="/img/mountains.jpg" /><img class="-rotate-90 ..." src="/img/mountains.jpg" /><img class="-rotate-210 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Styles Based on CSS Property Support Shorthand (Tailwind CSS HTML)

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This example demonstrates a shorthand for the `supports-[...]` variant, where only the CSS property name is specified to check for its support. This is useful for applying styles like `backdrop-filter` only when the browser supports it, providing a fallback otherwise.

```html
<div class="bg-black/75 supports-backdrop-filter:bg-black/25 supports-backdrop-filter:backdrop-blur ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Image Mask with Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

Use the mask-[<value>] syntax to set a custom mask image on an element. This example demonstrates applying a PNG mask image to an element with a background image, creating a masked visual effect.

```html
<div class="mask-[url(/img/scribble.png)] bg-[url(/img/mountains.jpg)] ...">  <!-- ... --></div>
```

--------------------------------

### Conditionally restoring pointer events in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/pointer-events

This example illustrates how to use Tailwind CSS responsive utilities to conditionally restore pointer events. An element is initially set to `pointer-events-none`, but `md:pointer-events-auto` overrides this behavior on medium screens and above, allowing interaction based on viewport size.

```html
<div class="pointer-events-none md:pointer-events-auto ...">  <!-- ... --></div>
```

--------------------------------

### Apply 2D Translation with Spacing Scale in Tailwind CSS

Source: https://tailwindcss.com/docs/translate

This snippet demonstrates how to apply 2D translation to an HTML element using Tailwind CSS utility classes based on the configured spacing scale. It shows examples of negative and positive translations on both axes.

```html
<img class="-translate-6 ..." src="/img/mountains.jpg" /><img class="translate-2 ..." src="/img/mountains.jpg" /><img class="translate-8 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Import Tailwind CSS and configure content scanning

Source: https://tailwindcss.com/docs/installation/framework-guides/laravel/mix

Add Tailwind CSS import and @source directives to your main CSS file to enable Tailwind to scan your project files for utility class usage. This ensures only used styles are included in the final CSS output.

```css
@import "tailwindcss";
@source '../../vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php';
@source '../../storage/framework/views/*.php';
@source '../**/*.blade.php';
@source '../**/*.js';
```

--------------------------------

### Apply responsive flex-basis utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-basis

Shows how to apply responsive `flex-basis` utilities using breakpoint variants like `md:`. This allows the initial size of flex items to change based on screen size, adapting for different viewports.

```html
<div class="flex flex-row">  <div class="basis-1/4 md:basis-1/3">01</div>  <div class="basis-1/4 md:basis-1/3">02</div>  <div class="basis-1/2 md:basis-1/3">03</div></div>
```

--------------------------------

### Apply Responsive `break-before` Utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/break-before

This example illustrates how to apply `break-before` utilities conditionally based on screen size using Tailwind CSS responsive variants. The `md:break-before-auto` class ensures that a column break is automatically handled on medium screens and above, overriding any default or smaller-screen `break-before-column` behavior.

```html
<div class="break-before-column md:break-before-auto ...">  <!-- ... --></div>
```

--------------------------------

### Apply Basic Underline Offset in Tailwind CSS

Source: https://tailwindcss.com/docs/text-underline-offset

This example demonstrates how to use predefined `underline-offset-<number>` utilities like `underline-offset-1`, `underline-offset-2`, `underline-offset-4`, and `underline-offset-8` to control the offset of a text underline in HTML. These classes apply a fixed pixel offset to the underline.

```html
<p class="underline underline-offset-1">The quick brown fox...</p><p class="underline underline-offset-2">The quick brown fox...</p><p class="underline underline-offset-4">The quick brown fox...</p><p class="underline underline-offset-8">The quick brown fox...</p>
```

--------------------------------

### Incorrect Dynamic Class Name Construction in HTML

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

This HTML example shows an incorrect way to construct class names dynamically. Tailwind cannot detect partial class names like `text-{{ error ? 'red' : 'green' }}-600` because it scans for complete, static class strings, not parsed logic.

```html
<div class="text-{{ error ? 'red' : 'green' }}-600"></div>
```

--------------------------------

### break-after Responsive Design with Breakpoint Variant

Source: https://tailwindcss.com/docs/break-after

Shows how to apply break-after utilities responsively using breakpoint prefixes. The md: prefix applies break-after-auto only at medium screen sizes and above, while break-after-column applies at all screen sizes.

```html
<div class="break-after-column md:break-after-auto ...">
  <!-- ... -->
</div>
```

--------------------------------

### Use custom Tailwind CSS column utility in HTML

Source: https://tailwindcss.com/docs/columns

This example shows how to apply a custom column utility, previously defined in the Tailwind CSS theme configuration, to an HTML element. This demonstrates the integration of custom theme settings into the markup. Input is an HTML `div` with the custom `columns-4xs` class, applying the custom column width.

```html
<div class="columns-4xs">  <!-- ... --></div>
```

--------------------------------

### Bottom Mask Gradient From Utilities - Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

Utilities for controlling the starting point of bottom-to-transparent mask gradients. Supports percentage values, color definitions, custom properties, and arbitrary values to create fade effects from the bottom of elements.

```css
/* mask-b-from-<percentage> */
mask-image: linear-gradient(to bottom, black <percentage>, transparent var(--tw-mask-bottom-to));

/* mask-b-from-<color> */
mask-image: linear-gradient(to bottom, <color> var(--tw-mask-bottom-from), transparent var(--tw-mask-bottom-to));

/* mask-b-from-(<custom-property>) */
mask-image: linear-gradient(to bottom, black var(<custom-property>), transparent var(--tw-mask-bottom-to));

/* mask-b-from-[<value>] */
mask-image: linear-gradient(to bottom, black <value>, transparent var(--tw-mask-bottom-to));
```

--------------------------------

### Apply Basic Backdrop Opacity Filters with Tailwind CSS

Source: https://tailwindcss.com/docs/backdrop-filter-opacity

Demonstrates how to use basic Tailwind CSS `backdrop-opacity-<number>` utilities to control the opacity of backdrop filters on elements. This example applies different opacity levels (10, 60, 95) to elements with a `backdrop-invert` filter and a background image.

```html
<div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-invert backdrop-opacity-10 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-invert backdrop-opacity-60 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-invert backdrop-opacity-95 ..."></div></div>
```

--------------------------------

### Apply custom mask-size value in HTML

Source: https://tailwindcss.com/docs/mask-size

Demonstrates how to use the arbitrary value syntax `mask-size-[<value>]` in HTML to set a mask image size with a completely custom value, such as `auto 100px`.

```html
<div class="mask-size-[auto_100px] ...">  <!-- ... --></div>
```

--------------------------------

### Apply Basic Backdrop Invert Filters with Tailwind CSS

Source: https://tailwindcss.com/docs/backdrop-filter-invert

This example demonstrates the fundamental usage of Tailwind CSS `backdrop-invert` utilities. It shows how to apply no inversion (`backdrop-invert-0`), partial inversion (`backdrop-invert-65`), and full inversion (`backdrop-invert`) to an element's backdrop, typically used with a semi-transparent background.

```html
<div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-invert-0 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-invert-65 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-invert ..."></div></div>
```

--------------------------------

### Apply Responsive Box Shadows in Tailwind CSS

Source: https://tailwindcss.com/docs/box-shadow

This snippet demonstrates how to apply box shadow utilities conditionally based on screen size using responsive variants. For example, `md:shadow-lg` applies a large shadow only at medium screen sizes and above, overriding `shadow-none`.

```html
<div class="shadow-none md:shadow-lg ...">  <!-- ... --></div>
```

--------------------------------

### Apply Responsive Content Utilities with Tailwind CSS

Source: https://tailwindcss.com/docs/content

Shows how to use responsive variants like `md:` with `content` utilities to apply different content values to pseudo-elements based on specific screen sizes and breakpoints.

```html
<p class="before:content-['Mobile'] md:before:content-['Desktop'] ..."></p>
```

--------------------------------

### Distribute rows with space between using Tailwind CSS

Source: https://tailwindcss.com/docs/align-content

This example demonstrates the `content-between` utility class in Tailwind CSS to distribute rows in a container, creating equal space between each line. This class applies the CSS property `align-content: space-between;` to the container.

```html
<div class="grid h-56 grid-cols-3 content-between gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div>  <div>05</div></div>
```

--------------------------------

### Bundle CSS imports with Tailwind

Source: https://tailwindcss.com/docs/compatibility

Demonstrates how Tailwind automatically bundles CSS files included with @import statements without requiring separate preprocessing tools like Sass or postcss-import. The typography.css file is automatically included in the compiled output.

```css
@import "tailwindcss";
@import "./typography.css";
```

--------------------------------

### Use Custom Theme Color in Tailwind CSS Mask Utility

Source: https://tailwindcss.com/docs/mask-image

This example demonstrates how to apply a mask utility using a custom color variable previously defined in the theme. Once `--color-regal-blue` is set, utilities like `mask-radial-from-regal-blue` can be directly used in HTML.

```html
<div class="mask-radial-from-regal-blue">  <!-- ... --></div>
```

--------------------------------

### Set custom transition duration values with Tailwind CSS arbitrary values

Source: https://tailwindcss.com/docs/transition-duration

This example illustrates using arbitrary value syntax `duration-[<value>]` to apply highly specific or multiple transition durations. The `duration-[1s,15s]` class directly sets the `transition-duration` CSS property to `1s, 15s`, allowing for flexible control beyond predefined scales.

```html
<button class="duration-[1s,15s] ...">  <!-- ... --></button>
```

--------------------------------

### Apply responsive marker image with breakpoint variant

Source: https://tailwindcss.com/docs/list-style-image

Prefix the list-image utility with a breakpoint variant like md: to conditionally apply the marker image only at specific screen sizes. This example removes the marker image by default and adds a checkmark image at medium screen sizes and above.

```html
<ul class="list-image-none md:list-image-[url(/img/checkmark.png)] ...">
  <!-- ... -->
</ul>
```

--------------------------------

### Set Percentage-Based Maximum Height with Tailwind CSS

Source: https://tailwindcss.com/docs/max-height

This HTML example illustrates how to use Tailwind CSS `max-h-<fraction>` utilities to apply percentage-based maximum heights to elements. It shows various fractional values like `max-h-1/2` and `max-h-3/4`, along with `max-h-full`, within a parent container.

```html
<div class="h-96 ...">  <div class="h-full max-h-9/10 ...">max-h-9/10</div>  <div class="h-full max-h-3/4 ...">max-h-3/4</div>  <div class="h-full max-h-1/2 ...">max-h-1/2</div>  <div class="h-full max-h-1/4 ...">max-h-1/4</div>  <div class="h-full max-h-full ...">max-h-full</div></div>
```

--------------------------------

### Set Custom Grid Row Values with Tailwind CSS `grid-rows-[<value>]`

Source: https://tailwindcss.com/docs/grid-template-rows

This example illustrates how to use the `grid-rows-[<value>]` syntax in Tailwind CSS to define grid rows with completely custom sizes. This allows for flexible grid layouts beyond the predefined number-based utilities.

```html
<div class="grid-rows-[200px_minmax(900px,1fr)_100px] ...">  <!-- ... --></div>
```

--------------------------------

### Remove default CSS import from Phoenix JavaScript

Source: https://tailwindcss.com/docs/installation/framework-guides/phoenix

Remove the default CSS import line from `assets/js/app.js`. Since Tailwind is now handling your styling pipeline, this default import is no longer needed and can be safely removed to avoid conflicts or redundant processing.

```javascript
// Remove this line if you add your own CSS build pipeline (e.g postcss).import "../css/app.css"
```

--------------------------------

### Activate Tailwind CSS Dark Mode Manually with HTML Class

Source: https://tailwindcss.com/docs/dark-mode

This HTML example demonstrates how to activate dark mode styles when the `dark` variant has been overridden to respond to a `.dark` class. By adding the `dark` class to the `<html>` element, all `dark:` prefixed utilities within the document will be applied.

```html
<html class="dark">  <body>    <div class="bg-white dark:bg-black">      <!-- ... -->    </div>  </body></html>
```

--------------------------------

### Mask Radial From Gradient - Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

Creates radial gradient masks with customizable start color stops using numeric spacing, percentages, colors, or custom properties. Integrates with radial-gradient shape, size, and position variables.

```css
/* Numeric spacing */
mask-image: radial-gradient(var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), black calc(var(--spacing) * <number>), transparent var(--tw-mask-radial-to));
```

```css
/* Percentage */
mask-image: radial-gradient(var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), black <percentage>, transparent var(--tw-mask-radial-to));
```

```css
/* Color */
mask-image: radial-gradient(var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), <color> var(--tw-mask-radial-from), transparent var(--tw-mask-radial-to));
```

```css
/* Custom property */
mask-image: radial-gradient(var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), black var(<custom-property>), transparent var(--tw-mask-radial-to));
```

```css
/* Arbitrary value */
mask-image: radial-gradient(var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), black <value>, transparent var(--tw-mask-radial-to));
```

--------------------------------

### Apply CSS Variable for Text Decoration Thickness in Tailwind CSS

Source: https://tailwindcss.com/docs/text-decoration-thickness

This example shows how to use a CSS variable to define text decoration thickness with Tailwind CSS. It utilizes the `decoration-(length:<custom-property>)` syntax, which automatically wraps the custom property in `var()`.

```html
<p class="decoration-(length:--my-decoration-thickness) ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Reset Individual Transform Properties - HTML

Source: https://tailwindcss.com/docs/upgrade-guide

Use individual property reset utilities (scale-none, rotate-none, translate-none) instead of transform-none. The transform utilities are now based on individual CSS properties rather than the transform shorthand.

```html
<button class="scale-150 focus:scale-none"></button>
```

--------------------------------

### Create Custom Data Attribute Variants

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Define custom data-* variants in your Tailwind CSS configuration for frequently used data attributes. This example creates a data-checked variant that targets elements with data-ui containing 'checked'.

```css
@import "tailwindcss";
@custom-variant data-checked (&[data-ui~="checked"]);
```

--------------------------------

### transform-3d and transform-flat HTML classes

Source: https://tailwindcss.com/docs/transform-style

Demonstrates the difference between transform-3d (preserves 3D space for children) and transform-flat (flattens children to 2D space). The example shows six child divs with various 3D transforms applied, comparing the visual output between 3D and flat rendering modes.

```html
<div class="size-20 transform-flat ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div>
</div>
<div class="size-20 transform-3d ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div>
</div>
```

--------------------------------

### Applying Tailwind CSS Color Utilities in a Notification Component (HTML)

Source: https://tailwindcss.com/docs/colors

This example illustrates the application of various Tailwind CSS color utilities like `bg-*`, `border-*`, and `text-*` within a complex UI component, specifically a notification card. It demonstrates how to style backgrounds, borders, and text with specific colors to create a visually appealing element.

```html
<div class="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800">  <span class="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">    <svg class="size-6 stroke-pink-700 dark:stroke-pink-500"><!-- ... --></svg>  </span>  <div>    <p class="text-gray-700 dark:text-gray-400">      <span class="font-medium text-gray-950 dark:text-white">Tom Watson</span> mentioned you in      <span class="font-medium text-gray-950 dark:text-white">Logo redesign</span>    </p>    <time class="mt-1 block text-gray-500" datetime="9:37">9:37am</time>  </div></div>
```

--------------------------------

### Container utility with responsive breakpoints in HTML

Source: https://tailwindcss.com/docs/max-width

Use the container utility to set maximum width matching the min-width of the current breakpoint, enabling fixed-width design for specific screen sizes. Combine with mx-auto for centering and px-<number> for horizontal padding, as the container utility does not auto-center or include built-in padding.

```html
<div class="container">  <!-- ... --></div>
<div class="container mx-auto px-4">  <!-- ... --></div>
```

--------------------------------

### Apply Responsive Visibility with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/visibility

This HTML example demonstrates how to apply responsive visibility using Tailwind CSS breakpoint variants. The element is `visible` by default, but the `md:invisible` class makes it invisible on medium (md) screen sizes and above, allowing for adaptive layouts based on screen dimensions.

```html
<div class="visible md:invisible ...">  <!-- ... --></div>
```

--------------------------------

### Apply Responsive Invert Filter with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/filter-invert

Use breakpoint variants like md: to apply invert filter utilities conditionally at specific screen sizes. This example applies full inversion on small screens and no inversion on medium screens and above.

```html
<img class="invert md:invert-0 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Responsive Scroll Margin with Breakpoint Variants

Source: https://tailwindcss.com/docs/scroll-margin

Prefix scroll-margin utilities with breakpoint variants like `md:` to apply different scroll margin values at specific screen sizes. In this example, the element has `scroll-m-8` on mobile and `scroll-m-0` at medium breakpoint and above.

```html
<div class="scroll-m-8 md:scroll-m-0 ...">  <!-- ... --></div>
```

--------------------------------

### Apply Arbitrary CSS Properties with Modifiers in Tailwind CSS HTML

Source: https://tailwindcss.com/docs/adding-custom-styles

Shows how to combine arbitrary CSS properties with Tailwind's interactive modifiers. This example demonstrates changing a custom CSS property, like `mask-type`, on hover.

```html
<div class="[mask-type:luminance] hover:[mask-type:alpha]">
  <!-- ... -->
</div>
```

--------------------------------

### Apply responsive perspective-origin utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/perspective-origin

This snippet shows how to make `perspective-origin` utilities responsive by prefixing them with breakpoint variants like `md:`. It demonstrates applying `perspective-origin-center` by default and overriding it with `perspective-origin-bottom-left` from medium screens and up, adapting the perspective origin based on screen size.

```html
<div class="perspective-origin-center md:perspective-origin-bottom-left ...">
  <!-- ... --></div>
```

--------------------------------

### Define a custom aspect ratio utility in Tailwind CSS theme

Source: https://tailwindcss.com/docs/aspect-ratio

Illustrates how to customize the Tailwind CSS theme by defining a new aspect ratio utility using the `--aspect-*` theme variables. This example creates an `aspect-retro` utility with a 4/3 ratio, making it available for use in markup.

```css
@theme {  --aspect-retro: 4 / 3; }
```

--------------------------------

### Left Mask Gradient From Utilities - Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

Utilities for controlling the starting point of left-to-transparent mask gradients. Supports numeric spacing, percentages, colors, custom properties, and arbitrary values to create directional fade effects from the left edge.

```css
/* mask-l-from-<number> */
mask-image: linear-gradient(to left, black calc(var(--spacing) * <number>), transparent var(--tw-mask-left-to));

/* mask-l-from-<percentage> */
mask-image: linear-gradient(to left, black <percentage>, transparent var(--tw-mask-left-to));

/* mask-l-from-<color> */
mask-image: linear-gradient(to left, <color> var(--tw-mask-left-from), transparent var(--tw-mask-left-to));

/* mask-l-from-(<custom-property>) */
mask-image: linear-gradient(to left, black var(<custom-property>), transparent var(--tw-mask-left-to));

/* mask-l-from-[<value>] */
mask-image: linear-gradient(to left, black <value>, transparent var(--tw-mask-left-to));
```

--------------------------------

### Apply Text Decoration Color on Hover State with Tailwind CSS

Source: https://tailwindcss.com/docs/text-decoration-color

This example illustrates how to change the text decoration color specifically on hover. By prefixing a color utility with `hover:` (e.g., `hover:decoration-pink-500`), the specified color will only be applied to the `text-decoration-color` property when the element is in its hover state.

```html
<p>The <a href="..." class="underline hover:decoration-pink-500 ...">quick brown fox</a> jumps over the lazy dog.</p>
```

--------------------------------

### Set Fixed Width with Tailwind CSS `w-<number>` Utilities

Source: https://tailwindcss.com/docs/width

This example demonstrates how to use Tailwind CSS `w-<number>` utilities to set an element's width based on a predefined spacing scale. These utilities apply a fixed width, calculated from a base spacing variable, to HTML `div` elements.

```html
<div class="w-96 ...">w-96</div><div class="w-80 ...">w-80</div><div class="w-64 ...">w-64</div><div class="w-48 ...">w-48</div><div class="w-40 ...">w-40</div><div class="w-32 ...">w-32</div><div class="w-24 ...">w-24</div>
```

--------------------------------

### Use native CSS variables in Tailwind

Source: https://tailwindcss.com/docs/compatibility

Shows how to use native CSS variables (custom properties) in Tailwind projects without requiring a preprocessor. Modern browsers fully support CSS variables, and Tailwind relies on them internally for its configuration system.

```css
.typography {
  font-size: var(--text-base);
  color: var(--color-gray-700);
}
```

--------------------------------

### Share Theme Variables Across Projects in Tailwind CSS

Source: https://tailwindcss.com/docs/theme

Define theme variables in a separate CSS file and import them across multiple projects using @import. This approach works well for monorepo setups or can be published to NPM for distribution.

```css
@theme {
  --*: initial;
  --spacing: 4px;
  --font-body: Inter, sans-serif;
  --color-lagoon: oklch(0.72 0.11 221.19);
  --color-coral: oklch(0.74 0.17 40.24);
  --color-driftwood: oklch(0.79 0.06 74.59);
  --color-tide: oklch(0.49 0.08 205.88);
  --color-dusk: oklch(0.82 0.15 72.09);
}
```

```css
@import "tailwindcss";
@import "../brand/theme.css";
```

--------------------------------

### Apply Tailwind CSS color scheme utilities conditionally in dark mode

Source: https://tailwindcss.com/docs/color-scheme

Illustrates how to use a `dark:` variant with `color-scheme` utilities to apply a different scheme when the system is in dark mode. This enables dynamic theme switching, for example, setting a light scheme by default and switching to dark when the user's system preference is dark.

```html
<html class="scheme-light dark:scheme-dark ...">  <!-- ... --></html>
```

--------------------------------

### Apply Custom CSS Variable Maximum Height with Tailwind CSS

Source: https://tailwindcss.com/docs/max-height

This HTML example shows how to use the `max-h-(<custom-property>)` syntax in Tailwind CSS to set a maximum height based on a CSS variable. It automatically wraps the custom property in `var()` for convenience.

```html
<div class="max-h-(--my-max-height) ...">  <!-- ... --></div>
```

--------------------------------

### Using custom arbitrary values for order

Source: https://tailwindcss.com/docs/order

Use the order-[<value>] syntax to set the order based on a completely custom value, allowing for complex expressions and calculations.

```html
<div class="order-[min(var(--total-items),10)] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Custom Underline Offset Value in Tailwind CSS

Source: https://tailwindcss.com/docs/text-underline-offset

This example shows how to set a custom text underline offset using arbitrary values with the `underline-offset-[<value>]` syntax. This allows for precise control over the offset by specifying any valid CSS length unit, such as `underline-offset-[3px]`.

```html
<p class="underline-offset-[3px] ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Remove all default Tailwind CSS breakpoints and define custom ones

Source: https://tailwindcss.com/docs/responsive-design

This CSS example demonstrates how to completely reset all default Tailwind CSS breakpoints using `--breakpoint-*: initial` and then define a new, custom set of breakpoints from scratch. This provides full control over your project's responsive breakpoints.

```css
@import "tailwindcss";@theme {  --breakpoint-*: initial;  --breakpoint-tablet: 40rem;  --breakpoint-laptop: 64rem;  --breakpoint-desktop: 80rem;}
```

--------------------------------

### Target specific ranges with Tailwind CSS container queries

Source: https://tailwindcss.com/docs/responsive-design

This HTML example illustrates how to target a specific range for container queries by stacking a regular container query variant with a max-width variant (e.g., `@sm:@max-md`). This applies styles only when the container's width falls within the defined range.

```html
<div class="@container">
  <div class="flex flex-row @sm:@max-md:flex-col">
    <!-- ... -->
  </div>
</div>
```

--------------------------------

### Apply Responsive Clears with Tailwind CSS Breakpoint Variants

Source: https://tailwindcss.com/docs/clear

This example illustrates how to apply `clear` utilities conditionally based on screen size using Tailwind CSS responsive variants. By prefixing `clear-none` with `md:`, the `clear-none` utility will only take effect at medium screen sizes and above, while `clear-left` is applied by default. This allows for flexible layout adjustments across different devices.

```html
<p class="clear-left md:clear-none ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Overriding Image Width Constraint with Tailwind CSS Utility

Source: https://tailwindcss.com/docs/preflight

This HTML example shows how to override Preflight's default image width constraint using the `max-w-none` utility class. This allows an image to exceed its parent's width if necessary, bypassing the `max-width: 100%` rule.

```html
<img class="max-w-none" src="..." alt="..." />
```

--------------------------------

### Apply percentage-based font-stretch in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/font-stretch

This example shows how to use Tailwind CSS `font-stretch-<percentage>` utilities, such as `font-stretch-50%`, `font-stretch-100%`, and `font-stretch-150%`, to set the font face width using specific percentage values. This provides fine-grained control over font stretching for fonts that support it.

```html
<p class="font-stretch-50%">The quick brown fox...</p><p class="font-stretch-100%">The quick brown fox...</p><p class="font-stretch-150%">The quick brown fox...</p>
```

--------------------------------

### Set font-size with line-height modifiers in HTML

Source: https://tailwindcss.com/docs/font-size

Combine font-size utilities with line-height modifiers using the syntax text-[size]/[line-height] to control both properties simultaneously. For example, text-sm/6, text-sm/7, and text-sm/8 set different line-height values for the same font size.

```html
<p class="text-sm/6 ...">So I started to walk into the water...</p>
<p class="text-sm/7 ...">So I started to walk into the water...</p>
<p class="text-sm/8 ...">So I started to walk into the water...</p>
```

--------------------------------

### Apply Responsive Saturation Filters with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-saturate

This snippet demonstrates how to use Tailwind CSS's responsive prefixes, such as `md:`, to apply different saturation levels based on screen size. This allows for adaptive designs where filter effects change at specific breakpoints.

```html
<img class="saturate-50 md:saturate-150 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Example JSX Component with Tailwind Classes

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

This JSX code demonstrates a React component that uses Tailwind CSS classes. Tailwind scans such files as plain text to identify utility classes for CSS generation, making sure the CSS output is minimal and efficient.

```jsx
export function Button({ color, children }) {
  const colors = {
    black: "bg-black text-white",
    blue: "bg-blue-500 text-white",
    white: "bg-white text-black",
  };
  return (
    <button className={`${colors[color]} rounded-full px-2 py-1.5 font-sans text-sm/6 font-medium shadow`}>
      {children}
    </button>
  );
}
```

--------------------------------

### Apply custom column width using arbitrary values in Tailwind CSS

Source: https://tailwindcss.com/docs/columns

This example demonstrates how to use the `columns-[<value>]` arbitrary value syntax in Tailwind CSS to set a completely custom column width. This provides maximum flexibility for unique layout requirements. Input is an HTML `div` with a `columns-[<value>]` class, where `<value>` can be any valid CSS width.

```html
<div class="columns-[30vw] ...">  <!-- ... --></div>
```

--------------------------------

### Use CSS Custom Property for Border Spacing in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/border-spacing

This HTML example illustrates the use of a CSS custom property for border spacing via the `border-spacing-(<custom-property>)` syntax. This is a convenient shorthand for `border-spacing-[var(<custom-property>)]`, enabling dynamic spacing control.

```html
<table class="border-spacing-(--my-border-spacing) ...">  <!-- ... --></table>
```

--------------------------------

### Containing content within its container using Tailwind CSS `object-contain`

Source: https://tailwindcss.com/docs/object-fit

This example shows how to use the `object-contain` utility in Tailwind CSS. The image content will be scaled to fit within the container, preserving its aspect ratio, which might leave empty space.

```html
<img class="h-48 w-96 object-contain ..." src="/img/mountains.jpg" />
```

--------------------------------

### Center items along main axis with Tailwind CSS `justify-center` and `justify-center-safe`

Source: https://tailwindcss.com/docs/justify-content

These examples illustrate the use of `justify-center` and `justify-center-safe` utilities to center flex items along the main axis. `justify-center-safe` provides a fallback to `flex-start` when space is insufficient, preventing content overflow issues.

```html
<div class="flex justify-center ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div></div>
```

```html
<div class="flex justify-center-safe ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div></div>
```

--------------------------------

### Use Arbitrary ARIA Variants with Square Brackets

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Generate one-off ARIA variants on the fly using square bracket notation for complex ARIA attributes with specific values. This example applies different background images to table headers based on aria-sort values.

```html
<table>
  <thead>
    <tr>
      <th aria-sort="ascending" class="aria-[sort=ascending]:bg-[url('/img/down-arrow.svg')] aria-[sort=descending]:bg-[url('/img/up-arrow.svg')]">
        Invoice #
      </th>
      <!-- ... -->
    </tr>
  </thead>
  <!-- ... -->
</table>
```

--------------------------------

### Update CSS Variables in Arbitrary Values - HTML

Source: https://tailwindcss.com/docs/upgrade-guide

Replace square bracket syntax with parentheses for CSS variable arbitrary values in v4. This change addresses ambiguity in CSS variable parsing introduced by recent CSS updates.

```html
<div class="bg-(--brand-color)"></div>
```

--------------------------------

### Apply items-stretch for cross-axis stretching in HTML

Source: https://tailwindcss.com/docs/align-items

This example demonstrates the use of the `items-stretch` utility in Tailwind CSS. It causes flex items to stretch and fill the entire available space along the container's cross axis, ensuring consistent height or width based on the flex direction.

```html
<div class="flex items-stretch ...">  <div class="py-4">01</div>  <div class="py-12">02</div>  <div class="py-8">03</div></div>
```

--------------------------------

### Customize Tailwind CSS column utilities in theme configuration

Source: https://tailwindcss.com/docs/columns

This example demonstrates how to customize the fixed-width column utilities in Tailwind CSS by defining custom CSS variables within the `@theme` block. This allows developers to extend or modify the default column sizes to match project-specific design systems. The output is a new custom utility like `columns-4xs` available for use in HTML.

```css
@theme {  --container-4xs: 14rem; }
```

--------------------------------

### Apply Basic Border Spacing to HTML Tables with Tailwind CSS

Source: https://tailwindcss.com/docs/border-spacing

This HTML example demonstrates applying `border-spacing-<number>` utilities like `border-spacing-2` to control the space between table cell borders. It requires the `border-separate` class on the table to take effect, along with standard border classes for visibility.

```html
<table class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">  <thead>    <tr>      <th class="border border-gray-300 dark:border-gray-600">State</th>      <th class="border border-gray-300 dark:border-gray-600">City</th>    </tr>  </thead>  <tbody>    <tr>      <td class="border border-gray-300 dark:border-gray-700">Indiana</td>      <td class="border border-gray-300 dark:border-gray-700">Indianapolis</td>    </tr>    <tr>      <td class="border border-gray-300 dark:border-gray-700">Ohio</td>      <td class="border border-gray-300 dark:border-gray-700">Columbus</td>    </tr>    <tr>      <td class="border border-gray-300 dark:border-gray-700">Michigan</td>      <td class="border border-gray-300 dark:border-gray-700">Detroit</td>    </tr>  </tbody></table>
```

--------------------------------

### Apply basic sepia filters to images with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-sepia

Demonstrates applying different levels of sepia filters (none, 50%, 100%) to image elements using Tailwind CSS utility classes like `sepia-0`, `sepia-50`, and `sepia`. These classes directly map to `filter: sepia(0%)`, `filter: sepia(50%)`, and `filter: sepia(100%)` respectively.

```html
<img class="sepia-0" src="/img/mountains.jpg" /><img class="sepia-50" src="/img/mountains.jpg" /><img class="sepia" src="/img/mountains.jpg" />
```

--------------------------------

### Apply Container Queries with Tailwind CSS `@md` Variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This example illustrates how to use container queries in Tailwind CSS with variants like `@md` to style elements based on the width of their parent container, rather than the viewport. It shows how to change flex direction based on container width.

```html
<div class="@container">  <div class="flex flex-col @md:flex-row">    <!-- ... -->  </div></div>
```

--------------------------------

### Distribute rows with space around using Tailwind CSS

Source: https://tailwindcss.com/docs/align-content

This example shows how to use the `content-around` utility class in Tailwind CSS to distribute rows in a container, creating equal space around each line. This class applies the CSS property `align-content: space-around;` to the container.

```html
<div class="grid h-56 grid-cols-3 content-around gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div>  <div>05</div></div>
```

--------------------------------

### Apply Custom CSS Variable for Linear Mask in Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

This example demonstrates using a CSS variable with the `mask-linear-(<custom-property>)` syntax to apply a custom mask. This is a shorthand that automatically wraps the custom property in `var()`, simplifying the use of dynamic mask values.

```html
<div class="mask-linear-(--my-mask) ...">  <!-- ... --></div>
```

--------------------------------

### Mask X-Axis From Gradient - Tailwind CSS

Source: https://tailwindcss.com/docs/mask-image

Creates horizontal gradient masks starting from left and right edges with numeric spacing multipliers, percentages, colors, or custom properties. Applies intersect composite mode for proper mask blending.

```css
/* Numeric spacing */
mask-image: linear-gradient(to right, black calc(var(--spacing) * <number>), transparent var(--tw-mask-right-to)), linear-gradient(to left, black calc(var(--spacing) * <number>), transparent var(--tw-mask-left-to));
mask-composite: intersect;
```

```css
/* Percentage */
mask-image: linear-gradient(to right, black <percentage>, transparent var(--tw-mask-right-to)), linear-gradient(to left, black <percentage>, transparent var(--tw-mask-left-to));
mask-composite: intersect;
```

```css
/* Color */
mask-image: linear-gradient(to right, <color> var(--tw-mask-right-from), transparent var(--tw-mask-right-to)), linear-gradient(to left, <color> var(--tw-mask-left-from), transparent var(--tw-mask-left-to));
mask-composite: intersect;
```

```css
/* Custom property */
mask-image: linear-gradient(to right, black var(<custom-property>), transparent var(--tw-mask-right-to)), linear-gradient(to left, black var(<custom-property>), transparent var(--tw-mask-left-to));
mask-composite: intersect;
```

```css
/* Arbitrary value */
mask-image: linear-gradient(to right, black <value>, transparent var(--tw-mask-right-to)), linear-gradient(to left, black <value>, transparent var(--tw-mask-left-to));
mask-composite: intersect;
```

--------------------------------

### Responsive text alignment with breakpoint variants

Source: https://tailwindcss.com/docs/text-align

Apply text-align utilities responsively using breakpoint prefixes like md:. This allows different text alignment at different screen sizes, enabling adaptive layouts for various devices.

```html
<p class="text-left md:text-center ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply `bg-contain` for background image fill without cropping in Tailwind CSS

Source: https://tailwindcss.com/docs/background-size

This example demonstrates how to use the `bg-contain` utility in Tailwind CSS to scale a background image to fit within its container without cropping or stretching. It also sets the background position to center.

```html
<div class="bg-[url(/img/mountains.jpg)] bg-contain bg-center"></div>
```

--------------------------------

### Apply basic `grid-auto-rows` utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/grid-auto-rows

Demonstrates how to use Tailwind CSS classes like `auto-rows-min` and `auto-rows-max` to control the size of implicitly-created grid rows within a basic HTML grid layout.

```html
<div class="grid grid-flow-row auto-rows-max">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

--------------------------------

### Apply Basic Scroll Margin in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-margin

This example demonstrates how to apply basic scroll margin utilities like `scroll-ml-6` and `scroll-mt-6` to elements within a snap container in HTML. These classes control the offset around snapped items, ensuring proper spacing when scrolling.

```html
<div class="snap-x ...">
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-01.jpg"/>
  </div>
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-02.jpg"/>
  </div>
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-03.jpg"/>
  </div>
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-04.jpg"/>
  </div>
  <div class="snap-start scroll-ml-6 ...">
    <img src="/img/vacation-05.jpg"/>
  </div>
</div>
```

--------------------------------

### Apply Border Color on Focus State with Tailwind CSS

Source: https://tailwindcss.com/docs/border-color

Use state variants like focus: to conditionally apply border color utilities. This example shows changing border color on input focus, but variants work with any border color utility.

```html
<input class="border-2 border-gray-700 focus:border-pink-600 ..." />
```

--------------------------------

### Apply responsive blur filters in Tailwind CSS

Source: https://tailwindcss.com/docs/filter-blur

Use breakpoint prefixes like md: to apply blur utilities conditionally at specific screen sizes. This example applies no blur by default and blur-lg on medium screens and above, enabling responsive design patterns.

```html
<img class="blur-none md:blur-lg ..." src="/img/mountains.jpg" />
```

--------------------------------

### Responsive box-decoration-break with breakpoint variant

Source: https://tailwindcss.com/docs/box-decoration-break

Combine box-decoration-break utilities with Tailwind breakpoint variants to apply different rendering behavior at specific screen sizes. Use the md: prefix to apply box-decoration-slice only at medium screen sizes and above.

```html
<div class="box-decoration-clone md:box-decoration-slice ...">
  <!-- Content -->
</div>
```

--------------------------------

### Use Custom Perspective Theme Utility in Markup

Source: https://tailwindcss.com/docs/perspective

Demonstrates how to use a custom perspective utility class that was defined in the theme configuration. After adding --perspective-remote to the theme, the perspective-remote class becomes available for use on HTML elements.

```html
<div class="perspective-remote">
  <!-- ... -->
</div>
```

--------------------------------

### Apply responsive table layout with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/table-layout

This example illustrates how to apply `table-layout` utilities conditionally based on screen size using Tailwind CSS responsive variants. The `md:table-fixed` class ensures the table layout becomes fixed on medium screens and larger, while remaining `table-auto` by default.

```html
<div class="table-auto md:table-fixed ...">  <!-- ... --></div>
```

--------------------------------

### Using CSS custom properties with order utility

Source: https://tailwindcss.com/docs/order

Use the order-(<custom-property>) syntax as shorthand for order-[var(<custom-property>)], which automatically wraps the custom property in the var() function.

```html
<div class="order-(--my-order) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Use Custom Theme Color in Markup

Source: https://tailwindcss.com/docs/accent-color

Apply custom theme colors defined in your theme configuration directly in your HTML markup using the generated utility classes. This example uses the accent-regal-blue utility created from the custom theme variable.

```html
<input class="accent-regal-blue" type="checkbox" />
```

--------------------------------

### Apply Directional Styles with RTL and LTR Variants

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use rtl and ltr variants to conditionally apply styles for right-to-left and left-to-right layouts. This example applies left margin in LTR mode and right margin in RTL mode for multi-directional layouts.

```html
<div class="group flex items-center">
  <img class="h-12 w-12 shrink-0 rounded-full" src="..." alt="" />
  <div class="ltr:ml-3 rtl:mr-3">
    <p class="text-gray-700 group-hover:text-gray-900 ...">...</p>
    <p class="text-gray-500 group-hover:text-gray-700 ...">...</p>
  </div>
</div>
```

--------------------------------

### Incorrect Mobile-First Responsive Styling Pattern

Source: https://tailwindcss.com/docs/responsive-design

Demonstrates the incorrect approach when targeting mobile screens in Tailwind CSS. Using sm: prefix will only apply styles at 640px and wider, not on small screens. This example shows text-center being applied only on medium screens and above, missing mobile styling.

```html
<!-- This will only center text on screens 640px and wider, not on small screens -->
<div class="sm:text-center"></div>
```

--------------------------------

### Apply Underline Offset with CSS Variable in Tailwind CSS

Source: https://tailwindcss.com/docs/text-underline-offset

This example demonstrates using a CSS custom property (variable) to define the underline offset with the `underline-offset-(<custom-property>)` syntax, like `underline-offset-(--my-underline-offset)`. This shorthand automatically wraps the custom property in `var()` for dynamic styling.

```html
<p class="underline-offset-(--my-underline-offset) ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply `snap-normal` for skipping scroll snap stops in Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-snap-stop

This example illustrates the use of the `snap-normal` utility, which allows a scroll container to skip past potential scroll snap positions. This provides a smoother, less restrictive scrolling experience for the user, letting them scroll freely without being forced to stop at every snap point.

```html
<div class="snap-x ...">  <div class="snap-center snap-normal ...">    <img src="/img/vacation-01.jpg" />  </div>  <div class="snap-center snap-normal ...">    <img src="/img/vacation-02.jpg" />  </div>  <div class="snap-center snap-normal ...">    <img src="/img/vacation-03.jpg" />  </div>  <div class="snap-center snap-normal ...">    <img src="/img/vacation-04.jpg" />  </div>  <div class="snap-center snap-normal ...">    <img src="/img/vacation-05.jpg" />  </div>  <div class="snap-center snap-normal ...">    <img src="/img/vacation-06.jpg" />  </div></div>
```

--------------------------------

### Set ideal column width with Tailwind CSS

Source: https://tailwindcss.com/docs/columns

This example shows how to use `columns-<size>` utilities like `columns-xs` or `columns-3xs` in Tailwind CSS to define an ideal column width for content. The number of columns dynamically adjusts to prevent them from becoming too narrow. Input is an HTML `div` with a `columns-<size>` class, resulting in a responsive multi-column layout.

```html
<div class="columns-3xs ...">  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />  <img class="aspect-square ..." src="/img/mountains-2.jpg" />  <img class="aspect-square ..." src="/img/mountains-3.jpg" />  <!-- ... --></div>
```

--------------------------------

### Logical property border-width utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/border-width

Use logical border utilities (border-s for start, border-e for end) to create direction-aware layouts that adapt to text direction (LTR/RTL). These map to border-inline-start-width and border-inline-end-width CSS properties, automatically adjusting left/right based on dir attribute.

```html
<div dir="ltr">
  <div class="border-s-4 ..."></div>
</div>
<div dir="rtl">
  <div class="border-s-4 ..."></div>
</div>
```

--------------------------------

### Set custom transition timing function values in Tailwind CSS

Source: https://tailwindcss.com/docs/transition-timing-function

Illustrates how to use arbitrary values with the `ease-[<value>]` syntax to define a custom `cubic-bezier` function for an element's transition timing. This allows for highly specific easing curves beyond the predefined utilities.

```html
<button class="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ...">  <!-- ... --></button>
```

--------------------------------

### Utilize Custom Theme Color for Text Decoration in Tailwind CSS

Source: https://tailwindcss.com/docs/text-decoration-color

This example demonstrates how to apply a custom color, previously defined in your Tailwind CSS theme, to an element's text decoration. By using the `decoration-` prefix followed by your custom color's name (e.g., `decoration-regal-blue`), you can easily integrate custom branding into your design.

```html
<p class="decoration-regal-blue">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply contrast filter with predefined Tailwind utilities

Source: https://tailwindcss.com/docs/filter-contrast

Use predefined contrast utility classes like contrast-50, contrast-100, contrast-125, and contrast-200 to apply specific contrast levels to images and elements. These utilities generate filter: contrast() CSS with percentage values.

```html
<img class="contrast-50 ..." src="/img/mountains.jpg" />
<img class="contrast-100 ..." src="/img/mountains.jpg" />
<img class="contrast-125 ..." src="/img/mountains.jpg" />
<img class="contrast-200 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Style Dialog Backdrops with Tailwind CSS `backdrop` Variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This example illustrates how to style the backdrop of a native `<dialog>` element using the `backdrop` variant in Tailwind CSS. It applies a background color to the overlay that appears behind an behind an open dialog.

```html
<dialog class="backdrop:bg-gray-50">  <form method="dialog">    <!-- ... -->  </form></dialog>
```

--------------------------------

### Set custom backdrop contrast value with bracket notation

Source: https://tailwindcss.com/docs/backdrop-filter-contrast

Use the backdrop-contrast-[<value>] syntax to apply a completely custom backdrop contrast value that isn't available as a predefined utility class.

```html
<div class="backdrop-contrast-[.25] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Set Grid Rows with CSS Variables using Tailwind CSS `grid-rows-(<custom-property>)`

Source: https://tailwindcss.com/docs/grid-template-rows

This example demonstrates how to use the `grid-rows-(<custom-property>)` syntax in Tailwind CSS to define grid rows using a CSS variable. This provides a convenient shorthand for `grid-rows-[var(<custom-property>)]`, automatically applying the `var()` function.

```html
<div class="grid-rows-(--my-grid-rows) ...">  <!-- ... --></div>
```

--------------------------------

### Incorrect Dynamic Class Name Construction with Props in JSX

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

This JSX example illustrates an anti-pattern where class names are dynamically constructed using props. Tailwind cannot reliably detect classes like `bg-${color}-600` because it doesn't parse the JavaScript logic to infer the full class names.

```jsx
function Button({ color, children }) {
  return <button className={`bg-${color}-600 hover:bg-${color}-500 ...`}>{children}</button>;
}
```

--------------------------------

### Apply Tailwind CSS utility classes in Angular component template

Source: https://tailwindcss.com/docs/installation/framework-guides/angular

This HTML snippet demonstrates how to use Tailwind CSS utility classes directly within an Angular component template. Classes like `text-3xl`, `font-bold`, and `underline` are applied to style an `<h1>` element.

```HTML
<h1 class="text-3xl font-bold underline">  Hello world!</h1>
```

--------------------------------

### Flatten nested CSS with Tailwind

Source: https://tailwindcss.com/docs/compatibility

Demonstrates nested CSS syntax that Tailwind processes using Lightning CSS. Tailwind automatically flattens nested selectors into standard CSS that all modern browsers understand, eliminating the need for preprocessors like Sass.

```css
.typography {
  p {
    font-size: var(--text-base);
  }
  img {
    border-radius: var(--radius-lg);
  }
}
```

```css
.typography p {
  font-size: var(--text-base);
}
.typography img {
  border-radius: var(--radius-lg);
}
```

--------------------------------

### Apply responsive backdrop grayscale with Tailwind CSS

Source: https://tailwindcss.com/docs/backdrop-filter-grayscale

Demonstrates how to apply backdrop grayscale utilities conditionally based on screen size using responsive variants like `md:` in Tailwind CSS. This allows for different grayscale effects at various breakpoints.

```html
<div class="backdrop-grayscale md:backdrop-grayscale-0 ...">  <!-- ... --></div>
```

--------------------------------

### Using Tailwind CSS Arbitrary Variants for Custom Selectors

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Explains how to use arbitrary variants in Tailwind CSS to apply custom selector logic directly in HTML. This example changes the cursor to `grabbing` when an element has the `is-dragging` class, providing highly specific conditional styling.

```html
<ul role="list">
  {#each items as item}
    <li class="[&.is-dragging]:cursor-grabbing">{item}</li>
  {/each}
</ul>
```

--------------------------------

### Apply basic font-stretch utilities in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/font-stretch

This example demonstrates how to use predefined Tailwind CSS `font-stretch` utility classes like `font-stretch-extra-condensed`, `font-stretch-condensed`, `font-stretch-normal`, `font-stretch-expanded`, and `font-stretch-extra-expanded` to control the width of text elements. These classes apply to fonts that have multiple width variations available, otherwise the browser selects the closest match.

```html
<p class="font-stretch-extra-condensed">The quick brown fox...</p><p class="font-stretch-condensed">The quick brown fox...</p><p class="font-stretch-normal">The quick brown fox...</p><p class="font-stretch-expanded">The quick brown fox...</p><p class="font-stretch-extra-expanded">The quick brown fox...</p>
```

--------------------------------

### Apply CSS variable for font-stretch in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/font-stretch

This example demonstrates how to use the `font-stretch-(<custom-property>)` syntax in Tailwind CSS to apply a font width defined by a CSS variable. This is a shorthand for `font-stretch-[var(<custom-property>)]`, enabling dynamic font stretching based on CSS custom properties.

```html
<p class="font-stretch-(--my-font-width) ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply custom font-stretch values in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/font-stretch

This example illustrates the use of Tailwind CSS's arbitrary value syntax `font-stretch-[<value>]` to apply a completely custom font width, such as `font-stretch-[66.66%]`. This allows for highly specific styling not covered by predefined classes.

```html
<p class="font-stretch-[66.66%] ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply basic backdrop grayscale utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/backdrop-filter-grayscale

Demonstrates how to apply different levels of backdrop grayscale using Tailwind CSS classes like `backdrop-grayscale-0`, `backdrop-grayscale-50`, and `backdrop-grayscale` to an element's backdrop.

```html
<div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-grayscale-0 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-grayscale-50 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-grayscale-200 ..."></div></div>
```

--------------------------------

### Differentiate multiple peers with named peer variants

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use `peer/{name}` class to give peers unique names and style based on specific peer state using `peer-{state}/{name}` variants. This example demonstrates a radio button group where different content blocks display based on which radio option is selected.

```html
<fieldset>
  <legend>Published status</legend>
  <input id="draft" class="peer/draft" type="radio" name="status" checked />
  <label for="draft" class="peer-checked/draft:text-sky-500">Draft</label>
  <input id="published" class="peer/published" type="radio" name="status" />
  <label for="published" class="peer-checked/published:text-sky-500">Published</label>
  <div class="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
  <div class="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
</fieldset>
```

--------------------------------

### Resetting Default Margins and Padding with Preflight CSS

Source: https://tailwindcss.com/docs/preflight

This CSS rule, part of Tailwind's Preflight, resets the `margin` and `padding` to `0` for all elements and pseudo-elements. This ensures a consistent starting point by removing browser-default spacing and preventing accidental reliance on user-agent stylesheets.

```css
*,::after,::before,::backdrop,::file-selector-button {
  margin: 0;
  padding: 0;
}
```

--------------------------------

### Apply predefined text color utilities in HTML

Source: https://tailwindcss.com/docs/color

Use Tailwind CSS text color utility classes to control text color of elements. The example demonstrates basic text color application with dark mode support using the dark: variant.

```html
<p class="text-blue-600 dark:text-sky-400">The quick brown fox jumps over the lazy dog.</p>
```

--------------------------------

### Apply custom CSS variable for transition timing function in Tailwind CSS

Source: https://tailwindcss.com/docs/transition-timing-function

Shows how to reference a CSS variable for the transition timing function using the `ease-(<custom-property>)` syntax. This is a shorthand for `ease-[var(<custom-property>)]`, providing a clean way to use custom properties.

```html
<button class="ease-(--my-ease) ...">  <!-- ... --></button>
```

--------------------------------

### Apply Responsive Gradient Utilities with Breakpoint Variants

Source: https://tailwindcss.com/docs/background-image

Prefix background-image utilities with breakpoint variants like md: to apply gradients only at specific screen sizes. This enables responsive design patterns where gradient colors or styles change based on viewport width.

```html
<div class="from-purple-400 md:from-yellow-500 ...">  <!-- ... --></div>
```

--------------------------------

### Apply Absolute Positioning in Tailwind CSS

Source: https://tailwindcss.com/docs/position

This HTML snippet demonstrates the `absolute` utility class in Tailwind CSS. It shows how an element with `absolute` positioning is taken out of the normal document flow and positioned relative to its nearest non-static parent. The example contrasts static and absolute positioning behavior with siblings.

```html
<div class="static ...">  <!-- Static parent -->  <div class="static ..."><p>Static child</p></div>  <div class="inline-block ..."><p>Static sibling</p></div>  <!-- Static parent -->  <div class="absolute ..."><p>Absolute child</p></div>  <div class="inline-block ..."><p>Static sibling</p></div></div>
```

--------------------------------

### Apply scroll-padding with responsive breakpoint variant in Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-padding

Use breakpoint variants to apply scroll-padding utilities at specific screen sizes. The example shows applying `scroll-p-8` at default sizes and `scroll-p-0` at medium screens and above using the `md:` variant. This allows responsive adjustment of scroll padding behavior across different device sizes.

```html
<div class="scroll-p-8 md:scroll-p-0 ...">  <!-- ... --></div>
```

--------------------------------

### Multi-cursor editing for duplicated Tailwind classes in HTML

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Demonstrates a navigation bar with repeated Tailwind utility classes applied to multiple anchor elements. This pattern shows how multi-cursor editing can be used to quickly select and modify identical class lists across similar elements within a single file.

```html
<nav class="flex justify-center space-x-4">
  <a href="/dashboard" class="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
    Home
  </a>
  <a href="/team" class="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
    Team
  </a>
  <a href="/projects" class="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
    Projects
  </a>
  <a href="/reports" class="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
    Reports
  </a>
</nav>
```

--------------------------------

### Update Variant Stacking Order - HTML

Source: https://tailwindcss.com/docs/upgrade-guide

Reverse the order of stacked variants when upgrading to v4, as they now apply left to right instead of right to left. This primarily affects direct child variants (*) and typography plugin variants (prose-headings) when stacked with other variants.

```html
<ul class="py-4 first:*:pt-0 last:*:pb-0">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

--------------------------------

### Target Parent Elements with Group ARIA Variants

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use group-aria-* variants to style child elements based on ARIA attributes of their parent. This example rotates an SVG icon based on the parent th element's aria-sort attribute.

```html
<table>
  <thead>
    <tr>
      <th aria-sort="ascending" class="group">
        Invoice #
        <svg class="group-aria-[sort=ascending]:rotate-0 group-aria-[sort=descending]:rotate-180"><!-- ... --></svg>
      </th>
      <!-- ... -->
    </tr>
  </thead>
  <!-- ... -->
</table>
```

--------------------------------

### Define Custom Font Size Utility in Tailwind CSS Theme

Source: https://tailwindcss.com/docs/font-size

These CSS snippets demonstrate how to define a custom font size utility, `--text-tiny`, within the Tailwind CSS `@theme` directive. The first example shows a basic font size definition, while the second extends it to include `line-height`, `letter-spacing`, and `font-weight` for comprehensive styling. This allows for consistent and reusable typography across your project.

```css
@theme {  --text-tiny: 0.625rem; }
```

```css
@theme {  --text-tiny: 0.625rem;  --text-tiny--line-height: 1.5rem;   --text-tiny--letter-spacing: 0.125rem;   --text-tiny--font-weight: 500; }
```

--------------------------------

### Apply flex-basis with custom arbitrary values in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-basis

Demonstrates how to set a custom `flex-basis` value using Tailwind CSS's arbitrary value syntax `basis-[<value>]`. This allows for precise control over the flex item's initial size with any valid CSS value.

```html
<div class="basis-[30vw] ...">  <!-- ... --></div>
```

--------------------------------

### Apply fixed number of columns with Tailwind CSS

Source: https://tailwindcss.com/docs/columns

This example demonstrates how to use `columns-<number>` utilities in Tailwind CSS to set a fixed number of columns for content within an HTML element. The column width automatically adjusts to fit the specified number of columns. Input is an HTML `div` with a `columns-<number>` class, and the output is a multi-column layout.

```html
<div class="columns-3 ...">  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />  <img class="aspect-square ..." src="/img/mountains-2.jpg" />  <img class="aspect-square ..." src="/img/mountains-3.jpg" />  <!-- ... --></div>
```

--------------------------------

### Apply fixed table column widths with Tailwind CSS `table-fixed`

Source: https://tailwindcss.com/docs/table-layout

This example shows how to use the `table-fixed` utility class in Tailwind CSS to enforce fixed column widths, ignoring cell content. This is useful for maintaining consistent table layouts, especially when combined with explicit column width settings.

```html
<table class="table-fixed">  <thead>    <tr>      <th>Song</th>      <th>Artist</th>      <th>Year</th>    </tr>  </thead>  <tbody>    <tr>      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>      <td>Malcolm Lockyer</td>      <td>1961</td>    </tr>    <tr>      <td>Witchy Woman</td>      <td>The Eagles</td>      <td>1972</td>    </tr>    <tr>      <td>Shining Star</td>      <td>Earth, Wind, and Fire</td>      <td>1975</td>    </tr>  </tbody></table>
```

--------------------------------

### Apply Logical Scroll Margin Properties in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-margin

This example illustrates the use of logical scroll margin properties like `scroll-ms-6` and `scroll-me-6` in HTML. These utilities set `scroll-margin-inline-start` and `scroll-margin-inline-end`, which adapt to the text direction (LTR/RTL) for flexible and internationalized layout control.

```html
<div dir="ltr">
  <div class="snap-x ...">
    <div class="snap-start scroll-ms-6 ...">
      <img src="/img/vacation-01.jpg"/>
    </div>
    <!-- ... -->
  </div>
</div><div dir="rtl">
  <div class="snap-x ...">
    <div class="snap-start scroll-ms-6 ...">
      <img src="/img/vacation-01.jpg"/>
    </div>
    <!-- ... -->
  </div>
</div>
```

--------------------------------

### Apply Tailwind CSS `odd` and `even` variants to table rows

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This example illustrates how to use the `odd:` and `even:` variants to apply alternating background colors to table rows, improving readability. It includes support for dark mode by defining separate `dark:odd:` and `dark:even:` styles, making it easy to create visually distinct rows without manual conditional logic.

```html
<table>  <!-- ... -->  <tbody>    {#each people as person}      <!-- Use different background colors for odd and even rows -->      <tr class="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950">        <td>{person.name}</td>        <td>{person.title}</td>        <td>{person.email}</td>      </tr>    {/each}  </tbody></table>
```

--------------------------------

### Combined font-size and line-height with Tailwind CSS

Source: https://tailwindcss.com/docs/line-height

Use text-<size>/<number> utilities to set both font size and line height simultaneously. This example demonstrates three different line-height values (6, 7, 8) applied to text-base font size using Tailwind CSS classes.

```html
<p class="text-base/6 ...">So I started to walk into the water...</p>
<p class="text-base/7 ...">So I started to walk into the water...</p>
<p class="text-base/8 ...">So I started to walk into the water...</p>
```

--------------------------------

### Using CSS Variables for Shrink Values in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-shrink

Demonstrates the `shrink-(<custom-property>)` syntax in Tailwind CSS to apply a `flex-shrink` value directly from a CSS custom property, offering a concise way to manage dynamic shrink factors.

```html
<div class="shrink-(--my-shrink) ...">  <!-- ... --></div>
```

--------------------------------

### Apply Negative Scroll Margin in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-margin

This example shows how to use negative scroll margin values in HTML by prefixing Tailwind CSS utility classes, such as `-scroll-ml-6`, with a dash. This allows for a negative offset around snapped items, pulling them closer to the snap position.

```html
<div class="snap-start -scroll-ml-6 ...">
  <!-- ... --></div>
```

--------------------------------

### Use Custom Theme Stroke Color in Tailwind CSS Markup

Source: https://tailwindcss.com/docs/stroke

This example demonstrates how to apply a custom stroke color that has been defined within the Tailwind CSS theme. After defining `--color-regal-blue` in the theme, it can be used directly in HTML markup as `stroke-regal-blue`.

```html
<svg class="stroke-regal-blue">  <!-- ... --></svg>
```

--------------------------------

### Apply custom hue-rotate values with bracket notation in HTML

Source: https://tailwindcss.com/docs/filter-hue-rotate

Use the hue-rotate-[<value>] bracket notation syntax to apply custom hue rotation values that are not predefined in Tailwind CSS. This example demonstrates using a custom radian value (3.142rad) for precise hue rotation control.

```html
<img class="hue-rotate-[3.142rad]" src="/img/mountains.jpg" />
```

--------------------------------

### Apply Tailwind CSS mask-position utilities for basic positioning

Source: https://tailwindcss.com/docs/mask-position

This example demonstrates how to use predefined Tailwind CSS classes like `mask-top-left`, `mask-center`, and `mask-bottom-right` to control the position of an element's mask image. These utilities are applied directly to HTML `div` elements, alongside `mask-[url(...)]` and `mask-size-[...]` for defining the mask image and size.

```html
<div class="mask-top-left mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-top mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-top-right mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-left mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-center mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-right mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-bottom-left mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-bottom mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-bottom-right mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### Use CSS Variables Instead of theme() Function - CSS

Source: https://tailwindcss.com/docs/upgrade-guide

Prefer CSS variables over the theme() function for theme value access. Use CSS variable names with theme() function in contexts where variables aren't supported, such as media queries.

```css
.my-class {
  background-color: var(--color-red-500);
}
```

```css
@media (width >= theme(--breakpoint-xl)) {
  /* ... */
}
```

--------------------------------

### Reset Element Width Conditionally with Tailwind CSS `w-auto`

Source: https://tailwindcss.com/docs/width

This example demonstrates how to use the Tailwind CSS `w-auto` utility to reset an element's width under specific conditions, such as at a particular breakpoint. Here, `md:w-auto` ensures the width is `auto` on medium screens and above, overriding `w-full`.

```html
<div class="w-full md:w-auto">  <!-- ... --></div>
```

--------------------------------

### Apply uniform gap in Tailwind CSS Grid

Source: https://tailwindcss.com/docs/gap

Demonstrates how to use `gap-<number>` utilities like `gap-4` to set a uniform gap between both rows and columns in a Tailwind CSS grid layout.

```html
<div class="grid grid-cols-2 gap-4">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div></div>
```

--------------------------------

### Set Custom Hex Text Decoration Color in Tailwind CSS

Source: https://tailwindcss.com/docs/text-decoration-color

This example shows how to apply a completely custom text decoration color using an arbitrary hex value. The `decoration-[<value>]` syntax allows you to specify any valid CSS color value directly, such as `decoration-[#50d71e]`, which will be applied to the `text-decoration-color` property.

```html
<p class="decoration-[#50d71e] ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Distribute rows with space evenly using Tailwind CSS

Source: https://tailwindcss.com/docs/align-content

This example illustrates the `content-evenly` utility class in Tailwind CSS to distribute rows in a container, ensuring equal space around each item and between items. This class applies the CSS property `align-content: space-evenly;` to the container.

```html
<div class="grid h-56 grid-cols-3 content-evenly gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div>  <div>05</div></div>
```

--------------------------------

### Set Tailwind CSS mask-position with custom arbitrary values

Source: https://tailwindcss.com/docs/mask-position

This example illustrates how to apply a custom `mask-position` value using Tailwind CSS's arbitrary value syntax, `mask-position-[<value>]`. This allows for highly specific positioning not covered by predefined classes, such as `center top 1rem`. The utility is applied directly to an HTML element.

```html
<div class="mask-position-[center_top_1rem] ...">  <!-- ... --></div>
```

--------------------------------

### Apply object-position utilities in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/object-position

This example demonstrates how to use various Tailwind CSS `object-position` utility classes like `object-top-left`, `object-center`, and `object-bottom-right` to control the positioning of a replaced element's content within its container. These classes directly map to standard CSS `object-position` values.

```html
<img class="size-24 object-top-left ..." src="/img/mountains.jpg" /><img class="size-24 object-top ..." src="/img/mountains.jpg" /><img class="size-24 object-top-right ..." src="/img/mountains.jpg" /><img class="size-24 object-left ..." src="/img/mountains.jpg" /><img class="size-24 object-center ..." src="/img/mountains.jpg" /><img class="size-24 object-right ..." src="/img/mountains.jpg" /><img class="size-24 object-bottom-left ..." src="/img/mountains.jpg" /><img class="size-24 object-bottom ..." src="/img/mountains.jpg" /><img class="size-24 object-bottom-right ..." src="/img/mountains.jpg" />
```

--------------------------------

### Enable PostCSS support in Ember CLI build configuration

Source: https://tailwindcss.com/docs/installation/framework-guides/emberjs

Modifies the `ember-cli-build.js` file to configure Webpack within Embroider to process `.css` files using `postcss-loader`. This step ensures that PostCSS can transform CSS files in the Ember.js build pipeline, allowing Tailwind CSS to function correctly.

```javascript
'use strict';const EmberApp = require('ember-cli/lib/broccoli/ember-app');module.exports = function (defaults) {  const app = new EmberApp(defaults, {    // Add options here  });  const { Webpack } = require('@embroider/webpack');  return require('@embroider/compat').compatBuild(app, Webpack, {    skipBabel: [      {        package: 'qunit',      },    ],    packagerOptions: {      webpackConfig: {        module: {          rules: [            {              test: /\.css$/i,              use: ['postcss-loader'],            },          ],
        },
      },
    },
  });
};
```

--------------------------------

### Stretch rows to fill available space using Tailwind CSS

Source: https://tailwindcss.com/docs/align-content

This example demonstrates the `content-stretch` utility class in Tailwind CSS to allow content items to fill the available space along the container’s cross axis. This class applies the CSS property `align-content: stretch;` to the container.

```html
<div class="grid h-56 grid-cols-3 content-stretch gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div>  <div>05</div></div>
```

--------------------------------

### Implement Tailwind CSS Table Layouts with Utility Classes

Source: https://tailwindcss.com/docs/display

Illustrates how to construct table-like structures using Tailwind CSS utilities such as `table`, `table-row`, `table-cell`, `table-header-group`, and `table-row-group`. This approach allows for semantic table-like rendering using div elements, providing flexibility in styling.

```html
<div class="table w-full ...">  <div class="table-header-group ...">    <div class="table-row">      <div class="table-cell text-left ...">Song</div>      <div class="table-cell text-left ...">Artist</div>      <div class="table-cell text-left ...">Year</div>    </div>  </div>  <div class="table-row-group">    <div class="table-row">      <div class="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>      <div class="table-cell ...">Malcolm Lockyer</div>      <div class="table-cell ...">1961</div>    </div>    <div class="table-row">      <div class="table-cell ...">Witchy Woman</div>      <div class="table-cell ...">The Eagles</div>      <div class="table-cell ...">1972</div>    </div>    <div class="table-row">      <div class="table-cell ...">Shining Star</div>      <div class="table-cell ...">Earth, Wind, and Fire</div>      <div class="table-cell ...">1975</div>    </div>  </div></div>
```

--------------------------------

### Set object-position using CSS variable in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/object-position

This example shows how to apply a custom `object-position` using a CSS variable with Tailwind CSS's `object-(<custom-property>)` syntax. This shorthand automatically wraps the custom property in `var()`, enabling dynamic positioning controlled by CSS variables.

```html
<img class="object-(--my-object) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Collapse Table Row with Tailwind CSS `collapse` Utility

Source: https://tailwindcss.com/docs/visibility

This HTML table example shows how to use the `collapse` utility class to hide a table row (`<tr>`) or column. Unlike `display: none`, `collapse` hides the element without impacting the layout or size of other table rows and columns, making it suitable for dynamically toggling table visibility.

```html
<table>  <thead>    <tr>      <th>Invoice #</th>      <th>Client</th>      <th>Amount</th>    </tr>  </thead>  <tbody>    <tr>      <td>#100</td>      <td>Pendant Publishing</td>      <td>$2,000.00</td>    </tr>    <tr class="collapse">      <td>#101</td>      <td>Kruger Industrial Smoothing</td>      <td>$545.00</td>    </tr>    <tr>      <td>#102</td>      <td>J. Peterman</td>      <td>$10,000.25</td>    </tr>  </tbody></table>
```

--------------------------------

### Apply Fixed Positioning in Tailwind CSS

Source: https://tailwindcss.com/docs/position

This HTML snippet demonstrates the `fixed` utility class in Tailwind CSS. It shows how an element can be positioned relative to the browser viewport, remaining in place even when the page is scrolled. The example positions a 'Contacts' header fixed at the top of the screen.

```html
<div class="relative">  <div class="fixed top-0 right-0 left-0">Contacts</div>  <div>    <div>      <img src="/img/andrew.jpg" />      <strong>Andrew Alfred</strong>    </div>    <div>      <img src="/img/debra.jpg" />      <strong>Debra Houston</strong>    </div>    <!-- ... -->  </div></div>
```

--------------------------------

### Apply custom column width using CSS variables in Tailwind CSS

Source: https://tailwindcss.com/docs/columns

This example shows how to use the `columns-(<custom-property>)` syntax in Tailwind CSS to apply a custom column width defined by a CSS variable. This is a shorthand for `columns-[var(<custom-property>)]`, promoting reusability and maintainability. Input is an HTML `div` with a `columns-(--my-columns)` class, referencing a CSS variable.

```html
<div class="columns-(--my-columns) ...">  <!-- ... --></div>
```

--------------------------------

### Apply source() Modifier to Tailwind CSS Utilities Import (CSS)

Source: https://tailwindcss.com/docs/preflight

This example demonstrates how to apply the `source()` modifier to the `utilities.css` import in Tailwind CSS. The `source(none)` modifier specifically affects source detection for generated utilities, allowing control over how source maps or other source-related features behave in the build process.

```CSS
@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@import "tailwindcss/utilities.css" layer(utilities) source(none);
```

--------------------------------

### Remove Drop Shadow with Tailwind CSS Utility

Source: https://tailwindcss.com/docs/filter-drop-shadow

Use the drop-shadow-none utility class to remove an existing drop shadow from an element. The example shows how to conditionally remove drop shadows in dark mode using the dark: variant modifier.

```html
<svg class="drop-shadow-lg dark:drop-shadow-none">  <!-- ... --></svg>
```

--------------------------------

### Use Custom Themed Animation in Markup

Source: https://tailwindcss.com/docs/animation

Shows how to use a custom animation utility that was defined in the theme configuration. Once defined, custom animations can be used like any built-in animation utility.

```html
<div class="animate-wiggle">
  <!-- ... -->
</div>
```

--------------------------------

### Map Tailwind `bg-*` Classes to CSS Background Colors

Source: https://tailwindcss.com/docs/background-color

These examples illustrate the direct correspondence between Tailwind CSS background color utility classes (e.g., `bg-lime-500`) and their generated CSS `background-color` property values. The CSS typically uses custom properties (`var(--color-...)`) which are often defined with Oklch color values, providing a robust and flexible color system.

```tailwind
bg-lime-500
```

```css
background-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */
```

```tailwind
bg-lime-600
```

```css
background-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */
```

```tailwind
bg-lime-700
```

```css
background-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */
```

```tailwind
bg-lime-800
```

```css
background-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */
```

```tailwind
bg-lime-900
```

```css
background-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */
```

```tailwind
bg-lime-950
```

```css
background-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */
```

```tailwind
bg-green-50
```

```css
background-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */
```

```tailwind
bg-green-100
```

```css
background-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */
```

```tailwind
bg-green-200
```

```css
background-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */
```

```tailwind
bg-green-300
```

```css
background-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */
```

```tailwind
bg-green-400
```

```css
background-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */
```

```tailwind
bg-green-500
```

```css
background-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */
```

```tailwind
bg-green-600
```

```css
background-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */
```

```tailwind
bg-green-700
```

```css
background-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */
```

```tailwind
bg-green-800
```

```css
background-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */
```

```tailwind
bg-green-900
```

```css
background-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */
```

```tailwind
bg-green-950
```

```css
background-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */
```

```tailwind
bg-emerald-50
```

```css
background-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */
```

```tailwind
bg-emerald-100
```

```css
background-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */
```

```tailwind
bg-emerald-200
```

```css
background-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */
```

```tailwind
bg-emerald-300
```

```css
background-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */
```

```tailwind
bg-emerald-400
```

```css
background-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */
```

```tailwind
bg-emerald-500
```

```css
background-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */
```

```tailwind
bg-emerald-600
```

```css
background-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */
```

```tailwind
bg-emerald-700
```

```css
background-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */
```

```tailwind
bg-emerald-800
```

```css
background-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */
```

```tailwind
bg-emerald-900
```

```css
background-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */
```

```tailwind
bg-emerald-950
```

```css
background-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */
```

```tailwind
bg-teal-50
```

```css
background-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */
```

```tailwind
bg-teal-100
```

```css
background-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */
```

```tailwind
bg-teal-200
```

```css
background-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */
```

```tailwind
bg-teal-300
```

```css
background-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */
```

```tailwind
bg-teal-400
```

```css
background-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */
```

```tailwind
bg-teal-500
```

```css
background-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */
```

```tailwind
bg-teal-600
```

```css
background-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */
```

```tailwind
bg-teal-700
```

```css
background-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */
```

```tailwind
bg-teal-800
```

```css
background-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */
```

```tailwind
bg-teal-900
```

```css
background-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */
```

```tailwind
bg-teal-950
```

```css
background-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */
```

```tailwind
bg-cyan-50
```

```css
background-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */
```

```tailwind
bg-cyan-100
```

```css
background-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */
```

```tailwind
bg-cyan-200
```

```css
background-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */
```

```tailwind
bg-cyan-300
```

```css
background-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */
```

```tailwind
bg-cyan-400
```

```css
background-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */
```

```tailwind
bg-cyan-500
```

```css
background-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */
```

```tailwind
bg-cyan-600
```

```css
background-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */
```

```tailwind
bg-cyan-700
```

```css
background-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */
```

```tailwind
bg-cyan-800
```

```css
background-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */
```

```tailwind
bg-cyan-900
```

```css
background-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */
```

```tailwind
bg-cyan-950
```

```css
background-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */
```

```tailwind
bg-sky-50
```

```css
background-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */
```

```tailwind
bg-sky-100
```

```css
background-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */
```

```tailwind
bg-sky-200
```

```css
background-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */
```

--------------------------------

### Style File Input Buttons with Tailwind CSS `file` Variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This example shows how to customize the appearance of the 'Choose File' button within an `<input type="file">` element using the `file` variant in Tailwind CSS. It applies styling for margin, border, background, padding, font, and hover states.

```html
<input type="file" class="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500 ..."/>
```

--------------------------------

### Hover Variant Device Detection - CSS

Source: https://tailwindcss.com/docs/upgrade-guide

The hover variant now only applies on devices with hover support using @media (hover: hover). Override with custom variant if touch device hover behavior is required, though treating hover as enhancement is recommended.

```css
@media (hover: hover) {
  .hover\:underline:hover {
    text-decoration: underline;
  }
}
```

```css
@custom-variant hover (&:hover);
```

--------------------------------

### Custom Animation with Arbitrary Values

Source: https://tailwindcss.com/docs/animation

Shows how to use the `animate-[<value>]` syntax to apply completely custom animation values directly in markup. This allows for one-off animations without requiring theme customization.

```html
<div class="animate-[wiggle_1s_ease-in-out_infinite] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Create Custom ARIA Variants in Tailwind CSS

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Define custom ARIA variants for non-standard or complex ARIA attributes using @custom-variant. This example creates variants for aria-sort with ascending and descending values to style table headers based on sort direction.

```css
@custom-variant aria-asc (&[aria-sort="ascending"]);
@custom-variant aria-desc (&[aria-sort="descending"]);
```

--------------------------------

### Apply Responsive Positioning with Breakpoint Variants in Tailwind CSS

Source: https://tailwindcss.com/docs/top-right-bottom-left

Shows how to use breakpoint prefixes like md: with positioning utilities to apply different position values at different screen sizes. Enables responsive design by conditionally applying positioning utilities at specific breakpoints.

```HTML
<div class="top-4 md:top-6 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Restore Tailwind CSS v3 Dialog Margins in Preflight

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4.0 Preflight removes default margins from `<dialog>` elements for consistency. This CSS snippet re-adds `margin: auto` to dialogs, allowing them to be centered by default as they were in v3.

```css
@layer base {  dialog {    margin: auto;  }}
```

--------------------------------

### Apply Backdrop Invert with CSS Variable in Tailwind CSS

Source: https://tailwindcss.com/docs/backdrop-filter-invert

This example demonstrates applying a `backdrop-filter: invert()` value using a CSS variable with Tailwind CSS. The `backdrop-invert-(<custom-property>)` syntax automatically wraps the custom property in `var()`, enabling dynamic inversion control via CSS variables.

```html
<div class="backdrop-invert-(--my-backdrop-inversion) ...">  <!-- ... --></div>
```

--------------------------------

### Set Custom Box Shadow Colors in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/box-shadow

This example illustrates how to apply specific colors to box shadows using Tailwind CSS color utilities. Classes like `shadow-cyan-500/50` allow developers to define both the color and its opacity for a shadow, enhancing visual branding. This is commonly used for interactive elements like buttons to provide visual feedback.

```html
<button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</button><button class="bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribe</button><button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button>
```

--------------------------------

### Customize Tailwind CSS Spacing Theme Variable for Border Spacing

Source: https://tailwindcss.com/docs/border-spacing

This CSS example shows how to customize the `--spacing` theme variable within a `@theme` block. Modifying this variable affects all `border-spacing-<number>` utilities, allowing for global adjustment of the spacing scale in your Tailwind CSS configuration.

```css
@theme {
  --spacing: 1px;
}
```

--------------------------------

### Tailwind CSS Special State Variants

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Variants for styling special element states including inert (non-interactive), has-[] (parent selector), in-[] (ancestor selector), open (popover/details), supports-[] (CSS feature queries), and starting-style (starting animation state).

```css
/* Inert state */
&:is([inert], [inert] *)

/* Has selector */
&:has(...)

/* In selector (ancestor) */
:where(...) &

/* Open state (popover/details) */
&:is([open], :popover-open, :open)

/* CSS supports query */
@supports (…)

/* Starting style */
@starting-style
```

--------------------------------

### Apply prefix(tw) Modifier to Tailwind CSS Theme and Utilities Imports (CSS)

Source: https://tailwindcss.com/docs/preflight

This example demonstrates applying the `prefix(tw)` modifier to both `theme.css` and `utilities.css` imports in Tailwind CSS. This modifier adds a custom prefix (e.g., `tw-`) to all generated utility classes and theme variables, effectively preventing naming conflicts with existing CSS in a project.

```CSS
@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@import "tailwindcss/theme.css" layer(theme) prefix(tw);
@import "tailwindcss/utilities.css" layer(utilities) prefix(tw);
```

--------------------------------

### Apply Neutral Stroke Colors in Tailwind CSS

Source: https://tailwindcss.com/docs/stroke

Neutral stroke color utilities starting from stroke-neutral-50 (lightest) to stroke-neutral-200 (shown). These completely desaturated neutral tones provide maximum flexibility for achromatic stroke styling across diverse design contexts.

```css
.stroke-neutral-50 { stroke: var(--color-neutral-50); /* oklch(98.5% 0 0) */ }
.stroke-neutral-100 { stroke: var(--color-neutral-100); /* oklch(97% 0 0) */ }
.stroke-neutral-200 { stroke: var(--color-neutral-200); /* oklch(92.2% 0 0) */ }
```

--------------------------------

### Apply Responsive Display Utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/display

Explains how to use responsive variants with Tailwind CSS display utilities. By prefixing a utility like `flex` with a breakpoint variant (e.g., `md:`), the display property is applied only at that screen size and above, enabling adaptive layouts.

```html
<div class="flex md:inline-flex ...">  <!-- ... --></div>
```

--------------------------------

### Apply min-height with custom arbitrary values in HTML

Source: https://tailwindcss.com/docs/min-height

Use the min-h-[<value>] syntax to set minimum height with completely custom CSS values. This allows any valid CSS measurement to be applied directly without predefined utility classes.

```html
<div class="min-h-[220px] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Conditional Styling Based on Viewport Orientation (Tailwind CSS HTML)

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This example illustrates using `portrait` and `landscape` variants to apply different styles based on the viewport's orientation. It can be used to hide content or display messages prompting users to rotate their device for an optimal experience.

```html
<div>
  <div class="portrait:hidden">
    <!-- ... -->
  </div>
  <div class="landscape:hidden">
    <p>This experience is designed to be viewed in landscape. Please rotate your device to view the site.</p>
  </div>
</div>
```

--------------------------------

### Overriding Preflight Border Reset for Third-Party Libraries in CSS

Source: https://tailwindcss.com/docs/preflight

This CSS example demonstrates how to override Preflight's default border reset for specific elements, such as those within a third-party library like Google Maps. By placing custom styles within the `@layer base` directive, it ensures that elements like `google-map *` regain their original border styles.

```css
@layer base {
  .google-map * {
    border-style: none;
  }
}
```

--------------------------------

### Independent line-height with leading utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/line-height

Use leading-<number> utilities to set line height independently of font size. This example applies different leading values (6, 7, 8) to paragraphs with text-sm font size, allowing flexible control over line spacing.

```html
<p class="text-sm leading-6">So I started to walk into the water...</p>
<p class="text-sm leading-7">So I started to walk into the water...</p>
<p class="text-sm leading-8">So I started to walk into the water...</p>
```

--------------------------------

### Apply Custom CSS Variable Stroke Color to SVG in Tailwind CSS

Source: https://tailwindcss.com/docs/stroke

This example demonstrates how to use a CSS variable as a stroke color with the `stroke-(<custom-property>)` syntax. This is a convenient shorthand for `stroke-[var(<custom-property>)]`, enabling dynamic color changes via CSS variables.

```html
<svg class="stroke-(--my-stroke-color) ...">  <!-- ... --></svg>
```

--------------------------------

### Apply responsive mask-composite utilities in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/mask-composite

This snippet illustrates how to apply `mask-composite` utilities conditionally based on screen size using Tailwind CSS responsive prefixes. It demonstrates changing the mask composition from `mask-add` to `md:mask-subtract` at medium breakpoints and above, allowing for adaptive designs.

```html
<div class="mask-add md:mask-subtract ...">  <!-- ... --></div>
```

--------------------------------

### Apply Text Shadow Color Utilities - Tailwind CSS HTML

Source: https://tailwindcss.com/docs/text-shadow

HTML examples demonstrating how to apply Tailwind CSS text-shadow color utility classes to elements. Each class applies a specific color from the palette to the text shadow. Classes follow the naming convention text-shadow-[color]-[shade] where shade ranges from 50 to 950.

```html
<p class="text-shadow-yellow-100">Yellow 100 text shadow</p>
<p class="text-shadow-yellow-500">Yellow 500 text shadow</p>
<p class="text-shadow-yellow-900">Yellow 900 text shadow</p>
<p class="text-shadow-lime-200">Lime 200 text shadow</p>
<p class="text-shadow-lime-600">Lime 600 text shadow</p>
<p class="text-shadow-green-300">Green 300 text shadow</p>
<p class="text-shadow-green-700">Green 700 text shadow</p>
<p class="text-shadow-emerald-400">Emerald 400 text shadow</p>
<p class="text-shadow-emerald-800">Emerald 800 text shadow</p>
<p class="text-shadow-teal-100">Teal 100 text shadow</p>

```

--------------------------------

### Integrate Tailwind CSS v4 with Vite using Dedicated Plugin

Source: https://tailwindcss.com/docs/upgrade-guide

This `vite.config.ts` snippet demonstrates how to configure Vite for Tailwind CSS v4 by using the new dedicated `@tailwindcss/vite` plugin. This approach offers improved performance and a better developer experience compared to the PostCSS plugin. It imports `defineConfig` from `vite` and `tailwindcss` from `@tailwindcss/vite`.

```typescript
import { defineConfig } from "vite";import tailwindcss from "@tailwindcss/vite";export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
});
```

--------------------------------

### Unstyling Default List Elements with Preflight CSS

Source: https://tailwindcss.com/docs/preflight

This CSS snippet from Preflight removes default list styling, setting `list-style` to `none` for ordered, unordered, and menu lists. This ensures lists start without bullets or numbers, allowing for custom styling using Tailwind utilities.

```css
ol,ul,menu {
  list-style: none;
}
```

--------------------------------

### Use responsive white-space utility with breakpoint prefix

Source: https://tailwindcss.com/docs/white-space

Prefix a white-space utility with a breakpoint variant like md: to apply the utility only at medium screen sizes and above. This enables different whitespace behavior across responsive breakpoints.

```html
<p class="whitespace-pre md:whitespace-normal ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Custom CSS button component with Tailwind theme variables

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Demonstrates creating a custom CSS class for a button component using Tailwind's @layer directive and CSS custom properties for theme consistency. This approach is suitable for simple components in templating languages where creating a full template partial would be excessive.

```css
@import "tailwindcss";

@layer components {
  .btn-primary {
    border-radius: calc(infinity * 1px);
    background-color: var(--color-violet-500);
    padding-inline: --spacing(5);
    padding-block: --spacing(2);
    font-weight: var(--font-weight-semibold);
    color: var(--color-white);
    box-shadow: var(--shadow-md);
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-violet-700);
      }
    }
  }
}
```

--------------------------------

### Align rows to the end of the cross axis using Tailwind CSS

Source: https://tailwindcss.com/docs/align-content

This example illustrates the use of the `content-end` utility class in Tailwind CSS to pack rows in a grid container against the end of the cross axis. This class applies the CSS property `align-content: flex-end;` to the container.

```html
<div class="grid h-56 grid-cols-3 content-end gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div>  <div>05</div></div>
```

--------------------------------

### Style Active Text Selection with Tailwind CSS `selection` Variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This example demonstrates how to customize the background and text color of actively selected text using the `selection` variant in Tailwind CSS. The `selection` variant is inheritable and can be applied to parent elements or even the `<body>` for site-wide consistency.

```html
<div class="selection:bg-fuchsia-300 selection:text-fuchsia-900">  <p>    So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my    way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all    living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.  </p></div>
```

```html
<html>  <head>    <!-- ... -->  </head>  <body class="selection:bg-pink-300">    <!-- ... -->  </body></html>
```

--------------------------------

### Import Tailwind CSS Definitions with @reference in Vue/Svelte

Source: https://tailwindcss.com/docs/upgrade-guide

In Tailwind CSS v4, stylesheets bundled separately (e.g., Vue/Svelte `<style>` blocks, CSS modules) do not automatically access global theme variables or custom utilities. Use the `@reference` directive to import these definitions without duplicating CSS, making them available for `@apply` directives.

```Vue
<template>  <h1>Hello world!</h1></template><style>  @reference "../../app.css";  h1 {    @apply text-2xl font-bold text-red-500;  }</style>
```

--------------------------------

### Apply Tailwind CSS Theme Variables Directly in Vue/Svelte

Source: https://tailwindcss.com/docs/upgrade-guide

As an alternative to `@apply` for frameworks like Vue or Svelte, you can directly use Tailwind's CSS theme variables. This approach can simplify your styling and potentially improve performance by reducing the need for Tailwind to process these styles.

```Vue
<template>  <h1>Hello world!</h1></template><style>  h1 {    color: var(--text-red-500);  }</style>
```

--------------------------------

### Dynamic Button Styling with Inline Styles in React

Source: https://tailwindcss.com/docs/styling-with-utility-classes

React component demonstrating inline styles for dynamic color values from props combined with Tailwind utility classes. Accepts buttonColor and textColor as dynamic props to style a button element while maintaining responsive design through utility classes.

```jsx
export function BrandedButton({ buttonColor, textColor, children }) {
  return (
    <button
      style={{
        backgroundColor: buttonColor,
        color: textColor,
      }}
      className="rounded-md px-3 py-1.5 font-medium"
    >
      {children}
    </button>
  );
}
```

--------------------------------

### Apply outline styles to buttons with Tailwind CSS

Source: https://tailwindcss.com/docs/outline-style

Demonstrates using outline-style utilities (outline-solid, outline-dashed, outline-dotted, outline-double) on button elements with outline width and offset configuration. Shows basic implementation of different outline style variations.

```html
<button class="outline-2 outline-offset-2 outline-solid ...">Button A</button>
<button class="outline-2 outline-offset-2 outline-dashed ...">Button B</button>
<button class="outline-2 outline-offset-2 outline-dotted ...">Button C</button>
<button class="outline-3 outline-offset-2 outline-double ...">Button D</button>
```

--------------------------------

### Using Arbitrary Opacity Values and CSS Variables with Tailwind CSS Colors (HTML)

Source: https://tailwindcss.com/docs/colors

This example showcases advanced opacity control in Tailwind CSS, allowing for arbitrary percentage values (e.g., `bg-pink-500/[71.37%]`) and dynamic opacity using CSS variables (e.g., `bg-cyan-400/(--my-alpha-value)`). This provides maximum flexibility for color transparency.

```html
<div class="bg-pink-500/[71.37%]"><!-- ... --></div><div class="bg-cyan-400/(--my-alpha-value)"><!-- ... --></div>
```

--------------------------------

### Tailwind CSS Utilities for `border-inline-start-color`

Source: https://tailwindcss.com/docs/border-color

These Tailwind CSS utility classes are used to set the `border-inline-start-color` property, which defines the color of an element's logical inline start border. They map to CSS custom properties (e.g., `--color-lime-600`) to ensure consistent color usage across a design system. Each class corresponds to a specific color and shade, allowing for fine-grained control over border styling.

```css
border-inline-start-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */
```

```css
border-inline-start-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */
```

```css
border-inline-start-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */
```

```css
border-inline-start-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */
```

```css
border-inline-start-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */
```

```css
border-inline-start-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */
```

```css
border-inline-start-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */
```

```css
border-inline-start-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */
```

```css
border-inline-start-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */
```

```css
border-inline-start-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */
```

```css
border-inline-start-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */
```

```css
border-inline-start-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */
```

```css
border-inline-start-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */
```

```css
border-inline-start-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */
```

```css
border-inline-start-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */
```

```css
border-inline-start-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */
```

```css
border-inline-start-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */
```

```css
border-inline-start-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */
```

```css
border-inline-start-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */
```

```css
border-inline-start-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */
```

```css
border-inline-start-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */
```

```css
border-inline-start-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */
```

```css
border-inline-start-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */
```

```css
border-inline-start-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */
```

```css
border-inline-start-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */
```

```css
border-inline-start-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */
```

```css
border-inline-start-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */
```

```css
border-inline-start-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */
```

```css
border-inline-start-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */
```

```css
border-inline-start-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */
```

```css
border-inline-start-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */
```

```css
border-inline-start-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */
```

```css
border-inline-start-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */
```

```css
border-inline-start-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */
```

```css
border-inline-start-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */
```

```css
border-inline-start-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */
```

```css
border-inline-start-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */
```

```css
border-inline-start-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */
```

```css
border-inline-start-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */
```

```css
border-inline-start-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */
```

```css
border-inline-start-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */
```

```css
border-inline-start-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */
```

```css
border-inline-start-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */
```

```css
border-inline-start-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */
```

```css
border-inline-start-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */
```

--------------------------------

### Apply Tailwind CSS fill-cyan-300 utility

Source: https://tailwindcss.com/docs/fill

Applies the `fill-cyan-30

--------------------------------

### Load Legacy Tailwind CSS Plugin with @plugin Directive (CSS)

Source: https://tailwindcss.com/docs/functions-and-directives

The `@plugin` directive enables loading legacy JavaScript-based Tailwind CSS plugins directly from CSS. It accepts either a package name (e.g., `@tailwindcss/typography`) or a local file path to the plugin. This facilitates integrating existing v3.x plugins into a v4.0 setup.

```css
@plugin "@tailwindcss/typography";
```

--------------------------------

### Apply basic transition timing functions with Tailwind CSS

Source: https://tailwindcss.com/docs/transition-timing-function

Demonstrates how to apply standard transition timing functions like `ease-in`, `ease-out`, and `ease-in-out` to HTML elements using Tailwind CSS utility classes. These classes control the easing curve of an element's transition.

```html
<button class="duration-300 ease-in ...">Button A</button><button class="duration-300 ease-out ...">Button B</button><button class="duration-300 ease-in-out ...">Button C</button>
```

--------------------------------

### Combine Value Types with Multiple Arguments in CSS Utilities

Source: https://tailwindcss.com/docs/adding-custom-styles

Demonstrates how the `--value()` function can accept multiple arguments, resolving them from left to right. This provides a concise way to support various value types (theme, bare, arbitrary) without needing separate declarations, and allows for transformations like converting an integer to a percentage.

```css
@theme {
  --tab-size-github: 8;
}@utility tab-* {
  tab-size: --value(--tab-size-*, integer, [integer]);
}
```

```css
@utility opacity-* {
  opacity: calc(--value(integer) * 1%);
  opacity: --value(--opacity-*, [percentage]);
}
```

--------------------------------

### Apply backdrop sepia filter with Tailwind CSS utility classes

Source: https://tailwindcss.com/docs/backdrop-filter-sepia

Use backdrop-sepia utility classes to apply sepia filter effects to an element's backdrop. The basic backdrop-sepia class applies 100% sepia, while backdrop-sepia-<number> variants allow control over the intensity (0-100%). This example demonstrates three different sepia intensity levels applied to background images.

```html
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-sepia-0 ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-sepia-50 ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-sepia ..."></div>
</div>
```

--------------------------------

### Apply responsive background-clip utilities in HTML (Tailwind CSS)

Source: https://tailwindcss.com/docs/background-clip

Shows how to apply `background-clip` utilities conditionally based on screen size using responsive prefixes like `md:` in Tailwind CSS. This enables developers to implement different background clipping behaviors on various breakpoints, facilitating adaptive and responsive web design.

```html
<div class="bg-clip-border md:bg-clip-padding ...">  <!-- ... --></div>
```

--------------------------------

### Use custom container basis utility in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-basis

Shows how to apply a custom `basis-4xs` utility in HTML after it has been defined in the Tailwind CSS theme configuration. This demonstrates the usage of a newly added container scale value.

```html
<div class="basis-4xs">  <!-- ... --></div>
```

--------------------------------

### Basic max-width with spacing scale in HTML

Source: https://tailwindcss.com/docs/max-width

Apply fixed maximum widths using numeric utilities based on the spacing scale. The max-w-<number> utilities set max-width to calc(var(--spacing) * <number>). Combine with w-full to allow elements to shrink below the maximum width on smaller viewports.

```html
<div class="w-full max-w-96 ...">max-w-96</div>
<div class="w-full max-w-80 ...">max-w-80</div>
<div class="w-full max-w-64 ...">max-w-64</div>
<div class="w-full max-w-48 ...">max-w-48</div>
<div class="w-full max-w-40 ...">max-w-40</div>
<div class="w-full max-w-32 ...">max-w-32</div>
<div class="w-full max-w-24 ...">max-w-24</div>
```

--------------------------------

### Style element based on sibling state with peer variant

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Mark a sibling element with the `peer` class and use `peer-*` variants to style target elements based on sibling state. This example shows an email input with validation feedback that appears when the input is invalid, enabling patterns like floating labels without JavaScript.

```html
<form>
  <label class="block">
    <span class="...">Email</span>
    <input type="email" class="peer ..." />
    <p class="invisible peer-invalid:visible ...">Please provide a valid email address.</p>
  </label>
</form>
```

--------------------------------

### Utilize Tailwind CSS Theme Variables in HTML Arbitrary Values

Source: https://tailwindcss.com/docs/theme

This example shows how to incorporate Tailwind CSS theme variables into arbitrary values directly within HTML. It's particularly useful when combined with CSS functions like `calc()` to create dynamic and responsive designs, such as achieving concentric border radii by subtracting a fixed pixel value from a theme variable.

```html
<div class="relative rounded-xl">
  <div class="absolute inset-px rounded-[calc(var(--radius-xl)-1px)]">
    <!-- ... -->
  </div>
  <!-- ... -->
</div>
```

--------------------------------

### Apply Arbitrary Background Color with Tailwind CSS (HTML)

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Demonstrates how to use Tailwind CSS's arbitrary value syntax to apply a specific, non-theme-defined background color to an HTML element. This is useful for one-off styling requirements that fall outside the configured color palette.

```HTML
<button class="bg-[#316ff6] ...">  Sign in with Facebook</button>
```

--------------------------------

### Configure Tailwind CSS Theme Variables with Prefix

Source: https://tailwindcss.com/docs/upgrade-guide

When using a prefix in Tailwind CSS v4.0, you should configure your theme variables in CSS without the prefix. The `@import` rule with `prefix(tw)` tells Tailwind to generate CSS variables that include the prefix to avoid conflicts.

```css
@import "tailwindcss" prefix(tw);@theme {  --font-display: "Satoshi", "sans-serif";  --breakpoint-3xl: 120rem;  --color-avocado-100: oklch(0.99 0 0);  --color-avocado-200: oklch(0.98 0.04 113.22);  --color-avocado-300: oklch(0.94 0.11 115.03);  /* ... */}
```

--------------------------------

### Use Simple Custom Utilities with Variants in HTML (HTML)

Source: https://tailwindcss.com/docs/adding-custom-styles

Demonstrates that custom utilities defined with `@utility` automatically support Tailwind's variants (e.g., `hover:`). This allows for responsive and interactive custom styling.

```html
<div class="hover:content-auto">  <!-- ... --></div>
```

--------------------------------

### Use CSS Variables in Vue/Svelte/Astro Components for Better Tailwind Performance

Source: https://tailwindcss.com/docs/compatibility

This snippet demonstrates using globally defined CSS variables directly within a scoped style block in a Vue component (also relevant for Svelte and Astro). This method bypasses the need for `@apply`, allowing Tailwind to avoid processing the component's CSS entirely and leading to substantial improvements in build performance.

```vue
<template>
  <button><slot /></button>
</template>
<style scoped>
  button {
    background-color: var(--color-blue-500);
  }
</style>
```

--------------------------------

### Apply `snap-always` for forced scroll snap stops in Tailwind CSS

Source: https://tailwindcss.com/docs/scroll-snap-stop

This example demonstrates how to use the `snap-always` utility with `snap-mandatory` to ensure a scroll container always stops at a snap position before allowing the user to scroll further. It's typically applied to child elements within a scroll-snap container to create a carousel-like effect.

```html
<div class="snap-x snap-mandatory ...">  <div class="snap-center snap-always ...">    <img src="/img/vacation-01.jpg" />  </div>  <div class="snap-center snap-always ...">    <img src="/img/vacation-02.jpg" />  </div>  <div class="snap-center snap-always ...">    <img src="/img/vacation-03.jpg" />  </div>  <div class="snap-center snap-always ...">    <img src="/img/vacation-04.jpg" />  </div>  <div class="snap-center snap-always ...">    <img src="/img/vacation-05.jpg" />  </div>  <div class="snap-center snap-always ...">    <img src="/img/vacation-06.jpg" />  </div></div>
```

--------------------------------

### Apply Responsive Cursor Styles with Tailwind CSS

Source: https://tailwindcss.com/docs/cursor

Explains how to make cursor styles responsive using Tailwind CSS breakpoint variants. By prefixing a `cursor` utility with a breakpoint like `md:`, the cursor style will only apply at that screen size and above, enabling adaptive UI behavior.

```html
<button class="cursor-not-allowed md:cursor-auto ...">  <!-- ... --></button>
```

--------------------------------

### Custom line-clamp with CSS custom property

Source: https://tailwindcss.com/docs/line-clamp

Shows the line-clamp-(<custom-property>) syntax as a shorthand for line-clamp-[var(<custom-property>)]. This approach automatically wraps the custom property in the var() function, allowing for cleaner syntax when using CSS variables to control line clamping.

```html
<p class="line-clamp-(--my-line-count) ...">
  Lorem ipsum dolor sit amet...
</p>
```

--------------------------------

### Reset row alignment to normal using Tailwind CSS

Source: https://tailwindcss.com/docs/align-content

This example shows how to use the `content-normal` utility class in Tailwind CSS to pack content items in their default position, effectively resetting any `align-content` value. This class applies the CSS property `align-content: normal;` to the container.

```html
<div class="grid h-56 grid-cols-3 content-normal gap-4 ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div>  <div>05</div></div>
```

--------------------------------

### Custom max-width values with bracket notation in HTML

Source: https://tailwindcss.com/docs/max-width

Use the max-w-[<value>] syntax to apply arbitrary custom maximum width values not covered by predefined utilities. This allows pixel-perfect sizing for specific design requirements.

```html
<div class="max-w-[220px] ...">  <!-- ... --></div>
```

--------------------------------

### Applying Responsive align-self Utilities in Tailwind CSS (HTML)

Source: https://tailwindcss.com/docs/align-self

Demonstrates how to apply `align-self` utilities conditionally based on screen size using responsive design variants in Tailwind CSS. By prefixing with `md:`, the utility only takes effect at medium screen sizes and above.

```html
<div class="self-auto md:self-end ...">  <!-- ... --></div>
```

--------------------------------

### Apply min-height with custom CSS properties in HTML

Source: https://tailwindcss.com/docs/min-height

Use the min-h-(<custom-property>) syntax as shorthand for min-h-[var(<custom-property>)] to reference custom CSS properties. This automatically wraps the custom property in the var() function.

```html
<div class="min-h-(--my-min-height) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Remove Default Browser Styling with Tailwind CSS `appearance-none`

Source: https://tailwindcss.com/docs/appearance

This example demonstrates how to use the `appearance-none` utility class in Tailwind CSS to reset the default browser-specific styling on HTML form elements like `<select>`. It is commonly used when creating custom form components to provide a consistent look across different browsers.

```html
<select>  <option>Yes</option>  <option>No</option>  <option>Maybe</option></select><div class="grid">  <select class="col-start-1 row-start-1 appearance-none bg-gray-50 dark:bg-gray-800 ...">    <option>Yes</option>    <option>No</option>    <option>Maybe</option>  </select>  <svg class="pointer-events-none col-start-1 row-start-1 ...">    <!-- ... -->  </svg></div>
```

--------------------------------

### Customize Theme Colors with CSS Variables

Source: https://tailwindcss.com/docs/accent-color

Define custom color values in your Tailwind theme using CSS custom properties (--color-*). This creates new utility classes that can be used throughout your project. The example defines a custom regal-blue color that becomes available as the accent-regal-blue utility.

```css
@theme {
  --color-regal-blue: #243c5a;
}
```

--------------------------------

### Define Custom Utilities with Tailwind CSS v4.0 `@utility` API

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4.0 replaces the `@layer utilities` syntax with the new `@utility` API for defining custom utility classes, leveraging native cascade layers. This CSS snippet compares the old and new methods for defining a `tab-4` utility.

```css
@layer utilities {  .tab-4 {    tab-size: 4;  }}@utility tab-4 {  tab-size: 4;}
```

--------------------------------

### Apply Tailwind CSS `disabled` and `invalid` variants to form inputs

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This example showcases how to style form input elements based on their state using `invalid:`, `focus:`, and `disabled:` variants. It provides visual feedback for validation errors, focus states, and disabled inputs, enhancing user experience and reducing the need for complex JavaScript-based styling logic.

```html
<input  type="text"  value="tbone"  disabled  class="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 ..."/>
```

--------------------------------

### Custom Perspective with CSS Variables

Source: https://tailwindcss.com/docs/perspective

Shows how to use the perspective-(<custom-property>) syntax to reference custom CSS variables for perspective values. This is shorthand for perspective-[var(<custom-property>)] and automatically wraps the custom property in the var() function.

```html
<div class="perspective-(--my-perspective) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Control Tailwind CSS Content with CSS Variables

Source: https://tailwindcss.com/docs/content

Demonstrates using the `content-(<custom-property>)` syntax to set the content of `::before` and `::after` pseudo-elements using a CSS variable, acting as a shorthand for `content-[var(<custom-property>)]`.

```html
<p class="content-(--my-content)"></p>
```

--------------------------------

### Percentage-based max-width with fractions in HTML

Source: https://tailwindcss.com/docs/max-width

Use fractional utilities like max-w-1/2, max-w-3/4, and max-w-9/10 to set percentage-based maximum widths. These utilities calculate max-width as calc(<fraction> * 100%), allowing responsive width constraints relative to the parent container.

```html
<div class="w-full max-w-9/10 ...">max-w-9/10</div>
<div class="w-full max-w-3/4 ...">max-w-3/4</div>
<div class="w-full max-w-1/2 ...">max-w-1/2</div>
<div class="w-full max-w-1/3 ...">max-w-1/3</div>
```

--------------------------------

### Apply responsive background-position utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/background-position

This snippet demonstrates how to make `background-position` responsive using Tailwind CSS breakpoint variants. By prefixing a utility like `bg-top` with `md:`, the positioning will only apply at medium screen sizes and above, adapting the layout for different devices.

```html
<div class="bg-center md:bg-top ...">  <!-- ... --></div>
```

--------------------------------

### Apply negative hue-rotate values in HTML

Source: https://tailwindcss.com/docs/filter-hue-rotate

Use negative hue-rotate utility classes to apply negative hue rotation values to elements. The example shows applying negative rotations (-15, -45, -90 degrees) to image elements using class names like -hue-rotate-15, -hue-rotate-45, etc.

```html
<img class="-hue-rotate-15" src="/img/mountains.jpg" />
<img class="-hue-rotate-45" src="/img/mountains.jpg" />
<img class="-hue-rotate-90" src="/img/mountains.jpg" />
```

--------------------------------

### Avatar List with Loop to Eliminate Duplication in Svelte

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Svelte component using an each loop to render avatar images dynamically, eliminating utility class duplication. The class list is written once and applied to each iteration, solving the duplication problem through component logic.

```svelte
<div>
  <div class="flex items-center space-x-2 text-base">
    <h4 class="font-semibold text-slate-900">Contributors</h4>
    <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
  </div>
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    {#each contributors as user}
      <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={user.avatarUrl} alt={user.handle} />
    {/each}
  </div>
  <div class="mt-3 text-sm font-medium">
    <a href="#" class="text-blue-500">+ 198 others</a>
  </div>
</div>
```

--------------------------------

### Use Logical Properties for Directional Positioning in Tailwind CSS

Source: https://tailwindcss.com/docs/top-right-bottom-left

Demonstrates using start-<number> and end-<number> utilities for logical positioning that adapts to text direction. Automatically maps to left/right based on whether the document is left-to-right (LTR) or right-to-left (RTL).

```HTML
<div dir="ltr">
  <div class="relative size-32 ...">
    <div class="absolute start-0 top-0 size-14 ..."></div>
  </div>
  <div>
    <div dir="rtl">
      <div class="relative size-32 ...">
        <div class="absolute start-0 top-0 size-14 ..."></div>
      </div>
      <div></div>
    </div>
  </div>
</div>
```

--------------------------------

### Apply break-inside utilities in HTML

Source: https://tailwindcss.com/docs/break-inside

Demonstrates applying `break-inside-avoid-column` to a paragraph within a multi-column layout to prevent a column break inside that specific element. This controls how content flows across columns.

```html
<div class="columns-2">  <p>Well, let me tell you something, ...</p>  <p class="break-inside-avoid-column">Sure, go ahead, laugh...</p>  <p>Maybe we can live without...</p>  <p>Look. If you think this is...</p></div>
```

--------------------------------

### Apply custom text indentation values with bracket notation

Source: https://tailwindcss.com/docs/text-indent

Use the indent-[<value>] syntax to set text indentation with completely custom values not in the default scale. This allows arbitrary CSS values like percentages, pixels, or other units to be applied directly.

```html
<p class="indent-[50%] ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Responsive grid-auto-flow Design - Tailwind HTML

Source: https://tailwindcss.com/docs/grid-auto-flow

Shows responsive design pattern for grid-auto-flow utilities using breakpoint variants. The md: prefix applies grid-flow-row only at medium screen sizes and above, while defaulting to grid-flow-col on smaller screens.

```html
<div class="grid grid-flow-col md:grid-flow-row ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Border Inline End Color with Tailwind CSS Utility Classes

Source: https://tailwindcss.com/docs/border-color

These examples illustrate how to use Tailwind CSS utility classes to set the `border-inline-end-color` property. Each utility class, such as `border-e-pink-500`, directly maps to a CSS declaration that utilizes a CSS variable for the color, often accompanied by an `oklch` color comment for reference. This approach enables consistent and themeable border styling on the inline-end side of an element, supporting various color palettes and shades.

```tailwindcss
border-e-pink-500
```

```css
border-inline-end-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */
```

```tailwindcss
border-e-pink-600
```

```css
border-inline-end-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */
```

```tailwindcss
border-e-pink-700
```

```css
border-inline-end-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */
```

```tailwindcss
border-e-pink-800
```

```css
border-inline-end-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */
```

```tailwindcss
border-e-pink-900
```

```css
border-inline-end-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */
```

```tailwindcss
border-e-pink-950
```

```css
border-inline-end-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */
```

```tailwindcss
border-e-rose-50
```

```css
border-inline-end-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */
```

```tailwindcss
border-e-rose-100
```

```css
border-inline-end-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */
```

```tailwindcss
border-e-rose-200
```

```css
border-inline-end-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */
```

```tailwindcss
border-e-rose-300
```

```css
border-inline-end-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */
```

```tailwindcss
border-e-rose-400
```

```css
border-inline-end-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */
```

```tailwindcss
border-e-rose-500
```

```css
border-inline-end-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */
```

```tailwindcss
border-e-rose-600
```

```css
border-inline-end-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */
```

```tailwindcss
border-e-rose-700
```

```css
border-inline-end-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */
```

```tailwindcss
border-e-rose-800
```

```css
border-inline-end-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */
```

```tailwindcss
border-e-rose-900
```

```css
border-inline-end-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */
```

```tailwindcss
border-e-rose-950
```

```css
border-inline-end-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */
```

```tailwindcss
border-e-slate-50
```

```css
border-inline-end-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */
```

```tailwindcss
border-e-slate-100
```

```css
border-inline-end-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */
```

```tailwindcss
border-e-slate-200
```

```css
border-inline-end-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */
```

```tailwindcss
border-e-slate-300
```

```css
border-inline-end-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */
```

```tailwindcss
border-e-slate-400
```

```css
border-inline-end-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */
```

```tailwindcss
border-e-slate-500
```

```css
border-inline-end-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */
```

```tailwindcss
border-e-slate-600
```

```css
border-inline-end-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */
```

```tailwindcss
border-e-slate-700
```

```css
border-inline-end-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */
```

```tailwindcss
border-e-slate-800
```

```css
border-inline-end-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */
```

```tailwindcss
border-e-slate-900
```

```css
border-inline-end-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */
```

```tailwindcss
border-e-slate-950
```

```css
border-inline-end-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */
```

```tailwindcss
border-e-gray-50
```

```css
border-inline-end-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */
```

```tailwindcss
border-e-gray-100
```

```css
border-inline-end-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */
```

```tailwindcss
border-e-gray-200
```

```css
border-inline-end-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */
```

```tailwindcss
border-e-gray-300
```

```css
border-inline-end-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */
```

```tailwindcss
border-e-gray-400
```

```css
border-inline-end-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */
```

```tailwindcss
border-e-gray-500
```

```css
border-inline-end-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */
```

```tailwindcss
border-e-gray-600
```

```css
border-inline-end-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */
```

```tailwindcss
border-e-gray-700
```

```css
border-inline-end-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */
```

```tailwindcss
border-e-gray-800
```

```css
border-inline-end-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */
```

```tailwindcss
border-e-gray-900
```

```css
border-inline-end-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */
```

```tailwindcss
border-e-gray-950
```

```css
border-inline-end-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */
```

```tailwindcss
border-e-zinc-50
```

```css
border-inline-end-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */
```

```tailwindcss
border-e-zinc-100
```

```css
border-inline-end-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */
```

```tailwindcss
border-e-zinc-200
```

```css
border-inline-end-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */
```

```tailwindcss
border-e-zinc-300
```

```css
border-inline-end-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */
```

```tailwindcss
border-e-zinc-400
```

```css
border-inline-end-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */
```

```tailwindcss
border-e-zinc-500
```

```css
border-inline-end-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */
```

```tailwindcss
border-e-zinc-600
```

```css
border-inline-end-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */
```

```tailwindcss
border-e-zinc-700
```

```css
border-inline-end-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */
```

--------------------------------

### Apply responsive font-size utilities in HTML

Source: https://tailwindcss.com/docs/font-size

Use breakpoint prefixes like md:, lg:, etc. to apply font-size utilities at specific screen sizes. This enables responsive typography that adapts to different viewport widths.

```html
<p class="text-sm md:text-base ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Preserve Tailwind CSS v3 Placeholder Color in Preflight

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4.0 Preflight simplifies placeholder text color to use the current text color at 50% opacity. This CSS snippet allows you to revert to the v3 behavior, making placeholder text use your configured `gray-400` color by default.

```css
@layer base {  input::placeholder,  textarea::placeholder {    color: var(--color-gray-400);  }}
```

--------------------------------

### Apply basic background-clip utilities in HTML (Tailwind CSS)

Source: https://tailwindcss.com/docs/background-clip

Demonstrates the use of `bg-clip-border`, `bg-clip-padding`, and `bg-clip-content` utilities to define the bounding box for an element's background in Tailwind CSS. These utilities control how the background extends relative to the element's border, padding, or content area, allowing precise control over background visibility.

```html
<div class="border-4 bg-indigo-500 bg-clip-border p-3"></div><div class="border-4 bg-indigo-500 bg-clip-padding p-3"></div><div class="border-4 bg-indigo-500 bg-clip-content p-3"></div>
```

--------------------------------

### Set a custom aspect ratio with arbitrary values in Tailwind CSS

Source: https://tailwindcss.com/docs/aspect-ratio

Shows how to use the `aspect-[<value>]` syntax to define a completely custom aspect ratio using an arbitrary value, such as a CSS `calc()` function. This provides flexibility beyond predefined ratios for unique layout requirements.

```html
<img class="aspect-[calc(4*3+1)/3] ..." src="/img/villas.jpg" />
```

--------------------------------

### Apply Responsive Brightness Filters with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-brightness

This code demonstrates how to apply brightness filters conditionally based on screen size using Tailwind CSS responsive variants. By prefixing utilities like `brightness-110` with `md:brightness-150`, the brightness changes only at medium screen sizes and above, adapting to different viewports.

```html
<img class="brightness-110 md:brightness-150 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Adjust Drop Shadow Opacity with Tailwind CSS Modifiers

Source: https://tailwindcss.com/docs/filter-drop-shadow

Use opacity modifiers (e.g., /25, /50) with drop-shadow utilities to control shadow transparency. The example shows how to apply the same drop-shadow-xl class with different opacity levels (default, 25%, 50%) to create varying shadow intensities on filled SVG elements.

```html
<svg class="fill-white drop-shadow-xl ...">...</svg>
<svg class="fill-white drop-shadow-xl/25 ...">...</svg>
<svg class="fill-white drop-shadow-xl/50 ...">...</svg>
```

--------------------------------

### Registering Additional Tailwind Source Paths in CSS

Source: https://tailwindcss.com/docs/detecting-classes-in-source-files

This CSS snippet demonstrates how to use `@source` to explicitly register additional directories for Tailwind to scan for classes. This is particularly useful for including external libraries or files that might otherwise be ignored by default, such as those in `node_modules`.

```css
@import "tailwindcss";
@source "../node_modules/@acmecorp/ui-lib";
```

--------------------------------

### Retrieve Resolved Tailwind CSS Theme Variable Values in JavaScript

Source: https://tailwindcss.com/docs/theme

This JavaScript example demonstrates how to programmatically access the computed, resolved value of a CSS theme variable. By using `getComputedStyle` on `document.documentElement` and then `getPropertyValue`, you can retrieve the current value of any CSS variable defined on the root element, which is useful for dynamic calculations or logic based on your theme.

```javascript
let styles = getComputedStyle(document.documentElement);
let shadow = styles.getPropertyValue("--shadow-xl");
```

--------------------------------

### Migrate Tailwind CSS v3 `outline` and `outline-none` utilities to v4

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 updates the `outline` utility to default `outline-width: 1px` and `outline-<number>` to `outline-style: solid`. The `outline-none` utility is renamed to `outline-hidden`, with a new `outline-none` truly setting `outline-style: none`. Projects should replace `outline outline-2` with `outline-2` and `focus:outline-none` with `focus:outline-hidden`.

```html
<input class="outline outline-2" /><input class="outline-2" />
```

```html
<input class="focus:outline-none" /><input class="focus:outline-hidden" />
```

--------------------------------

### Span Columns with Tailwind CSS `col-span-<number>`

Source: https://tailwindcss.com/docs/grid-column

Demonstrates how to use `col-span-<number>` utilities in Tailwind CSS to make an element span a specific number of grid columns. This example shows elements spanning 2 and 4 columns within a 3-column grid layout, illustrating basic column spanning functionality.

```html
<div class="grid grid-cols-3 gap-4">
  <div class="...">01</div>
  <div class="...">02</div>
  <div class="...">03</div>
  <div class="col-span-2 ...">04</div>
  <div class="...">05</div>
  <div class="...">06</div>
  <div class="col-span-2 ...">07</div></div>
```

--------------------------------

### Create Block-Level Flex Containers with Tailwind CSS Flex Utility

Source: https://tailwindcss.com/docs/display

This snippet shows how to use the `flex` utility in Tailwind CSS to create a block-level flex container. Applying `flex` enables a flexible box layout for direct children, allowing for powerful alignment and distribution of items. It's commonly used for one-dimensional layouts.

```html
<div class="flex items-center">  <img src="path/to/image.jpg" />  <div>    <strong>Andrew Alfred</strong>    <span>Technical advisor</span>  </div></div>
```

--------------------------------

### Understand Generated CSS Variables with Tailwind CSS Prefix

Source: https://tailwindcss.com/docs/upgrade-guide

This CSS snippet illustrates how Tailwind CSS v4.0 generates CSS variables when a prefix is configured. The prefix (e.g., `--tw-`) is automatically added to theme variables to prevent naming conflicts with existing CSS variables in your project.

```css
:root {  --tw-font-display: "Satoshi", "sans-serif";  --tw-breakpoint-3xl: 120rem;  --tw-color-avocado-100: oklch(0.99 0 0);  --tw-color-avocado-200: oklch(0.98 0.04 113.22);  --tw-color-avocado-300: oklch(0.94 0.11 115.03);  /* ... */}
```

--------------------------------

### Use CSS `calc()` with Tailwind CSS Arbitrary Values (HTML)

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Shows how to embed CSS `calc()` functions directly within Tailwind CSS arbitrary values. This enables dynamic calculations within utility classes, allowing for flexible sizing and positioning even when referencing theme values.

```HTML
<div class="max-h-[calc(100dvh-(--spacing(6)))]">  <!-- ... --></div>
```

--------------------------------

### Apply a custom aspect ratio using a CSS variable in Tailwind CSS

Source: https://tailwindcss.com/docs/aspect-ratio

Demonstrates applying an aspect ratio using a CSS variable with the `aspect-(<custom-property>)` shorthand syntax. This is equivalent to `aspect-[var(<custom-property>)]`, allowing for dynamic aspect ratio control via CSS variables.

```html
<img class="aspect-(--my-aspect-ratio) ..." src="/img/villas.jpg" />
```

--------------------------------

### Create Conic Gradient Backgrounds with Tailwind CSS

Source: https://tailwindcss.com/docs/background-image

Use bg-conic and bg-conic-<angle> utilities with color stop utilities to create conic gradients. Supports angle variants and color stop positioning for circular gradient effects.

```html
<div class="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
<div class="size-24 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600"></div>
<div class="size-24 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"></div>
```

--------------------------------

### Update Tailwind CSS Ring Utility for v4.0

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4.0 changes the default `ring` utility from 3px to 1px and color from `blue-500` to `currentColor`. This snippet shows how to update existing `ring` classes to `ring-3` and explicitly add `ring-blue-500` to maintain the v3 default behavior in your HTML.

```html
<button class="focus:ring ..."><button class="focus:ring-3 ...">  <!-- ... --></button>
```

```html
<button class="focus:ring-3 focus:ring-blue-500 ...">  <!-- ... --></button>
```

--------------------------------

### Set Border Block Color with Tailwind CSS Utilities

Source: https://tailwindcss.com/docs/border-color

These examples demonstrate how Tailwind CSS `border-y-{color}-{shade}` utility classes translate into CSS `border-block-color` properties. Each utility sets the border color for the block-start and block-end sides using a CSS variable that references a specific color from the Tailwind palette, often including an Oklch color function in the comment for reference.

```css
border-block-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */
```

```css
border-block-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */
```

```css
border-block-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */
```

```css
border-block-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */
```

```css
border-block-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */
```

```css
border-block-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */
```

```css
border-block-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */
```

```css
border-block-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */
```

```css
border-block-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */
```

```css
border-block-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */
```

```css
border-block-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */
```

```css
border-block-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */
```

```css
border-block-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */
```

```css
border-block-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */
```

```css
border-block-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */
```

```css
border-block-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */
```

```css
border-block-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */
```

```css
border-block-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */
```

```css
border-block-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */
```

```css
border-block-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */
```

```css
border-block-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */
```

```css
border-block-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */
```

```css
border-block-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */
```

```css
border-block-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */
```

```css
border-block-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */
```

```css
border-block-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */
```

```css
border-block-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */
```

```css
border-block-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */
```

```css
border-block-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */
```

```css
border-block-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */
```

```css
border-block-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */
```

```css
border-block-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */
```

```css
border-block-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */
```

```css
border-block-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */
```

```css
border-block-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */
```

```css
border-block-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */
```

```css
border-block-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */
```

```css
border-block-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */
```

```css
border-block-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */
```

```css
border-block-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */
```

```css
border-block-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */
```

```css
border-block-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */
```

```css
border-block-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */
```

```css
border-block-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */
```

```css
border-block-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */
```

```css
border-block-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */
```

```css
border-block-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */
```

```css
border-block-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */
```

```css
border-block-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */
```

--------------------------------

### Spanning rows with row-span utilities

Source: https://tailwindcss.com/docs/grid-row

Use row-span-<number> utilities to make an element span multiple rows in a CSS Grid layout. The example demonstrates a 3-row grid where the first element spans all 3 rows, the second spans 2 columns, and the third spans 2 columns and 2 rows.

```html
<div class="grid grid-flow-col grid-rows-3 gap-4">
  <div class="row-span-3 ...">01</div>
  <div class="col-span-2 ...">02</div>
  <div class="col-span-2 row-span-2 ...">03</div>
</div>
```

--------------------------------

### Create Radial Gradient Backgrounds with Tailwind CSS

Source: https://tailwindcss.com/docs/background-image

Use bg-radial and bg-radial-[<position>] utilities with color stop utilities to create radial gradients. Supports positioning syntax and percentage-based color stop placement for precise gradient control.

```html
<div class="size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"></div>
<div class="size-18 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>
<div class="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"></div>
```

--------------------------------

### Apply Responsive Outline Offset in Tailwind CSS

Source: https://tailwindcss.com/docs/outline-offset

Explains how to make outline offsets responsive by prefixing utilities with breakpoint variants like `md:`. This applies the utility only at specific screen sizes and above, enabling adaptive designs that adjust outline offsets based on the viewport.

```html
<div class="outline md:outline-offset-2 ...">  <!-- ... --></div>
```

--------------------------------

### Custom scroll-padding values in HTML

Source: https://tailwindcss.com/docs/scroll-padding

Shows two methods for applying custom scroll padding values: using arbitrary values with square bracket syntax and using CSS custom properties with parentheses syntax. Both approaches allow complete flexibility beyond predefined spacing scales.

```html
<div class="scroll-pl-[24rem] ...">
  <!-- ... -->
</div>

<div class="scroll-pl-(--my-scroll-padding) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Custom Perspective Value with Arbitrary Values

Source: https://tailwindcss.com/docs/perspective

Demonstrates using the perspective-[<value>] syntax to apply custom perspective values not included in the predefined utility classes. This allows for precise control over the perspective distance by specifying any valid CSS value directly in the class name.

```html
<div class="perspective-[750px] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Responsive Translation with Tailwind CSS Breakpoint Variants

Source: https://tailwindcss.com/docs/translate

Implement responsive translation by prefixing utilities with breakpoint variants like `md:`. This ensures that the translation is applied only at specific screen sizes and above, adapting element positions for different viewports.

```html
<img class="translate-45 md:translate-60 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Set Custom Caret Color with Hex Value in Tailwind CSS

Source: https://tailwindcss.com/docs/caret-color

This example illustrates the use of Tailwind's arbitrary value syntax `caret-[<value>]` to set a custom caret color. A hex code, like `#50d71e`, is directly embedded in the class name to apply a specific color not available in the default palette.

```html
<textarea class="caret-[#50d71e] ..."></textarea>
```

--------------------------------

### Set Drop Shadow Color with Tailwind CSS Color Utilities

Source: https://tailwindcss.com/docs/filter-drop-shadow

Use color-specific drop-shadow utilities (e.g., drop-shadow-cyan-500, drop-shadow-indigo-500) combined with opacity modifiers to customize shadow colors. The example demonstrates applying colored drop shadows to SVG elements with matching fill colors and adjustable opacity.

```html
<svg class="fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500/50 ...">...</svg>
<svg class="fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50 ...">...</svg>
```

--------------------------------

### Using negative order values

Source: https://tailwindcss.com/docs/order

Prefix the class name with a dash to convert the order value to a negative number, enabling reverse ordering or positioning items before default-ordered items.

```html
<div class="-order-1">
  <!-- ... -->
</div>
```

--------------------------------

### Restore Tailwind CSS v3 Button Cursor Behavior in Preflight

Source: https://tailwindcss.com/docs/upgrade-guide

In Tailwind CSS v4.0, Preflight sets buttons to `cursor: default` to match browser behavior. This CSS snippet restores the v3 behavior, applying `cursor: pointer` to non-disabled buttons and elements with `role="button"`.

```css
@layer base {  button:not(:disabled),  [role="button"]:not(:disabled) {    cursor: pointer;  }}
```

--------------------------------

### Apply Border Inline Color with Tailwind CSS and CSS

Source: https://tailwindcss.com/docs/border-color

The `border-x-{color}-{shade}` utility class in Tailwind CSS sets the `border-inline-color` property, which controls the logical inline start and end borders of an element. This is equivalent to setting `border-left-color` and `border-right-color` in a left-to-right writing mode. Tailwind uses CSS custom properties (`var(--color-{color}-{shade})`) to manage the color values, often including an `oklch` color function for modern color spaces.

```tailwindcss
border-x-sky-950
```

```css
border-inline-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */
```

```tailwindcss
border-x-blue-500
```

```css
border-inline-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */
```

```tailwindcss
border-x-indigo-950
```

```css
border-inline-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */
```

```tailwindcss
border-x-violet-400
```

```css
border-inline-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */
```

```tailwindcss
border-x-purple-700
```

```css
border-inline-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */
```

```tailwindcss
border-x-fuchsia-100
```

```css
border-inline-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */
```

--------------------------------

### Apply hue-rotate filter with predefined values in HTML

Source: https://tailwindcss.com/docs/filter-hue-rotate

Use Tailwind CSS hue-rotate utility classes to rotate the hue of an element by specific degrees. The example demonstrates applying different hue rotation values (15, 90, 180, 270 degrees) to image elements using class names like hue-rotate-15, hue-rotate-90, etc.

```html
<img class="hue-rotate-15" src="/img/mountains.jpg" />
<img class="hue-rotate-90" src="/img/mountains.jpg" />
<img class="hue-rotate-180" src="/img/mountains.jpg" />
<img class="hue-rotate-270" src="/img/mountains.jpg" />
```

--------------------------------

### Apply box-content utility in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/box-sizing

Use the box-content utility class to set an element's box-sizing to content-box. This tells the browser to add borders and padding on top of the element's specified width or height. A 100px × 100px element with 2px border and 4px padding renders as 112px × 112px with a 100px × 100px internal content area.

```html
<div class="box-content size-32 border-4 p-4 ...">  <!-- ... --></div>
```

--------------------------------

### Custom Animation with CSS Variables

Source: https://tailwindcss.com/docs/animation

Demonstrates using the `animate-(<custom-property>)` syntax to reference custom CSS variables for animations. This is shorthand for `animate-[var(<custom-property>)]` and automatically wraps the variable in the `var()` function.

```html
<div class="animate-(--my-animation) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply a specific aspect ratio to an element using Tailwind CSS

Source: https://tailwindcss.com/docs/aspect-ratio

Demonstrates how to use `aspect-<ratio>` utilities, such as `aspect-3/2`, to set a fixed aspect ratio on an HTML element like an image. The `object-cover` class is also included to show how the image content fits within the defined aspect ratio.

```html
<img class="aspect-3/2 object-cover ..." src="/img/villas.jpg" />
```

--------------------------------

### Access Tailwind Theme Values with theme() Function (CSS)

Source: https://tailwindcss.com/docs/functions-and-directives

The `theme()` function provides a way to access Tailwind CSS theme values using dot notation within your CSS. For example, `theme(spacing.12)` retrieves the value for `spacing.12`. This function is deprecated, and the recommended approach for accessing theme values is to use CSS theme variables instead.

```css
.my-element {  margin: theme(spacing.12);}
```

--------------------------------

### Preserve Tailwind CSS v3 Ring Behavior with CSS Theme Variables

Source: https://tailwindcss.com/docs/upgrade-guide

To preserve the v3 default ring width (3px) and color (`blue-500`) in Tailwind CSS v4.0 without modifying every class, you can add these theme variables to your CSS. Note that this approach is for compatibility and not considered idiomatic v4.0 usage.

```css
@theme {  --default-ring-width: 3px;  --default-ring-color: var(--color-blue-500);}
```

--------------------------------

### Replace `@tailwind` Directives with `@import` in CSS for v4

Source: https://tailwindcss.com/docs/upgrade-guide

In Tailwind CSS v4, the traditional `@tailwind` directives (e.g., `@tailwind base;`) are no longer used. Instead, Tailwind CSS is imported directly into your CSS file using a standard CSS `@import` statement. This snippet shows both the old directives and the new import method.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
@import "tailwindcss";
```

--------------------------------

### Basic Padding Utility - Tailwind CSS

Source: https://tailwindcss.com/docs/padding

Apply uniform padding to all sides of an element using the p-<number> utility class. The padding value is calculated using the --spacing theme variable multiplied by the specified number.

```html
<div class="p-8 ...">p-8</div>
```

--------------------------------

### Combine Value Types with Multiple Declarations in CSS Utilities

Source: https://tailwindcss.com/docs/adding-custom-styles

Explains how to use multiple `--value()` declarations within a single `@utility` rule to support theme, bare, and arbitrary values simultaneously. Declarations that fail to resolve for a given utility are simply omitted from the output.

```css
@theme {
  --tab-size-github: 8;
}@utility tab-* {
  tab-size: --value([integer]);
  tab-size: --value(integer);
  tab-size: --value(--tab-size-*);
}
```

```css
@utility opacity-* {
  opacity: --value([percentage]);
  opacity: calc(--value(integer) * 1%);
  opacity: --value(--opacity-*);
}
```

--------------------------------

### Apply Drop Shadow with Tailwind CSS Classes

Source: https://tailwindcss.com/docs/filter-drop-shadow

Use Tailwind CSS drop-shadow utility classes to add drop shadows to SVG and text elements. The example demonstrates applying different drop shadow sizes (md, lg, xl) to SVG elements. Drop shadows are particularly useful for irregular shapes where box-shadow may not work effectively.

```html
<svg class="drop-shadow-md ...">  <!-- ... --></svg>
<svg class="drop-shadow-lg ...">  <!-- ... --></svg>
<svg class="drop-shadow-xl ...">  <!-- ... --></svg>
```

--------------------------------

### Set custom backdrop grayscale value with Tailwind CSS

Source: https://tailwindcss.com/docs/backdrop-filter-grayscale

Illustrates how to apply a custom grayscale value to an element's backdrop using the `backdrop-grayscale-[<value>]` arbitrary value syntax in Tailwind CSS.

```html
<div class="backdrop-grayscale-[0.5] ...">  <!-- ... --></div>
```

--------------------------------

### CSS Variables with Dynamic Values and Tailwind Utilities

Source: https://tailwindcss.com/docs/styling-with-utility-classes

React component using inline styles to set CSS custom properties from dynamic sources, then referencing those variables with Tailwind utility classes. Enables dynamic theming while maintaining utility-first styling approach.

```jsx
export function BrandedButton({ buttonColor, buttonColorHover, textColor, children }) {
  return (
    <button
      style={{
        "--bg-color": buttonColor,
        "--bg-color-hover": buttonColorHover,
        "--text-color": textColor,
      }}
      className="bg-(--bg-color) text-(--text-color) hover:bg-(--bg-color-hover) ..."
    >
      {children}
    </button>
  );
}
```

--------------------------------

### Define Functional Custom Utilities with `@utility` and `--value()` (CSS)

Source: https://tailwindcss.com/docs/adding-custom-styles

Explains how to create functional custom utilities that accept arguments (e.g., `tab-*`) using the `@utility` directive and the special `--value()` function. This enables dynamic utility values based on user input.

```css
@utility tab-* {
  tab-size: --value(--tab-size-*);
}
```

--------------------------------

### Apply text indentation with indent utility classes

Source: https://tailwindcss.com/docs/text-indent

Use indent-<number> utilities to set the amount of empty space before text in a block. The indent-8 class applies an 8-unit indentation based on the spacing scale. This is useful for formatting paragraphs and improving readability.

```html
<p class="indent-8">So I started to walk into the water...</p>
```

--------------------------------

### Set SVG Stroke Color to Current Text Color with Tailwind CSS

Source: https://tailwindcss.com/docs/stroke

This example illustrates the use of the `stroke-current` utility to dynamically match an SVG's stroke color to the parent element's text color. It's particularly useful for creating interactive elements where the icon's color should adapt to its surrounding text, such as on hover states.

```html
<button class="bg-white text-pink-600 hover:bg-pink-600 hover:text-white ...">  <svg class="size-5 stroke-current ..." fill="none">    <!-- ... -->  </svg>  Download file</button>
```

--------------------------------

### Apply Responsive Stroke Width with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/stroke-width

Explains how to use responsive prefixes (e.g., `md:`) with stroke width utilities to apply different stroke widths based on screen sizes. This allows for adaptive designs that change appearance across various breakpoints.

```html
<div class="stroke-1 md:stroke-2 ...">  <!-- ... --></div>
```

--------------------------------

### Responsive max-width with breakpoint variants in HTML

Source: https://tailwindcss.com/docs/max-width

Prefix max-width utilities with breakpoint variants like md:, lg:, or xl: to apply different maximum widths at specific screen sizes. This enables responsive design patterns where element constraints adapt to viewport dimensions.

```html
<div class="max-w-sm md:max-w-lg ...">  <!-- ... --></div>
```

--------------------------------

### Allowing Flex Items to Shrink with Tailwind CSS

Source: https://tailwindcss.com/docs/flex-shrink

Demonstrates how to use the `shrink` utility class in Tailwind CSS to allow a flex item to shrink when necessary, ensuring proper layout behavior within a flex container.

```html
<div class="flex ...">  <div class="h-14 w-14 flex-none ...">01</div>  <div class="h-14 w-64 shrink ...">02</div>  <div class="h-14 w-14 flex-none ...">03</div></div>
```

--------------------------------

### Disable Clears with Tailwind CSS `clear-none` Utility

Source: https://tailwindcss.com/docs/clear

This snippet demonstrates how to reset any applied clears on an HTML element using the `clear-none` utility class in Tailwind CSS. It is typically used to override previous clear properties, ensuring the element does not break its layout due to floating elements. The example shows `clear-none` applied to a paragraph element within an article containing floated images.

```html
<article>  <img class="float-left ..." src="/img/green-mountains.jpg" />  <img class="float-right ..." src="/img/snow-mountains.jpg" />  <p class="clear-none ...">Maybe we can live without libraries...</p></article>
```

--------------------------------

### Create arbitrary peer variants with custom selectors

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Use `peer-[selector]` syntax to create one-off peer variants with custom CSS selectors. The `&` character marks where `.peer` should be positioned in the final selector for precise control over the CSS combinator.

```html
<form>
  <label for="email">Email:</label>
  <input id="email" name="email" type="email" class="is-dirty peer" required />
  <div class="peer-[.is-dirty]:peer-required:block hidden">This field is required.</div>
</form>
```

```html
<div>
  <input type="text" class="peer" />
  <div class="hidden peer-[:nth-of-type(3)_&]:block">
    <!-- ... -->
  </div>
</div>
```

--------------------------------

### Tailwind CSS v4 `divide-x/y` utility selector change

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 updates the internal CSS selector for `divide-x-*` and `divide-y-*` utilities to improve performance. The new selector applies border to `border-bottom-width` on all children except the last, instead of `border-top-width` on subsequent siblings. This change can affect inline elements or custom margins/paddings.

```css
/* Before */.divide-y-4 > :not([hidden]) ~ :not([hidden]) {
  border-top-width: 4px;}
/* Now */.divide-y-4 > :not(:last-child) {
  border-bottom-width: 4px;}
```

--------------------------------

### transition-delay with custom arbitrary value

Source: https://tailwindcss.com/docs/transition-delay

HTML markup demonstrating the delay-[<value>] syntax for setting completely custom transition delay values. Allows specifying arbitrary CSS values that don't match predefined utility classes.

```html
<button class="delay-[1s,250ms] ...">  <!-- ... --></button>
```

--------------------------------

### Apply Responsive Width Utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/width

This snippet demonstrates how to make width utilities responsive using breakpoint variants like `md:`. This allows an element's width to change based on screen size, applying `w-1/2` by default and `w-full` from medium screens upwards.

```html
<div class="w-1/2 md:w-full ...">  <!-- ... --></div>
```

--------------------------------

### Apply Responsive Border Spacing in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/border-spacing

This HTML snippet demonstrates how to implement responsive border spacing using Tailwind CSS breakpoint variants. By prefixing utilities like `md:border-spacing-4`, different spacing values can be applied based on screen size, ensuring adaptability across devices.

```html
<table class="border-spacing-2 md:border-spacing-4 ...">  <!-- ... --></table>
```

--------------------------------

### Manage Tailwind CSS v4 default border color for `border` and `divide` utilities

Source: https://tailwindcss.com/docs/upgrade-guide

Tailwind CSS v4 changes the default border color for `border-*` and `divide-*` utilities from `gray-200` to `currentColor`. Projects must explicitly specify a color (e.g., `border-gray-200`) or add a base layer CSS rule to restore the v3 default behavior for all elements.

--------------------------------

### Apply responsive object-position in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/object-position

This snippet demonstrates how to make `object-position` utilities responsive using Tailwind CSS breakpoint variants. By prefixing a utility with `md:`, the `object-top` class will only apply at medium screen sizes and above, overriding the default `object-center` for smaller screens.

```html
<img class="object-center md:object-top ..." src="/img/mountains.jpg" />
```

--------------------------------

### Define Simple Custom Utilities with `@utility` (CSS)

Source: https://tailwindcss.com/docs/adding-custom-styles

Explains how to create simple custom utility classes (e.g., `content-auto`) using the `@utility` directive. This allows extending Tailwind with specific CSS properties not included by default, which are automatically added to the `utilities` layer.

```css
@utility content-auto {
  content-visibility: auto;
}
```

--------------------------------

### Apply whitespace-pre utility in HTML

Source: https://tailwindcss.com/docs/white-space

Use the whitespace-pre class to preserve newlines and spaces within an element exactly as written. Text will not wrap and requires overflow handling for long content.

```html
<p class="overflow-auto whitespace-pre">Hey everyone!It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

--------------------------------

### Apply Tailwind CSS `group-has-*` variant for styling based on descendant state

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This example illustrates the `group-has-*` variant, which allows styling an element within a `group` based on the state or content of a descendant element. Here, an SVG icon is conditionally displayed (`group-has-[a]:block`) if the parent `div` (marked with `group`) contains an `<a>` tag descendant, enabling complex conditional styling within component groups.

```html
<div class="group ...">  <img src="..." />  <h4>Spencer Sharp</h4>  <svg class="hidden group-has-[a]:block ..."><!-- ... --></svg>  <p>Product Designer at <a href="...">planeteria.tech</a></p></div>
```

--------------------------------

### Custom flex Property with CSS Variable

Source: https://tailwindcss.com/docs/flex

Shows how to use the flex-(<custom-property>) syntax to reference CSS custom properties. This automatically wraps the custom property in the var() function for cleaner syntax.

```html
<div class="flex-(--my-flex) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply min-height with spacing scale utilities in HTML

Source: https://tailwindcss.com/docs/min-height

Use min-h-<number> utilities like min-h-24, min-h-48, min-h-64, and min-h-80 to set fixed minimum heights based on Tailwind's spacing scale. Each utility applies min-height using the --spacing theme variable multiplied by the specified number.

```html
<div class="h-20 ...">
  <div class="min-h-80 ...">min-h-80</div>
  <div class="min-h-64 ...">min-h-64</div>
  <div class="min-h-48 ...">min-h-48</div>
  <div class="min-h-40 ...">min-h-40</div>
  <div class="min-h-32 ...">min-h-32</div>
  <div class="min-h-24 ...">min-h-24</div>
</div>
```

--------------------------------

### React conditional styling to avoid conflicting Tailwind classes

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Demonstrates best practice for handling conditional styling in React by using ternary operators to apply only one class at a time, preventing conflicting utility classes from being added to the same element.

```jsx
export function Example({ gridLayout }) {
  return <div className={gridLayout ? "grid" : "flex"}>{/* ... */}</div>;
}
```

--------------------------------

### Style interactive states with hover, focus, and active variants

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Shows how to use hover, focus, and active variants together to style different interactive states. Includes focus outline styling with offset and color customization.

```html
<button class="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
  Save changes
</button>
```

--------------------------------

### Apply custom sepia filter values using Tailwind CSS arbitrary values

Source: https://tailwindcss.com/docs/filter-sepia

Illustrates using Tailwind CSS's arbitrary value syntax `sepia-[<value>]` to apply a precise, custom sepia filter amount. For instance, `sepia-[.25]` sets the sepia filter to 25%.

```html
<img class="sepia-[.25] ..." src="/img/mountains.jpg" />
```

--------------------------------

### Tailwind CSS `inset` Utilities for All Sides

Source: https://tailwindcss.com/docs/top-right-bottom-left

These utilities apply to the `inset` CSS property, which is a shorthand for `top`, `right`, `bottom`, and `left`. They support numeric, fractional, pixel, full percentage, auto, custom property, and arbitrary values, including negative variants.

```css
/* inset-<number> */
inset: calc(var(--spacing) * <number>);
```

```css
/* -inset-<number> */
inset: calc(var(--spacing) * -<number>);
```

```css
/* inset-<fraction> */
inset: calc(<fraction> * 100%);
```

```css
/* -inset-<fraction> */
inset: calc(<fraction> * -100%);
```

```css
/* inset-px */
inset: 1px;
```

```css
/* -inset-px */
inset: -1px;
```

```css
/* inset-full */
inset: 100%;
```

```css
/* -inset-full */
inset: -100%;
```

```css
/* inset-auto */
inset: auto;
```

```css
/* inset-(<custom-property>) */
inset: var(<custom-property>);
```

```css
/* inset-[<value>] */
inset: <value>;
```

--------------------------------

### Apply sepia filter using CSS custom properties in Tailwind CSS

Source: https://tailwindcss.com/docs/filter-sepia

Shows how to apply a sepia filter using a CSS custom property with the `sepia-(<custom-property>)` syntax. This is a convenient shorthand for `sepia-[var(<custom-property>)]`, automatically wrapping the custom property in `var()`.

```html
<img class="sepia-(--my-sepia) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Hardware Accelerated Transforms with Tailwind CSS

Source: https://tailwindcss.com/docs/transform

Use the `transform-gpu` utility to force hardware acceleration for element transitions, potentially improving performance. Conversely, `transform-cpu` can be used to revert to CPU rendering if needed.

```html
<div class="scale-150 transform-gpu">  <!-- ... --></div>
```

--------------------------------

### Apply custom text indentation with CSS variables

Source: https://tailwindcss.com/docs/text-indent

Use the indent-(<custom-property>) syntax as shorthand for indent-[var(<custom-property>)] to reference CSS custom properties. This automatically wraps the custom property in the var() function.

```html
<p class="indent-(--my-indentation) ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply custom CSS variable filters

Source: https://tailwindcss.com/docs/filter

Shows how to use the filter-(<custom-property>) syntax as shorthand for filter-[var(<custom-property>)] to reference CSS custom properties. The syntax automatically wraps the custom property in the var() function.

```html
<img class="filter-(--my-filter) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Support Literal Utility Values in Tailwind CSS Utilities

Source: https://tailwindcss.com/docs/adding-custom-styles

Shows how to use the `--value('literal')` syntax to allow specific literal string values for a utility. This enables the creation of utilities like `tab-inherit`, `tab-initial`, or `tab-unset`.

```css
@utility tab-* {
  tab-size: --value("inherit", "initial", "unset");
}
```

--------------------------------

### Apply Logical Float Properties with Tailwind CSS

Source: https://tailwindcss.com/docs/float

Shows how to use `float-start` and `float-end` utilities in Tailwind CSS, which adapt to the text direction (left-to-right or right-to-left). `float-start` places the element at the beginning of the inline direction.

```html
<article>  <img class="float-start ..." src="/img/mountains.jpg" />  <p>Maybe we can live without libraries, people like you and me. ...</p></article><article dir="rtl">  <img class="float-start ..." src="/img/mountains.jpg" />  <p>... ربما يمكننا العيش بدون مكتبات، أشخاص مثلي ومثلك. ربما. بالتأكيد</p></article>
```

--------------------------------

### Apply custom gap using CSS variable in Tailwind CSS

Source: https://tailwindcss.com/docs/gap

Demonstrates the `gap-(<custom-property>)` syntax to apply a gap based on a CSS variable, which is a shorthand for `gap-[var(<custom-property>)]`.

```html
<div class="gap-(--my-gap) ...">  <!-- ... --></div>
```

--------------------------------

### Create Linear Gradient Backgrounds with Tailwind CSS

Source: https://tailwindcss.com/docs/background-image

Use directional utilities like bg-linear-to-r, bg-linear-to-t, and angle-based variants combined with color stop utilities (from-*, via-*, to-*) to create linear gradients. Supports 8 directional variants and custom angles.

```html
<div class="h-14 bg-linear-to-r from-cyan-500 to-blue-500"></div>
<div class="h-14 bg-linear-to-t from-sky-500 to-indigo-500"></div>
<div class="h-14 bg-linear-to-bl from-violet-500 to-fuchsia-500"></div>
<div class="h-14 bg-linear-65 from-purple-500 to-pink-500"></div>
```

--------------------------------

### Apply blur and grayscale filters with Tailwind CSS

Source: https://tailwindcss.com/docs/filter

Demonstrates how to use Tailwind filter utilities like blur-xs and grayscale to apply visual effects to images. Multiple filter utilities can be combined on a single element to create complex visual effects.

```html
<img class="blur-xs" src="/img/mountains.jpg" />
<img class="grayscale" src="/img/mountains.jpg" />
<img class="blur-xs grayscale" src="/img/mountains.jpg" />
```

--------------------------------

### Generate spacing values with --spacing() function

Source: https://tailwindcss.com/docs/functions-and-directives

Use the --spacing() function to generate spacing values based on your theme configuration. This function is useful in arbitrary values and calc() expressions for dynamic spacing calculations.

```CSS
.my-element {
  margin: --spacing(4);
}
```

```CSS
.my-element {
  margin: calc(var(--spacing) * 4);
}
```

```HTML
<div class="py-[calc(--spacing(4)-1px)]">
  <!-- ... -->
</div>
```

--------------------------------

### Responsive skew transform with breakpoint variants

Source: https://tailwindcss.com/docs/skew

Apply skew utilities conditionally at different screen sizes using breakpoint prefixes like md:. Allows base skew value to change at medium breakpoint and above, enabling responsive design patterns.

```html
<img class="skew-3 md:skew-12 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Prefix all Tailwind CSS classes and variables (CSS)

Source: https://tailwindcss.com/docs/styling-with-utility-classes

This snippet illustrates how to add a custom prefix to all Tailwind CSS generated classes and CSS variables. This helps prevent naming conflicts with existing class names in a project. It displays the `@import` syntax in `app.css` and the compiled CSS showing the `tw:` prefix applied to classes and variables.

```css
@import "tailwindcss" prefix(tw);
```

```css
@layer theme {
  :root {
    --tw-color-red-500: oklch(0.637 0.237 25.331);
  }}
@layer utilities {
  .tw\:text-red-500 {
    color: var(--tw-color-red-500);
  }}
```

--------------------------------

### Apply whitespace-pre-line utility in HTML

Source: https://tailwindcss.com/docs/white-space

Use the whitespace-pre-line class to preserve newlines but collapse spaces within an element. Text wraps normally at word boundaries while maintaining line breaks.

```html
<p class="whitespace-pre-line">Hey everyone!It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

--------------------------------

### Apply isolation utility to create stacking context

Source: https://tailwindcss.com/docs/isolation

Use the `isolate` class to explicitly create a new stacking context on an HTML element. This utility applies the CSS property `isolation: isolate;` to the element, affecting how it interacts with other elements in terms of z-index and layering.

```html
<div class="isolate">  <!-- ... --></div>
```

--------------------------------

### Crop background to text shape in HTML (Tailwind CSS)

Source: https://tailwindcss.com/docs/background-clip

Illustrates how to use the `bg-clip-text` utility to crop an element's background to match the shape of the text. This is typically combined with gradient backgrounds and `text-transparent` to create visually striking text with gradient fills, enhancing design aesthetics.

```html
<p class="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ...">  Hello world</p>
```

--------------------------------

### Apply Custom Brightness Filters with Tailwind CSS Arbitrary Values

Source: https://tailwindcss.com/docs/filter-brightness

This snippet shows how to use arbitrary values for brightness filters in Tailwind CSS with the `brightness-[<value>]` syntax. It allows setting a precise, custom brightness level, such as `brightness-[1.75]` for 175% brightness, providing fine-grained control.

```html
<img class="brightness-[1.75] ..." src="/img/mountains.jpg" />
```

--------------------------------

### Define Custom Tailwind CSS Variants Using Shorthand Syntax

Source: https://tailwindcss.com/docs/adding-custom-styles

Presents a shorthand syntax for defining custom variants when complex nesting or `@slot` usage is not required. This simplifies the variant declaration for straightforward conditions.

```css
@custom-variant theme-midnight (&:where([data-theme="midnight"] *));
```

--------------------------------

### Apply box-decoration-clone utility in HTML

Source: https://tailwindcss.com/docs/box-decoration-break

Use the box-decoration-clone class to render element fragments as distinct blocks. This utility applies box-decoration-break: clone to the element, causing background, border, and padding properties to be rendered independently on each line.

```html
<span class="box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
  Hello<br />
  World
</span>
```

--------------------------------

### Constraining Images and Videos to Parent Width with Preflight CSS

Source: https://tailwindcss.com/docs/preflight

This CSS rule from Preflight ensures that images and videos are responsive by default. It sets `max-width: 100%` and `height: auto`, constraining them to their parent's width while preserving their intrinsic aspect ratio and preventing overflow.

```css
img,video {
  max-width: 100%;
  height: auto;
}
```

--------------------------------

### Using Tailwind CSS Arbitrary Variants for At-Rules

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Illustrates the use of arbitrary variants to embed CSS at-rules like `@media` or `@supports` directly in HTML. This enables conditional styling based on browser feature support or media queries, providing flexible responsive designs.

```html
<div class="flex [@supports(display:grid)]:grid">
  <!-- ... -->
</div>
```

--------------------------------

### Apply a 16:9 video aspect ratio to an iframe using Tailwind CSS

Source: https://tailwindcss.com/docs/aspect-ratio

Illustrates the use of the `aspect-video` utility to apply a common 16:9 aspect ratio to an `<iframe>` element. This ensures that embedded videos maintain their correct proportions, preventing distortion.

```html
<iframe class="aspect-video ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

--------------------------------

### Responsive Padding Design - Tailwind CSS

Source: https://tailwindcss.com/docs/padding

Apply different padding values at different breakpoints using breakpoint prefixes like md:. This enables responsive design patterns that adapt padding based on screen size.

```html
<div class="py-4 md:py-8 ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply box-border utility in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/box-sizing

Use the box-border utility class to set an element's box-sizing to border-box. This tells the browser to include the element's borders and padding when calculating its total height and width. A 100px × 100px element with 2px border and 4px padding renders as 100px × 100px with an 88px × 88px internal content area.

```html
<div class="box-border size-32 border-4 p-4 ...">  <!-- ... --></div>
```

--------------------------------

### Responsive z-index with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/z-index

Apply z-index utilities responsively using breakpoint variants like md:. This allows different stacking orders at different screen sizes.

```html
<div class="z-0 md:z-50 ...">  <!-- ... --></div>
```

--------------------------------

### Apply Responsive Backdrop Brightness Filters in HTML with Tailwind CSS

Source: https://tailwindcss.com/docs/backdrop-filter-brightness

Shows how to apply backdrop brightness utilities conditionally based on screen size using responsive prefixes like `md:` in Tailwind CSS, allowing different brightness levels for different breakpoints.

```html
<div class="backdrop-brightness-110 md:backdrop-brightness-150 ...">  <!-- ... --></div>
```

--------------------------------

### Apply custom filter values with bracket notation

Source: https://tailwindcss.com/docs/filter

Demonstrates using the filter-[<value>] syntax to apply completely custom filter values, such as SVG filter references. This allows for advanced filtering beyond the predefined Tailwind utilities.

```html
<img class="filter-[url('filters.svg#filter-id')] ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Responsive Float with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/float

Demonstrates how to apply float utilities conditionally based on screen size using responsive prefixes like `md:` in Tailwind CSS. This allows for different float behaviors at various breakpoints.

```html
<img class="float-right md:float-left" src="/img/mountains.jpg" />
```

--------------------------------

### Apply Responsive Transform Origin in Tailwind CSS

Source: https://tailwindcss.com/docs/transform-origin

Explains how to apply `transform-origin` utilities conditionally based on screen size using responsive prefixes like `md:`. This allows for different origin points to be set for elements at various breakpoints, adapting to responsive layouts.

```html
<img class="origin-center md:origin-top ..." src="/img/mountains.jpg" />
```

--------------------------------

### Import Tailwind CSS and Add Custom Styles (CSS)

Source: https://tailwindcss.com/docs/adding-custom-styles

Demonstrates how to import Tailwind CSS into a stylesheet and define custom CSS rules alongside it. This allows for integrating project-specific styles that are not covered by Tailwind's utility classes.

```css
@import "tailwindcss";
.my-custom-style {  /* ... */}
```

--------------------------------

### Responsive outline-style with breakpoint variant in Tailwind CSS

Source: https://tailwindcss.com/docs/outline-style

Demonstrates responsive design using breakpoint variant prefix (md:) on outline-style utility. The outline-dashed style applies only at medium screen sizes and above, with outline-solid as the default.

```html
<div class="outline md:outline-dashed ...">
  <!-- ... -->
</div>
```

--------------------------------

### Set Radial Gradient Position with Tailwind CSS Utilities

Source: https://tailwindcss.com/docs/mask-image

Demonstrates all nine radial gradient position utilities (mask-radial-at-*) applied to background image elements. These utilities control where the center of the radial gradient mask is positioned, ranging from corners to center. Each position utility can be combined with mask-radial-from-* to customize the gradient appearance.

```html
<div class="mask-radial-at-top-left mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-radial-at-top mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-radial-at-top-right mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-radial-at-left mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-radial-at-center mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-radial-at-right mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-radial-at-bottom-left mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-radial-at-bottom mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
<div class="mask-radial-at-bottom-right mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### Apply Custom Grayscale Values and CSS Variables with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-grayscale

This HTML snippet illustrates how to apply custom grayscale values using Tailwind CSS's arbitrary value syntax, such as `grayscale-[0.5]`. It also demonstrates using CSS variables with the `grayscale-(<custom-property>)` syntax for dynamic control over the grayscale effect. This provides flexibility beyond predefined utility classes.

```html
<img class="grayscale-[0.5] ..." src="/img/mountains.jpg" />
```

```html
<img class="grayscale-(--my-grayscale) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Custom Text Shadow Utility in Markup

Source: https://tailwindcss.com/docs/text-shadow

Use the custom text shadow utility defined in the theme configuration. Once `text-shadow-xl` is defined via theme variables, it can be applied directly to HTML elements as a utility class.

```html
<p class="text-shadow-xl">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Stack multiple Tailwind variants for combined conditions

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Combine multiple state variants like hover: and disabled: to apply styles only when all conditions are met. This enables precise control over element styling across different interactive states.

```html
<button class="bg-sky-500 disabled:hover:bg-sky-500 ...">Save changes</button>
```

--------------------------------

### Apply Responsive Grid Layouts with Tailwind CSS Breakpoints

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This snippet demonstrates how to create responsive grid layouts using Tailwind CSS's built-in responsive variants like `md` and `lg`. It shows how to define different column counts for mobile, medium, and large screen sizes.

```html
<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">  <!-- ... --></div>
```

--------------------------------

### Override Component Classes with Utility Classes (HTML)

Source: https://tailwindcss.com/docs/adding-custom-styles

Demonstrates how utility classes can be used to override specific styles defined within a component class. This showcases Tailwind's flexibility, allowing fine-grained control over component appearance.

```html
<!-- Will look like a card, but with square corners --><div class="card rounded-none">  <!-- ... --></div>
```

--------------------------------

### Apply Negative Scale Transforms with Tailwind CSS

Source: https://tailwindcss.com/docs/scale

Demonstrates how to use negative scale utilities such as `-scale-<number>`, `-scale-x-<number>`, or `-scale-y-<number>` to mirror and scale down elements.

```html
<img class="-scale-x-75 ..." src="/img/mountains.jpg" /><img class="-scale-100 ..." src="/img/mountains.jpg" /><img class="-scale-y-125 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply responsive font-weight with breakpoint variants

Source: https://tailwindcss.com/docs/font-weight

Use breakpoint prefixes like md: to apply font-weight utilities conditionally at different screen sizes. This enables responsive typography that adapts to device width.

```html
<p class="font-normal md:font-bold ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply Basic Scale Transforms with Tailwind CSS

Source: https://tailwindcss.com/docs/scale

Demonstrates how to use `scale-<number>` utilities like `scale-75`, `scale-100`, and `scale-125` to scale an element uniformly by a percentage of its original size.

```html
<img class="scale-75 ..." src="/img/mountains.jpg" /><img class="scale-100 ..." src="/img/mountains.jpg" /><img class="scale-125 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply flex-basis with custom CSS variables in Tailwind CSS

Source: https://tailwindcss.com/docs/flex-basis

Illustrates setting `flex-basis` using a custom CSS variable with the `basis-(<custom-property>)` syntax. This is a shorthand for `basis-[var(<custom-property>)]`, providing flexibility for dynamic sizing.

```html
<div class="basis-(--my-basis) ...">  <!-- ... --></div>
```

--------------------------------

### Apply Responsive Background Color using Tailwind CSS Breakpoint Variants

Source: https://tailwindcss.com/docs/background-color

This snippet demonstrates how to make a background color responsive in Tailwind CSS. By prefixing a utility class with a breakpoint variant like `md:`, the style is applied only at that screen size and above. This allows for dynamic styling based on device width.

```html
<div class="bg-blue-500 md:bg-green-500 ...">  <!-- ... --></div>
```

--------------------------------

### Logical Padding Properties - Tailwind CSS

Source: https://tailwindcss.com/docs/padding

Use ps-* (padding-inline-start) and pe-* (padding-inline-end) utilities for bidirectional text support. These logical properties automatically adjust based on text direction (LTR or RTL).

```html
<div>
  <div dir="ltr">
    <div class="ps-8 ...">ps-8</div>
    <div class="pe-8 ...">pe-8</div>
  </div>
  <div dir="rtl">
    <div class="ps-8 ...">ps-8</div>
    <div class="pe-8 ...">pe-8</div>
  </div>
</div>
```

--------------------------------

### Apply responsive text color with breakpoint variants in HTML

Source: https://tailwindcss.com/docs/color

Use breakpoint variant prefixes like md: to apply text color utilities at specific screen sizes. Enables responsive design by changing text colors across different device sizes.

```html
<p class="text-blue-600 md:text-green-600 ...">Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Implement a subgrid using Tailwind CSS `grid-cols-subgrid`

Source: https://tailwindcss.com/docs/grid-template-columns

Illustrates the use of the `grid-cols-subgrid` utility in Tailwind CSS to make a nested grid item adopt the column tracks of its parent grid. This allows for more complex grid layouts where nested elements align with the parent's grid structure.

```html
<div class="grid grid-cols-4 gap-4">  <div>01</div>  <!-- ... -->  <div>05</div>  <div class="col-span-3 grid grid-cols-subgrid gap-4">    <div class="col-start-2">06</div>  </div></div>
```

--------------------------------

### Define Complex Custom Utilities with Nesting (CSS)

Source: https://tailwindcss.com/docs/adding-custom-styles

Illustrates how to create more complex custom utility classes (e.g., `scrollbar-hidden`) using CSS nesting within the `@utility` directive. This is useful for utilities that involve pseudo-elements or multiple declarations.

```css
@utility scrollbar-hidden {
  &::-webkit-scrollbar {
    display: none;
  }
}
```

--------------------------------

### Space Y Arbitrary Value Margin CSS Implementation

Source: https://tailwindcss.com/docs/margin

CSS implementation for vertical spacing with arbitrary custom values. Supports any CSS value through bracket notation with directional control.

```css
& > :not(:last-child) {
  --tw-space-y-reverse: 0;
  margin-block-start: calc(<value> * var(--tw-space-y-reverse));
  margin-block-end: calc(<value> * calc(1 - var(--tw-space-y-reverse)));
}
```

--------------------------------

### Apply Outline Offset using CSS Variables in Tailwind CSS

Source: https://tailwindcss.com/docs/outline-offset

Shows how to dynamically set outline offsets using CSS variables with the `outline-offset-(<custom-property>)` syntax. This is a convenient shorthand for `outline-offset-[var(<custom-property>)]`, enabling themeable or dynamic outline offsets.

```html
<div class="outline-offset-(--my-outline-offset) ...">  <!-- ... --></div>
```

--------------------------------

### Basic outline-width utilities in HTML

Source: https://tailwindcss.com/docs/outline-width

Demonstrates using outline-width utility classes to set different outline widths on button elements. The outline class applies 1px width, while outline-2 and outline-4 apply 2px and 4px respectively. Combined with outline-offset-2 for spacing.

```html
<button class="outline outline-offset-2 ...">Button A</button>
<button class="outline-2 outline-offset-2 ...">Button B</button>
<button class="outline-4 outline-offset-2 ...">Button C</button>
```

--------------------------------

### Apply backdrop saturation with Tailwind CSS utilities

Source: https://tailwindcss.com/docs/backdrop-filter-saturate

Use backdrop-saturate-<number> utilities to control backdrop saturation levels. Available classes include backdrop-saturate-50, backdrop-saturate-100, backdrop-saturate-125, and backdrop-saturate-200. Each utility applies the corresponding saturate percentage to the backdrop-filter CSS property.

```html
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-saturate-50 ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-saturate-125 ..."></div>
</div>
<div class="bg-[url(/img/mountains.jpg)]">
  <div class="bg-white/30 backdrop-saturate-200 ..."></div>
</div>
```

--------------------------------

### Custom grid-row values with bracket notation

Source: https://tailwindcss.com/docs/grid-row

Use bracket notation like row-[<value>], row-span-[<value>], row-start-[<value>], and row-end-[<value>] to apply completely custom CSS values. Supports arbitrary values for advanced grid configurations.

```html
<div class="row-[span_16_/_span_16] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Responsive Positioning in Tailwind CSS

Source: https://tailwindcss.com/docs/position

This HTML snippet demonstrates how to apply responsive positioning using Tailwind CSS breakpoint variants. It shows an element that is `relative` by default but becomes `absolute` on medium screen sizes and above, illustrating how to adapt layout based on screen dimensions.

```html
<div class="relative md:absolute ...">  <!-- ... --></div>
```

--------------------------------

### Customize Tailwind CSS transition timing function theme variables

Source: https://tailwindcss.com/docs/transition-timing-function

Explains how to define custom transition timing functions within the Tailwind CSS theme using `@theme` and CSS variables. This allows for creating new named utilities that can be reused throughout the project.

```css
@theme {
  --ease-in-expo: cubic-bezier(0.95, 0.05, 0.795, 0.035);
}
```

--------------------------------

### Apply Basic Cursor Styles with Tailwind CSS

Source: https://tailwindcss.com/docs/cursor

Demonstrates how to apply standard cursor styles like `cursor-pointer`, `cursor-progress`, and `cursor-not-allowed` to HTML button elements using Tailwind CSS utility classes. These classes control the visual feedback when a user hovers over an element.

```html
<button class="cursor-pointer ...">Submit</button><button class="cursor-progress ...">Saving...</button><button class="cursor-not-allowed ..." disabled>Confirm</button>
```

--------------------------------

### Set Custom Position Values in Tailwind CSS

Source: https://tailwindcss.com/docs/top-right-bottom-left

Demonstrates using arbitrary value syntax with square brackets and CSS custom properties for positioning. Allows complete control over position values using inset-[<value>], top-[<value>], and inset-(<custom-property>) syntax.

```HTML
<div class="inset-[3px] ...">
  <!-- ... -->
</div>
```

```HTML
<div class="inset-(--my-position) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Implement Responsive Maximum Height with Tailwind CSS

Source: https://tailwindcss.com/docs/max-height

This HTML snippet illustrates how to apply responsive maximum height utilities in Tailwind CSS using breakpoint prefixes. It sets a default `max-h-full` and then overrides it with `max-h-screen` for medium screen sizes and above.

```html
<div class="h-48 max-h-full md:max-h-screen ...">  <!-- ... --></div>
```

--------------------------------

### Apply Custom Scale Values with Tailwind CSS

Source: https://tailwindcss.com/docs/scale

Explains how to use arbitrary values with `scale-[<value>]` for precise scaling, and how to use CSS variables with `scale-(<custom-property>)` as a shorthand for `scale-[var(<custom-property>)]`.

```html
<img class="scale-[1.7] ..." src="/img/mountains.jpg" />
```

```html
<img class="scale-(--my-scale) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Reverse divide direction for reversed flex layouts

Source: https://tailwindcss.com/docs/border-width

Use divide-x-reverse or divide-y-reverse utilities when elements are in reverse order (using flex-row-reverse or flex-col-reverse) to ensure borders appear on the correct side of each element.

```html
<div class="flex flex-col-reverse divide-y-4 divide-y-reverse divide-gray-200">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

--------------------------------

### Apply Arbitrary Container Query Values in HTML

Source: https://tailwindcss.com/docs/responsive-design

This HTML snippet illustrates the use of arbitrary values for container queries in Tailwind CSS. It allows developers to define one-off container query breakpoints, such as `@min-[475px]`, directly within the HTML class attribute without modifying the theme configuration. This is useful for specific responsive adjustments that don't warrant a global theme addition.

```html
<div class="@container">  <div class="flex flex-col @min-[475px]:flex-row">    <!-- ... -->  </div></div>
```

--------------------------------

### Customize Tailwind CSS Theme for Fill Colors

Source: https://tailwindcss.com/docs/fill

Explains how to extend the Tailwind CSS theme with custom color variables, making them available as utility classes. This allows for consistent branding and easier management of a project's color palette.

```css
@theme {
  --color-regal-blue: #243c5a;
}
```

```html
<svg class="fill-regal-blue">  <!-- ... --></svg>
```

--------------------------------

### Set Custom Outline Offset Values in Tailwind CSS

Source: https://tailwindcss.com/docs/outline-offset

Illustrates how to use arbitrary values with the `outline-offset-[<value>]` syntax to apply custom outline offsets. This allows for flexible, non-predefined spacing, such as using viewport units like `2vw` for dynamic adjustments.

```html
<div class="outline-offset-[2vw] ...">  <!-- ... --></div>
```

--------------------------------

### Apply Tailwind CSS perspective-origin utilities for basic positioning

Source: https://tailwindcss.com/docs/perspective-origin

This snippet demonstrates how to use predefined Tailwind CSS classes like `perspective-origin-top-left` and `perspective-origin-bottom-right` to control the vanishing point of a 3D perspective on HTML elements. It shows two `div` containers, each with a different perspective origin applied to illustrate the effect.

```html
<div class="size-20 perspective-near perspective-origin-top-left ...">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div></div><div class="size-20 perspective-near perspective-origin-bottom-right …">
  <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
  <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
  <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
  <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
  <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
  <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div></div>
```

--------------------------------

### Custom max-width with CSS variables in HTML

Source: https://tailwindcss.com/docs/max-width

Use the max-w-(<custom-property>) syntax as shorthand for max-w-[var(<custom-property>)] to reference CSS custom properties. This automatically wraps the custom property in the var() function for cleaner, more maintainable code.

```html
<div class="max-w-(--my-max-width) ...">  <!-- ... --></div>
```

--------------------------------

### Apply mask-contain utility in HTML

Source: https://tailwindcss.com/docs/mask-size

Illustrates the use of the `mask-contain` utility class in HTML to scale a mask image to fit within its container without cropping or stretching.

```html
<div class="mask-contain mask-[url(/img/scribble.png)] bg-[url(/img/mountains.jpg)] ..."></div>
```

--------------------------------

### Space X Reverse Direction CSS Implementation

Source: https://tailwindcss.com/docs/margin

CSS implementation for reversing horizontal spacing direction. Sets --tw-space-x-reverse to 1 to flip spacing to the opposite side of child elements.

```css
& > :not(:last-child) {
  --tw-space-x-reverse: 1;
}
```

--------------------------------

### Apply responsive border styles with breakpoint variants

Source: https://tailwindcss.com/docs/border-style

Prefix border-style utilities with breakpoint variants like md: to apply different border styles at specific screen sizes. This enables responsive design where border styles change based on the viewport width.

```html
<div class="border-solid md:border-dotted ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Custom Box Shadow Values in Tailwind CSS

Source: https://tailwindcss.com/docs/box-shadow

This snippet shows how to apply custom box shadow values using arbitrary value syntax like `shadow-[<value>]`. It also demonstrates using CSS variables with the `shadow-(<custom-property>)` shorthand, which expands to `shadow-[var(<custom-property>)]`.

```html
<div class="shadow-[0_35px_35px_rgba(0,0,0,0.25)] ...">  <!-- ... --></div>
```

```html
<div class="shadow-(--my-shadow) ...">  <!-- ... --></div>
```

--------------------------------

### Support Fraction Values in CSS Utilities using `ratio` Data Type

Source: https://tailwindcss.com/docs/adding-custom-styles

Demonstrates how to handle fraction values in utilities by using the `ratio` data type with `--value()`. This signals Tailwind to treat the value and modifier as a single unit, enabling utilities like `aspect-3/4` or `aspect-[7/9]`.

```css
@utility aspect-* {
  aspect-ratio: --value(--aspect-ratio-*, ratio, [ratio]);
}
```

--------------------------------

### Apply Basic Grayscale Filters to Images using Tailwind CSS

Source: https://tailwindcss.com/docs/filter-grayscale

This HTML snippet demonstrates the application of standard grayscale utility classes in Tailwind CSS to control the visual effect on images. It showcases `grayscale-0`, `grayscale-25`, `grayscale-50`, and `grayscale` to apply different levels of grayscale. These utilities directly map to `filter: grayscale()` CSS properties.

```html
<img class="grayscale-0 ..." src="/img/mountains.jpg" /><img class="grayscale-25 ..." src="/img/mountains.jpg" /><img class="grayscale-50 ..." src="/img/mountains.jpg" /><img class="grayscale ..." src="/img/mountains.jpg" />
```

--------------------------------

### Negative scroll-padding values in HTML

Source: https://tailwindcss.com/docs/scroll-padding

Demonstrates how to apply negative scroll padding by prefixing the class name with a dash. This converts the utility value to a negative number for reverse scroll offset effects.

```html
<div class="-scroll-ps-6 snap-x ...">
  <!-- ... -->
</div>
```

--------------------------------

### transition-delay with responsive breakpoint variant

Source: https://tailwindcss.com/docs/transition-delay

HTML markup showing how to use responsive variants with transition-delay utilities. The md: prefix applies delay-300 only at medium screen sizes and above, while delay-150 applies at all smaller breakpoints.

```html
<button class="delay-150 md:delay-300 ...">  <!-- ... --></button>
```

--------------------------------

### Set Custom CSS Variables with Tailwind CSS Arbitrary Values (HTML)

Source: https://tailwindcss.com/docs/styling-with-utility-classes

Explains how to define and apply custom CSS variables using Tailwind CSS's arbitrary value syntax. This feature allows for dynamic styling and responsive adjustments of CSS variables directly within HTML classes.

```HTML
<div class="[--gutter-width:1rem] lg:[--gutter-width:2rem]">  <!-- ... --></div>
```

--------------------------------

### Basic skew transform on both axes

Source: https://tailwindcss.com/docs/skew

Apply skew transformation to both X and Y axes using predefined utility classes. The skew-<number> utilities apply skewX() and skewY() transforms with degree values. Supports positive values (skew-3, skew-6, skew-12) for standard skewing.

```html
<img class="skew-3 ..." src="/img/mountains.jpg" />
<img class="skew-6 ..." src="/img/mountains.jpg" />
<img class="skew-12 ..." src="/img/mountains.jpg" />
```

--------------------------------

### Basic transition-delay HTML markup with Tailwind classes

Source: https://tailwindcss.com/docs/transition-delay

HTML markup demonstrating basic usage of Tailwind's transition-delay utilities on button elements. Uses delay-150, delay-300, and delay-700 classes combined with transition, duration, and ease utilities to create staggered animation delays on hover.

```html
<button class="transition delay-150 duration-300 ease-in-out ...">Button A</button>
<button class="transition delay-300 duration-300 ease-in-out ...">Button B</button>
<button class="transition delay-700 duration-300 ease-in-out ...">Button C</button>
```

--------------------------------

### Responsive background blend mode with Tailwind CSS breakpoints

Source: https://tailwindcss.com/docs/background-blend-mode

Apply different background blend modes at different screen sizes using Tailwind CSS breakpoint variants. Prefix blend mode utilities with breakpoint modifiers like md: to apply styles conditionally at medium screen sizes and above.

```html
<div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-lighten md:bg-blend-darken ...">
  <!-- ... -->
</div>
```

--------------------------------

### Space Y Custom Property Margin CSS Implementation

Source: https://tailwindcss.com/docs/margin

CSS implementation for vertical spacing using custom CSS properties. Allows dynamic spacing values through CSS variables with calc() for directional computation.

```css
& > :not(:last-child) {
  --tw-space-y-reverse: 0;
  margin-block-start: calc(var(<custom-property>) * var(--tw-space-y-reverse));
  margin-block-end: calc(var(<custom-property>) * calc(1 - var(--tw-space-y-reverse)));
}
```

--------------------------------

### Align items by text baseline with items-baseline in HTML

Source: https://tailwindcss.com/docs/align-items

The `items-baseline` utility is demonstrated here, aligning flex items such that all of their baselines align along the container's cross axis. This is particularly useful for ensuring text within different elements lines up correctly.

```html
<div class="flex items-baseline ...">  <div class="pt-2 pb-6">01</div>  <div class="pt-8 pb-12">02</div>  <div class="pt-12 pb-4">03</div></div>
```

--------------------------------

### Reference CSS custom properties for backdrop saturation

Source: https://tailwindcss.com/docs/backdrop-filter-saturate

Use the backdrop-saturate-(<custom-property>) syntax to reference CSS custom properties for backdrop saturation values. This is shorthand for backdrop-saturate-[var(<custom-property>)] and automatically wraps the value in the var() function.

```html
<div class="backdrop-saturate-(--my-backdrop-saturation) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Define Inset Ring Colors with Tailwind CSS Variables

Source: https://tailwindcss.com/docs/box-shadow

This snippet illustrates how Tailwind CSS defines various `inset-ring-color` utilities by mapping them to CSS custom properties (`--tw-inset-ring-color`). These definitions use `var()` to reference color values, often with `oklch()` comments indicating the color space. This pattern allows for consistent and themeable ring colors across a project.

```css
--tw-inset-ring-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */
--tw-inset-ring-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */
--tw-inset-ring-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */
--tw-inset-ring-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */
--tw-inset-ring-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */
--tw-inset-ring-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */
--tw-inset-ring-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */
--tw-inset-ring-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */
--tw-inset-ring-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */
--tw-inset-ring-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */
--tw-inset-ring-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */
--tw-inset-ring-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */
--tw-inset-ring-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */
--tw-inset-ring-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */
--tw-inset-ring-color: var(--color-neutral-100); /* oklch(97% 0 0) */
--tw-inset-ring-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */
--tw-inset-ring-color: var(--color-neutral-300); /* oklch(87% 0 0) */
--tw-inset-ring-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */
--tw-inset-ring-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */
--tw-inset-ring-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */
--tw-inset-ring-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */
--tw-inset-ring-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */
--tw-inset-ring-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */
--tw-inset-ring-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */
--tw-inset-ring-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */
--tw-inset-ring-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */
--tw-inset-ring-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */
--tw-inset-ring-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */
--tw-inset-ring-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */
--tw-inset-ring-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */
--tw-inset-ring-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */
--tw-inset-ring-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */
--tw-inset-ring-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */
--tw-inset-ring-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */
--tw-inset-ring-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */
```

--------------------------------

### Position Elements with Top, Right, Bottom, Left Utilities in Tailwind CSS

Source: https://tailwindcss.com/docs/top-right-bottom-left

Demonstrates basic positioning using Tailwind CSS utilities to pin elements to corners, span edges, and fill parent containers. Uses absolute positioning with top-0, right-0, bottom-0, left-0, and inset utilities to achieve various layout patterns.

```HTML
<!-- Pin to top left corner -->
<div class="relative size-32 ...">
  <div class="absolute top-0 left-0 size-16 ...">01</div>
</div>
<!-- Span top edge -->
<div class="relative size-32 ...">
  <div class="absolute inset-x-0 top-0 h-16 ...">02</div>
</div>
<!-- Pin to top right corner -->
<div class="relative size-32 ...">
  <div class="absolute top-0 right-0 size-16 ...">03</div>
</div>
<!-- Span left edge -->
<div class="relative size-32 ...">
  <div class="absolute inset-y-0 left-0 w-16 ...">04</div>
</div>
<!-- Fill entire parent -->
<div class="relative size-32 ...">
  <div class="absolute inset-0 ...">05</div>
</div>
<!-- Span right edge -->
<div class="relative size-32 ...">
  <div class="absolute inset-y-0 right-0 w-16 ...">06</div>
</div>
<!-- Pin to bottom left corner -->
<div class="relative size-32 ...">
  <div class="absolute bottom-0 left-0 size-16 ...">07</div>
</div>
<!-- Span bottom edge -->
<div class="relative size-32 ...">
  <div class="absolute inset-x-0 bottom-0 h-16 ...">08</div>
</div>
<!-- Pin to bottom right corner -->
<div class="relative size-32 ...">
  <div class="absolute right-0 bottom-0 size-16 ...">09</div>
</div>
```

--------------------------------

### Apply Styles Based on Pointing Device Accuracy (Tailwind CSS HTML)

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

This snippet demonstrates how to use `pointer-coarse` to apply styles specifically for less accurate pointing devices, such as touchscreens. This is useful for increasing target sizes on touch-enabled devices to improve usability.

```html
<fieldset aria-label="Choose a memory option">
  <div class="flex items-center justify-between">
    <div>RAM</div>
    <a href="#"> See performance specs </a>
  </div>
  <div class="mt-4 grid grid-cols-6 gap-2 pointer-coarse:mt-6 pointer-coarse:grid-cols-3 pointer-coarse:gap-4">
    <label class="p-2 pointer-coarse:p-4 ...">
      <input type="radio" name="memory-option" value="4 GB" className="sr-only" />
      <span>4 GB</span>
    </label>
    <!-- ... -->
  </div>
</fieldset>
```

--------------------------------

### Apply Custom Saturation Values with Tailwind CSS

Source: https://tailwindcss.com/docs/filter-saturate

This snippet illustrates how to use Tailwind CSS's arbitrary value syntax, `saturate-[<value>]`, to apply a completely custom saturation level to an element. This allows for fine-grained control beyond the predefined utility classes.

```html
<img class="saturate-[.25] ..." src="/img/mountains.jpg" />
```

--------------------------------

### Apply Arbitrary Values for Direct Styling in Tailwind CSS HTML

Source: https://tailwindcss.com/docs/adding-custom-styles

Illustrates applying arbitrary CSS values directly within Tailwind classes using square bracket notation. This enables precise, on-the-fly styling for properties like `top` that fall outside predefined design tokens.

```html
<div class="top-[117px]">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Responsive Backdrop Invert Filters with Tailwind CSS

Source: https://tailwindcss.com/docs/backdrop-filter-invert

This snippet shows how to make `backdrop-filter: invert()` utilities responsive using Tailwind CSS breakpoint prefixes. By applying classes like `md:backdrop-invert`, the inversion effect can be conditionally applied or changed based on the screen size, enhancing adaptive designs.

```html
<div class="backdrop-invert-0 md:backdrop-invert ...">  <!-- ... --></div>
```

--------------------------------

### Tailwind CSS Container Query Variants

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

Variants for styling elements based on container width using container queries. Includes predefined container sizes (@3xs through @7xl) and custom container queries using @min-[] and @max-[] syntax for responsive container-based layouts.

```css
/* 3XS container (16rem and up) */
@container (width >= 16rem)

/* 2XS container (18rem and up) */
@container (width >= 18rem)

/* XS container (20rem and up) */
@container (width >= 20rem)

/* Small container (24rem and up) */
@container (width >= 24rem)

/* Medium container (28rem and up) */
@container (width >= 28rem)

/* Large container (32rem and up) */
@container (width >= 32rem)

/* XL container (36rem and up) */
@container (width >= 36rem)

/* 2XL container (42rem and up) */
@container (width >= 42rem)

/* 3XL container (48rem and up) */
@container (width >= 48rem)

/* 4XL container (56rem and up) */
@container (width >= 56rem)

/* 5XL container (64rem and up) */
@container (width >= 64rem)

/* 6XL container (72rem and up) */
@container (width >= 72rem)

/* 7XL container (80rem and up) */
@container (width >= 80rem)

/* Custom minimum container query */
@container (width >= ...)

/* Max 3XS container (below 16rem) */
@container (width < 16rem)

/* Max 2XS container (below 18rem) */
@container (width < 18rem)

/* Max XS container (below 20rem) */
@container (width < 20rem)

/* Max small container (below 24rem) */
@container (width < 24rem)

/* Max medium container (below 28rem) */
@container (width < 28rem)

/* Max large container (below 32rem) */
@container (width < 32rem)

/* Max XL container (below 36rem) */
@container (width < 36rem)

/* Max 2XL container (below 42rem) */
@container (width < 42rem)

/* Max 3XL container (below 48rem) */
@container (width < 48rem)

/* Max 4XL container (below 56rem) */
@container (width < 56rem)

/* Max 5XL container (below 64rem) */
@container (width < 64rem)

/* Max 6XL container (below 72rem) */
@container (width < 72rem)

/* Max 7XL container (below 80rem) */
@container (width < 80rem)

/* Custom maximum container query */
@container (width < ...)
```

--------------------------------

### Apply whitespace-pre-wrap utility in HTML

Source: https://tailwindcss.com/docs/white-space

Use the whitespace-pre-wrap class to preserve newlines and spaces within an element while allowing normal text wrapping. Spaces and line breaks are maintained as written.

```html
<p class="whitespace-pre-wrap">Hey everyone!It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

--------------------------------

### React component with Tailwind CSS for reusable card styling

Source: https://tailwindcss.com/docs/styling-with-utility-classes

A React functional component that encapsulates vacation card styling using Tailwind utility classes. This approach eliminates style duplication across multiple files by creating a single source of truth for component styles that can be easily updated in one location.

```jsx
export function VacationCard({ img, imgAlt, eyebrow, title, pricing, url }) {
  return (
    <div>
      <img className="rounded-lg" src={img} alt={imgAlt} />
      <div className="mt-4">
        <div className="text-xs font-bold text-sky-500">{eyebrow}</div>
        <div className="mt-1 font-bold text-gray-700">
          <a href={url} className="hover:underline">
            {title}
          </a>
        </div>
        <div className="mt-2 text-sm text-gray-600">{pricing}</div>
      </div>
    </div>
  );
}
```

--------------------------------

### Create Grid Containers with Tailwind CSS Grid Utility

Source: https://tailwindcss.com/docs/display

This snippet illustrates the `grid` utility in Tailwind CSS. It transforms an element into a grid container, enabling a powerful two-dimensional layout system for its direct children. This utility is fundamental for creating complex, responsive page structures.

```html
<div class="grid grid-cols-3 grid-rows-3 gap-4">  <!-- ... --></div>
```

--------------------------------

### Apply custom backdrop sepia value with arbitrary syntax

Source: https://tailwindcss.com/docs/backdrop-filter-sepia

Use the backdrop-sepia-[<value>] arbitrary value syntax to apply a custom sepia filter value not covered by predefined classes. This allows precise control over the sepia intensity using any valid CSS value.

```html
<div class="backdrop-sepia-[.25] ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Responsive Fill Colors to SVG in Tailwind CSS

Source: https://tailwindcss.com/docs/fill

Demonstrates how to apply different fill colors based on screen size using responsive variants like `md:`. This allows for adaptive styling of SVG elements across various devices and breakpoints.

```html
<svg class="fill-cyan-500 md:fill-cyan-700 ...">  <!-- ... --></svg>
```

--------------------------------

### Apply Responsive Text Shadow with Breakpoint Variant

Source: https://tailwindcss.com/docs/text-shadow

Use the `md:` breakpoint variant to apply text shadow utilities only at medium screen sizes and above. This demonstrates responsive design in Tailwind CSS where utilities are conditionally applied based on screen width.

```html
<p class="text-shadow-none md:text-shadow-lg ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### CSS custom properties with row utilities

Source: https://tailwindcss.com/docs/grid-row

Use the row-(<custom-property>) syntax as shorthand for row-[var(<custom-property>)] to reference CSS custom properties. The var() function is automatically applied, enabling dynamic grid row configurations.

```html
<div class="row-(--my-rows) ...">
  <!-- ... -->
</div>
```

--------------------------------

### Apply Responsive Text Decoration Thickness with Tailwind CSS

Source: https://tailwindcss.com/docs/text-decoration-thickness

This snippet demonstrates how to make text decoration thickness responsive using Tailwind CSS breakpoint variants. The `md:decoration-4` class applies a thickness of 4px only on medium screens and larger.

```html
<p class="underline md:decoration-4 ...">  Lorem ipsum dolor sit amet...</p>
```

--------------------------------

### Apply Transform Origin with CSS Variable in Tailwind CSS

Source: https://tailwindcss.com/docs/transform-origin

Shows how to use the `origin-(<custom-property>)` syntax to set the `transform-origin` based on a CSS variable. This is a convenient shorthand for `origin-[var(<custom-property>)]`, promoting reusability and dynamic styling.

```html
<img class="origin-(--my-transform-origin) ..." src="/img/mountains.jpg" />
```

--------------------------------

### Support Negative Values in Tailwind CSS Utilities

Source: https://tailwindcss.com/docs/adding-custom-styles

Explains how to register separate positive and negative utilities using `--value()` and `--spacing()` functions to handle negative values. This involves applying transformations like multiplying by `-1` for negative variants.

```css
@utility inset-* {
  inset: --spacing(--value(integer));
  inset: --value([percentage], [length]);
}@utility -inset-* {
  inset: --spacing(--value(integer) * -1);
  inset: calc(--value([percentage], [length]) * -1);
}
```