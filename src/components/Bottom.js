import { Box, Typography, Container, Divider, Stack } from '@mui/material';

export default function Bottom() {
  return (
    <Box sx={{ py: 10, bgcolor: '#f5f5f5', bottom:0 }}>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Education
        </Typography>
      </Container>
    </Box>
  );
}