import { Box, Typography, Container, Chip } from '@mui/material';

export default function Skills() {
  const skills = ['JavaScript', 'React', 'Next.js', 'Material UI', 'Node.js'];

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <Typography variant="h4" gutterBottom>Skills</Typography>
        <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
          {skills.map((skill) => (
            <Chip label={skill} key={skill} color="primary" />
          ))}
        </Box>
      </Container>
    </Box>
  );
}