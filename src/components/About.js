import { Box, Typography, Container } from '@mui/material';

export default function About() {
  return (
    <Box sx={{ py: 10, bgcolor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h4" gutterBottom>About Me</Typography>
        <Typography>
          A passionate developer with a love for clean code and modern UI experiences...
        </Typography>
      </Container>
    </Box>
  );
}