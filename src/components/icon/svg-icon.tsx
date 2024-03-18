import { CSSProperties } from 'react';

interface SvgIconProps {
  prefix?: string;
  icon: string;
  color?: string;
  size?: string | number;
  className?: string;
  style?: CSSProperties;
  type?: string;
}

export default function SvgIcon({
  prefix = 'icon',
  icon,
  size = '16px',
  className = '',
  style = {},
  type = 'default',
}: SvgIconProps) {
  const symbolId = `#${prefix}-${icon}`;
  const realSize = `${size}`.replace('px', '').concat('px');
  const svgStyle: CSSProperties = {
    verticalAlign: 'middle',
    width: realSize,
    height: realSize,
    ...style,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={`anticon inline-block overflow-hidden fill-current outline-none ${className}`}
      style={svgStyle}
      type={type}
    >
      <use xlinkHref={symbolId} fill="currentColor" />
    </svg>
  );
}
