import Button from "./components/Button";
import TextBlock from "./components/TextBlock";

export default function App() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", padding: 32 }}>
      <TextBlock
        title="Jump start your crypto portfolio"
        subtitle="Take your investment portfolio to next level"
      />
      <div style={{ marginTop: 32 }}>
        <Button label="Get Started" />
      </div>
    </div>
  );
}