import "./App.css";
import image from "./assets/tasks.png";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "30px",
          background: "#1e293b",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>🚀 Frontend Coding Challenge</h1>
        <p style={{ color: "#94a3b8" }}>
          You have <b>45 minutes</b> to complete this task.
        </p>

        <hr style={{ border: "1px solid #334155", margin: "20px 0" }} />

        <h2>📌 Instructions</h2>
        <ul style={{ lineHeight: "1.8", color: "#cbd5f5" }}>
          <li>
            Create a git branch using your name (e.g. <code>feat_kenfack</code>)
          </li>
          <li>
            Consume the API: <code>http://localhost:3000/todos</code>
          </li>
          <li>
            Display todos in 3 columns:
            <ul>
              <li>Pending</li>
              <li>In Progress</li>
              <li>Completed</li>
            </ul>
          </li>
          <li>Sort todos in every column by date (latest → oldest)</li>
          <li>Implement search by title</li>
        </ul>

        <hr style={{ border: "1px solid #334155", margin: "20px 0" }} />

        <h2>⚙️ Requirements</h2>
        <ul style={{ lineHeight: "1.8", color: "#cbd5f5" }}>
          <li>Use clean UI structure</li>
          <li>Ensure proper data grouping</li>
          <li>Handle loading state (optional bonus)</li>
          <li>Keep code readable and organized</li>
        </ul>

        <hr style={{ border: "1px solid #334155", margin: "20px 0" }} />

        <h2>🔍 Expected UI</h2>
        <div
          style={{
            marginTop: "20px",
            background: "#0f172a",
            padding: "15px",
            borderRadius: "12px",
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.6)",
          }}
        >
          <img
            src={image}
            alt="Expected UI"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        <hr style={{ border: "1px solid #334155", margin: "20px 0" }} />

        <h2>✨ Bonus</h2>
        <ul style={{ lineHeight: "1.8", color: "#cbd5f5" }}>
          <li>Use Typescript</li>
          <li>Make it responsive</li>
          <li>Make it responsive</li>
          <li>Use modern JS (ES6+)</li>
        </ul>

        <p style={{ marginTop: "30px", color: "#94a3b8" }}>Good luck! 💪</p>
      </div>
    </div>
  );
}
