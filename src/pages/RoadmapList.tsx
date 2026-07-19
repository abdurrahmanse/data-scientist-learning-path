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
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Roadmap</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.125rem' }}>
        Step-by-step guide to becoming a Data Scientist. Follow these stages in order to build a solid foundation.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {stages.map(stage => (
          <RoadmapCard key={stage.id} stage={stage} />
        ))}
      </div>
    </div>
  );
}
