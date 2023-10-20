// InputField.js
import './Input.css';
const input = ({ label, type, value, onChange, isValid }) => (
  <div>
    <label>{label}</label><br></br>
    <input className="Input" type={type} value={value} onChange={onChange} required style={{ borderColor: isValid ? 'green' : 'red' }} />
  </div>
);

export default input;