import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../Navigation';

// Mock framer-motion
jest.mock('framer-motion', () => {
  const mockReact = require('react');
  return {
    motion: {
      nav: mockReact.forwardRef(({ children, ...props }, ref) => mockReact.createElement('nav', { ...props, ref }, children)),
      div: mockReact.forwardRef(({ children, ...props }, ref) => mockReact.createElement('div', { ...props, ref }, children)),
      button: mockReact.forwardRef(({ children, ...props }, ref) => mockReact.createElement('button', { ...props, ref }, children)),
      span: mockReact.forwardRef(({ children, ...props }, ref) => mockReact.createElement('span', { ...props, ref }, children)),
    },
    AnimatePresence: ({ children }) => children
  };
});

// Mock MaterialIcon component
jest.mock('../MaterialIcon', () => {
  const mockReact = require('react');
  return {
    __esModule: true,
    default: ({ icon, ariaLabel, ...props }) => 
      mockReact.createElement('span', { 
        'data-testid': `material-icon-${icon}`,
        'aria-label': ariaLabel,
        ...props 
      }, icon),
    MaterialIcons: {
      person: 'person',
      engineering: 'engineering',
      work: 'work',
      rocket_launch: 'rocket_launch',
      school: 'school',
      article: 'article',
      contact_mail: 'contact_mail'
    }
  };
});

// Mock scrollIntoView
const mockScrollIntoView = jest.fn();
Object.defineProperty(window.Element.prototype, 'scrollIntoView', {
  writable: true,
  value: mockScrollIntoView,
});

// Mock getElementById
const mockGetElementById = jest.fn();
Object.defineProperty(document, 'getElementById', {
  writable: true,
  value: mockGetElementById,
});

describe('Floating Navigation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    });
  });

  test('浮動導航在滾動50px後顯示', async () => {
    render(<Navigation />);
    
    // 設置滾動位置
    Object.defineProperty(window, 'scrollY', { value: 60 });
    
    // 觸發滾動事件
    fireEvent.scroll(window);
    
    // 等待導航出現
    await waitFor(() => {
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  });

  test('包含所有導航圖標', async () => {
    render(<Navigation />);
    
    // 設置滾動以顯示導航
    Object.defineProperty(window, 'scrollY', { value: 60 });
    fireEvent.scroll(window);
    
    await waitFor(() => {
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    // 檢查 Material 圖標是否存在
    expect(screen.getByTestId('material-icon-person')).toBeInTheDocument(); // 個人資料
    expect(screen.getByTestId('material-icon-engineering')).toBeInTheDocument(); // 專長技能
    expect(screen.getByTestId('material-icon-work')).toBeInTheDocument(); // 工作經驗
    expect(screen.getByTestId('material-icon-rocket_launch')).toBeInTheDocument(); // 專案作品
    expect(screen.getByTestId('material-icon-school')).toBeInTheDocument(); // 學歷
    expect(screen.getByTestId('material-icon-article')).toBeInTheDocument(); // 個人簡介
    expect(screen.getByTestId('material-icon-contact_mail')).toBeInTheDocument(); // 聯絡方式
  });

  test('點擊導航項目應該滾動到正確位置', async () => {
    const mockElement = { 
      scrollIntoView: mockScrollIntoView,
      getBoundingClientRect: jest.fn().mockReturnValue({
        top: 300,
        bottom: 400
      })
    };
    mockGetElementById.mockReturnValue(mockElement);
    
    render(<Navigation />);
    
    // 設置滾動以顯示導航
    Object.defineProperty(window, 'scrollY', { value: 60 });
    fireEvent.scroll(window);
    
    await waitFor(() => {
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    // 點擊第二個導航項目（專長技能的圖標）
    const skillsButton = screen.getByTestId('material-icon-engineering'); // 使用 Material 圖標
    fireEvent.click(skillsButton.closest('button'));

    // 驗證滾動行為
    expect(mockGetElementById).toHaveBeenCalledWith('skills');
    expect(mockScrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start'
    });
  });
});