import { useAuth0 } from "@auth0/auth0-react";

const AboutPage = () => {
  const { user, isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <div>Please log in to view this page.</div>;
  }

  console.log("User Info:", user);

  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of our Inventory Management application.</p>
    </div>
  );
};

export default AboutPage;
