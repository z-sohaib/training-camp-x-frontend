import useFetch from "../../hooks/useFetch";
import UserCard from "./UserCard";

function OurUsers() {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h1 className="text-center text-xl text-red-400">Our Users</h1>
      <div className="my-8 px-16">
        {data &&
          (data.length > 0 ? (
            <div className="grid md:grid-cols-4 grid-cols-1 justify-center items-center gap-8">
              {data.map((element) => (
                <UserCard key={element.id} user={element} />
              ))}
            </div>
          ) : (
            <p className="text-center text-red-400">No users available</p>
          ))}
        {error && <p className="text-center text-red-400">Error: {error}</p>}
        {loading && <p className="text-center text-red-400">Loading...</p>}
      </div>
    </div>
  );
}

export default OurUsers;
