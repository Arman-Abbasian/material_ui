import { Button, Menu, MenuItem } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

const Menuu = () => {
  const [anchorEi, setAnchorEi] = useState(null);
  const open = anchorEi;
  const handleClose = () => {
    setAnchorEi(null);
  };
  const handleClick = (e) => setAnchorEi(e.currentTarget);
  return (
    <Stack>
      <Button id="resource-button" onClick={handleClick} >
        Resource
      </Button>
      <Menu
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        anchorEl={anchorEi}
        open={open}
        MenuListProps={{ "aria-labelledby": "resource-button" }}
        onClose={handleClick}
      >
        <MenuItem onClick={handleClose}>Blog</MenuItem>
        <MenuItem onClick={handleClose}>Podcast</MenuItem>
      </Menu>
    </Stack>
  );
};

export default Menuu;
