import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="text-center">
      <p>This is the about page</p>
      <button
        className="bg-red-400 px-8 py-2 rounded-xl text-white my-4"
        onClick={handleClick}
      >
        Go To Home
      </button>
    </div>
  );
}
