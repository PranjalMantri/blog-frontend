import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogCard, Header, Layout, ProtectedRoute } from "./components";
import {
  HomePage,
  CreateBlogPage,
  ProfilePage,
  DashboardPage,
  LoginPage,
  SignupPage,
  LandingPage,
  LogoutPage,
} from "./pages";
import { isLoggedInState } from "./store/auth.store";
import { useRecoilValue } from "recoil";

function App() {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const user = {
    name: "John Doe",
    avatarImage: "src/assets/blogAuthorAvatar.png",
  };

  const blog = {
    title: "Getting Started with Web Development",
    description:
      "Learn the fundamentals of web development and start your journey to becoming a full-stack developer",
    tags: ["Web Dev"],
    coverImage: "src/assets/blogCoverImage.svg",
    createdAt: new Date(),
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {isLoggedIn ? (
            <Route path="" element={<HomePage />}></Route>
          ) : (
            <Route path="" element={<LandingPage />}></Route>
          )}

          <Route path="login" element={<LoginPage />}></Route>
          <Route path="signup" element={<SignupPage />}></Route>

          {/* Protected Routes */}
          <Route
            path="write"
            element={
              <ProtectedRoute>
                <CreateBlogPage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="logout"
            element={
              <ProtectedRoute>
                <LogoutPage />
              </ProtectedRoute>
            }
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
