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
  const [selectedBtn, setSelectedBtn] = useState([]);

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
      <div>
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button color={selectedBtn === 1 ? "secondary" : "primary"} onClick={()=>setSelectedBtn(1)}>One</Button>
        <Button color={selectedBtn === 2 ? "secondary" : "primary"} onClick={()=>setSelectedBtn(2)}>Two</Button>
      </ButtonGroup>
    </div>
      </Stack>
    </Stack>
  );
};

export default Butonn;
