import UserCard from "./UserCard";
import Box from "@material-ui/core/Box";

function CardsContainer({ users }) {
  return (
    <Box display="flex" flexWrap="wrap">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Box>
  );
}

export default CardsContainer;
