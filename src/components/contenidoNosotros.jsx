import { useState, useEffect } from 'react';


function ContenidoNosotros(props){ 
    const[loader, setLoader] = useState(true);

    useEffect(() =>{
        setTimeout(() =>{
            setLoader(!loader);
        }, 1000);
    }, []);

    return(
        <div>
            { loader ? <div><img src='https://media2.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif' style={{ width: '50px'}} /><p>Cargando sección</p></div> : 
            <div>
            <h1>Titulo sección nosotros</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem consequatur sapiente perferendis molestiae, autem perspiciatis est, tempora aperiam eveniet repellendus. Perferendis a laborum laboriosam ratione, id voluptates impedit velit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem consequatur sapiente perferendis molestiae, autem perspiciatis est, tempora aperiam eveniet repellendus. Perferendis a laborum laboriosam ratione, id voluptates impedit velit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem consequatur sapiente perferendis molestiae, autem perspiciatis est, tempora aperiam eveniet repellendus. Perferendis a laborum laboriosam ratione, id voluptates impedit velit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem consequatur sapiente perferendis molestiae, autem perspiciatis est, tempora aperiam eveniet repellendus. Perferendis a laborum laboriosam ratione, id voluptates impedit velit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem consequatur sapiente perferendis molestiae, autem perspiciatis est, tempora aperiam eveniet repellendus. Perferendis a laborum laboriosam ratione, id voluptates impedit velit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem consequatur sapiente perferendis molestiae, autem perspiciatis est, tempora aperiam eveniet repellendus. Perferendis a laborum laboriosam ratione, id voluptates impedit velit.</p>
        
            </div>
            }
            </div>
        
    )
}

export default ContenidoNosotros ; 