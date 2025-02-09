import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, it, vi, expect } from 'vitest'
import { Button } from '.'

describe('Button test:', () => {
  afterEach(cleanup)

  it('should render component', () => {
    render(
      <Button
        label='Testing'
        onClick={() => {}}
      />
    )
    screen.getByRole('button')
    expect(screen.getByRole('button')).toBeDefined()
  })

  it('should render label', () => {
    render(
      <Button
        label='Testing'
        onClick={() => {}}
      />
    )
    screen.getByText('Testing')
    expect(screen.getByText('Testing')).toBeDefined()
  })

  it('should be disabled', () => {
    render(
      <Button
        label='Testing'
        onClick={() => {}}
        disabled
      />
    )
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('onClick triggers properly', async () => {
    const mockFn = vi.fn()
    render(
      <Button
        onClick={mockFn}
        label='Testing'
      />
    )
    expect(mockFn).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByRole('button'))
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('disabled prevents action', async () => {
    const mockFn = vi.fn()
    render(
      <Button
        onClick={mockFn}
        label='Testing'
        disabled
      />
    )
    expect(mockFn).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByRole('button'))
    expect(mockFn).toHaveBeenCalledTimes(0)
  })
})
