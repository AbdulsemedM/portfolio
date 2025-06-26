import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('contains all main sections', () => {
    render(<App />);
    
    // Hero section
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
    
    // Flutter Development section
    expect(screen.getByText(/Flutter Development/i)).toBeInTheDocument();
    
    // Web Development section
    expect(screen.getByText(/Web Development/i)).toBeInTheDocument();
    
    // Projects section
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
    
    // Contact section
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
  });
}); 