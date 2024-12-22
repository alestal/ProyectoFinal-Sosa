import {link} from 'react-router-dom';
import React from 'react';



export const NavBar = () => {
  
  return (
  <>
<nav>
    <ul>
          <li>

 <button>       
< Link to = "/">   
Perfumeria Olivia 
<img src="./logo/logo-perfumeria" alt="logo perfumeria" />       
</Link>
</button>      
<button>< Link to='/maquillaje'> Maquillaje</Link></button>
<button>< Link to='/accesorios'> Accesorios</Link></button>
<button>< Link to='/perfumes'> Perfumes</Link></button>

  </li> 
 </ul>
</nav>
</>
    )
}
