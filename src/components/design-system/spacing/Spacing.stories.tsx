import type { Meta, StoryObj } from '@storybook/react-vite'

const SpacingShowcase = () => {
  const spacings = [
    { name: 'Extra Small', var: '--spacing-xs' },
    { name: 'Small', var: '--spacing-sm' },
    { name: 'Medium', var: '--spacing-md' },
    { name: 'Large', var: '--spacing-lg' },
  ]

  return (
    <div className='space-y-8'>
      <h2 className='text-xl font-bold'>Spacing System</h2>
      <div className='space-y-6'>
        {spacings.map(({ name, var: spacingVar }) => (
          <div
            key={name}
            className='flex items-center gap-4'
          >
            <div
              style={{
                width: `var(${spacingVar})`,
                height: `var(${spacingVar})`,
                backgroundColor: 'var(--primary-color)',
              }}
              className='rounded'
            />
            <div>
              <p className='font-medium'>{name}</p>
              <code className='text-sm'>{spacingVar}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const meta = {
  title: 'Design System/Spacing',
  component: SpacingShowcase,
} satisfies Meta<typeof SpacingShowcase>

export default meta
type Story = StoryObj<typeof meta>

export const Spacing: Story = {}
