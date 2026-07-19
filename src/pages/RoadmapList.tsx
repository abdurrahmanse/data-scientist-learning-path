import React, { useEffect, useState } from 'react';
import RoadmapCard from '../components/roadmap/RoadmapCard';
import { dataService } from '../services/dataService';
import { Stage } from '../types/roadmap.types';
import SEO from '../components/common/SEO';

export default function RoadmapList() {
  const [stages, setStages] = useState<Stage[]>([]);

  useEffect(() => {
    dataService.getStages().then(setStages);
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <SEO 
        title="Curriculum Roadmap" 
        description="Explore the complete step-by-step syllabus for becoming a Data Scientist. Covering everything from Python fundamentals to Deep Learning and MLOps."
      />
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="section-title animate-fade-in-up" style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>The Roadmap</h1>
        <p className="hero-subtitle animate-fade-in-up delay-1" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Step-by-step guide to becoming a Data Scientist. Follow these stages in order to build a solid foundation.
        </p>
      </div>
      
      <div className="responsive-grid">
        {stages.map((stage, index) => (
          <RoadmapCard key={stage.id} stage={stage} index={index} />
        ))}
      </div>
    </div>
  );
}
