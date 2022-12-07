import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Fefe',
    email: 'fefe@example.com',
  });

  const { username, email } = formState;

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // Without a dependency the useEffect will be called every time a change is made
    // With an empty array dependency it will be called just when the component is created
    // With a dependency it will be called when the component is created and every time the dependency is has a change

    return () => {};
  }, []);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@email.com"
        name="email"
        value={email}
        onChange={handleChange}
      />

      {username === 'Fefee' && <Message />}
    </>
  );
};
