'use client';

import { useState } from 'react';

import ProjectCard from '@/components/ProjectCard';
import { Project, ProjectCategory } from '@/types';

import styles from '@/styles/ProjectsPage.module.css';

const filters: ('All' | ProjectCategory)[] = ['All', 'BI & Data', 'AI', 'SAP', 'Software'];

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  const [active, setActive] = useState<'All' | ProjectCategory>('All');

  const visible =
    active === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(active));

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`${styles.filter} ${active === filter ? styles.filterActive : ''}`}
            aria-pressed={active === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className={styles.timeline}>
        {visible.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index + 1}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
