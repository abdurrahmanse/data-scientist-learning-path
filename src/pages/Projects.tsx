import React, { useEffect, useState } from 'react';
import { dataService } from '../services/dataService';
import { Project } from '../types/roadmap.types';
import SEO from '../components/common/SEO';
import { Code, Database, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    dataService.getProjects().then(setProjects);
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <SEO 
        title="Portfolio Projects" 
        description="A curated list of data science and machine learning projects to practice your skills and build your portfolio."
      />
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="hero-title animate-fade-in-up" style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', marginBottom: '1rem' }}>
          Portfolio Projects
        </h1>
        <p className="hero-subtitle animate-fade-in-up delay-1" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Practice your skills and build your portfolio with these curated data science and machine learning projects.
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`glass-panel animate-fade-in-up delay-${(index % 5) + 1}`}
            style={{
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-primary)', fontWeight: '700', lineHeight: '1.3' }}>
                {project.title}
              </h3>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1.05rem' }}>
              {project.description}
            </p>
            
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {project.techStackIds.map(tech => (
                <span key={tech} className="glass-pill" style={{ 
                  fontSize: '0.8rem', 
                  backgroundColor: 'rgba(6, 182, 212, 0.1)', 
                  color: 'var(--accent-primary)',
                  borderColor: 'rgba(6, 182, 212, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}>
                  <Code size={12} />
                  {tech}
                </span>
              ))}
            </div>

            {project.deliverables && project.deliverables.length > 0 && (
              <div style={{ marginBottom: '2rem', backgroundColor: 'rgba(15, 23, 42, 0.3)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Deliverables</strong>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {project.deliverables.map((deliverable, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
              <span style={{ 
                fontSize: '0.75rem', 
                padding: '0.3rem 0.75rem', 
                backgroundColor: project.difficulty === 'Beginner' ? 'rgba(34, 197, 94, 0.15)' : 
                               project.difficulty === 'Intermediate' ? 'rgba(234, 179, 8, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                color: project.difficulty === 'Beginner' ? '#4ade80' : 
                       project.difficulty === 'Intermediate' ? '#facc15' : '#f87171',
                border: '1px solid',
                borderColor: project.difficulty === 'Beginner' ? 'rgba(34, 197, 94, 0.3)' : 
                            project.difficulty === 'Intermediate' ? 'rgba(234, 179, 8, 0.3)' : 'rgba(239, 68, 68, 0.3)',
                borderRadius: '1rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {project.difficulty}
              </span>
              
              {project.datasetUrl && (
                <a 
                  href={project.datasetUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '600', 
                    color: 'var(--accent-primary)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                >
                  <Database size={16} />
                  Get Dataset <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
