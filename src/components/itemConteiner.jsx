import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import productsData from './productos.json'


export default function ItemContainer() {
    const [product, setProduct] = useState({})
    const { itemID } = useParams()
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const foundProduct = productsData.find((product) => product.id == itemID)
        setProduct(foundProduct)
    }, [])

    useEffect(() =>{
        setTimeout(() =>{
            setLoader(!loader);
        },1000)
    }, []);

    ////amplio detalles del producto seleccionado
    return (


        <div>
            <div className="card" style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', float: 'center', padding:'20px', maxWidth:'600px'}}>
                <h1>{product?.nombre}</h1>
                <p>{product?.descripcion}</p>
                <img src={product.imagen} />
            </div>
        </div>


        
    )

}