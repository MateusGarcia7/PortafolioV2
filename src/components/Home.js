import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Foto from '../img/Foto.png'
import Cv from '../img/Cv.pdf'


const Home = () => {

    const userName = useSelector(state => state.userName);

    return (
        <div className='lobby'>
         
         <p className='title_home'> Bienvenido, {userName}  </p> <hr className='hr' />
         <p className='p_home'>Este es mi portafolio a donde quieres ir ?</p>
         
         <Link to={'/SobreMi'}><button className='button_home'> <i className="fa-solid fa-user"></i> Sobre mi</button> </Link> <br />
         <Link to={'/Portafolio'}><button className='button_home'><i className="fa-solid fa-briefcase"></i> Portafolio</button></Link> <br />
         <Link to={'/Contacto'}> <button className='button_home'> <i className="fa-solid fa-envelope"></i> Contacto</button> </Link> <br />       
         <img className='img_home' src={Foto} alt="foto Pro" /> <br/>
         <a href={Cv} target={"_blank"} > <button className='descarga'><i className="fa-solid fa-download" id='icondescarga'></i> Descargar CV</button> </a>
        </div>
    );
};

export default Home;