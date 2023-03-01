import { FormControlLabel, Switch, Box } from "@mui/material";
import { useState } from "react";

const Switchh = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            color="success"
            size="medium"
          />
        }
      />
    </Box>
  );
};

export default Switchh;
