import React, { useEffect, useState } from 'react';
import { dataService } from '../services/dataService';
import { Resource } from '../types/roadmap.types';

export default function Resources() {
  const [books, setBooks] = useState<Resource[]>([]);
  const [youtube, setYoutube] = useState<Resource[]>([]);

  useEffect(() => {
    dataService.getBooks().then(setBooks);
    dataService.getYouTubeChannels().then(setYoutube);
  }, []);

  const renderResourceCard = (resource: Resource) => (
    <div key={resource.id} style={{
      padding: '1.5rem',
      backgroundColor: 'var(--bg-secondary)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-color)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
      <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{resource.title}</h3>
      <p style={{ color: 'var(--text-secondary)', margin: 0 }}>By {resource.authorOrCreator}</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
        <span style={{ fontSize: '0.75rem', backgroundColor: 'var(--bg-tertiary)', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>
          {resource.price}
        </span>
        <span style={{ fontSize: '0.75rem', backgroundColor: 'var(--bg-tertiary)', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>
          {resource.difficulty}
        </span>
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Curated Resources</h1>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
          Books
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {books.map(renderResourceCard)}
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
          YouTube Channels
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {youtube.map(renderResourceCard)}
        </div>
      </section>
    </div>
  );
}
