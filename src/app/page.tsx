import { Container, Title, Text, Button, Group, Stack, Grid, Card, Image, TextInput, Textarea, Anchor } from '@mantine/core'
import { IconMail, IconPhone, IconMapPin, IconBrandGithub, IconBrandLinkedin, IconExternalLink } from '@tabler/icons-react'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
      }}>
        <Container size="lg">
          <Stack align="center" gap="xl">
            <div style={{ textAlign: 'center' }}>
              <Title order={1} size="4rem" fw={700} c="dark.8" mb="md">
                Hello, I&apos;m Elena
              </Title>
              <Text size="xl" c="gray.7" maw={600} mx="auto">
                A passionate developer creating beautiful, functional web experiences 
                with modern technologies and clean design principles.
              </Text>
            </div>
            <Group gap="md">
              <Button size="lg" variant="filled" color="gray.8">
                View My Work
              </Button>
              <Button size="lg" variant="outline" color="gray.8">
                Get In Touch
              </Button>
            </Group>
          </Stack>
        </Container>
      </section>

      {/* About Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <Container size="lg">
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="lg">
                <Title order={2} size="2.5rem" fw={600} c="dark.8">
                  About Me
                </Title>
                <Text size="lg" c="gray.7" lh={1.6}>
                  I&apos;m a dedicated developer with a passion for creating intuitive and 
                  engaging digital experiences. With expertise in modern web technologies, 
                  I focus on building applications that are both beautiful and functional.
                </Text>
                <Text size="lg" c="gray.7" lh={1.6}>
                  When I&apos;m not coding, you can find me exploring new technologies, 
                  contributing to open source projects, or sharing knowledge with 
                  the developer community.
                </Text>
                <Group gap="md">
                  <Button variant="outline" color="gray.8" leftSection={<IconBrandGithub size={16} />}>
                    GitHub
                  </Button>
                  <Button variant="outline" color="gray.8" leftSection={<IconBrandLinkedin size={16} />}>
                    LinkedIn
                  </Button>
                </Group>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <div style={{ 
                height: '400px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed #dee2e6'
              }}>
                <Text c="gray.6">Profile Image Placeholder</Text>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      {/* Skills Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
        <Container size="lg">
          <Stack align="center" gap="xl">
            <Title order={2} size="2.5rem" fw={600} c="dark.8" ta="center">
              Skills & Technologies
            </Title>
            <Grid w="100%">
              {[
                'React & Next.js',
                'TypeScript',
                'Node.js',
                'Python',
                'PostgreSQL',
                'AWS',
                'Docker',
                'Git'
              ].map((skill) => (
                <Grid.Col key={skill} span={{ base: 6, sm: 4, md: 3 }}>
                  <Card padding="lg" radius="md" withBorder style={{ textAlign: 'center' }}>
                    <Text fw={500} c="dark.8">{skill}</Text>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Container>
      </section>

      {/* Projects Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <Container size="lg">
          <Stack gap="xl">
            <Title order={2} size="2.5rem" fw={600} c="dark.8" ta="center">
              Featured Projects
            </Title>
            <Grid>
              {[
                {
                  title: 'E-Commerce Platform',
                  description: 'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
                  tech: 'Next.js, TypeScript, Stripe, PostgreSQL'
                },
                {
                  title: 'Task Management App',
                  description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking.',
                  tech: 'React, Node.js, Socket.io, MongoDB'
                },
                {
                  title: 'Weather Dashboard',
                  description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
                  tech: 'React, TypeScript, OpenWeather API'
                }
              ].map((project, index) => (
                <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                  <Card padding="lg" radius="md" withBorder h="100%">
                    <Stack gap="md" h="100%">
                      <div style={{ 
                        height: '200px', 
                        backgroundColor: '#f8f9fa', 
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px dashed #dee2e6'
                      }}>
                        <Text c="gray.6">Project Screenshot</Text>
                      </div>
                      <Title order={3} size="1.2rem" fw={600} c="dark.8">
                        {project.title}
                      </Title>
                      <Text c="gray.7" lh={1.5} style={{ flex: 1 }}>
                        {project.description}
                      </Text>
                      <Text size="sm" c="gray.6" fw={500}>
                        {project.tech}
                      </Text>
                      <Group gap="sm">
                        <Button variant="outline" color="gray.8" size="sm">
                          View Project
                        </Button>
                        <Button variant="subtle" color="gray.8" size="sm" rightSection={<IconExternalLink size={14} />}>
                          Live Demo
                        </Button>
                      </Group>
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Container>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
        <Container size="lg">
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="lg">
                <Title order={2} size="2.5rem" fw={600} c="dark.8">
                  Get In Touch
                </Title>
                <Text size="lg" c="gray.7" lh={1.6}>
                  I&apos;m always interested in new opportunities and exciting projects. 
                  Let&apos;s discuss how we can work together to bring your ideas to life.
                </Text>
                <Stack gap="md">
                  <Group gap="md">
                    <IconMail size={20} color="#6c757d" />
                    <Text c="gray.7">elena@example.com</Text>
                  </Group>
                  <Group gap="md">
                    <IconPhone size={20} color="#6c757d" />
                    <Text c="gray.7">+1 (555) 123-4567</Text>
                  </Group>
                  <Group gap="md">
                    <IconMapPin size={20} color="#6c757d" />
                    <Text c="gray.7">San Francisco, CA</Text>
                  </Group>
                </Stack>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card padding="lg" radius="md" withBorder>
                <Stack gap="md">
                  <TextInput
                    label="Name"
                    placeholder="Your name"
                    required
                  />
                  <TextInput
                    label="Email"
                    placeholder="your@email.com"
                    type="email"
                    required
                  />
                  <TextInput
                    label="Subject"
                    placeholder="Project inquiry"
                    required
                  />
                  <Textarea
                    label="Message"
                    placeholder="Tell me about your project..."
                    minRows={4}
                    required
                  />
                  <Button color="gray.8" size="md">
                    Send Message
                  </Button>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '40px 0', 
        backgroundColor: '#212529', 
        color: 'white',
        textAlign: 'center'
      }}>
        <Container size="lg">
          <Stack gap="md">
            <Text c="gray.4">
              © 2024 Elena. All rights reserved.
            </Text>
            <Group justify="center" gap="lg">
              <Anchor href="#" c="gray.4" size="sm">Privacy Policy</Anchor>
              <Anchor href="#" c="gray.4" size="sm">Terms of Service</Anchor>
              <Anchor href="#" c="gray.4" size="sm">Contact</Anchor>
            </Group>
          </Stack>
        </Container>
      </footer>
    </main>
  )
}