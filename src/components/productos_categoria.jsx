import { useEffect, useState } from "react"
import { Link, useParams, NavLink } from "react-router-dom"
import productsData from './productos.json' 


export default function CategoryContainer() {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true);

    useEffect(() =>{
        setTimeout(() =>{
            setLoader(!loader);
        },1000)
    }, []);

    const { categoryName } = useParams()

    useEffect(() => {
        const filteredProducts = productsData.filter((product) => {
            return product.category === categoryName
        })
        setProducts(filteredProducts)
    }, [])


    return (
        <div>
            { loader ? <div><img src='https://media2.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif' style={{ width: '50px'}} /><p>Cargando {categoryName}</p></div> : 
            <div>
            <h1>{categoryName}</h1>
            {products.map((producto) => (

                <div>
                    <NavLink to={`/item/${producto.id}`}>
                    <div className="card" style={{ width: '100%', float:'left', padding:'20px', maxWidth:'450px', marginLeft:'20px'}}>
                        
                        <img src={`${producto.imagen}`} class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <NavLink to={`/item/${producto.id}`}>
                            <h2>{producto.nombre} {producto.estado}</h2>
                            </NavLink>
                            <p className="card-text">{producto.descripcion}</p>
                        </div>
                    </div>
                    </NavLink>
                    
                </div>

            ))}

            </div>
            }
            
        </div>
    )

}