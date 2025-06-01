


async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    console.log(data)
    return data.data;
}

async function UserPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="bg-red-300">
        <img src={user.avatar} />
      
     
        <h3 className="font-bold">
            {user.id} {user.first_name} {user.last_name}
        </h3>
        <p className="text-slate-100">email:{user.email} </p>
               
      </div>
    
  );
}

export default UserPage;

