import React from 'react'

export type SpinnerProps = {
  size: 's' | 'm' | 'l'
  color?: string
}

const sizeMap = {
  s: { size: 10, border: 2 },
  m: { size: 15, border: 3 },
  l: { size: 25, border: 4 },
}

export const Spinner = ({ size, color }: SpinnerProps) => {
  const style: React.CSSProperties = {
    width: `${sizeMap[size].size}px`,
    height: `${sizeMap[size].size}px`,
    borderWidth: `${sizeMap[size].border}px`,
    ...(color ? { borderTopColor: color, borderRightColor: color } : {}),
  }

  return (
    <div
      className='spinner'
      role='status'
      aria-label='Loading'
      style={style}
    />
  )
}
