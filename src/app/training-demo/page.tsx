'use client'

import { useState } from 'react'
import {
  Anchor,
  Button,
  Container,
  Group,
  List,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { IconCircleCheck } from '@tabler/icons-react'
import { lessons, completionData } from './data/lessons'
import { TrainingStep } from './components/TrainingStep'
import { ProgressTracker } from './components/ProgressTracker'

function CompletionCard({
  onStartOver,
}: {
  onStartOver: () => void
}) {
  return (
    <Container size="sm">
      <Paper shadow="md" p="xl" radius="lg">
        <Stack align="center" gap="lg">
          <IconCircleCheck size={64} color="green" />
          <Title order={2} ta="center">
            {completionData.title}
          </Title>
          <Text ta="center" c="gray.7">
            {completionData.message}
          </Text>

          <Stack gap="xs" w="100%">
            <Text fw={600}>Further Reading</Text>
            <List spacing="xs">
              {completionData.furtherReading.map(({ label, url }) => (
                <List.Item key={url}>
                  <Anchor href={url} target="_blank" rel="noopener noreferrer" size="sm">
                    {label}
                  </Anchor>
                </List.Item>
              ))}
            </List>
          </Stack>

          <Group gap="sm">
            <Button variant="filled" color="blue" onClick={onStartOver}>
              Start Over
            </Button>
            <Button variant="subtle" component="a" href="/">
              ← Back to Portfolio
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  )
}

export default function TrainingDemoPage() {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [completed, setCompleted] = useState(false)

  const handleNext = () => {
    if (currentLesson === lessons.length - 1) {
      setCompleted(true)
    } else {
      setCurrentLesson(prev => prev + 1)
    }
  }

  const handleStartOver = () => {
    setCurrentLesson(0)
    setCompleted(false)
  }

  return (
    <main>
      {/* Header bar */}
      <div style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6', padding: '12px 24px' }}>
        <Container size="lg">
          <Group justify="space-between" align="center">
            <Anchor component="a" href="/" c="gray.7" size="sm">
              ← Back to Portfolio
            </Anchor>
            <Text size="sm" c="gray.6">
              PACS Training Module
            </Text>
          </Group>
        </Container>
      </div>

      {/* Hero section */}
      <section style={{ backgroundColor: '#212529', padding: '40px 0', color: 'white' }}>
        <Container size="lg">
          <Stack align="center" gap="xs">
            <Title order={1} c="white" ta="center">PACS Training Module</Title>
            <Text c="gray.4" ta="center" size="lg">Radiology Study Routing &amp; Worklist Management</Text>
            <Text c="gray.5" ta="center" size="sm">A self-guided training walkthrough — 5 lessons with knowledge checks</Text>
          </Stack>
        </Container>
      </section>

      {/* Progress tracker */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #dee2e6', padding: '20px 0' }}>
        <Container size="lg">
          <ProgressTracker
            currentLesson={currentLesson}
            totalLessons={5}
            onNavigate={setCurrentLesson}
          />
        </Container>
      </section>

      {/* Main content */}
      <section style={{ padding: '40px 0', backgroundColor: '#f8f9fa', minHeight: '60vh' }}>
        <Container size="lg">
          {!completed ? (
            <TrainingStep
              lesson={lessons[currentLesson]}
              onPrevious={() => setCurrentLesson(prev => prev - 1)}
              onNext={handleNext}
              isFirst={currentLesson === 0}
              isLast={currentLesson === lessons.length - 1}
            />
          ) : (
            <CompletionCard onStartOver={handleStartOver} />
          )}
        </Container>
      </section>
    </main>
  )
}
