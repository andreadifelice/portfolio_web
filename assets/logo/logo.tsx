import { cn } from '@/lib/utils';
import logo from './logo.svg';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <span
      role="img"
      aria-label="adf.creations logo"
      className={cn('inline-block shrink-0 bg-current', className)}
      style={{
        WebkitMaskImage: `url(${logo.src})`,
        maskImage: `url(${logo.src})`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
    />
  );
};

export default Logo;
