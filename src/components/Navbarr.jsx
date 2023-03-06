import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
const Navbarr = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
          pokemon app
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button size="small" color="inherit">
            Feature
          </Button>
          <Button size="small" color="inherit">
            Pricing
          </Button>
          <Button size="small" color="inherit">
            About
          </Button>
          <Button size="small" color="inherit">
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbarr;
