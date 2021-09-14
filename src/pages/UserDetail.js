import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import UserDetailCard from "../components/UserDetailCard";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(res.data);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && <UserDetailCard user={user} isError={isError} />}
    </div>
  );
}

export default UserDetail;
