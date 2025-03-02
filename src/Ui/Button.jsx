const Button = ({style , children ,...rest}) => {
    return (
    <button  className={`${style} border-none`} {...rest}>
      {children}
    </button>
    )
  }
  
  export default Button