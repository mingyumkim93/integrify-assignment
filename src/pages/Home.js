import { useState, useEffect } from "react";
import axios from "axios";
import UsersPreview from "../components/UsersPreview";
import Loading from "../components/Loading";

function Home() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      {users && <UsersPreview users={users} />}
      {isError && <h3>Couldn't find users</h3>}
    </div>
  );
}

export default Home;
