import "./styles.css";

export default function UserCard({ name, stack, following, children }) {
  return (
    <div className="user-card">
      {children}
      <strong>{name}</strong>
      <span>{stack}</span>
      <button className={`btn-card ${following ? "following" : "unfollowing"}`}>
        {following ? "Conect" : "Connected"}
      </button>
    </div>
  );
}
