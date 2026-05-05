import { useState } from "react";

export default function App() {
  const [screen, setScreen] = useState<"menu" | "game">("menu");

  if (screen === "menu") {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Axe Duel Arena</h1>

        <button
          style={{
            fontSize: "20px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
          onClick={() => setScreen("game")}
        >
          Play
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Game loading...</h2>
    </div>
  );
}
