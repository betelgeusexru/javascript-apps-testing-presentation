import React, { useCallback, useLayoutEffect, useState } from "react";
import axios from "axios";

export const API_USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

export const Users = () => {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);

  const handleLoadUsers = useCallback(async () => {
    const resp = await axios.get(API_USERS_ENDPOINT);

    if (!resp.data) {
      resp.data = resp;
    }

    setUsers(resp.data);
  }, []);

  useLayoutEffect(() => {
    handleLoadUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div data-testid="user-item" key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
};
