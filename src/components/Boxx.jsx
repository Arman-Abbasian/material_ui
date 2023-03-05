import { Divider } from "@mui/material";
import { Box, Stack } from "@mui/system";

const Boxx = () => {
  return (
    <Stack border={'1px dotted blue'} direction='row' spacing={2} flexWrap={"wrap"} divider={<Divider sx={{width:'3px',backgroundColor:'red',marginLeft:0}} orientation="vertical" flexItem />} >
      <Box
        sx={{
          backgroundColor: "peru",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "4rem",
          marginLeft:0,
          "&:hover": { backgroundColor: "red" },
        }}
      >
        hhghhg
      </Box>
      <Box
        width={"100px"}
        height={"100px"}
        padding="4rem"
        color={"red"}
        marginLeft={0}
        bgcolor={"green"}
      >
        ddddd
      </Box>
      <Box
        sx={{
          backgroundColor: "peru",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "4rem",
          marginLeft:0,
          "&:hover": { backgroundColor: "red" },
        }}
      >
        hhghhg
      </Box>
      <Box
        width={"100px"}
        height={"100px"}
        padding="4rem"
        color={"red"}
        bgcolor={"green"}
        marginLeft={0}
      >
        ddddd
      </Box>
    </Stack>
  );
};

export default Boxx;
