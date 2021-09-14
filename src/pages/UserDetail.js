import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Loading from "../components/Loading";

const useStyles = makeStyles({
  card: {
    width: 500,
    height: 350,
  },
});

function UserDetail() {
  const classes = useStyles();
  const { id } = useParams();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(res.data);
      setIsLoading(false);
    }
    fetchUser();
  }, [id]);

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && (
        <Container>
          <Card className={classes.card}>
            <CardContent>
              <ul>
                <li>name: {user.name}</li>
                <li>username: {user.username}</li>
                <li>email: {user.email}</li>
                <li>phone: {user.phone}</li>
                <li>company: {user.company.name}</li>
                <li>website: {user.website}</li>
                <li>
                  address:
                  <ul>
                    <li>street: {user.address.street}</li>
                    <li>suite: {user.address.suite}</li>
                    <li>city: {user.address.city}</li>
                    <li>zipcode: {user.address.zipcode}</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Container>
      )}
    </div>
  );
}

export default UserDetail;
