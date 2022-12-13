import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import productsData from './productos.json' 


export default function CategoryContainer() {
    const [products, setProducts] = useState([])

    const { categoryName } = useParams()

    useEffect(() => {
        const filteredProducts = productsData.filter((product) => {
            return product.category == categoryName
        })
        setProducts(filteredProducts)
    }, [])


    return (
        <div>
            <h1>{categoryName}</h1>
            {products.map((producto) => (

                <div>
                    <Link to={`/item/${producto.id}`}>
                    <div className="card" style={{ width: '100%', float:'left', padding:'20px', maxWidth:'450px', marginLeft:'20px'}}>
                        
                        <img src={producto.image} class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h2>{producto.category} | {producto.nombre}</h2>
                            <p className="card-text">{producto.descripcion}</p>
                        </div>
                    </div>
                    </Link>
                    
                </div>

            ))}
        </div>
    )

}