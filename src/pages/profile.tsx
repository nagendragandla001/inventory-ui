import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};
export default ProfilePage;
