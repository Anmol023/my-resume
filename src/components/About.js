import { Box, Typography, Container } from '@mui/material';

export default function About() {

  const getExperience = (start = '2021-08-22') => {
  const [sy, sm] = [new Date(start).getFullYear(), new Date(start).getMonth()];
  const now = new Date();
  let years = now.getFullYear() - sy
  let months = now.getMonth() - sm
  if (months < 0) {
    years--
    months += 12
  }
  return `${years}${months ? `.${months}` : ''} years`;
}
  return (
    <Box sx={{ py: 10, bgcolor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h4" gutterBottom>About Me</Typography>
        <Typography>
          Results-driven Software Engineer with {getExperience()} of experience designing, developing, and optimizing scalable web applications and microservices. Skilled in building reactive backend systems using Spring Boot and Kotlin, and frontend interfaces with React and Next.js. Proven expertise in integrating APIs, managing asynchronous workflows, and optimizing performance under high load. Passionate about writing clean, maintainable code and continuously learning emerging technologies. Experienced in Agile environments with a strong focus on collaboration, problem-solving, and delivering high-quality solutions.
        </Typography>
      </Container>
    </Box>
  );
}