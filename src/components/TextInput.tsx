import React, { InputHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';

export type TextInputRootProps = {
  children: React.ReactNode
}

const TextInputRoot = ({ children }: TextInputRootProps) => (
  <div className='flex items-center gap-3 h-12 py-4 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300'>{children}</div>
)

TextInputRoot.displayName = 'TextInput.Root'

export type TextInputIconProps = {
  children: React.ReactNode
}

const TextInputIcon = ({ children }: TextInputIconProps) => (
  <Slot className='w-6 h-6 text-gray-400'>
    {children}
  </Slot>
)

TextInputIcon.displayName = 'TextInput.Icon'

export type TextInputProps = {
  placeholder?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextInputField = ({ placeholder, ...rest }: TextInputProps) => (
  <input
    className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
    placeholder={placeholder}
    {...rest}
  />
)

TextInputField.displayName = 'TextInput.Field'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputField,
  Icon: TextInputIcon
}