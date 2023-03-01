import { Rating } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Ratingg = () => {
  const [value, setValue] = useState(null);
  const handleChange = (e, newValue) => {
    console.log(e.target.value);
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        precision={0.5}
        value={value}
        onChange={handleChange}
        icon={<FavoriteIcon color="error" />}
        emptyIcon={<FavoriteBorderIcon />}
      />
    </Stack>
  );
};

export default Ratingg;
