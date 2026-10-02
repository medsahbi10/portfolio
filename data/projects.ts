import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'World Cup 2026 Forecasting & Analytics',
    description:
      'End-to-end ETL and forecasting platform (Dagster, dbt, DuckDB) with a Dixon-Coles model and 20,000-run Monte-Carlo simulation, served through FastAPI and a Next.js frontend.',
    logo: '/logos/worldcup.svg',
    link: 'https://worldcup-2026-analytics.vercel.app',
    slug: 'worldcup-2026-analytics',
    categories: ['BI & Data', 'AI', 'Software'],
  },
  {
    title: 'Insight Agent',
    description:
      'Conversational data analyst built with LangGraph over a 1.5M-row DuckDB warehouse, with an LLM-as-judge evaluation harness (91.7% correctness) and Arize Phoenix tracing.',
    logo: '/logos/agent.svg',
    link: 'https://github.com/medsahbi10/insight-agent',
    slug: 'insight-agent',
    categories: ['AI', 'BI & Data'],
  },
  {
    title: 'Legal-RAG: EU Regulations Q&A',
    description:
      'Open-source RAG system over GDPR, the EU AI Act and CSRD, with hybrid BM25 + Qdrant retrieval, LLM reranking and cited answers in a Streamlit chat (93% faithfulness).',
    logo: '/logos/legal.svg',
    link: 'https://github.com/medsahbi10/rag-eu-regulations',
    slug: 'rag-eu-regulations',
    categories: ['AI'],
  },
  {
    title: 'SAP BTP Procurement Approval App',
    description:
      'Procure-to-Pay approval application on SAP BTP with CAP, CDS data models, OData v4 services, approval workflow logic and a Fiori Elements / SAPUI5 interface.',
    logo: '/logos/sap.svg',
    link: 'https://github.com/medsahbi10/sap-btp-procurement-app',
    slug: 'sap-btp-procurement-app',
    categories: ['SAP', 'Software'],
  },
  {
    title: 'Data & BI Analytics with PGS',
    description:
      'Staging area and data warehouse integrating 12+ sources, 3 Power BI dashboards with 9 KPIs, and an ML model predicting order preparation time with 93% accuracy.',
    logo: '/logos/bi.svg',
    link: 'https://github.com/medsahbi10',
    slug: 'pgs-bi-analytics',
    categories: ['BI & Data', 'AI'],
  },
];
