import { PropTypes } from "prop-types"

const Button = ({color, text, onClick}) => {
  return (
    <div>
       <button 
       onClick={onClick}
       className="btn" 
       style ={{backgroundColor : color}}
       >{text}</button>
    </div>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.protoTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func,
}

export default Button
