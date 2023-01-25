import React from "react";
import moment from "moment";
import {
  CardContent,
  Typography,
  Card,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
export default function Video(props) {
  const { videoDetails } = props;

  return (
    <Card sx={{ maxWidth: 345, m: "15px", height: "300px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={videoDetails.snippet.thumbnails.default.url}
        title={videoDetails.snippet.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {videoDetails.snippet.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {videoDetails.snippet.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
{
  /* Create Video component using Material Card component which will show 
      all the details regarding video */
}
