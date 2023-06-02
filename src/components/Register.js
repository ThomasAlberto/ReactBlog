import { useState } from 'react';


function Register() {

/*This is a line of code that utilizes the useState hook in React. The useState hook is a function that allows you to add state to your 
functional components in React.

Here's how it works:

useState(''): This is a call to the useState function. The argument you pass in ('' in this case) is the initial value of the state. 
So here, username is being initialized as an empty string.

const [username, setUsername] = : This is called array destructuring in JavaScript. The useState function returns an array with 
two elements: the current state value (which we're calling username) and a function to update that state value (which we're calling setUsername).

In other words, username holds the current value of the state (initialized to an empty string), and setUsername is a function 
that you can use to change the value of the username state.
*/
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
/* 
This code is defining a function called handleSubmit. This function is being assigned to handle form submissions. Here's what it does:

(e) => { ... }: This is the syntax for defining a function in JavaScript. (e) defines the function's parameter, which will be the 
event object automatically passed by the browser when the event (form submission, in this case) happens.
e.preventDefault();: This is a method on the event object that prevents the default action the browser would take in response to the 
event. For form submissions, the default action is to send a GET or POST request and refresh the page, which isn't usually what you want in a React app.

defining a function
(parameters) => { function body }
*/

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(username, password);
      // TODO: Send a request to your backend to create a new user
    }
  
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
/*
onChange is a special prop that takes a function. The function is called every time the value of the input field changes.

(e) => setUsername(e.target.value): This is the function being passed to onChange. It takes an event object as a parameter. 
e.target refers to the element the event was fired on (the input field), and e.target.value is the current value of the input field.
setUsername(e.target.value): This calls the setUsername function (which was returned by useState) and sets the username state to the 
current value of the input field.
So overall, onChange={(e) => setUsername(e.target.value)} means "when the value of this input field changes (when the user types into it), 
update the username state to match the input field's current value".
*/
          />
          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }







export default Register;
