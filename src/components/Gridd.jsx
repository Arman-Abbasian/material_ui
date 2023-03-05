import { Grid, Stack } from "@mui/material";
import { blue, brown, green, grey, pink } from "@mui/material/colors";

const Gridd = () => {
    return ( 
        <Stack>
        <Grid container spacing={2}>
            <Grid item xs='auto' bgcolor="#e3f2fd">1</Grid>
            <Grid item xs bgcolor='#bdbdbd'>2</Grid>
            <Grid item xs bgcolor='#4caf50'>3</Grid>
            <Grid item xs bgcolor='#6d4c41'>4</Grid>
            <Grid item xs bgcolor='#e91e63'>5</Grid>
            <Grid item xs={12} sm={9} md={6} lg={3} bgcolor='#4caf50'>6</Grid>
        </Grid>
        <Grid container spacing={2} my={10}>
        <Grid item xs={12} sm={9} md={6} lg={3} bgcolor='#4caf50'>6</Grid>
        </Grid>
        </Stack>
     );
}
 
export default Gridd;