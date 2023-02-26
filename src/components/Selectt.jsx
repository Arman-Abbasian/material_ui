import { Menu, MenuItem, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const Selectt = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const handleChangeCountry = (e) => {
    setCountry(e.target.value)
  };
  const handleChangeCountries = (e) => {
    setCountries(e.target.value)
  };
  return (
    <Stack direction={"column"} spacing={2}>
    <Box width='250px'>
      <TextField
        label="select a country"
        select
        value={countries}
        onChange={handleChangeCountries}
        SelectProps={{multiple:true}}
        fullWidth
      >
        <MenuItem value="IR">Iran </MenuItem>
        <MenuItem value="US">USA </MenuItem>
      </TextField>
    </Box>
    <Box width='250px'>
    <TextField
      label="select a country"
      select
      value={country}
      onChange={handleChangeCountry}
      fullWidth
    >
      <MenuItem value="IR">Iran </MenuItem>
      <MenuItem value="US">USA </MenuItem>
    </TextField>
  </Box>
  </Stack>
  );
};

export default Selectt;
