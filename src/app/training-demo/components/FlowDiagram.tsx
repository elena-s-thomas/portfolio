'use client'

import { Box } from '@mantine/core'

interface FlowDiagramProps {
  diagramKey: string
  title: string
}

export function FlowDiagram({ diagramKey, title }: FlowDiagramProps) {
  return (
    <Box
      style={{
        border: '1px solid var(--mantine-color-gray-3)',
        backgroundColor: 'var(--mantine-color-gray-0)',
        padding: 'var(--mantine-spacing-md)',
        borderRadius: 'var(--mantine-radius-sm)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/training/${diagramKey}.svg`}
        alt={title}
        style={{ width: '100%', maxWidth: '800px', display: 'block' }}
      />
    </Box>
  )
}
