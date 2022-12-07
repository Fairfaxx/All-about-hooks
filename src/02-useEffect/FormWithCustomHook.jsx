import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {
  const { formState, onResetForm, handleChange } = useForm({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formState;

  // useEffect(() => {
  //   // Without a dependency the useEffect will be called every time a change is made
  //   // With an empty array dependency it will be called just when the component is created
  //   // With a dependency it will be called when the component is created and every time the dependency is has a change

  //   return () => {};
  // }, []);

  return (
    <>
      <h1>Simple Form with a custom Hook</h1>
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
      <input
        type="password"
        className="form-control mt-2"
        placeholder="pass123"
        name="password"
        value={password}
        onChange={handleChange}
      />

      {username === 'Fefee' && <Message />}

      <button onClick={onResetForm} className="btn btn-primary mt-3">
        Reset Form
      </button>
    </>
  );
};
