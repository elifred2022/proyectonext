

async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    console.log(data)
    return data.data;
}
    



async function UserPage({ params }) {
 console.log("params:", params); // ✅ Esto se imprime en la consola del servidor
   const user = await getUser(params.id)


  return (
    <div>
      <h1>User </h1>
     

    </div>
  );
}

export default UserPage;
