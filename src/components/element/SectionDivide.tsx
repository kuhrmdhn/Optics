import React from 'react'

type Props = React.HTMLAttributes<HTMLElement> & {
  className?: string
  children: React.ReactNode
}

export default function SectionDivide({ children, className, ...props }: Props) {
  return (
    <div className={`h-[30svh] w-full ${className}`} {...props}>
      {children}
    </div>
  )
}
