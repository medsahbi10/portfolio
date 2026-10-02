import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Mohamed Sahbi Ben Rejeb | Portfolio',
    template: 'Mohamed Sahbi Ben Rejeb | %s',
  },
  description:
    'Mohamed Sahbi Ben Rejeb is a Data & AI Engineer building ETL pipelines, BI dashboards, AI agents and enterprise apps on SAP BTP.',
  keywords: [
    'mohamed sahbi ben rejeb',
    'sahbi ben rejeb',
    'data engineer',
    'ai engineer',
    'bi engineer',
    'sap btp',
    'business intelligence',
    'power bi',
    'ssis',
    'etl',
    'data warehouse',
    'portfolio',
  ],
  openGraph: {
    title: "Mohamed Sahbi Ben Rejeb's Portfolio",
    description:
      'Data & AI Engineer building ETL pipelines, BI dashboards, AI agents and enterprise apps.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
