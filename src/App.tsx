import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AdminDashboard from "./components/AdminDashboard";
import Debtors from "./components/Debtors";
import Employees from "./components/Employees";
import Home from "./components/Home";
import Lessons from "./components/Lessons";
import StudentSchedule from "./components/StudentSchedule";
import TeacherCourses from "./components/TeacherCourses";
import Tasks from "./components/Tasks";
import LoginPage from "./components/LoginPage";
import ErrorPage from "./components/ErrorPage";
import { RootState } from "./store/store";

function App() {
  const navigate = useNavigate();

  const token: string | null = useSelector(
    (state: RootState) => state.userToken.token
  );
  const role: string | null = useSelector(
    (state: RootState) => state.userToken.role
  );

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  function ProtectedRoute({
    children,
    redirectTo = "/login",
    isAuthentication,
  }: {
    children: React.ReactNode;
    redirectTo?: string;
    isAuthentication: boolean;
  }) {
    useEffect(() => {
      if (!isAuthentication) {
        navigate(redirectTo);
      }
    }, [isAuthentication, navigate, redirectTo]);

    return <>{isAuthentication ? children : null}</>;
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {token && role === "admin" && (
        <>
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admindashboard"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/debtors"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <Debtors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <Employees />
              </ProtectedRoute>
            }
          />
        </>
      )}

      {token && role === "teacher" && (
        <>
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/studentschedule"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <StudentSchedule />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teachercourses"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <TeacherCourses />
              </ProtectedRoute>
            }
          />
        </>
      )}

      {token && role === "student" && (
        <>
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lessons"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <Lessons />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks"
            element={
              <ProtectedRoute isAuthentication={!!token}>
                <Tasks />
              </ProtectedRoute>
            }
          />
        </>
      )}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
