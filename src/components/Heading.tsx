import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export type HeadingProps = {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode,
  asChild?: boolean
}

const Heading = ({ size = 'md', children, asChild }: HeadingProps) => {
  const Component = asChild ? Slot : 'h2';

  return (
    <Component className={clsx(
        'text-gray-100 font-bold font-sans',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg' 
        }
      )}
    >
      {children}
    </Component>
  )
}

export default Heading