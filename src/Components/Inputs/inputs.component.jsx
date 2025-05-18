import './input.style.scss';
function Input(props) {
  return (
    <div className="inputs">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.change}
        value={props.value}
        required
      />
    </div>
  );
}

export default Input;
