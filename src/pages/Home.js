import { useState, useEffect } from "react";
import axios from "axios";
import CardsContainer from "../components/CardsContainer";
import CircularProgress from "@material-ui/core/CircularProgress";

function Home() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
      setIsLoading(false);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      {isLoading && <CircularProgress />}
      {!isLoading && <CardsContainer users={users} />}
    </div>
  );
}

export default Home;
