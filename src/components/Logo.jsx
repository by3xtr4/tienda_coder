///traigo Link para poder linkear el logo
import { Link } from "react-router-dom";

const Logo=()=>{
    return(
        <div>
          <Link to="/">
          <img src="https://www.bajapaintball.com/wp-content/uploads/2020/01/BP-Logo-Splat-1.png" width= '300px' style={{ padding: '20px'}}></img>
          </Link>
        </div>
    )
}

export default Logo ; 