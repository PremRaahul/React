# Building Components

- We can create a react project in two ways using create react app (CRA) or with the help of vite

- `npm create vite@4.1.0` or `npm create vite@latest`: This command is used to create a react project with vite

- `npm run dev`: This command is run the react app

- In React we can also use the fragment to wrap the entire child elements of the component so that their wont be unnecessary div tag's, we declare a fragment in two ways

```JavaScript
import { Fragment } from "react";

function ListGroup() {
  return (
    <Fragment>
      <h1>List</h1>
    </Fragment>
  );
}

export default ListGroup;
```

```JavaScript
function ListGroup() {
  return (
    <>
      <h1>List</h1>
    </>
  );
}

export default ListGroup;
```

- In react we must declare the type annotations while passing parameters to the function

```Javascript
  name: string;
  age: number;
  isMale: boolean;
```

In react each component has its own seperate state and we can say that a component state is changed with the help of useState Hook in react

useState is a hook, That is used for state management by default useState returns an array. In the below example you can see a useState arr

`arr[0] - index 0 stores the value`

` arr[1] - it acts as an updater of arr[0]`

when the arr[0] gets changed then useState dynamically tells react that the components state got changed and it lets modify actual DOM of the component

```javascript
const arr = useState(0);
arr[0];
arr[1];
```

- Using Props we can reuse a component by passing data dynamically, In typescript to use props we need to declare a interface with required properties and type annotations

```Javascript
interface Props {
  items: string[];
  heading: string;
}
```

- `rafce` Shortcut of ES7+ extension is used to create the basic signature of the function

We can pass children to a component with help props and if you want to pass HTML as children then you need to declare props interface property type as ReactNode

In the below example `Hello World` is considered as children to Alert component

```javascript
// Parent Component
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </>
  );
}

export default App;


// Child Component
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
```

```javascript

```
