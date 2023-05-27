import './ItemListContainer.scss'

const ItemListContainer = ({mensaje}) => {

    return (
        <div className="list_container">
            <h2>Tienda Digital</h2>
            <hr/>

            <p>{mensaje}</p>
        </div>

    )
}

export default ItemListContainer