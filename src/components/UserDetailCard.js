import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import UserNotFoundError from "./UserNotFoundError";
import UserInfo from "./UserInfo";

const useStyles = makeStyles({
  card: {
    width: 500,
    height: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonContainer: {
    justifyContent: "end",
  },
});

function UserDetailCard({ user, isError }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        {user && <UserInfo user={user} />}
        {isError && <UserNotFoundError />}
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          size="large"
        >
          Home
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserDetailCard;
