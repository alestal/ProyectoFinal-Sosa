import {link} from 'react-router-dom';
import React from 'react';
import '../../css/style.css';


 const NavBar = () => {
  
  return (
  <>
 <header>
<nav>
    <ul>
          <li>

 <button>       
< Link to = "/">   
Perfumeria Olivia 
<img class= 'header img' src="./logo/logo-perfumeria" alt="logo-perfumeria" />       
</Link>
</button>      
<button>< Link to='/maquillaje'> Maquillaje</Link></button>
<button>< Link to='/accesorios'> Accesorios</Link></button>
<button>< Link to='/perfumes'> Perfumes</Link></button>

  </li> 
 </ul>
</nav>
</header> 
</>
    )
}

export default NavBar;