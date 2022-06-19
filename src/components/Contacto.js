import { Link } from "react-router-dom";
import Cv from '../img/Cv.pdf'
const Contacto = () => {

    
    return (
        <div className='contacto'>
        <h2 className="title_contacto">Contactame</h2> <hr className="hr"  />
        <p className="p_contacto">Si quieres un acercamiento personal puedes hablarme a mi correo luismateusgarcia7@gmail.com </p>
        <form action="" className="form">
            <input type="text" placeholder="Escribe tu nombre" name="Name"  className="input"/>
            <input type="email" placeholder="Escribe tu email" name="_replyto" className="input" />
            <textarea placeholder="Escribe tu mensaje aqui" name="message" className="textarea">
            </textarea>
        <button className="enviar">
            Enviar mensaje
        </button>
        </form>
        <div className="contacto_section">
        <p className="p_contacto2">Tambien puedes visitar mi perfil de  <span className="Linkedin"  >  Linkedin </span></p>
       <a href="https://rick-mortyapp-mateusgarcia7.vercel.app/"> <i className="fa-brands fa-linkedin" id="linkedin"></i></a>
       <a href="https://github.com/MateusGarcia7" target={"_blank"}> <p   className="p_contacto"> <span className="github"> GitHub </span></p> </a>
       <a href="https://github.com/MateusGarcia7" target={"_blank"}> <i className="fa-brands fa-github"id="github"></i> </a>
        <p className="p_contacto3">Y no olvides</p>
        <a href={Cv} target={"_blank"} > <button className='descargaCv'><i className="fa-solid fa-download" id="download">  </i> Descargar CV</button></a>

        <Link to={'/home'}> <button className="inicio">Volver al incio</button> </Link> 
        </div>
        </div>
    );
};

export default Contacto;