import React from 'react'

export default function ViewTransition({
  name,
  children
}: {
  name: string,
  children: React.ReactNode
}) {
  return (
    <>
      <style>
        {`
          .${name} {
            view-transition-name: ${name};
          }
        `}
      </style>
      {children}
    </>
  )
}
