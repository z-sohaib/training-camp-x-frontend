/* eslint-disable react/prop-types */
function UserCard({ user }) {
  return (
    <div className="flex flex-col justify-center items-center text-center text-red-400 border border-red-400 rounded-xl p-8">
      <p className="text-xl font-bold">{user.name}</p>
      <p>{`${user.company.name} : ${user.company.catchPhrase}`}</p>
    </div>
  );
}

export default UserCard;
