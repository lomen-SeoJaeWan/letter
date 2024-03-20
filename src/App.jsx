import Funnel from "./components/funnel";
import Letter from "./components/letter";
import Main from "./components/main";

function App() {
  return (
    <Funnel steps={["letter", "main"]}>
      <Funnel.Step name="letter">
        <Letter />
      </Funnel.Step>
      <Funnel.Step name="main">
        <Main />
      </Funnel.Step>
    </Funnel>
  );
}

export default App;
