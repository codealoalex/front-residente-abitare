import './inputForm.css';

const InputForm = ({label_text, input_type, input_value, set_input_value, input_id, input_name, input_placeholder}) => {
    return (
        <div className="form-campo-input">
            <label htmlFor={input_id}>{label_text}:</label>
            <input type={input_type} id={input_id} name={input_name} className='campo-input' placeholder={input_placeholder} value={input_value} onChange={(e)=>set_input_value(e.value)} />
        </div>
  )
}

export default InputForm
