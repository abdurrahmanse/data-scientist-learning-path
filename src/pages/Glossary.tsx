import React, { useEffect, useState, useMemo } from 'react';
import { dataService } from '../services/dataService';
import { GlossaryTerm } from '../types/roadmap.types';

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
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Glossary</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.125rem' }}>
        Dictionary of common data science and machine learning terms.
      </p>

      <input 
        type="text"
        placeholder="Search terms..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          fontSize: '1rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-secondary)',
          color: 'var(--text-primary)',
          marginBottom: '2rem'
        }}
      />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredTerms.length === 0 ? (
          <p style={{ color: 'var(--text-tertiary)' }}>No terms found.</p>
        ) : (
          filteredTerms.map(term => (
            <div key={term.id} style={{
              padding: '1.5rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)'
            }}>
              <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0', color: 'var(--accent-primary)' }}>{term.term}</h3>
              <p style={{ color: 'var(--text-primary)', margin: '0 0 1rem 0' }}>{term.definition}</p>
              
              {term.relatedTerms.length > 0 && (
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>Related:</span>
                  {term.relatedTerms.map(rt => (
                    <span key={rt} style={{ fontSize: '0.75rem', backgroundColor: 'var(--bg-tertiary)', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>
                      {rt}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
