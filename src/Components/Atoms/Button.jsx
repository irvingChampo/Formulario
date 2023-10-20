// Button.js
import './Button.css';
const button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

export default button;