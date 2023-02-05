const {
  Dashboard,
  Diversity2,
  AccountBalance,
  AccountTree,
  Call,
  Splitscreen,
  Settings,
} = require("@mui/icons-material");

const list = [
  { id: 1, title: "Dashboard", path: "/dashboard", icon: <Dashboard /> },
  { id: 2, title: "Teams", path: "/teams", icon: <Diversity2 /> },
  { id: 3, title: "Employees", path: "/employees", icon: <AccountBalance /> },
  { id: 4, title: "Projects", path: "/projects", icon: <AccountTree /> },
  { id: 5, title: "Meetings", path: "/meetings", icon: <Call /> },
  { id: 6, title: "Tasks", path: "/tasks", icon: <Splitscreen /> },
  { id: 7, title: "Seetings", path: "/settings", icon: <Settings /> },
];
export default list;
