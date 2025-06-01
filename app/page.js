import React from "react";
import Users from "./components/Users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  console.log(data);
  return data.data; // Esto sí es un array
}

async function HomePage() {
  const users = await fetchUsers();

  return (
    <div>
      <Users users={users} />
    </div>
  );
}

export default HomePage;
