// FormPage.js
import { useState } from 'react';
import img from '../../Img/avatar.png';
import Form from '../Molecules/Form';
import './FormView.css';

const FormView = () => {
  const [fields, setFields] = useState([
    { label: 'Nombre de usuario', type: 'text', value: '', isValid: true },
    { label: 'Correo electrónico', type: 'email', value: '', isValid: true },
    { label: 'Contraseña', type: 'password', value: '', isValid: true },
  ]);

  const onInputChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    newFields[index].isValid = event.target.checkValidity();
    setFields(newFields);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert('¡Bienvenido!');
  };

  return (
    <div className='DivPrincipal'>
    <div className='FormView'>
        <img width={"10%"} src={img}></img>
      <h1>Ingresar</h1>
      <Form onSubmit={onSubmit} fields={fields} onInputChange={onInputChange} />
    </div>
    </div>
  );
};

export default FormView;
