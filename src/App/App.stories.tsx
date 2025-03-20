import type { Meta, StoryObj } from '@storybook/react'

import { App } from '.'
import { PersonSheetProvider } from '@/components/person-sheet'

const meta = {
  title: 'Components/App',
  component: App,
  render: () => (
    <PersonSheetProvider>
      <App />
    </PersonSheetProvider>
  ),
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
