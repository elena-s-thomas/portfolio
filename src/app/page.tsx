import { Container, Title, Text, Button, Group, Stack, Card, Image, TextInput, Textarea, Anchor } from '@mantine/core'
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
                Hello, I&apos;m Elena Thomas
              </Title>
              <Text size="xl" c="gray.7" maw={600} mx="auto">
                Healthcare Informatics Professional | Bridging Clinical Experience with
                Data-Driven Solutions
              </Text>
            </div>
            <Group gap="md">
              <Button
                component="a"
                href="#featured-project"
                size="lg"
                variant="filled"
                color="gray.8"
              >
                View My Work
              </Button>
              <Button
                component="a"
                href="mailto:elena.s.thomas@gmail.com"
                size="lg"
                variant="outline"
                color="gray.8"
              >
                Get In Touch
              </Button>
            </Group>
          </Stack>
        </Container>
      </section>

      {/* About Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <Container size="lg">
          <div className="about-container">
            <div style={{ flex: 1 }}>
              <Stack gap="lg">
                <Title
                  order={2}
                  size="2.5rem"
                  fw={600}
                  c="dark.8"
                  className="about-title"
                >
                  About Me
                </Title>
                <Text size="lg" c="gray.7" lh={1.6}>
                  I&apos;m Elena Thomas, a Healthcare Informatics Professional bridging clinical
                  experience with data-driven solutions. With 5+ years of hands-on healthcare
                  experience, including MRI Technology at UW Hospital, and a recently completed
                  Master&apos;s in Clinical Healthcare Informatics, I combine deep clinical knowledge
                  with advanced technical skills to drive meaningful improvements in healthcare delivery.
                </Text>
                <Text size="lg" c="gray.7" lh={1.6}>
                  My technical background includes healthcare data analysis using SQL, Python, and
                  Tableau, along with healthcare data standards like DICOM and HL7 protocols. I have
                  clinical experience with EHR systems, Picture Archiving Communication Systems (PACS),
                  and clinical workflow optimization. I&apos;m also skilled in cloud technologies
                  (Google Cloud Platform), big data (BigQuery), and AI/ML frameworks (Vertex AI).
                </Text>
                <Text size="lg" c="gray.7" lh={1.6}>
                  My unique background allows me to understand both the clinical challenges healthcare
                  professionals face and the technical solutions that can address them. I excel at
                  collaborating across multidisciplinary teams to develop, test, and implement
                  data-driven strategies that enhance patient care and operational efficiency.
                </Text>
                <Group gap="md">
                  <Button
                    component="a"
                    href="https://github.com/elena-s-thomas"
                    target="_blank"
                    variant="outline"
                    color="gray.8"
                    leftSection={<IconBrandGithub size={16} />}
                  >
                    GitHub
                  </Button>
                  <Button
                    component="a"
                    href="https://www.linkedin.com/in/elena-thomas-39b177133/"
                    target="_blank"
                    variant="outline"
                    color="gray.8"
                    leftSection={<IconBrandLinkedin size={16} />}
                  >
                    LinkedIn
                  </Button>
                </Group>
              </Stack>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                height: '400px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <Image
                  src="/healthcare-data-visualization.jpg"
                  alt="Elena Thomas"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%236c757d'%3EProfile Image%3C/text%3E%3C/svg%3E"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Project Section */}
      <section id="featured-project" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
        <Container size="lg">
          <Stack gap="xl">
            <div style={{ textAlign: 'center' }}>
              <Title order={2} size="2.5rem" fw={600} c="dark.8" mb="md">
                Featured Project
              </Title>
              <Text size="xl" c="gray.7" maw={800} mx="auto" mb="xl">
                Natural Language Medical Data Query System
              </Text>
              <Button
                component="a"
                href="https://health-ai.elena-thomas.com/"
                target="_blank"
                variant="filled"
                size="lg"
                style={{
                  backgroundColor: '#ff6b35',
                  backgroundImage: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  boxShadow: '0 6px 20px 0 rgba(255, 107, 53, 0.4)',
                  transition: 'all 0.3s ease',
                  fontSize: '16px',
                  fontWeight: '600',
                  padding: '12px 24px',
                  borderRadius: '8px',
                }}
                styles={{
                  root: {
                    '&:hover': {
                      transform: 'translateY(-3px) scale(1.05)',
                      boxShadow: '0 8px 25px 0 rgba(255, 107, 53, 0.6)',
                      backgroundImage: 'linear-gradient(135deg, #ff7a4a 0%, #ffa726 100%)',
                    }
                  }
                }}
                rightSection={<IconExternalLink size={18} />}
              >
                View Live Demo
              </Button>
            </div>

            <Card shadow="sm" padding="xl" radius="md">
              <Stack gap="lg">
                <Title order={3} size="1.5rem" fw={600} c="dark.8" style={{ textAlign: 'center' }}>
                  Health AI Query Platform
                </Title>

                <div style={{
                  width: '100%',
                  minHeight: '400px',
                  maxHeight: '600px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff'
                }}>
                  <Image
                    src="/health-ai-diagram.png"
                    alt="Health AI Query Platform Architecture Diagram"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '600px',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                <Text size="lg" c="gray.7" lh={1.6}>
                  A platform that allows healthcare professionals and researchers to query
                  large medical datasets using natural language. Simply ask questions in plain English,
                  and the system automatically translates them to SQL using AI.
                </Text>

                <Text size="lg" c="gray.7" lh={1.6}>
                  Built with Google Cloud&apos;s Vertex AI and BigQuery, this tool enables users to
                  explore complex healthcare data without needing SQL expertise. It&apos;s designed to
                  make data analysis accessible to clinicians, researchers, and healthcare administrators,
                  empowering them to derive insights and make informed decisions quickly.
                </Text>

                <Text size="lg" c="gray.7" lh={1.6}>
                  The platform leverages a synthetic FHIR dataset generated by Synthea, containing over
                  1.2 million patient records. It can handle a wide range of medical queries, from patient
                  demographics to disease prevalence and treatment outcomes, providing results in easy-to-understand
                  formats like charts and tables.
                </Text>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                  <Card shadow="xs" padding="md" radius="md" h="100%">
                    <Stack gap="sm">
                      <Title order={4} size="1.1rem" fw={600} c="dark.7">
                        How It Works
                      </Title>
                      <Stack gap="xs">
                        <Text size="sm" c="gray.7">
                          <strong>1. Ask a Question:</strong> Type queries like &quot;How many patients have diabetes?&quot;
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>2. AI Translation:</strong> Vertex AI converts your question to SQL
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>3. Data Search:</strong> BigQuery searches 1.2M synthetic patient records
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>4. Smart Formatting:</strong> Results automatically formatted as charts or tables
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>5. Plain English Results:</strong> Get summaries, visualizations, and raw data
                        </Text>
                      </Stack>
                    </Stack>
                  </Card>

                  <Card shadow="xs" padding="md" radius="md" h="100%">
                    <Stack gap="sm">
                      <Title order={4} size="1.1rem" fw={600} c="dark.7">
                        Technical Stack
                      </Title>
                      <Stack gap="xs">
                        <Text size="sm" c="gray.7">
                          <strong>Backend:</strong> Python with Google Cloud Platform
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>AI/ML:</strong> Vertex AI for natural language processing
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>Database:</strong> BigQuery with FHIR Synthea dataset
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>Frontend:</strong> Streamlit for interactive UI
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>Standards:</strong> FHIR (Fast Healthcare Interoperability Resources)
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>Source:</strong> <a href="https://github.com/elena-s-thomas/health-query-ai" target="_blank" style={{ color: '#339af0', textDecoration: 'underline' }}>github.com/elena-s-thomas/health-query-ai</a> 
                        </Text>
                      </Stack>
                    </Stack>
                  </Card>
                </div>

                <Card shadow="xs" padding="md" radius="md" style={{ backgroundColor: '#e7f5ff' }}>
                  <Group gap="sm" align="center">
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#339af0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '20px'
                    }}>
                      💡
                    </div>
                    <div style={{ flex: 1 }}>
                      <Text size="sm" fw={600} c="dark.7" mb={4}>
                        Key Innovation
                      </Text>
                      <Text size="sm" c="gray.7">
                        This platform bridges the gap between medical professionals and data analysis by eliminating
                        the need for SQL knowledge. Healthcare workers can focus on insights rather than query syntax,
                        making complex medical data accessible to everyone.
                      </Text>
                    </div>
                  </Group>
                </Card>
              </Stack>
            </Card>
          </Stack>
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
              © {new Date().getFullYear()} Elena Thomas. All rights reserved.
            </Text>
            <Group justify="center" gap="lg">
              <Anchor href="mailto:elena.s.thomas@gmail.com" c="gray.4" size="sm">Contact</Anchor>
            </Group>
          </Stack>
        </Container>
      </footer>
    </main>
  )
}