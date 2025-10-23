import { Box, Container, Typography } from "@mui/material";
import Script from "next/script";

export default function Certification() {
  return (
    <Box sx={{ py: 10}}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Certification
        </Typography>

        <div
          id="credly-badge"
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="83050fa3-73e1-48f0-b320-c901f773bcab"
          data-share-badge-host="https://www.credly.com"
        ></div>

        <Script
          src="https://cdn.credly.com/assets/utilities/embed.js"
          strategy="afterInteractive"
        />
      </Container>
    </Box>
  );
}
