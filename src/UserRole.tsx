export enum Role {
  Admin = "admin",
  Teacher = "teacher",
  Student = "student",
}

export interface RouteProps {
  path: string;
  component: React.FC;
}

export interface ProtectedRouteProps extends RouteProps {
  roles: Role[];
}
