import './itemListContainer.css'


export const ItemListContainer = (props) => {

    const mensajeDefault = "Bienvenido!"
    return (
        <h1 className='msj-bienvenida'>{props.mensaje ? props.mensaje : mensajeDefault}</h1>
    )
}
