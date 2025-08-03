import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spinner } from './Spinner'
import '../../index.css'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    size: 's',
    color: '#112233',
  },
}
export const Medium: Story = {
  args: {
    size: 'm',
    color: '#112233',
  },
}

export const Large: Story = {
  args: {
    size: 'l',
    color: '#112233',
  },
}
