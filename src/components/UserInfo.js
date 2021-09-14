function UserInfo({ user }) {
  return (
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
  );
}

export default UserInfo;
