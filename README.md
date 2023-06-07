# react-js

#### Whenever you visit localhost 3000, the index.js file holds the code, which is executed initially. index.js file is the first file to execute and render index.html file
#### Whenever we import something from react or from reacts Dom, its basically both all about react and we're using react features.
#### A component in a react is just a Javascript function.
#### JSX under the wood It uses the react library and transform the code to React.createElement('');
#### React hooks (useState() etc.) can be only called inside react components.

#### useState

useState always returns an array with two elements. The first element is the current state value and the second element is the function to updating the value. They cannot be called in nested functions.

Ex: const [title, setTitle] = useState(props.title);

whenever the state changes useState() will re-execute the entire component. 