import type { Meta, StoryObj } from '@storybook/react'

import { App } from '.'

const meta = {
  title: 'Components/App',
  component: App,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
