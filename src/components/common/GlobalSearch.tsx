import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import Fuse from 'fuse.js';
import { useNavigate } from 'react-router-dom';
import { dataService } from '../../services/dataService';
import { Topic, GlossaryTerm } from '../../types/roadmap.types';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  type: 'Topic' | 'Glossary';
  id: string;
  title: string;
  description: string;
  link: string;
}

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [fuse, setFuse] = useState<Fuse<SearchResult> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Compile search index
    Promise.all([dataService.getTopics(), dataService.getGlossary()]).then(([topics, glossary]) => {
      const searchData: SearchResult[] = [
        ...topics.map((t: Topic) => ({
          type: 'Topic' as const,
          id: t.id,
          title: t.title,
          description: t.description || '',
          link: `/roadmap/${t.stageId}/${t.id}`
        })),
        ...glossary.map((g: GlossaryTerm) => ({
          type: 'Glossary' as const,
          id: g.id,
          title: g.term,
          description: g.definition,
          link: `/glossary`
        }))
      ];

      const fuseInstance = new Fuse(searchData, {
        keys: ['title', 'description'],
        threshold: 0.3
      });
      setFuse(fuseInstance);
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!fuse || !query.trim()) {
      setResults([]);
      return;
    }
    const searchResults = fuse.search(query).map(result => result.item);
    setResults(searchResults);
  }, [query, fuse]);

  const handleResultClick = (link: string) => {
    navigate(link);
    onClose();
    setQuery('');
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
      paddingTop: '10vh', zIndex: 1000
    }} onClick={onClose}>
      <div style={{
        backgroundColor: 'var(--bg-primary)',
        width: '100%', maxWidth: '600px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
      }} onClick={e => e.stopPropagation()}>
        
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>
          <SearchIcon size={20} color="var(--text-secondary)" style={{ marginRight: '1rem' }} />
          <input 
            ref={inputRef}
            type="text"
            placeholder="Search topics, glossary terms..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              flex: 1, border: 'none', backgroundColor: 'transparent',
              color: 'var(--text-primary)', fontSize: '1.125rem', outline: 'none'
            }}
          />
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          {results.length > 0 ? (
            <div style={{ padding: '0.5rem' }}>
              {results.map((result, idx) => (
                <div 
                  key={idx}
                  onClick={() => handleResultClick(result.link)}
                  style={{
                    padding: '1rem', cursor: 'pointer',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex', flexDirection: 'column', gap: '0.25rem'
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 'bold' }}>{result.title}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>{result.type}</span>
                  </div>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{result.description}</span>
                </div>
              ))}
            </div>
          ) : query.trim() ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
              No results found for "{query}"
            </div>
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-tertiary)' }}>
              Start typing to search...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
