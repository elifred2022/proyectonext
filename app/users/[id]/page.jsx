// app/users/[id]/page.jsx

async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Usuario no encontrado");
  }
  return res.json();
}

// Este componente NO es async (recibe params)
export default function UserPage({ params }) {
  return <UserContent id={params.id} />;
}

// Este componente SÍ es async (hace el fetch)
async function UserContent({ id }) {
  const user = await getUser(id);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Usuario #{user.id}</h1>
      <div className="bg-gray-100 p-4 rounded">
     
                    <h5 className="font-bold">
                    {user.id} {user.first_name} {user.last_name}{" "}
                    </h5>
                    <p className="text-slate-100">email:{user.email} </p>
               
      </div>
    </div>
  );
}
