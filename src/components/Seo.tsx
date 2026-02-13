import { Helmet } from 'react-helmet-async';

type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function Seo({ title, description, image, url }: Props) {
  const siteTitle = title ? `${title} — FinTrack` : 'FinTrack — Catat keuanganmu dengan mudah';
  const siteDescription = description ?? 'FinTrack: aplikasi pencatatan keuangan sederhana untuk mengelola pemasukan, pengeluaran, dan laporan keuangan Anda.';
  const siteUrl = url ?? 'https://laporan-keuangan-sand.vercel.app/';
  const siteImage = image ?? `${siteUrl}logoBesar.png`;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={siteImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
}
