import { NavLink, useLoaderData } from "react-router-dom";
import { UserCard } from "../Components/UserCard";

export const Users = () => {
  const userData = useLoaderData();

  return (
    <>
      {console.log(userData)}
      {!userData && <p>Loading...</p>}

      {userData &&
        userData.map((user) => (
          <NavLink
            key={user.id}
            to={`/users/${user.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <UserCard value={user} />
          </NavLink>
        ))}
    </>
  );
};
