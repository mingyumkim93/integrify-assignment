import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  userCard: {
    width: 300,
    height: 350,
    margin: 10,
    padding: 10,
  },
  cardSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

function UserCard({ user }) {
  const classes = useStyles();

  return (
    <Card className={classes.userCard}>
      <CardContent className={classes.cardSection}>
        <Avatar className={classes.avatar}>{user.name[0]}</Avatar>
        <Typography gutterBottom variant="h5" component="h2">
          {user.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {"@" + user.username}
        </Typography>
        <a href={"http://" + user.website}>http://{user.website}</a>
      </CardContent>
      <CardActions className={classes.cardSection}>
        <Button
          component={Link}
          to={`user/${user.id}`}
          variant="contained"
          color="primary"
        >
          More detail
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserCard;
