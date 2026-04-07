'use client'

import { Accordion, Box, Button, Group, Paper, Stack, Text, Title } from '@mantine/core'
import { type Lesson } from '../data/lessons'
import { FlowDiagram } from './FlowDiagram'
import { KnowledgeCheck } from './KnowledgeCheck'

interface TrainingStepProps {
  lesson: Lesson
  onPrevious: () => void
  onNext: () => void
  isFirst: boolean
  isLast: boolean
}

export function TrainingStep({ lesson, onPrevious, onNext, isFirst, isLast }: TrainingStepProps) {
  return (
    <Paper p="xl" withBorder>
      <Stack gap="xl">
        <Box>
          <Title order={3}>Lesson {lesson.id}: {lesson.title}</Title>
          <Text fs="italic" c="gray.6" mt={4}>{lesson.subtitle}</Text>
        </Box>

        <Stack gap="sm">
          {lesson.explanation.map((paragraph, i) => (
            <Text key={i}>{paragraph}</Text>
          ))}
        </Stack>

        <FlowDiagram diagramKey={lesson.diagramKey} title={lesson.title} />

        <Accordion variant="contained">
          <Accordion.Item value="key-terms">
            <Accordion.Control>
              <Text fw={600}>Key Terms</Text>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap="sm">
                {lesson.keyTerms.map(({ term, definition }) => (
                  <Box key={term}>
                    <Text component="span" fw={700}>{term}: </Text>
                    <Text component="span">{definition}</Text>
                  </Box>
                ))}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <KnowledgeCheck
          question={lesson.knowledgeCheck.question}
          options={lesson.knowledgeCheck.options}
          correctIndex={lesson.knowledgeCheck.correctIndex}
          explanation={lesson.knowledgeCheck.explanation}
        />

        <Group justify="space-between">
          {!isFirst ? (
            <Button variant="outline" onClick={onPrevious}>
              ← Previous
            </Button>
          ) : (
            <Box />
          )}
          <Button variant="filled" color="blue" onClick={onNext}>
            {isLast ? 'Complete Module' : 'Next →'}
          </Button>
        </Group>
      </Stack>
    </Paper>
  )
}
