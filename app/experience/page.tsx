import { Metadata } from 'next';
import Link from 'next/link';

import { experience } from '@/data/experience';

import styles from '@/styles/AboutPage.module.css';

export const metadata: Metadata = {
  title: 'Experience',
};

const ExperiencePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Experience</h1>
              <p className={styles.role}>
                Building data pipelines, warehouses, dashboards and AI tools
              </p>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          {experience.map((job, index) => (
            <section className={styles.section} key={job.company}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className={styles.sectionTitle}>{job.role}</h2>
              </div>

              <div className={styles.sectionBody}>
                <div className={styles.experienceCard}>
                  <div className={styles.expMeta}>
                    <span className={styles.expPeriod}>{job.period}</span>
                  </div>
                  <p className={styles.expCompany}>{job.company}</p>
                  <ul className={styles.expList}>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default ExperiencePage;
