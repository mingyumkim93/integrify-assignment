import Typography from "@material-ui/core/Typography";

function UserNotFoundError() {
  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        Something went wrong!
      </Typography>
      <Typography gutterBottom variant="body2" component="p">
        We couldn't find user with given id.
      </Typography>
    </div>
  );
}

export default UserNotFoundError;
