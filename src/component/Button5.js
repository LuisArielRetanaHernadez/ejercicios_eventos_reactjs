const Button5 = () => {
    const function5 = () => console.log('evento onMouseUpCapture')
    return(
        <button onMouseUpCapture={function5}>Button5</button>
    )
}
export default Button5;