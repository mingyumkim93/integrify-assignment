import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  loading: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
});

function Home() {
  const classes = useStyles();

  return <CircularProgress className={classes.loading} />;
}

export default Home;
