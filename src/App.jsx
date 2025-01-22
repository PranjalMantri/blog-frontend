import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogCard, Header, Layout } from "./components";
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

function App() {
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

  const isLoggedIn = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {isLoggedIn ? (
            <Route path="" element={<HomePage />}></Route>
          ) : (
            <Route path="" element={<LandingPage />}></Route>
          )}
          <Route path="write" element={<CreateBlogPage />}></Route>
          <Route path="profile" element={<ProfilePage />}></Route>
          <Route path="dashboard" element={<DashboardPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="signup" element={<SignupPage />}></Route>
          <Route path="logout" element={<LogoutPage />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
