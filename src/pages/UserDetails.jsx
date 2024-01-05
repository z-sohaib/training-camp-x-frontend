import { Link, useLocation, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function UserDetails() {
  let { id } = useParams();
  const { data, error, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  const location = useLocation();

  console.log(location);
  return (
    <div className="p-8">
      <div className="mb-4">
        <h2 className="font-bold text-2xl">Profile Page</h2>
        {!loading &&
          (data && data.name ? (
            <p>Hello, my name is {data.name}</p>
          ) : (
            <p>User Not Found</p>
          ))}
        {error && <p className="text-red-400">Error: {error}</p>}
        {loading && <p>Loading...</p>}
      </div>
      <Link to="/" className="bg-red-400 px-8 py-2 rounded-xl text-white">
        Go To Home Page
      </Link>
    </div>
  );
}

export default UserDetails;
