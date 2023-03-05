import { Box, Stack } from "@mui/system";

const Boxx = () => {
  return (
    <Stack>
      <Box
        sx={{
          backgroundColor: "peru",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "4rem",
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
      >
        ddddd
      </Box>
    </Stack>
  );
};

export default Boxx;
