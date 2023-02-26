import {
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Stack } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import FormatBoldIcons from "@mui/icons-material/FormatBold";
import FormatItalicIcons from "@mui/icons-material/FormatItalic";

const Butonn = () => {
  const [formats, setFormats] = useState([]);
  const handleChange = (e) => {
    console.log(e)
    setFormats(e)
};
  return (
    <Stack direction={"column"} spacing={2}>
      <Button variant="contained" href="https://www.google.com/">
        text
      </Button>
      <Button variant="outlined" disableRipple disableElevation>
        text
      </Button>
      <Button variant="contained" color="secondary" size="small">
        secondary
      </Button>
      <Stack display={"inline-block"} justifyContent={"space-between"}>
        <Button
          aria-label="send"
          style={{ display: "flex" }}
          color="primary"
          variant="outlined"
          endIcon={<SendIcon />}
        >
          send
        </Button>
      </Stack>
      <Stack display={"inline-block"} justifyContent={"space-between"}>
        <Button
          aria-label="send"
          style={{ display: "flex" }}
          onClick={() => alert("clicked")}
          color="success"
          variant="outlined"
          endIcon={<SendIcon />}
        >
          send
        </Button>
      </Stack>
      {/* button group */}
      <Stack>
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="small"
          color="success"
          style={{ width: "15rem" }}
        >
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>

      {/* toggle button */}
      <Stack>
        <ToggleButtonGroup
          aria-label="text-formatting"
          value={formats}
          onChange={handleChange}
          size="small"
          orientation="horizontal"
          
        >
          <ToggleButton value='bold' aria-label='bold'>
            <FormatBoldIcons />
          </ToggleButton>
          <ToggleButton value='italic' aria-label='italic'>
            <FormatItalicIcons />
          </ToggleButton>

        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default Butonn;
