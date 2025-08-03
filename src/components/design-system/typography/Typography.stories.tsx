import type { Meta, StoryObj } from '@storybook/react-vite'

const TypographyShowcase = () => {
  const sizes = [
    { name: 'Small', var: '--font-size-sm' },
    { name: 'Medium', var: '--font-size-md' },
    { name: 'Large', var: '--font-size-lg' },
  ]

  return (
    <div className='space-y-8'>
      <h2 className='text-xl font-bold'>Typography</h2>
      <div className='space-y-6'>
        {sizes.map(({ name, var: sizeVar }) => (
          <div
            key={name}
            className='space-y-2'
          >
            <p style={{ fontSize: `var(${sizeVar})` }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <div className='flex gap-4 items-center'>
              <span className='font-medium'>{name}</span>
              <code className='text-sm'>{sizeVar}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const meta = {
  title: 'Design System/Typography',
  component: TypographyShowcase,
} satisfies Meta<typeof TypographyShowcase>

export default meta
type Story = StoryObj<typeof meta>

export const FontSizes: Story = {}
