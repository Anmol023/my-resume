import { Box, Typography, Container, Chip, Paper } from '@mui/material';
import { useState } from 'react';

export default function Skills() {
  const skills = ['Kotlin', 'Spring Boot', 'Kafka', 'JavaScript', 'React/Next.js', 'Express', 'AWS', 'MongoDB'];

  const skillImages = {
  Kotlin: '/kotlin.png',
  'Spring Boot': '/springboot.png',
  Kafka: '/kafka.svg',
  JavaScript: '/JavaScript.png',
  'React/Next.js': '/nextjs.svg',
  Express: '/expressjs.png',
  AWS: '/aws.png',
  MongoDB: '/mongo.png'
};

  const skillDetails = {
    Kotlin: 'Built reactive microservices using Spring WebFlux in Kotlin.',
    'Spring Boot': 'Developed REST APIs, event-driven services, and used Spring Security & WebFlux.',
    Kafka: 'Implemented Kafka producers/consumers and retry logic.',
    JavaScript: 'Used for UI logic, DOM manipulation, and API integrations.',
    'React/Next.js': 'Built reusable components, form handling(RHF), hooks, and context-based state management.',
    Express: 'Created backend APIs, session handling and routing with middleware.',
    AWS: 'Worked with EC2, S3, Lambda, IAM, DocumentDB, DynamoDB, API Gateway, Cloudwatch and deployment pipelines.',
    MongoDB: 'Designed and implemented schema, performed CRUD operations, aggregation queries, and indexing for performance in reactive applications.'
  };

  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <Box sx={{ py: 10, bgcolor: '#f5f5f5' }} id="skills">
      <Container>
        <Typography variant="h4" gutterBottom>Skills</Typography>

        {/* Skill Chips */}
        <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              color={selectedSkill === skill ? "secondary" : "primary"}
              onClick={() => setSelectedSkill(skill)}
              clickable
            />
          ))}
        </Box>

        {/* Reserved space for Paper (so page doesn’t expand) */}
        <Box
          sx={{
            mt: 3,
            minHeight: '230px', // Adjust height based on content
            transition: 'all 0.3s ease',
          }}
        >
          {selectedSkill && (
            <Paper sx={{ mt: 3, p: 2, backgroundColor: '#f9f9f9', borderRadius: 2 }} elevation={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  component="img"
                  src={skillImages[selectedSkill]}
                  alt={selectedSkill}
                  sx={{ width: 50, height: 50, objectFit: 'contain' }}
                />
                <Typography variant="body2" mt={0.5}>{skillDetails[selectedSkill]}</Typography>
              </Box>
            </Paper>
          )}
        </Box>
      </Container>
    </Box>
  );
}
