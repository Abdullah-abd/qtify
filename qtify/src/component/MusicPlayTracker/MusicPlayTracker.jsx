import React, { useState, useEffect } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const MusicPlayTracker = () => {
  const [progress, setProgress] = useState(0); // Progress in percentage
  const [currentTime, setCurrentTime] = useState(0); // Time in seconds
  const duration = 180; // Total duration in seconds (e.g., 3 minutes)
  const theme = useTheme();
  // Simulate progress
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime((prev) => {
        const nextTime = prev + 1;
        if (nextTime >= duration) {
          clearInterval(timer);
          return duration;
        }
        return nextTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Update progress bar
  useEffect(() => {
    setProgress((currentTime / duration) * 100);
  }, [currentTime]);

  // Format time as mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Box
      sx={{
        width: "60vw",
        padding: "16px",
        borderRadius: "8px",
        // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            width: "40vw", // Set to 40vw for screens smaller than 576px
          },
      }}
    >
      {/* <Typography variant="h6" gutterBottom>
        Music Progress
      </Typography> */}
      <Typography variant="subtitle2" sx={{ marginBottom: "8px" }}>
        {formatTime(currentTime)} / {formatTime(duration)}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ height: "8px", borderRadius: "4px", "& .MuiLinearProgress-bar": {
            backgroundColor: "#34C94B",
          },
          backgroundColor:"#ffffff"
        }}
      />
    </Box>
  );
};

export default MusicPlayTracker;
