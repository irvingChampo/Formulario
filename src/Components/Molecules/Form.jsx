// Form.js
import Button from '../Atoms/Button';
import Input from '../Atoms/Input';
import './Form.css';

const form = ({ onSubmit, fields, onInputChange }) => (
  <form onSubmit={onSubmit} className='Form'>
    {fields.map((field, index) => (
      <Input key={index} {...field} onChange={(e) => onInputChange(index, e)} />
    ))}
    <Button  type="submit">Login</Button>
  </form>
);

export default form;
