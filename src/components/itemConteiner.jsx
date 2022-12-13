import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import productsData from '../productos.json'


export default function ItemContainer() {
    const [product, setProduct] = useState({})
    const { itemID } = useParams()

    useEffect(() => {
        const foundProduct = productsData.find((product) => product.id == itemID)
        setProduct(foundProduct)
    }, [])

    return (
        <div>
            ItemContainer
            <h1> {product?.nombre}</h1>
            <p>{product?.descripcion}</p>
            <img src={product.image} />
        </div>
    )

}