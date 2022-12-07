import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };
  //  username: '', email: '', password: '' }
  return {
    formState,
    onResetForm,
    handleChange,
  };
};
