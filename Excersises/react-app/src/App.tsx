// import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  // let items = ["Prem", "Manoj"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alertVisible, setAlertVisibilty] = useState(false);
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Friends"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibilty(false);
          }}
        >
          My Alert
        </Alert>
      )}

      <Button
        color="primary"
        onClick={() => {
          setAlertVisibilty(true);
        }}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
