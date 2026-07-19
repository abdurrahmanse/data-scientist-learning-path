import React, { useEffect, useState } from 'react';
import RoadmapCard from '../components/roadmap/RoadmapCard';
import { dataService } from '../services/dataService';
import { Stage } from '../types/roadmap.types';

export default function RoadmapList() {
  const [stages, setStages] = useState<Stage[]>([]);

  useEffect(() => {
    dataService.getStages().then(setStages);
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="animate-fade-in-up" style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>The Roadmap</h1>
        <p className="animate-fade-in-up delay-1" style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          Step-by-step guide to becoming a Data Scientist. Follow these stages in order to build a solid foundation.
        </p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
        gap: '2rem' 
      }}>
        {stages.map((stage, index) => (
          <RoadmapCard key={stage.id} stage={stage} index={index} />
        ))}
      </div>
    </div>
  );
}
