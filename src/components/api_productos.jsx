import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ApiProductos(){
    const [variable, setVariable] = useState([])
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then((response) =>{
            return response.json();
        })
        .then((definodato) =>{
            setVariable(definodato.results);
        })
    }, []);
    console.log(variable);
    return(
        <div>
            {variable.map((i) => (
                <div>
                <div className="card" style={{ width: '100%', float:'left', padding:'20px', maxWidth:'450px', marginLeft:'20px'}}>
                    <Link to={`/Productos/${i.id}/${i.name}/${i.species}/${i.status}`}>
                    <img src={i.image} class="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h2>{i.name}</h2>
                        <p className="card-text">{i.species}</p>
                    </div>
                    </Link>
                </div>
                    
                </div>
            ))};

        </div>
    )
}

export default ApiProductos ; 