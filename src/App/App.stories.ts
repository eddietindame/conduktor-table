import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'

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

export const Basic: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Vite + React')).toBeInTheDocument()
  },
}

export const Count: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'count is 0' }))
    await expect(
      canvas.getByRole('button', { name: 'count is 1' }),
    ).toBeInTheDocument()
  },
}
