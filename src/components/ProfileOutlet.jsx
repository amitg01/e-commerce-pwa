import { Outlet, Navigate } from "react-router-dom";
let auth = true;

const ProfileOutlet = () => {
  return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProfileOutlet;
