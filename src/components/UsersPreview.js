import UserPreviewCard from "./UserPreviewCard";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

function UsersPreview({ users }) {
  const classes = useStyles();

  return (
    <Box className={classes.cardsContainer}>
      {users.map((user) => (
        <UserPreviewCard key={user.id} user={user} />
      ))}
    </Box>
  );
}

export default UsersPreview;
