import React, { useEffect, useState } from 'react';
import { dataService } from '../services/dataService';
import { Resource } from '../types/roadmap.types';
import SEO from '../components/common/SEO';
import { Book, PlayCircle, DollarSign, Signal, ExternalLink } from 'lucide-react';

export default function Resources() {
  const [books, setBooks] = useState<Resource[]>([]);
  const [youtube, setYoutube] = useState<Resource[]>([]);

  useEffect(() => {
    dataService.getBooks().then(setBooks);
    dataService.getYouTubeChannels().then(setYoutube);
  }, []);

  const renderResourceCard = (resource: Resource, index: number, isYoutube: boolean = false) => (
    <div
      key={resource.id}
      className={`glass-panel animate-fade-in-up delay-${(index % 5) + 1}`}
      style={{
        padding: '2rem',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        e.currentTarget.style.borderColor = isYoutube ? 'rgba(239, 68, 68, 0.4)' : 'rgba(6, 182, 212, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
        e.currentTarget.style.borderColor = 'var(--glass-border)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        <div style={{
          backgroundColor: isYoutube ? 'rgba(239, 68, 68, 0.1)' : 'rgba(6, 182, 212, 0.1)',
          color: isYoutube ? '#ef4444' : 'var(--accent-primary)',
          padding: '0.75rem',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {isYoutube ? <PlayCircle size={24} /> : <Book size={24} />}
        </div>
        <div>
          <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.25rem 0', color: 'var(--text-primary)', fontWeight: '700' }}>
            {resource.title}
          </h3>
          <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>
            By <span style={{ color: 'var(--text-primary)' }}>{resource.authorOrCreator}</span>
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
        <span className="glass-pill" style={{
          fontSize: '0.8rem',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          color: '#4ade80',
          borderColor: 'rgba(34, 197, 94, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem'
        }}>
          <DollarSign size={14} />
          {resource.price}
        </span>
        <span className="glass-pill" style={{
          fontSize: '0.8rem',
          backgroundColor: 'rgba(168, 85, 247, 0.1)',
          color: '#c084fc',
          borderColor: 'rgba(168, 85, 247, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem'
        }}>
          <Signal size={14} />
          {resource.difficulty}
        </span>
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <SEO
        title="Curated Resources"
        description="The best books, courses, and YouTube channels to learn Data Science and Machine Learning."
      />

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="hero-title animate-fade-in-up" style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', marginBottom: '1rem' }}>
          Curated Resources
        </h1>
        <p className="hero-subtitle animate-fade-in-up delay-1" style={{ maxWidth: '600px', margin: '0 auto' }}>
          The best books, courses, and YouTube channels to learn Data Science and Machine Learning.
        </p>
      </div>

      <section style={{ marginBottom: '5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
          <Book size={28} color="var(--accent-primary)" />
          <h2 style={{ fontSize: '1.75rem', margin: 0, color: 'var(--text-primary)', fontWeight: '700' }}>
            Essential Books
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {books.map((book, index) => renderResourceCard(book, index, false))}
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
          <PlayCircle size={28} color="#ef4444" />
          <h2 style={{ fontSize: '1.75rem', margin: 0, color: 'var(--text-primary)', fontWeight: '700' }}>
            YouTube Channels
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {youtube.map((channel, index) => renderResourceCard(channel, index, true))}
        </div>
      </section>
    </div>
  );
}
