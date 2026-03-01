import { colors } from "./tokens/colors";

function App() {
  return (
    <div
      style={{
        backgroundColor: colors.neutral[50],
        color: colors.neutral[900],
        minHeight: "100vh",
      }}
    >
      Olá{" "}
      <button
        style={{
          backgroundColor: colors.primary[600],
          color: "#fff",
          border: "none",
          outline: "none",
          padding: "14px",
        }}
      >
        Botão teste
      </button>
    </div>
  );
}

export default App;
