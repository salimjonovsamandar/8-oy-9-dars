import AdminDashboard from "./components/AdminDashboard";
import Debtors from "./components/Debtors";
import Employees from "./components/Employees";
import Home from "./components/Home";
import Lessons from "./components/Lessons";
import Tasks from "./components/Tasks";
import TeacherCourses from "./components/TeacherCourses";
import StudentSchedule from "./components/StudentSchedule";

import { ProtectedRouteProps, Role } from "./UserRole";

const routes: ProtectedRouteProps[] = [
  {
    path: "/",
    component: Home,
    roles: [Role.Admin, Role.Teacher, Role.Student],
  },
  {
    path: "/admin",
    component: AdminDashboard,
    roles: [Role.Admin],
  },
  {
    path: "/teacher",
    component: TeacherCourses,
    roles: [Role.Teacher],
  },
  {
    path: "/student",
    component: StudentSchedule,
    roles: [Role.Student],
  },
  {
    path: "/tasks",
    component: Tasks,
    roles: [Role.Teacher],
  },
  {
    path: "/lessons",
    component: Lessons,
    roles: [Role.Student],
  },
  {
    path: "/employees",
    component: Employees,
    roles: [Role.Admin],
  },
  {
    path: "/debtors",
    component: Debtors,
    roles: [Role.Admin],
  },
];

export default routes;
