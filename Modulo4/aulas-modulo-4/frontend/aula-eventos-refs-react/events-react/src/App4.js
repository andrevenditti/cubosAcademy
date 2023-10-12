import { useRef } from "react";
import "./App.css";
import Controls from "./components/Controls";

const musicUrl =
  "https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/The%20Von%20Trapp%20Family%20Choir%20-%20Alge.mp3";

export default function App2() {
  const audioRef = useRef(null);

  return (
    <div className="container">
      <audio src={musicUrl} ref={audioRef}></audio>
      <Controls audioRef={audioRef} />
    </div>
  );
}
