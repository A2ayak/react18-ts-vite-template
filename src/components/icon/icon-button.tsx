import { Button, ButtonProps } from 'antd';
import { CSSProperties, ReactNode } from 'react';
import SvgIcon from './svg-icon';

type Props = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  icon?: string;
  iconSize?: string | number;
} & ButtonProps;
export default function IconButton({
  children,
  className,
  style,
  onClick,
  icon,
  iconSize = '20',
  ...other
}: Props) {
  return (
    <Button
      style={style}
      className={`flex items-center justify-center rounded-full !border-none transition-none ${className}`}
      onClick={onClick}
      {...other}
    >
      <SvgIcon icon={icon!} size={iconSize} />
    </Button>
  );
}
