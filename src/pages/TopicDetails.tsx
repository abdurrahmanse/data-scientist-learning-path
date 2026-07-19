import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { dataService } from '../services/dataService';
import { Stage, Topic } from '../types/roadmap.types';
import { useProgress } from '../contexts/ProgressContext';
import { CheckCircle } from 'lucide-react';
import 'highlight.js/styles/github-dark.css'; // For syntax highlighting

export default function TopicDetails() {
  const { stageSlug, topicSlug } = useParams<{ stageSlug: string, topicSlug: string }>();
  const [topic, setTopic] = useState<Topic | null>(null);
  const [stage, setStage] = useState<Stage | null>(null);
  const { isTopicCompleted, toggleTopic } = useProgress();

  useEffect(() => {
    // We use topicSlug as the topic ID in this mock setup. In a real app, it might be a slug.
    dataService.getTopics().then(topics => {
      const foundTopic = topics.find(t => t.id === topicSlug);
      if (foundTopic) {
        setTopic(foundTopic);
        // Get parent stage for breadcrumbs
        dataService.getStages().then(stages => {
          setStage(stages.find(s => s.id === foundTopic.stageId) || null);
        });
      }
    });
  }, [topicSlug]);

  if (!topic) return <div>Loading topic...</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}>
      {/* Breadcrumbs */}
      <div style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', marginBottom: '2rem' }}>
        <Link to="/roadmap" style={{ color: 'inherit' }}>Roadmap</Link>
        {' / '}
        {stage ? <Link to={`/roadmap/${stage.slug}`} style={{ color: 'inherit' }}>{stage.title}</Link> : '...'}
        {' / '}
        <span style={{ color: 'var(--text-primary)' }}>{topic.title}</span>
      </div>

      <div className="markdown-content">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {topic.contentMd}
        </ReactMarkdown>
      </div>
      
      <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
        <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Skills Gained</h4>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {topic.skillsGained.map(skill => (
            <span key={skill} style={{ 
              backgroundColor: 'var(--bg-tertiary)', 
              padding: '0.25rem 0.75rem', 
              borderRadius: '1rem',
              fontSize: '0.875rem'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      {/* Progress Tracking */}
      <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
        <button 
          onClick={() => toggleTopic(topic.id)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            border: 'none',
            backgroundColor: isTopicCompleted(topic.id) ? 'var(--success)' : 'var(--bg-tertiary)',
            color: isTopicCompleted(topic.id) ? '#fff' : 'var(--text-primary)',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
        >
          <CheckCircle size={20} />
          {isTopicCompleted(topic.id) ? 'Completed' : 'Mark as Complete'}
        </button>
      </div>
    </div>
  );
}
