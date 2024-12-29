import React, { useState, useEffect } from "react";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard";
import { Box, Button, Typography, Grid } from "@mui/material";

export default function Section() {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const apiEndpoint = "https://qtify-backend-labs.crio.do/albums/top";
  
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        // console.log(response.data);
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
console.log(albums)
  return (
    <Box sx={{ padding: 3 }}>

      {/* Header Section */}
      {/* <Grid container alignItems="center" justifyContent="space-between" sx={{ marginBottom: 2 }}>
        <Typography variant="h5" component="div">
          {albums. title}Top Albums
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={toggleCollapse}
          sx={{ textTransform: "none" }}
        >
          {isCollapsed ? "Expand" : "Collapse"}
        </Button>
      </Grid>
      {/* Grid Section */}
        {albums.map((album)=>{
            return(
                <Typography>
                    {album.title}
                </Typography>
            )
        })}
      {/* <Grid container spacing={3} columns={12}>
        {(isCollapsed ? albums.slice(0, 4) : albums).map((album) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={album.id}>
            <AlbumCard
              albumImage={album.image}
              albumName={album.name}
              follows={`${album.follows} Follows`}
            />
          </Grid>
        ))}
      </Grid> */} 
    </Box>
  );
}

