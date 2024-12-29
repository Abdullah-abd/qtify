import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip, Box } from "@mui/material";
import cardImage from "../../assets/cardImage.png"
import styles from "./Card.module.css"
export default function AlbumCard() {
  return (
    <Card
      sx={{
        // width: 300,
        borderRadius: "18px",
        overflow: "hidden", // Prevents image overflow
        boxShadow: 3,
        margin: 2,
        position:"relative",
        border:"2px solid black"
      }}
    >
      {/* Album Image */}
      <CardMedia
        component="img"
        height="100%" // Adjust height to match the Figma ratio
        image={cardImage} // Dummy image
        alt="Album"
      />

      {/* Bottom Section */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          padding: 2,
        }}
      >
        {/* Album Name */}
        <Typography variant="h6" component="div" align="center" className={styles.name}>
          Album Name
        </Typography>

        {/* Chip for Number of Follows */}
        <Chip
          label="1.2k Follows"
          className={styles.chips}
        />
      </CardContent>
    </Card>
  );
}
