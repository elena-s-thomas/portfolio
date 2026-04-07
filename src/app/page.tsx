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
                href="#projects"
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
      <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
        <Container size="lg">
          <div className="about-section-grid">
            <div className="about-text-content">
              <Stack gap="lg">
                <Title
                  order={2}
                  fw={600}
                  c="dark.8"
                  className="about-title-mobile"
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
                  My technical expertise includes healthcare data analysis using SQL, Python, and
                  Tableau, along with healthcare data standards like DICOM and HL7 protocols. I have
                  extensive experience with EHR systems, Picture Archiving Communication Systems (PACS),
                  and clinical workflow optimization. I&apos;m also skilled in cloud technologies
                  (Google Cloud Platform), big data (BigQuery), and AI/ML frameworks (Vertex AI).
                </Text>
                <Text size="lg" c="gray.7" lh={1.6}>
                  My unique background allows me to understand both the clinical challenges healthcare
                  professionals face and the technical solutions that can address them. I excel at
                  collaborating across multidisciplinary teams to develop, test, and implement
                  data-driven strategies that enhance patient care and operational efficiency.
                </Text>
                <Group gap="md" style={{ flexWrap: 'wrap' }}>
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
            <div className="about-image-content">
              <div className="about-image-container">
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
      <section id="projects" className="featured-project-section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="featured-project-container">
          <Stack gap="xl">
            <div style={{ textAlign: 'center' }}>
              <Title order={2} fw={600} c="dark.8" mb="md" className="featured-project-title">
                Projects
              </Title>
              <Text size="xl" c="gray.7" maw={800} mx="auto">
                A growing collection of healthcare data &amp; AI projects
              </Text>
            </div>

            <Card shadow="sm" padding="lg" radius="md" style={{ margin: '0 1rem' }}>
              <Stack gap="lg">
                <Group className="featured-project-header-group">
                  <Title order={3} size="1.5rem" fw={600} c="dark.8">
                    Health AI Query Platform
                  </Title>
                  <Button
                    component="a"
                    href="https://health-ai.elena-thomas.com/"
                    target="_blank"
                    variant="light"
                    color="blue"
                    rightSection={<IconExternalLink size={16} />}
                    className="demo-button-mobile"
                  >
                    View Live Demo
                  </Button>
                </Group>

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
                  A revolutionary platform that allows healthcare professionals and researchers to query
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

                <div className="featured-project-grid">
                  <div className="project-detail-card">
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
                  </div>

                  <div className="project-detail-card">
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
                          <strong>Source:</strong> <a href="https://github.com/elena-s-thomas/health-query" target="_blank" style={{ color: '#339af0', textDecoration: 'underline' }}>github.com/elena-s-thomas/health-query</a>
                        </Text>
                      </Stack>
                    </Stack>
                  </div>
                </div>

                <div className="innovation-card">
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
                </div>
              </Stack>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" style={{ margin: '0 1rem' }}>
              <Stack gap="lg">
                <Group className="featured-project-header-group">
                  <Title order={3} size="1.5rem" fw={600} c="dark.8">
                    Healthcare Data Pipeline
                  </Title>
                  <Button
                    component="a"
                    href="https://github.com/elena-s-thomas/Healthcare-Data-Pipeline"
                    target="_blank"
                    variant="light"
                    color="gray"
                    rightSection={<IconBrandGithub size={16} />}
                    className="demo-button-mobile"
                  >
                    View on GitHub
                  </Button>
                </Group>

                <Text size="lg" c="gray.7" lh={1.6}>
                  A cloud-native ETL pipeline that ingests, cleans, and transforms publicly
                  available Medicare claims data at scale. Processes 343,644 beneficiary records
                  and 66,705 inpatient claims across three years, with full orchestration,
                  cloud storage, and analytics integration.
                </Text>

                <div className="featured-project-grid">
                  <div className="project-detail-card">
                    <Stack gap="sm">
                      <Title order={4} size="1.1rem" fw={600} c="dark.7">
                        How It Works
                      </Title>
                      <Stack gap="xs">
                        <Text size="sm" c="gray.7">
                          <strong>1. Clean:</strong> Jupyter notebook normalizes demographics, ICD-9 codes, and claim dates
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>2. Store:</strong> Processed CSVs uploaded to Google Cloud Storage
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>3. Orchestrate:</strong> Mage AI runs DAG-based pipeline blocks (load → transform → export)
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>4. Warehouse:</strong> BigQuery loads patient demographics, claims, and diagnoses
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>5. Visualize:</strong> Looker Studio dashboards surface claims trends and readmissions
                        </Text>
                      </Stack>
                    </Stack>
                  </div>

                  <div className="project-detail-card">
                    <Stack gap="sm">
                      <Title order={4} size="1.1rem" fw={600} c="dark.7">
                        Technical Stack
                      </Title>
                      <Stack gap="xs">
                        <Text size="sm" c="gray.7">
                          <strong>Data Processing:</strong> Python, Pandas (343K+ records)
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>Orchestration:</strong> Mage AI with DAG pipelines
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>Cloud Storage:</strong> Google Cloud Storage
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>Data Warehouse:</strong> BigQuery with SQL analytics
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>Data Modeling:</strong> dbt with DuckDB backend
                        </Text>
                      </Stack>
                    </Stack>
                  </div>
                </div>

                <div className="innovation-card">
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
                      🏥
                    </div>
                    <div style={{ flex: 1 }}>
                      <Text size="sm" fw={600} c="dark.7" mb={4}>
                        Key Innovation
                      </Text>
                      <Text size="sm" c="gray.7">
                        Uses the CMS DE-SynPUF synthetic Medicare dataset — publicly available,
                        HIPAA-safe, and representative of real claims patterns — to demonstrate
                        production-grade healthcare data engineering without requiring restricted
                        data access.
                      </Text>
                    </div>
                  </Group>
                </div>
              </Stack>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" style={{ margin: '0 1rem' }}>
              <Stack gap="lg">
                <Group className="featured-project-header-group">
                  <Title order={3} size="1.5rem" fw={600} c="dark.8">
                    Interactive PACS Training Module
                  </Title>
                  <Button
                    component="a"
                    href="/training-demo"
                    variant="light"
                    color="blue"
                    rightSection={<IconExternalLink size={16} />}
                    className="demo-button-mobile"
                  >
                    Try the Demo
                  </Button>
                </Group>

                <Text size="lg" c="gray.7" lh={1.6}>
                  A self-guided interactive training walkthrough covering radiology study routing and worklist management in PACS systems. Designed to demonstrate the kind of application training an Application Specialist delivers to healthcare customers &mdash; with step-by-step lessons, visual workflow diagrams, and knowledge checks. Built to show both instructional design thinking and deep clinical workflow knowledge.
                </Text>

                <div className="featured-project-grid">
                  <div className="project-detail-card">
                    <Stack gap="sm">
                      <Title order={4} size="1.1rem" fw={600} c="dark.7">
                        How It Works
                      </Title>
                      <Stack gap="xs">
                        <Text size="sm" c="gray.7">
                          <strong>1. Start the Module:</strong> Choose a lesson from the progress tracker or work through all 5 in sequence
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>2. Read &amp; Learn:</strong> Each lesson includes 2&ndash;3 paragraphs of clinical context plus a visual workflow diagram
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>3. Review Key Terms:</strong> Expand the collapsible glossary for DICOM, HL7, and PACS terminology
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>4. Test Your Knowledge:</strong> Answer a multiple-choice question with immediate feedback and explanation
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>5. Complete the Module:</strong> Review your results and access curated further reading resources
                        </Text>
                      </Stack>
                    </Stack>
                  </div>

                  <div className="project-detail-card">
                    <Stack gap="sm">
                      <Title order={4} size="1.1rem" fw={600} c="dark.7">
                        Technical Stack
                      </Title>
                      <Stack gap="xs">
                        <Text size="sm" c="gray.7">
                          <strong>Frontend:</strong> Next.js 15, React, TypeScript
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>UI:</strong> Mantine 8 components (Stepper, Accordion, Radio.Group, Paper)
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>Diagrams:</strong> Hand-authored SVG workflow diagrams
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>Content:</strong> 5 lessons covering DICOM, HL7, routing rules, troubleshooting, and optimization
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>Architecture:</strong> Fully client-side, no backend &mdash; all content is static TypeScript data
                        </Text>
                      </Stack>
                    </Stack>
                  </div>
                </div>

                <div className="innovation-card">
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
                        Demonstrates instructional design and clinical training expertise &mdash; the core skill behind Application Specialist and PACS Administrator roles. Most candidates have clinical experience; few can walk into an interview with a live, interactive training module they designed and built.
                      </Text>
                    </div>
                  </Group>
                </div>
              </Stack>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" style={{ margin: '0 1rem' }}>
              <Stack gap="lg">
                <Group className="featured-project-header-group">
                  <Title order={3} size="1.5rem" fw={600} c="dark.8">
                    DICOM Metadata Explorer
                  </Title>
                  <Button
                    component="a"
                    href="https://dicom-explorer.streamlit.app"
                    target="_blank"
                    variant="light"
                    color="blue"
                    rightSection={<IconExternalLink size={16} />}
                    className="demo-button-mobile"
                  >
                    View Live Demo
                  </Button>
                </Group>

                <Text size="lg" c="gray.7" lh={1.6}>
                  A browser-based tool for exploring DICOM medical imaging metadata. Upload
                  any DICOM file — or select a bundled sample — to view its tags organized
                  by clinical category: patient, study, series, equipment, and image
                  parameters. Designed for radiology professionals, PACS administrators,
                  and anyone working with medical imaging data.
                </Text>

                <Text size="lg" c="gray.7" lh={1.6}>
                  Each tag displays its DICOM tag number (e.g., &quot;Accession Number
                  (0008,0050)&quot;) alongside a plain-English tooltip explaining its
                  clinical purpose — how it drives PACS routing, worklist matching, and
                  display protocols. A conformance summary card flags missing required tags
                  and identifies the SOP Class and Transfer Syntax.
                </Text>

                <div className="featured-project-grid">
                  <div className="project-detail-card">
                    <Stack gap="sm">
                      <Title order={4} size="1.1rem" fw={600} c="dark.7">
                        How It Works
                      </Title>
                      <Stack gap="xs">
                        <Text size="sm" c="gray.7">
                          <strong>1. Load File:</strong> Upload a .dcm file or choose from bundled CT, MRI, and ultrasound samples
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>2. Parse Tags:</strong> pydicom reads all DICOM data elements from the file header
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>3. Categorize:</strong> Tags organized into clinical groups matching how PACS admins think about them
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>4. Search:</strong> Filter across all tags by name, tag number, or value instantly
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>5. Explore:</strong> Hover any tag name for a clinical explanation of its purpose
                        </Text>
                      </Stack>
                    </Stack>
                  </div>

                  <div className="project-detail-card">
                    <Stack gap="sm">
                      <Title order={4} size="1.1rem" fw={600} c="dark.7">
                        Technical Stack
                      </Title>
                      <Stack gap="xs">
                        <Text size="sm" c="gray.7">
                          <strong>Backend:</strong> Python with pydicom library
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>Frontend:</strong> Streamlit for interactive UI
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>Standards:</strong> DICOM (Digital Imaging and Communications in Medicine)
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>Testing:</strong> pytest with in-memory DICOM datasets
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>Deployment:</strong> Streamlit Community Cloud
                        </Text>
                        <Text size="sm" c="gray.7">
                          <strong>Source:</strong>{' '}
                          <a
                            href="https://github.com/elena-s-thomas/dicom-explorer"
                            target="_blank"
                            style={{ color: '#339af0', textDecoration: 'underline' }}
                          >
                            github.com/elena-s-thomas/dicom-explorer
                          </a>
                        </Text>
                      </Stack>
                    </Stack>
                  </div>
                </div>

                <div className="innovation-card">
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
                      🔬
                    </div>
                    <div style={{ flex: 1 }}>
                      <Text size="sm" fw={600} c="dark.7" mb={4}>
                        Key Innovation
                      </Text>
                      <Text size="sm" c="gray.7">
                        Demonstrates practical DICOM expertise — the foundational standard behind
                        every PACS system. Tags are organized and described the way a PACS
                        administrator thinks about them, not just as raw hex identifiers. pydicom
                        is the industry-standard Python library used by clinical engineering teams
                        for DICOM scripting and migration validation.
                      </Text>
                    </div>
                  </Group>
                </div>
              </Stack>
            </Card>
          </Stack>
        </div>
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
