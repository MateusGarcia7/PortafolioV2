import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';


const Lobby = () => {

    const [userName, setUserName] = useState("")
    const dispatch = useDispatch ();
    const navigate = useNavigate ();



    const submit = e =>{
        e.preventDefault();
        console.log(userName)
        dispatch({ 
            type: "GET_USERNAME",
            payload: userName 
    })
    setUserName("")
    navigate("/Home");
    }

   


    return (
        <div className='lobby'> 
         <h1 className='title'><span className='span'>Hola como estas ?</span> </h1> 
         <img className='gifsaluda' src="https://uncafeciitohome.files.wordpress.com/2019/06/zepeto_-8586427829721534798.gif" alt="" />
         <p className='p_title'>Dime tu nombre por favor </p>
         <img src="" alt="" />
         <form action="" onSubmit={submit} className='form_lobby' >
         
         <input className='input_lobby'
            type="text" 
            value={userName } 
            onChange={e => setUserName(e.target.value)} 
            required />
            <button className='button_next'> <i className="fas fa-paper-plane"></i> </button>
         </form>
         
         
        </div>
    );
};

export default Lobby;