import { Box, Typography, Container } from '@mui/material';

export default function Education() {
  return (
    <Box sx={{ py: 10, bgcolor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h4" gutterBottom>Education</Typography>
        <Typography>B.Tech in Computer Science – XYZ University (2018–2022)</Typography>
      </Container>
    </Box>
  );
}