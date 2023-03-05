import {
    Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Cardd = () => {
  return (
    <Box width={300}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          alt="cardimg"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbE3bRtzN1JD04FmpTlMfah2Y_I8YEGxnLBnIWPcPWnc4NYtoHbjiUI18F21TjFSOeZXo&usqp=CAU"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            beatae, deleniti inventore officia ducimus cumque ipsa veritatis
            blanditiis quod ullam, eos incidunt, sunt eius a expedita iure ab
            earum laborum.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">share</Button>
          <Button size="small">learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Cardd;
