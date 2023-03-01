import { Autocomplete, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

const skills = ["HTML", "CSS", "JS"];
const skillOptions = [
  { id: 1, label: "HTML" },
  { id: 2, label: "CSS" },
  { id: 3, label: "JS" },
];

const AutoCompletee = () => {
  const [value, setValue] = useState("");
  const [objectValue, setObjectValue] = useState("");
  const handleChange = (e, newvalue) => {
    console.log(newvalue);
    setValue(newvalue);
  };
  const handleObjectChange = (e, newvalue) => {
    console.log(newvalue);
    setObjectValue(newvalue);
  };
  return (
    <Stack spacing={4}>
      <Stack>
        <Autocomplete
          options={skills}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} label="skills" />}
        />
      </Stack>
      <Stack>
        <Autocomplete
          options={skillOptions}
          onChange={handleObjectChange}
          renderInput={(params) => <TextField {...params} label="skills" />}
        />
      </Stack>
    </Stack>
  );
};

export default AutoCompletee;
