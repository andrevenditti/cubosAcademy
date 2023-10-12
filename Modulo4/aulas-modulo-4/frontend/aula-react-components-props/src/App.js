import "./App.css";
import Avatar from "./components/Avatar";
import UserCard from "./components/UserCard/index";

const peoples = [
  {
    id: 1,
    name: "Marcos Paulo",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    jobRole: "Reporter",
    following: true,
    color: "#f4d",
  },
  {
    id: 2,
    name: "Paula Plínio",
    avatar:
      "https://images.unsplash.com/photo-1619687049210-4f957911056e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    jobRole: "Milionária",
    following: false,
    color: "#5df",
  },
  {
    id: 3,
    name: "Plínio Gustavo",
    avatar:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    jobRole: "Streamer",
    following: false,
    color: "#e13",
  },
  {
    id: 4,
    name: "Cris Lavo",
    avatar:
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1044&q=80",
    jobRole: "Comediante",
    following: true,
    color: "#fd0",
  },
];

export default function App() {
  return (
    <div className="container">
      {peoples.map(({ id, name, avatar, jobRole, following, color }) => (
        <UserCard key={id} name={name} stack={jobRole} following={following}>
          <Avatar avatar={avatar} color={color} />
        </UserCard>
      ))}
    </div>
  );
}
