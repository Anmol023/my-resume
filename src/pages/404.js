import { Box, Typography, Button, Container } from "@mui/material";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically load game component
const Game = dynamic(() => import("@/components/FunGame"), { ssr: false });

export default function Custom404() {
  return (
    <Container maxWidth="sm" sx={{ py: 10, textAlign: "center" }}>
      <Typography variant="h3" component="h1" color="error" gutterBottom>
        404 - Oops!
      </Typography>

      <Typography variant="h6" color="text.secondary" paragraph>
        Looks like you're wandering around...
        <br />
        I haven't created that page yet.
        <br />
        Meanwhile, enjoy this fun little game!
      </Typography>

      <Box sx={{ my: 4 }}>
        <Game />
      </Box>

      <Link href="/" passHref>
        <Button variant="outlined" color="primary">
          🏠 Go back to Home
        </Button>
      </Link>
    </Container>
  );
}