import MyButton from "./MyButton";

function App() {
  return (
    <>
      <MyButton type={"primary"} onClick={() => console.log("Clicked")}>
        Hello World
      </MyButton>
    </>
  );
}

export default App;
