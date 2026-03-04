import { Button } from "./components/Button";
import { Spinner } from "./components/Spinner";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { setIsDark } = useTheme();
  return (
    <>
      <header>
        <button onClick={() => setIsDark((prevState) => !prevState)}>
          change theme!
        </button>
      </header>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button size="sm">Button</Button>
          <Button leftIcon={<Spinner />} rightIcon={<Spinner />}>
            Button
          </Button>
          <Button size="lg" loading>
            Button
          </Button>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <Button variant="secondary" size="sm">
            Button
          </Button>
          <Button
            leftIcon={<Spinner />}
            rightIcon={<Spinner />}
            variant="secondary"
          >
            Button
          </Button>
          <Button variant="secondary" size="lg">
            Button
          </Button>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <Button variant="tertiary" size="sm">
            Button
          </Button>
          <Button
            leftIcon={<Spinner />}
            rightIcon={<Spinner />}
            variant="tertiary"
          >
            Button
          </Button>
          <Button variant="tertiary" size="lg">
            Button
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
