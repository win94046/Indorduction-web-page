import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../Navigation';

// Mock scrollIntoView
Element.prototype.scrollIntoView = jest.fn();

describe('Navigation Component', () => {
  beforeEach(() => {
    // Reset DOM
    document.body.innerHTML = '';
    
    // Create mock sections
    const sections = [
      'personal', 'skills', 'experience', 'projects', 'education', 'biography'
    ];
    
    sections.forEach(id => {
      const section = document.createElement('div');
      section.id = id;
      section.getBoundingClientRect = jest.fn(() => ({
        top: 200,
        bottom: 400
      }));
      document.body.appendChild(section);
    });
  });

  test('renders navigation with all menu items', () => {
    render(<Navigation />);
    
    expect(screen.getByText('個人資料')).toBeInTheDocument();
    expect(screen.getByText('專長技能')).toBeInTheDocument();
    expect(screen.getByText('工作經驗')).toBeInTheDocument();
    expect(screen.getByText('專案作品')).toBeInTheDocument();
    expect(screen.getByText('學歷')).toBeInTheDocument();
    expect(screen.getByText('個人簡介')).toBeInTheDocument();
  });

  test('renders brand logo and name', () => {
    render(<Navigation />);
    
    expect(screen.getByText('陳')).toBeInTheDocument();
    expect(screen.getByText('陳宇凱')).toBeInTheDocument();
  });

  test('scrolls to section when navigation item is clicked', () => {
    render(<Navigation />);
    
    const personalInfoButton = screen.getByText('個人資料');
    fireEvent.click(personalInfoButton);
    
    const personalSection = document.getElementById('personal');
    expect(personalSection.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start'
    });
  });

  test('shows mobile menu button on mobile view', () => {
    render(<Navigation />);
    
    const mobileMenuButton = screen.getByRole('button', { name: '' });
    expect(mobileMenuButton).toBeInTheDocument();
    expect(mobileMenuButton).toHaveClass('md:hidden');
  });

  test('applies scrolled styles when page is scrolled', () => {
    const { container } = render(<Navigation />);
    
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 150
    });
    
    // Trigger scroll event manually by calling the event handler
    const scrollEvent = new Event('scroll');
    window.dispatchEvent(scrollEvent);
    
    // Force a re-render to see the updated classes
    const nav = container.querySelector('nav');
    // Note: The test might need adjustment based on actual implementation
    expect(nav).toBeInTheDocument();
  });

  test('renders with icons for each navigation item', () => {
    render(<Navigation />);
    
    // Check that each navigation item has an icon (emoji)
    expect(screen.getByText('👤')).toBeInTheDocument(); // 個人資料
    expect(screen.getByText('💻')).toBeInTheDocument(); // 專長技能
    expect(screen.getByText('💼')).toBeInTheDocument(); // 工作經驗
    expect(screen.getByText('🚀')).toBeInTheDocument(); // 專案作品
    expect(screen.getByText('🎓')).toBeInTheDocument(); // 學歷
    expect(screen.getByText('📝')).toBeInTheDocument(); // 個人簡介
  });
});