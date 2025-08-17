import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnimatedSection from '../AnimatedSection';

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
const mockObserver = {
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
};
mockIntersectionObserver.mockImplementation(() => mockObserver);
window.IntersectionObserver = mockIntersectionObserver;

describe('AnimatedSection Component', () => {
  test('renders children content', () => {
    render(
      <AnimatedSection id="test-section">
        <div>Test Content</div>
      </AnimatedSection>
    );
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('applies correct id to section element', () => {
    const { container } = render(
      <AnimatedSection id="test-section">
        <div>Test Content</div>
      </AnimatedSection>
    );
    
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'test-section');
  });

  test('applies custom className', () => {
    const { container } = render(
      <AnimatedSection id="test-section" className="custom-class">
        <div>Test Content</div>
      </AnimatedSection>
    );
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('custom-class');
  });

  test('applies fadeInUp animation by default', () => {
    const { container } = render(
      <AnimatedSection id="test-section">
        <div>Test Content</div>
      </AnimatedSection>
    );
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('transition-all', 'duration-1000', 'ease-out');
  });

  test('applies different animation types', () => {
    const { container } = render(
      <AnimatedSection id="test-section" animation="scaleIn">
        <div>Test Content</div>
      </AnimatedSection>
    );
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('transition-all', 'duration-1000', 'ease-out');
  });

  test('creates IntersectionObserver on mount', () => {
    render(
      <AnimatedSection id="test-section">
        <div>Test Content</div>
      </AnimatedSection>
    );
    
    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  });
});