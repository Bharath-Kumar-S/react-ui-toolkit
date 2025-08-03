import type { Meta, StoryObj } from '@storybook/react-vite'

const ColorPalette = () => {
  const colors = [
    { name: 'Primary', var: '--primary-color', hover: '--primary-hover-color' },
    { name: 'Secondary', var: '--secondary-color', hover: '--secondary-hover-color' },
    { name: 'Tertiary', var: '--tertiary-color', hover: '--tertiary-hover-color' },
    { name: 'Danger', var: '--danger-color' },
  ]

  return (
    <div className='space-y-8'>
      <h2 className='text-xl font-bold'>Color System</h2>
      <div className='grid grid-cols-2 gap-4'>
        {colors.map(({ name, var: colorVar, hover }) => (
          <div
            key={name}
            className='space-y-2'
          >
            <div
              style={{ backgroundColor: `var(${colorVar})` }}
              className='h-20 rounded-md shadow-md'
            />
            <p className='font-medium'>{name}</p>
            <code className='text-sm'>{colorVar}</code>
            {hover && <code className='block text-sm'>{hover}</code>}
          </div>
        ))}
      </div>
    </div>
  )
}

const meta = {
  title: 'Design System/Colors',
  component: ColorPalette,
} satisfies Meta<typeof ColorPalette>

export default meta
type Story = StoryObj<typeof meta>

export const Colors: Story = {}
