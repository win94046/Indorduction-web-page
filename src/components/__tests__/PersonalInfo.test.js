import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PersonalInfo from '../PersonalInfo';

// Mock AnimatedSection
jest.mock('../AnimatedSection', () => {
  return function MockAnimatedSection({ children, id, className }) {
    return <div id={id} className={className}>{children}</div>;
  };
});

// Mock window.open
global.open = jest.fn();

describe('PersonalInfo Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders section title and subtitle', () => {
    render(<PersonalInfo />);
    
    expect(screen.getByText('個人資料')).toBeInTheDocument();
    expect(screen.getByText('基本資訊與聯絡方式')).toBeInTheDocument();
  });

  test('renders all personal information fields', () => {
    render(<PersonalInfo />);
    
    expect(screen.getByText('姓名')).toBeInTheDocument();
    expect(screen.getByText('陳宇凱')).toBeInTheDocument();
    expect(screen.getByText('年齡')).toBeInTheDocument();
    expect(screen.getByText('28 歲')).toBeInTheDocument();
    expect(screen.getByText('聯絡電話')).toBeInTheDocument();
    expect(screen.getByText('0961-567-552')).toBeInTheDocument();
    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('win94046@gmail.com')).toBeInTheDocument();
  });

  test('renders job preference information', () => {
    render(<PersonalInfo />);
    
    expect(screen.getByText('期望職位')).toBeInTheDocument();
    expect(screen.getByText('軟體工程師')).toBeInTheDocument();
    expect(screen.getByText('期望工作地點')).toBeInTheDocument();
    expect(screen.getByText('台南市或新竹區')).toBeInTheDocument();
    expect(screen.getByText('期望工作性質')).toBeInTheDocument();
    expect(screen.getByText('全職工作')).toBeInTheDocument();
    expect(screen.getByText('可上班日期')).toBeInTheDocument();
    expect(screen.getByText('一個月可上班')).toBeInTheDocument();
  });

  test('renders icons for each information field', () => {
    render(<PersonalInfo />);
    
    expect(screen.getByText('👤')).toBeInTheDocument(); // 姓名
    expect(screen.getByText('🎂')).toBeInTheDocument(); // 年齡
    expect(screen.getByText('📱')).toBeInTheDocument(); // 電話
    expect(screen.getByText('✉️')).toBeInTheDocument(); // Email
    expect(screen.getByText('💼')).toBeInTheDocument(); // 職位
    expect(screen.getByText('📍')).toBeInTheDocument(); // 地點
    expect(screen.getByText('⏰')).toBeInTheDocument(); // 工作性質
    expect(screen.getByText('📅')).toBeInTheDocument(); // 上班日期
  });

  test('phone number card opens phone dialer when clicked', () => {
    render(<PersonalInfo />);
    
    const phoneCard = screen.getByText('0961-567-552').closest('.personal-info-card');
    fireEvent.click(phoneCard);
    
    expect(global.open).toHaveBeenCalledWith('tel:0961-567-552');
  });

  test('email card opens email client when clicked', () => {
    render(<PersonalInfo />);
    
    const emailCard = screen.getByText('win94046@gmail.com').closest('.personal-info-card');
    fireEvent.click(emailCard);
    
    expect(global.open).toHaveBeenCalledWith('mailto:win94046@gmail.com');
  });

  test('applies clickable class to phone and email cards', () => {
    render(<PersonalInfo />);
    
    const phoneCard = screen.getByText('0961-567-552').closest('.personal-info-card');
    const emailCard = screen.getByText('win94046@gmail.com').closest('.personal-info-card');
    
    expect(phoneCard).toHaveClass('clickable');
    expect(emailCard).toHaveClass('clickable');
  });

  test('non-clickable cards do not have clickable class', () => {
    render(<PersonalInfo />);
    
    const nameCard = screen.getByText('陳宇凱').closest('.personal-info-card');
    const ageCard = screen.getByText('28 歲').closest('.personal-info-card');
    
    expect(nameCard).not.toHaveClass('clickable');
    expect(ageCard).not.toHaveClass('clickable');
  });

  test('contact indicator appears for phone and email cards', () => {
    render(<PersonalInfo />);
    
    const phoneCard = screen.getByText('0961-567-552').closest('.personal-info-card');
    const emailCard = screen.getByText('win94046@gmail.com').closest('.personal-info-card');
    
    expect(phoneCard.querySelector('.contact-indicator')).toBeInTheDocument();
    expect(emailCard.querySelector('.contact-indicator')).toBeInTheDocument();
  });
});