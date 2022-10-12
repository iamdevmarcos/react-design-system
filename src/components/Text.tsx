import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export type TextProps = {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode,
  asChild?: boolean
}

const Text = ({ size = 'md', children, asChild }: TextProps) => {
  const Component = asChild ? Slot : 'span';

  return (
    <Component className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg' 
        }
      )}
    >
      {children}
    </Component>
  )
}

export default Text