import { NavBar } from "./components";

function App(props) {
  return (
    <>
      <NavBar />
      <a href={"/callback?token=123&operation=register"}>Register 123</a>
      <div class={"container mt-3"}>{props.children}</div>
    </>
  );
}

export default App;