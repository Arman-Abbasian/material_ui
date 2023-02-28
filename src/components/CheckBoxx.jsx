import { CheckBox } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const CheckBoxx = () => {
  const [acceptTnc, setAcceptTnc] = useState(false);
  const [skill, setSkill] = useState([]);
  const handleSkillChanges = (e) => {
    console.log(e.target.value);
    console.log(skill);
    const index = skill.findIndex((item) => item === e.target.value);
    console.log(index);
    if (index === -1) {
      setSkill([...skill, e.target.value]);
    } else {
      setSkill(skill.filter((item) => item !== e.target.value));
    }
  };
  const handleChange = (e) => {
    setAcceptTnc(e.target.checked);
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTnc} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkIcon color="red" />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnc}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="HTML"
                  onChange={handleSkillChanges}
                  checked={skill.includes("HTML")}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="CSS"
                  onChange={handleSkillChanges}
                  checked={skill.includes("CSS")}
                />
              }
            />
            <FormControlLabel
              label="JS"
              control={
                <Checkbox
                  value="JS"
                  onChange={handleSkillChanges}
                  checked={skill.includes("JS")}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default CheckBoxx;
