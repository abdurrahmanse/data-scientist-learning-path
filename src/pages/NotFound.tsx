import React from 'react';
import SEO from '../components/common/SEO';

export default function NotFound() { 
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <h1>404 - Not Found</h1>
    </div>
  ); 
}
