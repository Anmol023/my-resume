import { Box, Typography, Container, List, ListItem } from '@mui/material';

export default function Experience() {
  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Experience
        </Typography>

        {/* Title line */}
        <Typography sx={{ fontWeight: 'bold', mb: 2, textDecoration: 'underline' }}>
          Axis Bank <span style={{ margin: '0 8px' }}>|</span> Full Stack Developer <span style={{ margin: '0 8px' }}>|</span> Aug 2021 - Present
        </Typography>

        {/* Insurance Platform Section */}
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 3, mb: 1 }}>
          Insurance Platform (D2C and B2B)
        </Typography>
        <List sx={{ pl: 3 }}>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 0.5 }}>
            Integrated different partner APIs in Spring Boot microservices architecture using Kotlin, and actively participated in new partner onboarding discussions.
          </ListItem>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 0.5 }}>
            Exposed a serverless API via API Gateway → AWS Lambda → DynamoDB for storing partner-exposed details.
          </ListItem>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 0.5 }}>
            Optimized API performance by recalibrating MongoDB queries and improved event-driven pipeline by modifying Kafka consumer/producer configurations, increasing performance by 30%.
          </ListItem>
        </List>

        {/* Document Upload & Retrieval Section */}
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 3, mb: 1 }}>
          Document Upload & Retrieval
        </Typography>
        <List sx={{ pl: 3 }}>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 0.5 }}>
            Developed a scalable solution for high-volume file uploads via API Gateway → AWS Lambda → S3 for efficient storage.
          </ListItem>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 0.5 }}>
            Implemented asynchronous processing to enhance performance and reliability, ensuring seamless uploads and storage.
          </ListItem>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 0.5 }}>
            Built a React-based UI integrated with an Express.js backend to fetch stored files from S3, enabling single or multiple file downloads in ZIP format.
          </ListItem>
          <ListItem sx={{ display: 'list-item', listStyleType: 'disc', py: 0.5 }}>
            Ensured secure access and optimized performance using AWS SDK, caching mechanisms, and efficient API design.
          </ListItem>
        </List>
      </Container>
    </Box>
  );
}