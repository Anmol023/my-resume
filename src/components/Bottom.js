import { Box, Typography, Container, Divider, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Bottom() {
  return (
    <>
      <Divider/>
      <Box
        sx={{
          textAlign: 'center',
          padding: '20px 0',
          color: '#555',
          fontSize: '14px',
          // bgcolor: '#f5f5f5',
          mt: 0, // small spacing above footer
        }}
      >
        <Typography>
          Built with <strong>Next.js</strong> and deployed on <strong>Vercel</strong> with <FavoriteIcon fontSize="" color="error" />
        </Typography>
        
      </Box>
    </>
     
  );
}