import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

export default function FunGame() {
  const [score, setScore] = useState(0);

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        backgroundColor: "#f0f0f0",
        boxShadow: 2,
        textAlign: "center"
      }}
    >
      <Typography variant="body1" gutterBottom>
        Click the button as many times as you can!
      </Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => setScore(score + 1)}
        sx={{ mt: 1 }}
      >
        Click Me!
      </Button>
      <Typography variant="h5" color="secondary" sx={{ mt: 2 }}>
        Score: {score}
      </Typography>
    </Box>
  );
}