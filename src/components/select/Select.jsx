import './select.css';

const Select = ({ label_text, select_id, select_name, options, select_value, select_set_value, default_option }) => {
  return (
    <div className="form-campo-select">
          <label htmlFor={select_id}>{label_text}:</label>
          <select name={select_name} id={select_id} className='campo-select' value={select_value} onChange={(e) => select_set_value(e.value)}>
              <>
                  <option className='select-option' value={default_option}>Seleccione una opcion</option>
                  {options.map(option => (
                      <option className='select-option' value={option}>{option}</option>
                  ))}
              </>
          </select>
    </div>
  )
}

export default Select
