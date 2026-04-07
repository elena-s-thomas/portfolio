'use client'

import { useEffect, useState } from 'react'
import { Alert, Button, Radio, Stack, Text } from '@mantine/core'

interface KnowledgeCheckProps {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export function KnowledgeCheck({ question, options, correctIndex, explanation }: KnowledgeCheckProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setSelected(null)
    setSubmitted(false)
  }, [question])

  const isCorrect = submitted && selected !== null && parseInt(selected) === correctIndex

  return (
    <Stack gap="md">
      <Text fw={600} c="dark.8">{question}</Text>

      <Radio.Group
        value={selected ?? ''}
        onChange={(val) => {
          if (!submitted) setSelected(val)
        }}
      >
        <Stack gap="xs">
          {options.map((option, i) => (
            <Radio
              key={i}
              value={String(i)}
              label={option}
              disabled={submitted}
              styles={{ label: { color: 'var(--mantine-color-dark-8)' } }}
            />
          ))}
        </Stack>
      </Radio.Group>

      {!submitted && (
        <Button
          onClick={() => setSubmitted(true)}
          disabled={selected === null}
          variant="outline"
          w="fit-content"
        >
          Check Answer
        </Button>
      )}

      {submitted && (
        <Alert
          color={isCorrect ? 'green' : 'red'}
          title={isCorrect ? 'Correct!' : `Incorrect — the correct answer is: "${options[correctIndex]}"`}
        >
          <Text size="sm">{explanation}</Text>
        </Alert>
      )}
    </Stack>
  )
}
