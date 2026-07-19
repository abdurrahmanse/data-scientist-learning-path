import React, { useEffect, useState } from 'react';
import { dataService } from '../services/dataService';
import { Project } from '../types/roadmap.types';
import SEO from '../components/common/SEO';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    dataService.getProjects().then(setProjects);
  }, []);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <SEO 
        title="Portfolio Projects" 
        description="A curated list of data science and machine learning projects to practice your skills and build your portfolio."
      />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Portfolio Projects</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.125rem' }}>
        Practice your skills by building these curated projects.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
        {projects.map(project => (
          <div key={project.id} style={{
            padding: '1.5rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', flex: 1, marginBottom: '1rem' }}>{project.description}</p>
            
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {project.techStackIds.map(tech => (
                <span key={tech} style={{ fontSize: '0.75rem', backgroundColor: 'var(--bg-tertiary)', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
              <span style={{ 
                fontSize: '0.75rem', 
                backgroundColor: project.difficulty === 'Beginner' ? 'var(--success)' : 'var(--warning)', 
                color: '#fff',
                padding: '0.25rem 0.5rem', 
                borderRadius: '1rem' 
              }}>
                {project.difficulty}
              </span>
              {project.datasetUrl && (
                <a href={project.datasetUrl} target="_blank" rel="noreferrer" style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>
                  Get Dataset &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
