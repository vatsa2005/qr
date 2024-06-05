import "./App.css";
import QrGenerator from "./Components/QrGenerator";

function App() {
  return (
    <div className="App">
      <QrGenerator
        value="https://lnk.bio/vatsa"
        text="Vatsa's Socials"
        textColor="white"
        bgColor="black"
        fgColor="#5271ff"
      />
    </div>
  );
}

export default App;
