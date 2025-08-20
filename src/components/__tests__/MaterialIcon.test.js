import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MaterialIcon, { MaterialIcons } from '../MaterialIcon';

describe('MaterialIcon', () => {
  test('基本渲染', () => {
    render(<MaterialIcon icon="person" />);
    
    const icon = screen.getByText('person');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveStyle({
      fontFamily: 'Material Symbols Outlined'
    });
  });

  test('自定義尺寸和樣式', () => {
    render(
      <MaterialIcon 
        icon="engineering" 
        size={32}
        fill={1}
        weight={600}
        color="blue"
      />
    );
    
    const icon = screen.getByText('engineering');
    expect(icon).toHaveStyle({
      fontSize: '32px',
      color: 'blue'
    });
  });

  test('點擊事件處理', () => {
    const mockClick = jest.fn();
    render(<MaterialIcon icon="work" onClick={mockClick} />);
    
    const icon = screen.getByText('work');
    fireEvent.click(icon);
    
    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(icon).toHaveStyle({ cursor: 'pointer' });
  });

  test('鍵盤事件處理', () => {
    const mockClick = jest.fn();
    render(<MaterialIcon icon="school" onClick={mockClick} />);
    
    const icon = screen.getByText('school');
    
    // 測試 Enter 鍵
    fireEvent.keyDown(icon, { key: 'Enter' });
    expect(mockClick).toHaveBeenCalledTimes(1);
    
    // 測試空格鍵
    fireEvent.keyDown(icon, { key: ' ' });
    expect(mockClick).toHaveBeenCalledTimes(2);
  });

  test('無障礙屬性', () => {
    render(
      <MaterialIcon 
        icon="contact_mail" 
        ariaLabel="聯絡方式"
        onClick={() => {}}
      />
    );
    
    const icon = screen.getByLabelText('聯絡方式');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('role', 'button');
    expect(icon).toHaveAttribute('tabIndex', '0');
  });

  test('非點擊圖標的無障礙屬性', () => {
    render(<MaterialIcon icon="article" />);
    
    const icon = screen.getByLabelText('article');
    expect(icon).toHaveAttribute('role', 'img');
    expect(icon).not.toHaveAttribute('tabIndex');
  });

  test('Material Icons 常量', () => {
    expect(MaterialIcons.person).toBe('person');
    expect(MaterialIcons.engineering).toBe('engineering');
    expect(MaterialIcons.work).toBe('work');
    expect(MaterialIcons.rocket_launch).toBe('rocket_launch');
    expect(MaterialIcons.school).toBe('school');
    expect(MaterialIcons.article).toBe('article');
    expect(MaterialIcons.contact_mail).toBe('contact_mail');
  });

  test('自定義 CSS 類名', () => {
    render(<MaterialIcon icon="person" className="custom-class" />);
    
    const icon = screen.getByText('person');
    expect(icon).toHaveClass('material-icon');
    expect(icon).toHaveClass('custom-class');
  });

  test('字體變化設置', () => {
    render(
      <MaterialIcon 
        icon="engineering" 
        fill={1}
        weight={700}
        grade={200}
        opticalSize={48}
      />
    );
    
    const icon = screen.getByText('engineering');
    const fontVariationSettings = icon.style.fontVariationSettings;
    
    expect(fontVariationSettings).toContain("'FILL' 1");
    expect(fontVariationSettings).toContain("'wght' 700");
    expect(fontVariationSettings).toContain("'GRAD' 200");
    expect(fontVariationSettings).toContain("'opsz' 48");
  });
});