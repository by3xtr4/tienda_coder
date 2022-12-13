import { useEffect, useState } from "react";

function ApiNoticias(){
    const [variablen, setVariablen] = useState([])
    useEffect(()=>{
        fetch("https://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=f7e44597eb654a1c887db78441edc16e")
        .then((response) =>{
            return response.json();
        })
        .then((definodato) =>{
            setVariablen(definodato.results);
        })
    }, []);
    console.log(variablen);
    return(
        <div>
            {variablen.map((i2) => (
                <div>
                <div className="card" style={{ width: '100%', float:'left', padding:'20px', maxWidth:'450px', marginLeft:'20px'}}>
                    <img src={i2.image} class="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h2>{i2.categories} | {i2.source}</h2>
                        <p className="card-text">{i2.species}</p>
                    </div>
                </div>
                    
                </div>
            ))};

        </div>
    )
}

export default ApiNoticias ; 