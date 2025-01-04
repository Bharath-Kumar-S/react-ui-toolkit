import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Button',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
}

export const SmallButton: Story = {
  args: {
    size: 'sm',
  },
}

export const MediumButton: Story = {
  args: {
    size: 'md',
  },
}

export const LargeButton: Story = {
  args: {
    size: 'lg',
  },
}

export const DisabledButton: Story = {
  args: {
    disabled: true,
  },
}

export const ButtonWithIconAndLabel: Story = {
  args: {
    icon: '👍',
    label: 'Thumbs Up',
  },
}

export const DangerButton: Story = {
  args: {
    variant: 'danger',
    label: 'Delete',
  },
}
