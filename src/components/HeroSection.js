import { Box, Typography, IconButton, Stack } from "@mui/material";
import { GitHub, LinkedIn, Instagram, X } from "@mui/icons-material";

export default function HeroSection() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url('/hero-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
        px: 2,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Anmol Gupta
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
          <IconButton href="https://linkedin.com/in/anmolgupta023" target="_blank" color="inherit"><LinkedIn /></IconButton>
          <IconButton href="https://github.com/Anmol023" target="_blank" color="inherit"><GitHub /></IconButton>
          <IconButton href="https://x.com/atleastanm0l" target="_blank" color="inherit"><X/></IconButton>
          <IconButton href="https://www.instagram.com/atleastanm0l/" target="_blank" color="inherit"><Instagram /></IconButton>
        </Stack>
				<Box>
        <div className="mouse-icon">
            <div className="scroll"/>
        </div>
      </Box>
      </Box>
    </Box>
  );
}