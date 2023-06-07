import { useState } from "react";
import Alert from "./Alert.js";
import MyButton from "./MyButton.js";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const onClick = (event) => {
    const { target } = event;
    const { className } = target;
    console.log(className);
    if (className === "btn btn-primary") setShowAlert(true);
    else if (className === "btn-close") setShowAlert(false);
  };

  return (
    <>
      {showAlert === true ? (
        <Alert show={showAlert} closeClick={onClick}>
          My alert
        </Alert>
      ) : null}
      <MyButton type="primary" onClick={onClick}>
        Hey
      </MyButton>
    </>
  );
}

export default App;
