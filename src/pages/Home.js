import { useState, useEffect } from "react";
import axios from "axios";
import CardsContainer from "../components/CardsContainer";
import Loading from "../components/Loading";

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
      {isLoading && <Loading />}
      {!isLoading && <CardsContainer users={users} />}
    </div>
  );
}

export default Home;
