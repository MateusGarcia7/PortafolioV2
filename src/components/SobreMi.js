import { Link } from "react-router-dom";
const SobreMi = () => {

   
    return (
        <div className='lobby'>
        <h2 className="title_about">Sobre mi </h2> <hr className="hr"/>
        <p className="p_aboutMe">Hola, me llamo Mateus soy de Colombia  y actualmente estudio desarrollo web Full-Stack y ciencias de la computacion en Academlo</p> <br/>
        <p className="p_aboutMe">Soy un joven amante de la tecnologia, me gusta entender el funcionamiento de distintos softwares, <br /> me gustan los videojuegos, fotografear aves y el futbol</p> <br/>
        <p className="p_aboutMe">Mi stack comienza con las siguientes tecnologias</p>
        <div className="imagenes" >
        <img className="imgstack" src="https://i.pinimg.com/originals/a2/7d/14/a27d14a27b5ef7d35c241d5cc9c1deb4.png" alt="html 5" />
        <img className="imgstack" src="https://1000marcas.net/wp-content/uploads/2021/02/CSS-Logo.png" alt="css" />
        <img className="imgstack" src="https://1000marcas.net/wp-content/uploads/2020/11/JavaScript-logo.png" alt="java Script" /> <br />
        <img className="imgreact" src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="react" />
        <img className="imgnode" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="node" />
        </div>
        <div className="footer_about">
        <br />
        <p className="p_aboutMe2">Tambien aspiro a conocer sobre el desarrollo de Videojuegos,Aplicaciones moviles e incluso Inteligencia Artificial</p>
        <br />
        <p className="p_about">Quieres ver mis proyectos ?, Adelante <Link to={'/Portafolio'}><button className="button_about" >Portafolio</button></Link> </p>
        <p className="p_about">o deseas regresar ? <Link to={'/Home'}> <button className="home">Home</button> </Link></p> 
        <br className="saltolinea" />
        </div>
        </div>
    );
};

export default SobreMi;
