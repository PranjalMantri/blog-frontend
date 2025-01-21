import Button from "./Button";

function Header({
  isLoggedIn = false,
  onLogout,
  onSignIn,
  onWrite,
  onDashboard,
  onProfile,
}) {
  return (
    <div>
      <div className="w-full h-auto px-40 py-5 shadow-sm flex justify-between">
        <div className="text-3xl font-semibold text-slate-800 font-inter">
          BlogSpace
        </div>
        <div className="flex gap-8 items-center">
          {isLoggedIn ? (
            <>
              <Button
                text="Write"
                color="transparent"
                textColor="black"
                onClick={onWrite}
              />
              <Button
                text="Dashboard"
                color="transparent"
                textColor="black"
                onClick={onDashboard}
              />
              <Button
                text="Profile"
                color="transparent"
                textColor="black"
                onClick={onProfile}
              />
              <Button
                text="Logout"
                color="transparent"
                textColor="red"
                onClick={onLogout}
              />
            </>
          ) : (
            <>
              <Button
                text="Write"
                color="transparent"
                textColor="black"
                onClick={onWrite}
              />
              <Button
                text="SignIn"
                color="transparent"
                textColor="green"
                onClick={onSignIn}
              />
              <Button
                color={"#15803d"}
                textColor={"white"}
                text={"Get Started"}
                onClick={() => alert("Sign Up")}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
