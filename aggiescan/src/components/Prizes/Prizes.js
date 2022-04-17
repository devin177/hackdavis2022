import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Aggie Rewards</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.subtitle}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                {/* <InfoIcon /> */}
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://ucdavisstores.com/storeimages/192-1657569-1.jpg',
    title: 'MV Sport UC Davis Navy Athletics T-Shirt',
    subtitle: 'In Stock',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://ucdavisstores.com/storeimages/192-1713177-1.jpg',
    title: 'MV Sport UC Davis 1/4 Zip Champion Aggies Sweatshirt Navy',
    subtitle: 'In Stock',
    cols: 2,
  },
  {
    img: 'https://ucdavisstores.com/storeimages/192-1562151-1.jpg',
    title: 'MV Sport UC Davis Athletic CA Youth T-Shirt Navy',
    subtitle: 'Out of Stock',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://ucdavisstores.com/storeimages/192-1698817-1.jpg',
    title: 'Legacy UC Davis Cool Fit Adjustable Visor Gray',
    subtitle: 'In Stock',
    rows: 2,
    cols: 2,
  },
];
