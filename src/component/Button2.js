const Button2 = () => {
    const function2 = () => console.log('evento onMouseMove')
    return(
        <button onMouseMove={function2}>Button2</button>
    )
}

export default Button2;