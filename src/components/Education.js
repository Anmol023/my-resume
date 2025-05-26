import { Box, Typography, Container, Divider, Stack } from '@mui/material';

export default function Education() {
  return (
    <Box sx={{ py: 10, bgcolor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Education
        </Typography>

        <Stack spacing={3}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
              B.Tech in Information Technology
            </Typography>
            <Typography color="text.secondary">
              Oriental College of Technology, Bhopal, M.P. (2016–2020)
            </Typography>
          </Box>

          <Divider />

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
              XII (Science with PCM)
            </Typography>
            <Typography color="text.secondary">
              Agrasen DAV Public School, Ramgarh Cantt, Jharkhand (2014–2015)
            </Typography>
          </Box>

          <Divider />

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
              X
            </Typography>
            <Typography color="text.secondary">
              St.Ann's Public School, Ramgarh Cantt, Jharkhand (2012–2013)
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}