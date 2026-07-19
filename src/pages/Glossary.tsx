import React, { useEffect, useState, useMemo } from 'react';
import { dataService } from '../services/dataService';
import { GlossaryTerm } from '../types/roadmap.types';
import SEO from '../components/common/SEO';
import { Search, BookOpen } from 'lucide-react';

export default function Glossary() {
  const [terms, setTerms] = useState<GlossaryTerm[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dataService.getGlossary().then(setTerms);
  }, []);

  const filteredTerms = useMemo(() => {
    return terms
      .filter(t => t.term.toLowerCase().includes(search.toLowerCase()) || t.definition.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [terms, search]);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <SEO 
        title="Glossary - Data Science Terms" 
        description="A comprehensive dictionary of common Data Science, Machine Learning, and Artificial Intelligence terms."
      />
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="hero-title animate-fade-in-up" style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', marginBottom: '1rem' }}>
          Glossary
        </h1>
        <p className="hero-subtitle animate-fade-in-up delay-1" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Your comprehensive dictionary for Data Science, Machine Learning, and Artificial Intelligence terminology.
        </p>
      </div>

      <div className="animate-fade-in-up delay-2" style={{ position: 'relative', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
        <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center' }}>
          <Search size={20} />
        </div>
        <input 
          type="text"
          placeholder="Search for terms or definitions..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '1rem 1rem 1rem 3rem',
            fontSize: '1.125rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--glass-border)',
            backgroundColor: 'var(--glass-bg)',
            color: 'var(--text-primary)',
            boxShadow: 'var(--glass-shadow)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            outline: 'none'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-primary)';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(6, 182, 212, 0.3)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
          }}
        />
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {filteredTerms.length === 0 ? (
          <div className="glass-panel animate-fade-in-up delay-3" style={{ padding: '3rem', textAlign: 'center', gridColumn: '1 / -1', borderRadius: 'var(--radius-lg)' }}>
            <p style={{ color: 'var(--text-tertiary)', fontSize: '1.25rem' }}>No terms found matching "{search}".</p>
          </div>
        ) : (
          filteredTerms.map((term, index) => (
            <div 
              key={term.id} 
              className={`glass-panel animate-fade-in-up delay-${(index % 5) + 1}`}
              style={{
                padding: '1.75rem',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ color: 'var(--accent-primary)', display: 'flex' }}>
                  <BookOpen size={20} />
                </div>
                <h3 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--text-primary)', fontWeight: '700' }}>
                  {term.term}
                </h3>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', margin: '0 0 1.5rem 0', lineHeight: '1.6', flex: 1 }}>
                {term.definition}
              </p>
              
              {term.relatedTerms && term.relatedTerms.length > 0 && (
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'baseline', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontWeight: '600' }}>Related:</span>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {term.relatedTerms.map(rt => (
                      <span key={rt} className="glass-pill" style={{ 
                        fontSize: '0.75rem', 
                        padding: '0.2rem 0.6rem', 
                        backgroundColor: 'rgba(6,182,212,0.1)',
                        borderColor: 'rgba(6,182,212,0.2)',
                        color: 'var(--accent-primary)'
                      }}>
                        {rt}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
