import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dataService } from '../services/dataService';
import { Stage, Topic } from '../types/roadmap.types';
import { PATHS } from '../routes/routePaths';

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

  if (!stage) return <div>Loading stage...</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{stage.title}</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '2rem' }}>
        {stage.description}
      </p>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        Topics in this Stage
      </h2>
      
      {topics.length === 0 ? (
        <p style={{ color: 'var(--text-tertiary)' }}>Topics for this stage are coming soon.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {topics.map((topic, index) => (
            <div key={topic.id} style={{
              padding: '1rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '1.125rem' }}>
                  <span style={{ color: 'var(--text-tertiary)', marginRight: '0.5rem' }}>{index + 1}.</span>
                  {topic.title}
                </h3>
                <span style={{ 
                  fontSize: '0.75rem', 
                  padding: '0.25rem 0.5rem', 
                  backgroundColor: topic.difficulty === 'Beginner' ? 'var(--success)' : 'var(--warning)',
                  color: '#fff',
                  borderRadius: '1rem'
                }}>
                  {topic.difficulty}
                </span>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <Link 
                  to={`/roadmap/${stageSlug}/${topic.id}`} 
                  style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}
                >
                  Read Lesson &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
