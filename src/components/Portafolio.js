import { Link } from "react-router-dom";
import pokedex from '../img/pokedex.png'
import Rickandmorty from '../img/Rickandmorty.png'
const Portafolio = () => {

    
    return (
        <div className='portafolio'>
         <h2 className="title_portafolio">Portafolio </h2> <hr className="hr"  />
         <p className="p_portafolio">Aqui encontraras todos los proyectos personales en los que he trabajado </p>
         <h3 data-text="Frontend " className="front" >Frontend </h3>
         <br />
         <div className="frontend">
            <a href="" target={"_blank"}> <img src={Rickandmorty} alt="Rick and Morty" className="rickmorty"  /> </a>
            <a href="https://pokedex-mateusgarcia7.vercel.app/" target={"_blank"}> <img src={pokedex} alt="Pokedex"  className="pokedex" /> </a>
              <img src="" alt="Ecomerce" className="ecomerce" /> 
         <h3 data-text="backend" className="back">Backend</h3>
         <div>
             <img src="" alt="Computers repairs" />
             <img src="" alt="Ecomerce" />
         </div>
         <p className="p_portafolio">¿Te gusto mi trabajo? Contáctame <Link to={'/Contacto'}> <button className="button_porta">Contacto</button> </Link> </p>
         </div>
        </div>
        
    );
};

export default Portafolio;