import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction={"row"} spacing="2">
        <TextField label="form" required error />
        <TextField label="password" type="password" required error  helperText="do not share password with any one"/>
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
