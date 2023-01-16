import { useEffect, useState } from "react"
import { useParams, NavLink, Link } from "react-router-dom"
import productsData from './productos.json' 


export default function CategoryContainer22() {
    const [productos, setProducts] = useState([])
    const [loader, setLoader] = useState(true);

    useEffect(() =>{
        setTimeout(() =>{
            setLoader(!loader);
        },1000)
    }, []);

    const { categoryName } = useParams()

    useEffect(() => {
        const filteredProducts = productsData.filter((product) => {
            return product.estado === 1
        })
        setProducts(filteredProducts)
    }, [])


    return (
        <div>
            { loader ? <div><img src='https://media2.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif' style={{ width: '50px'}} /><p>Cargando {categoryName}</p></div> : 
            <div>
            
            <h1>TODOS LOS PRODUCTOS</h1>
            Nuestra colección pensada para vos<br></br><br></br>
            {productos.map((producto) => (

                <div>
                    <div className="card" style={{ width: '100%', height: '220px', float:'left', padding:'20px', maxWidth:'250px', marginLeft:'20px', marginBottom: '10px'}}>
                    <NavLink to={`/item/${producto.id}`}>
                        <img src={`${producto.imagen}`} class="card-img-top" alt="..."   style={{ width: '100%', height: '120px'}}></img>
                    </NavLink>
                        <div>
                            <h6>{producto.nombre}</h6>
                            
                            <NavLink to={`/item/${producto.id}`}> Ampliar</NavLink>
                        </div>
                    </div>
                    
                </div>

            ))}

            </div>
            }
            
        </div>
    )

}