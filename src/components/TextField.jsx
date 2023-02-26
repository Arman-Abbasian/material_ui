import { InputAdornment, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

const TextFieldd = () => {
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction={"column"} spacing={3}>
        <TextField label="form" required error />
        <TextField
          label="password"
          type="password"
          required
          error
          helperText="do not share password with any one"
        />
        <TextField label="read only" inputProps={{ readOnly: true }} />
        <TextField
          label="password"
          required
          value={value}
          onChange={changeHandler}
          error={!value}
          variant={"outlined"}
          helperText={
            !value ? "required" : "do not share password with any one"
          }
        />
        <TextField
          label="amount"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default TextFieldd;
