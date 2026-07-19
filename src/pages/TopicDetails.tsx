import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { dataService } from '../services/dataService';
import { Stage, Topic } from '../types/roadmap.types';
import { useProgress } from '../contexts/ProgressContext';
import { CheckCircle, Clock, BookOpen } from 'lucide-react';
import { PATHS } from '../routes/routePaths';
import SEO from '../components/common/SEO';
import 'highlight.js/styles/github-dark.css'; // For syntax highlighting

export default function TopicDetails() {
  const { stageSlug, topicSlug } = useParams<{ stageSlug: string, topicSlug: string }>();
  const [topic, setTopic] = useState<Topic | null>(null);
  const [stage, setStage] = useState<Stage | null>(null);
  const { isTopicCompleted, toggleTopic } = useProgress();

  useEffect(() => {
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

  if (!topic) return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
        <h2 style={{ color: 'var(--text-secondary)' }}>Loading topic...</h2>
      </div>
    </div>
  );

  const isCompleted = isTopicCompleted(topic.id);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}>
      <SEO 
        title={topic.title} 
        description={topic.description || `Learn ${topic.title} in this comprehensive Data Science lesson.`}
        keywords={topic.skillsGained?.join(', ')}
      />
      
      {/* Hero Header Card */}
      <div 
        className="glass-panel animate-fade-in-up"
        style={{ 
          padding: '2.5rem', 
          borderRadius: 'var(--radius-lg)', 
          marginBottom: '3rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle background glow */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        {/* Breadcrumbs */}
        <div style={{ 
          fontSize: '0.9rem', 
          color: 'var(--text-tertiary)', 
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontWeight: '600',
          flexWrap: 'wrap'
        }}>
          <Link to={PATHS.ROADMAP} style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Roadmap</Link>
          <span style={{ opacity: 0.5 }}>/</span>
          {stage ? (
            <Link to={`/roadmap/${stage.slug}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              {stage.title}
            </Link>
          ) : '...'}
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ color: 'var(--accent-primary)' }}>{topic.title}</span>
        </div>

        <h1 className="hero-title" style={{ 
          background: 'linear-gradient(135deg, var(--text-primary), var(--text-secondary))', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          marginBottom: '1.5rem',
          fontSize: '3rem'
        }}>
          {topic.title}
        </h1>

        {/* Metadata Row */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Difficulty Badge */}
          <span style={{ 
            fontSize: '0.8rem', 
            padding: '0.4rem 1rem', 
            backgroundColor: topic.difficulty === 'Beginner' ? 'rgba(34, 197, 94, 0.15)' : 
                           topic.difficulty === 'Intermediate' ? 'rgba(234, 179, 8, 0.15)' : 
                           topic.difficulty === 'Advanced' ? 'rgba(249, 115, 22, 0.15)' : 'rgba(239, 68, 68, 0.15)',
            color: topic.difficulty === 'Beginner' ? '#4ade80' : 
                   topic.difficulty === 'Intermediate' ? '#facc15' : 
                   topic.difficulty === 'Advanced' ? '#fb923c' : '#f87171',
            border: '1px solid',
            borderColor: topic.difficulty === 'Beginner' ? 'rgba(34, 197, 94, 0.3)' : 
                        topic.difficulty === 'Intermediate' ? 'rgba(234, 179, 8, 0.3)' : 
                        topic.difficulty === 'Advanced' ? 'rgba(249, 115, 22, 0.3)' : 'rgba(239, 68, 68, 0.3)',
            borderRadius: '2rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <BookOpen size={14} />
            {topic.difficulty}
          </span>

          {/* Time Estimate */}
          {topic.estimatedMinutes && (
            <span style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              <Clock size={16} color="var(--accent-primary)" />
              {topic.estimatedMinutes} min read
            </span>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="markdown-content animate-fade-in-up delay-1" style={{ 
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--glass-border)',
        boxShadow: 'var(--glass-shadow)',
        position: 'relative',
        zIndex: 10
      }}>
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {topic.contentMd}
        </ReactMarkdown>
      </div>
      
      <div className="animate-fade-in-up delay-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
        {/* Skills Gained */}
        {(topic.skillsGained && topic.skillsGained.length > 0) && (
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: '700' }}>Skills Gained</h4>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {topic.skillsGained.map(skill => (
                <span 
                  key={skill} 
                  className="glass-pill"
                  style={{
                    backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    borderColor: 'rgba(6, 182, 212, 0.3)',
                    color: 'var(--accent-primary)',
                    fontWeight: '600',
                    boxShadow: '0 0 10px rgba(6,182,212,0.1)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Progress Tracking Action */}
        <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '700' }}>
            {isCompleted ? 'Topic Completed! 🎉' : 'Ready to move on?'}
          </h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            {isCompleted ? 'Great job! You have mastered this concept.' : 'Mark this topic as complete to track your progress.'}
          </p>
          <button 
            onClick={() => toggleTopic(topic.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              width: '100%',
              padding: '1rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              border: isCompleted ? '1px solid var(--success)' : '1px solid var(--accent-primary)',
              backgroundColor: isCompleted ? 'var(--success)' : 'rgba(6,182,212,0.1)',
              color: isCompleted ? '#fff' : 'var(--accent-primary)',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: isCompleted ? '0 10px 25px rgba(16, 185, 129, 0.3)' : '0 10px 25px rgba(6, 182, 212, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = isCompleted ? '0 15px 35px rgba(16, 185, 129, 0.4)' : '0 15px 35px rgba(6, 182, 212, 0.3)';
              if (!isCompleted) e.currentTarget.style.backgroundColor = 'rgba(6,182,212,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = isCompleted ? '0 10px 25px rgba(16, 185, 129, 0.3)' : '0 10px 25px rgba(6, 182, 212, 0.2)';
              if (!isCompleted) e.currentTarget.style.backgroundColor = 'rgba(6,182,212,0.1)';
            }}
          >
            <CheckCircle size={22} />
            {isCompleted ? 'Completed' : 'Mark as Complete'}
          </button>
        </div>
      </div>
    </div>
  );
}
