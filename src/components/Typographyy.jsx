import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const Typographyy = () => {
    return ( 
        <Stack spacing={6}>
        <Stack spacing={2}>
            <Typography gutterBottom variant="h1">h1</Typography>
            <Typography gutterBottom variant="h2">h2</Typography>
            <Typography variant="h3">h3</Typography>
            <Typography variant="h4">h4</Typography>
            <Typography variant="h5">h5</Typography>
            <Typography variant="h6">h6</Typography>
        </Stack>

        <Stack spacing={2}>
        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle1</Typography>
    </Stack>

    <Stack spacing={2}>
        <Typography gutterBottom variant="body1">body 1</Typography>
        <Typography variant="body2">body 2</Typography>
    </Stack>
    <Stack>
        <Typography variant="h4" component="h1">h4</Typography>
    </Stack>
    </Stack>
     );
}
 
export default Typographyy;