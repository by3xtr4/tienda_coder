import { useState, useEffect } from 'react';

function ContenidoContacto(){ 
    const[loading, setLoading] = useState(true);
    
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(!loading);
        },2000);
    }, []);

    return(
        <div>

            { loading? <div><img src='https://media2.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif' style={{ width: '50px'}} /><p>Cargando sección</p></div> : 
            <div>
            <h1>Contacto, escribenos</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem consequatur sapiente perferendis molestiae, autem perspiciatis est, tempora aperiam eveniet repellendus. Perferendis a laborum laboriosam ratione, id voluptates impedit velit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem consequatur sapiente perferendis molestiae, autem perspiciatis est, tempora aperiam eveniet repellendus. Perferendis a laborum laboriosam ratione, id voluptates impedit velit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem consequatur sapiente perferendis molestiae, autem perspiciatis est, tempora aperiam eveniet repellendus. Perferendis a laborum laboriosam ratione, id voluptates impedit velit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem consequatur sapiente perferendis molestiae, autem perspiciatis est, tempora aperiam eveniet repellendus. Perferendis a laborum laboriosam ratione, id voluptates impedit velit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem consequatur sapiente perferendis molestiae, autem perspiciatis est, tempora aperiam eveniet repellendus. Perferendis a laborum laboriosam ratione, id voluptates impedit velit.</p>
            </div>
            }
            
            <hr></hr>
            form
        </div>
    )
}

export default ContenidoContacto ; 