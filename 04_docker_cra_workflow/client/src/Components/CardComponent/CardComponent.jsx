import "./CardComponent.css";
import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import { CardComponentContainer } from "./CardComponentStyles";

const CardComponent = ({ img, alt, size }) => {
  return (
    <CardComponentContainer size={size}>
      <Card className="">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={alt}
            height="140"
            image={img}
            title={alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lorem
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              itaque?
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </CardComponentContainer>
  );
};

export default CardComponent;
