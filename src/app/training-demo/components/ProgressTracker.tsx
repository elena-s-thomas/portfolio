'use client'

import { Stepper } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

interface ProgressTrackerProps {
  currentLesson: number
  totalLessons: number
  onNavigate: (lesson: number) => void
}

export function ProgressTracker({ currentLesson, totalLessons, onNavigate }: ProgressTrackerProps) {
  return (
    <Stepper
      active={currentLesson}
      onStepClick={(step) => {
        if (step < currentLesson) {
          onNavigate(step)
        }
      }}
      completedIcon={<IconCheck size={16} />}
    >
      {Array.from({ length: totalLessons }, (_, i) => (
        <Stepper.Step
          key={i}
          label={`Lesson ${i + 1}`}
          allowStepSelect={i < currentLesson}
        />
      ))}
    </Stepper>
  )
}
