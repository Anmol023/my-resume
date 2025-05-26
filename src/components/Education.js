import { Box, Typography, Container } from '@mui/material';

export default function Education() {
  return (
    <Box sx={{ py: 10, bgcolor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h4" gutterBottom>Education</Typography>
        <Typography>B.Tech in Information Technology – Oriental College of Technology, Bhopal, M.P. (2016–2020)</Typography>
         <Typography>XII – Agrasen DAV Public School, Ramgarh Cantt, Jharkhand (2014–2015)</Typography>
          <Typography>X – St.Ann's Public School, Ramgarh Cantt, Jharkhand (2012–2013)</Typography>
      </Container>
    </Box>
  );
}