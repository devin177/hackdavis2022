import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function GiveawayCards() {
  return (
    <div>
      <Card sx={{ maxWidth: 325 }}>
        <CardActionArea href="https://www.instagram.com/p/CNNXSKmMLu-/" target="_blank">
          <CardMedia
            component="img"
            height="400"
            image="https://ucdavisstores.com/storeimages/192-1657569-1.jpg"
            alt="aggie navy tshirt"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              UC Davis Athletics T-Shirt - Navy
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Giveaway Ends - 4/21/2022
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 325 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image="https://i.imgur.com/SpnznYI.png"
            alt="expired"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Aggies Canteen
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Giveaway Ended
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 325 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image="https://i.imgur.com/SpnznYI.png"
            alt="expired"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Aggies Bucket Hat
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Giveaway Ended
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  </div>
  );
}


