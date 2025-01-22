import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

function Header({
  isLoggedIn = true,
  onLogout,
  onSignIn,
  onWrite,
  onDashboard,
  onProfile,
}) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full h-auto px-40 py-5 shadow-sm flex justify-between">
        <div className="text-3xl font-semibold text-slate-800 font-inter cursor-pointer">
          <Link to="/">BlogSpace</Link>
        </div>
        <div className="flex gap-8 items-center">
          {isLoggedIn ? (
            <>
              <Button
                text="Write"
                color="transparent"
                textColor="black"
                onClick={() => navigate("/write")}
              />
              <Button
                text="Dashboard"
                color="transparent"
                textColor="black"
                onClick={() => navigate("/dashboard")}
              />
              <Button
                text="Profile"
                color="transparent"
                textColor="black"
                onClick={() => navigate("/profile")}
              />
              <Button
                text="Logout"
                color="transparent"
                textColor="red"
                onClick={() => navigate("/logout")}
              />
            </>
          ) : (
            <>
              <Button
                text="Write"
                color="transparent"
                textColor="black"
                onClick={() => navigate("/write")}
              />
              <Button
                text="SignIn"
                color="transparent"
                textColor="green"
                onClick={() => navigate("/login")}
              />
              <Button
                color={"#15803d"}
                textColor={"white"}
                text={"Get Started"}
                onClick={() => navigate("/signup")}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
