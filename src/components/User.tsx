import { useSelector } from "react-redux";
import { fetchUsers, selectUsers } from "../features/user/userSlice";
import { useEffect } from "react";
import store from "../store/store";

export const User = () => {
  const users = useSelector(selectUsers);
  useEffect(() => {
    store.dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2> List of users </h2>
      {users.loading && <div>Loding ...</div>}
      {!users.loading && users.error ? <div>{}</div> : null}
      {!users.loading && users.users.length ? (
        <ul>
          {users.users.map((user, key) => (
            <li key={key}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
