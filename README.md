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

#### safest way to always operate on the latest state. If you are dependent on the previous state then use below.
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });

#### stateful vs stateless components
Q) Why do you need this extra "state" concept instead of regular JS variables which you change and use?
   ANS: Because standard JS variables don't cause React components to be re-evaluated.


Q) What's wrong about this code snippet?
const [counter, setCounter] = useState(1);
...
setCounter(counter + 1);

ANS: If you update the state that depends on the previous state, you should use the 'function form' of state updating function instead.

#### styled-components
https://styled-components.com/

#### css-modules 
https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

#### react dev tools chrome extension

