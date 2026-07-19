import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dataService } from '../services/dataService';
import { Stage, Topic } from '../types/roadmap.types';
import { PATHS } from '../routes/routePaths';
import SEO from '../components/common/SEO';

export default function StageDetails() {
  const { stageSlug } = useParams<{ stageSlug: string }>();
  const [stage, setStage] = useState<Stage | null>(null);
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    dataService.getStages().then(stages => {
      const foundStage = stages.find(s => s.slug === stageSlug);
      if (foundStage) {
        setStage(foundStage);
        
        // Fetch topics for this stage
        dataService.getTopics().then(allTopics => {
          setTopics(allTopics.filter(t => t.stageId === foundStage.id));
        });
      }
    });
  }, [stageSlug]);

  if (!stage) return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
        <h2 style={{ color: 'var(--text-secondary)' }}>Loading stage...</h2>
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <SEO 
        title={`${stage.title}`} 
        description={stage.description}
      />
      
      {/* Back to Roadmap Breadcrumb */}
      <div style={{ marginBottom: '2rem' }}>
        <Link to={PATHS.ROADMAP} style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>&larr;</span> Back to Roadmap
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ 
          fontSize: '1rem', 
          color: 'var(--accent-primary)', 
          fontWeight: '800',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '0.5rem'
        }}>
          Stage {stage.order}
        </span>
        <h1 className="hero-title animate-fade-in-up" style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>
          {stage.title}
        </h1>
        <p className="hero-subtitle animate-fade-in-up delay-1" style={{ maxWidth: '700px', margin: '0 auto' }}>
          {stage.description}
        </p>
      </div>

      <h2 className="section-title animate-fade-in-up delay-2" style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
        Curriculum Topics
      </h2>
      
      {topics.length === 0 ? (
        <div className="glass-panel animate-fade-in-up delay-3" style={{ padding: '3rem', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '1.25rem' }}>Topics for this stage are coming soon.</p>
        </div>
      ) : (
        <div className="responsive-grid">
          {topics.map((topic, index) => (
            <Link 
              key={topic.id} 
              to={`/roadmap/${stageSlug}/${topic.id}`} 
              style={{ textDecoration: 'none', display: 'block', height: '100%' }}
            >
              <div 
                className={`glass-panel animate-fade-in-up delay-${(index % 5) + 1}`} 
                style={{
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
                  e.currentTarget.style.background = 'rgba(15, 23, 42, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.background = 'var(--glass-bg)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ 
                    fontSize: '1.25rem', 
                    color: 'var(--accent-primary)',
                    fontWeight: '700',
                    fontFamily: 'monospace'
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  {/* Difficulty Badge */}
                  <span style={{ 
                    fontSize: '0.75rem', 
                    padding: '0.25rem 0.75rem', 
                    backgroundColor: topic.difficulty === 'Beginner' ? 'rgba(34, 197, 94, 0.2)' : 
                                   topic.difficulty === 'Intermediate' ? 'rgba(234, 179, 8, 0.2)' : 
                                   topic.difficulty === 'Advanced' ? 'rgba(249, 115, 22, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                    color: topic.difficulty === 'Beginner' ? '#4ade80' : 
                           topic.difficulty === 'Intermediate' ? '#facc15' : 
                           topic.difficulty === 'Advanced' ? '#fb923c' : '#f87171',
                    border: '1px solid',
                    borderColor: topic.difficulty === 'Beginner' ? 'rgba(34, 197, 94, 0.3)' : 
                                topic.difficulty === 'Intermediate' ? 'rgba(234, 179, 8, 0.3)' : 
                                topic.difficulty === 'Advanced' ? 'rgba(249, 115, 22, 0.3)' : 'rgba(239, 68, 68, 0.3)',
                    borderRadius: '1rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {topic.difficulty}
                  </span>
                </div>
                
                <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.35rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                  {topic.title}
                </h3>
                
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', color: 'var(--accent-primary)', fontWeight: '600', fontSize: '0.9rem' }}>
                  Read Lesson 
                  <span style={{ marginLeft: '0.5rem', transition: 'transform 0.2s' }} className="arrow-icon">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
