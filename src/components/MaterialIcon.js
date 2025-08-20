import React from 'react';

/**
 * Material Icon component for Material 3 design system
 * Uses Material Symbols Outlined font family
 * 
 * @param {Object} props - Component props
 * @param {string} props.icon - Material Symbol icon name
 * @param {number} props.size - Icon size in pixels (default: 24)
 * @param {number} props.fill - Fill axis value 0-1 (default: 0)
 * @param {number} props.weight - Weight axis value 100-700 (default: 400)
 * @param {number} props.grade - Grade axis value -50-200 (default: 0)
 * @param {number} props.opticalSize - Optical size axis value 20-48 (default: 24)
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 * @param {string} props.color - Icon color (default: inherit)
 * @param {function} props.onClick - Click handler
 * @param {string} props.ariaLabel - Accessibility label
 */
const MaterialIcon = ({
  icon,
  size = 24,
  fill = 0,
  weight = 400,
  grade = 0,
  opticalSize = 24,
  className = '',
  style = {},
  color = 'inherit',
  onClick,
  ariaLabel,
  ...props
}) => {
  const iconStyle = {
    fontFamily: 'Material Symbols Outlined',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: `${size}px`,
    lineHeight: 1,
    letterSpacing: 'normal',
    textTransform: 'none',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
    direction: 'ltr',
    color: color,
    cursor: onClick ? 'pointer' : 'inherit',
    // Material Symbols variable font axes
    fontVariationSettings: `
      'FILL' ${fill},
      'wght' ${weight},
      'GRAD' ${grade},
      'opsz' ${opticalSize}
    `,
    // Prevent text selection
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    ...style
  };

  const combinedClassName = `material-icon ${className}`.trim();

  return (
    <span
      className={combinedClassName}
      style={iconStyle}
      onClick={onClick}
      aria-label={ariaLabel || icon}
      role={onClick ? 'button' : 'img'}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(e);
        }
      } : undefined}
      {...props}
    >
      {icon}
    </span>
  );
};

// Predefined Material Icons for common use cases
export const MaterialIcons = {
  // Navigation icons for portfolio
  person: 'person',
  engineering: 'engineering',
  work: 'work',
  rocket_launch: 'rocket_launch',
  school: 'school',
  article: 'article',
  contact_mail: 'contact_mail',
  
  // Alternative icons
  code: 'code',
  folder_special: 'folder_special',
  badge: 'badge',
  description: 'description',
  email: 'email',
  phone: 'phone',
  
  // Common UI icons
  menu: 'menu',
  close: 'close',
  expand_more: 'expand_more',
  expand_less: 'expand_less',
  arrow_back: 'arrow_back',
  arrow_forward: 'arrow_forward',
  home: 'home',
  settings: 'settings'
};

export default MaterialIcon;