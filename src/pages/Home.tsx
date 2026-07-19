import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../routes/routePaths';
import SEO from '../components/common/SEO';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <SEO
        title="Data Scientist Learning Path | Master Data Science"
        description="The ultimate open-source roadmap to becoming a Data Scientist. Learn Python, Machine Learning, SQL, and Deep Learning with a structured curriculum."
        keywords="data science, roadmap, machine learning, python, tutorial, deep learning, sql"
      />

      <div className="modern-badge">🚀 Version 2.0 is Live</div>

      <h1 className="modern-hero-title">
        Master Data Science with <br />
        <span className="text-gradient">Structured Learning</span>
      </h1>
      
      <p className="modern-hero-subtitle">
        A comprehensive, step-by-step roadmap for anyone who wants to become a Data Scientist. From absolute beginner concepts to advanced Machine Learning engineering, entirely open source.
      </p>

      <div className="action-buttons">
        <Link to={PATHS.ROADMAP} className="btn-primary">
          Start Learning Free
        </Link>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          View on GitHub
        </a>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <span className="feature-icon">🗺️</span>
          <h3>Step-by-Step Roadmap</h3>
          <p>Carefully curated stages guiding you through Python, Math, ML, and MLOps without feeling overwhelmed.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">💻</span>
          <h3>Hands-on Projects</h3>
          <p>Build a portfolio with 10+ modern, real-world projects covering RAG, fine-tuning, and streaming pipelines.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📚</span>
          <h3>Top Resources</h3>
          <p>Hand-picked books, courses, and tutorials representing the highest quality material available today.</p>
        </div>
      </div>
    </div>
  );
}
