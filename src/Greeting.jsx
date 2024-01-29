function Greeting({ name='None', age=21 }) {
    // short property
    // console.log(props)
    //destructured
    // const { name='None', age=21 } = props

    return (
    <>
        <p>FR: Bonjour! {name}</p>
        <p>ES: Hola! {age}</p>
    </>
    )
}

export default Greeting