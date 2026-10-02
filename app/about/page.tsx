'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const skills = [
  {
    title: 'Data & BI',
    tags: ['SQL', 'SSIS', 'SSAS', 'SSRS', 'Power BI', 'DAX', 'QlikView', 'Talend', 'dbt', 'Dagster', 'PostgreSQL', 'DuckDB'],
  },
  {
    title: 'AI & LLM',
    tags: ['PyTorch', 'Transformers', 'LoRA / PEFT', 'LangGraph', 'RAG', 'Qdrant', 'LLM-as-judge', 'Scikit-learn', 'Pandas'],
  },
  {
    title: 'Software Engineering',
    tags: ['Python', 'Java', 'TypeScript', 'FastAPI', 'Spring Boot', 'Angular', 'React', 'Next.js', 'REST APIs', 'Microservices'],
  },
  {
    title: 'SAP',
    tags: ['BTP', 'CAP', 'CDS', 'OData v4', 'Fiori Elements', 'SAPUI5', 'ABAP', 'BW/HANA', 'AI Core', 'Integration Suite'],
  },
  {
    title: 'Cloud & DevOps',
    tags: ['AWS SageMaker', 'Lambda', 'API Gateway', 'Docker', 'GitHub Actions', 'GitLab CI', 'Keycloak', 'Grafana', 'Vercel'],
  },
];

const education = [
  {
    period: '2022 – 2025',
    school: 'ESPRIT · Ariana, Tunisia',
    degree: 'Engineering Degree in Computer Science – Business Intelligence',
  },
  {
    period: '2020 – 2022',
    school: 'Preparatory Institute for Engineering Studies · Nabeul, Tunisia',
    degree: 'Preparation for the national engineering entrance exam',
  },
];

const certifications = [
  {
    name: 'SAP Certified Generative AI Developer (C_AIG)',
    href: 'https://www.credly.com/badges/f6ba8357-acc7-46d6-a49e-a8a46e38da53',
  },
  {
    name: 'SAP Technology Skills 2024 – Integration Suite Adoption Lab',
  },
];

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <Image
              src="/photo.jpg"
              alt="Mohamed Sahbi Ben Rejeb"
              width={72}
              height={72}
              className={styles.avatar}
            />
            <div className={styles.headerText}>
              <h1 className={styles.name}>Mohamed Sahbi Ben Rejeb</h1>
              <p className={styles.role}>Data & AI Engineer · BI Engineer at Laboratoires MédiS</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                Nabeul, Tunisia
              </div>
            </div>
          </div>

          <div className={styles.headerActions}>
            <a
              href="https://github.com/medsahbi10"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;m a Data &amp; AI Engineer with an engineering degree in Business
                Intelligence. I build end-to-end data solutions: getting data out of
                operational systems, modeling it into warehouses, and turning it into
                KPIs and dashboards with SSIS, SQL, Power BI and DAX.
              </p>

              <p className={styles.paragraph}>
                On top of that data, I build AI applications (fine-tuned LLMs, RAG
                systems and agents that answer questions in plain language) and the
                software around them: FastAPI and Spring Boot backends, Angular and
                React frontends, and enterprise apps on SAP BTP, shipped with Docker
                and CI/CD.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                {skills.map((category) => (
                  <div className={styles.skillCategory} key={category.title}>
                    <h4 className={styles.skillTitle}>{category.title}</h4>
                    <div className={styles.skillTags}>
                      {category.tags.map((tag) => (
                        <span className={styles.skillTag} key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Education</h2>
            </div>

            <div className={styles.sectionBody}>
              {education.map((item) => (
                <div className={styles.experienceCard} key={item.school}>
                  <div className={styles.expMeta}>
                    <span className={styles.expPeriod}>{item.period}</span>
                  </div>
                  <h3 className={styles.expRole}>{item.degree}</h3>
                  <p className={styles.expCompany}>{item.school}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Certifications</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.writingLinks}>
                {certifications.map((cert) =>
                  cert.href ? (
                    <a
                      key={cert.name}
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.writingLink}
                    >
                      <span>{cert.name}</span>
                      <VscLinkExternal size={14} />
                    </a>
                  ) : (
                    <span key={cert.name} className={styles.writingLink}>
                      {cert.name}
                    </span>
                  )
                )}
              </div>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/experience" className={styles.footerLink}>
            View my experience →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
