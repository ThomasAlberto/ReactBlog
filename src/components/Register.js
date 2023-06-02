import { useState } from 'react';

function Register() {
    return (
        <div>
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}



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
