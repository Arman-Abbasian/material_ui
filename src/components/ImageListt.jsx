import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { Box } from "@mui/system";

const itemData = [
  {
    id: 1,
    img: "https://edit.org/photos/img/blog/j4u-video-call-background-zoom-teams-meet-edit-online-cool.jpg-840.jpg",
    title: "img1",
  },
  {
    id: 2,
    img: "https://edit.org/photos/img/blog/awh-video-call-background-zoom-teams-meet-digital-online.jpg-840.jpg",
    title: "img2",
  },
  {
    id: 3,
    img: "https://edit.org/photos/img/blog/lss-video-call-background-backdrop-zoom-teams-meet-editable-online.jpg-840.jpg",
    title: "img3",
  },
  {
    id: 4,
    img: "https://edit.org/photos/img/blog/2018102211-instagram-stories-pink-collection.jpg-840.jpg",
    title: "img4",
  },
  {
    id: 5,
    img: "https://edit.org/photos/img/blog/2018102211-instagram-stories-nature.jpg-840.jpg",
    title: "img5",
  },
  {
    id: 6,
    img: "https://edit.org/photos/img/blog/2018102211-thailand-instagram-stories-template.jpg-840.jpg",
    title: "img6",
  },
];

const ImageListt = () => {
  return (
    <Box sx={{ width: 500, height: 450, overflow: "scroll" }}>
      <ImageList cols={3} variant="masonry" gap={8}>
        {itemData.map((item) => {
          return (
            <ImageListItem key={item.id}>
              <img src={item.img} alt={item.title} loading="lazy" />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
};

export default ImageListt;
