const Button8 = () =>{
    const function8 = () => console.log('evento onKeyDown')
    return(
       <input type="text" onKeyDown={function8} />
    )
}
export default Button8;