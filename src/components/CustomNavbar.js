import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';






function CustomNavbar() {
  

  const [showModal, setShowModal] = useState(false);
  const frmContact = { userEmail: '', userName: '', userText: '' };
  const [contact, setContact] = useState(frmContact);

  const handleChange = e => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send('default_service', process.env.REACT_APP_TEMPLATE_KEY, contact, process.env.REACT_APP_API_EMAIL_ID)
      .then((response) => {
        
        setContact(frmContact);
        Store.addNotification({
          title: "Exito!",
          message: "Correo enviado correctamente",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 1000,
            onScreen: true
          }
        });

      }, (err) => {
        console.log('FAILED...', err);
      });
  }

  return (
    

    <>
    <ReactNotifications />
      <Navbar expand="lg">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto justify-content-center ">
            <Nav.Link href="#formacion" className='hover:underline text-color-third-color underline-offset-8'>Formación</Nav.Link>
            <Nav.Link href="#experiencia" className='hover:underline text-color-third-color underline-offset-8'>Experiencia</Nav.Link>
            <Nav.Link href="#skills" className='hover:underline text-color-third-color underline-offset-8'>Skills</Nav.Link>
            <Nav.Link href="#proyectos" className='hover:underline text-color-third-color underline-offset-8'>Mis proyectos</Nav.Link>
            <Nav.Link onClick={() => setShowModal(true)} className='hover:underline text-color-third-color underline-offset-8'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Ponte en contacto conmigo</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">

                  <form onSubmit={handleSubmit} className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Nombre
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" value={contact.userName} name="userName" onChange={handleChange} placeholder="Tu nombre"/>
                    <label className="block text-black text-sm font-bold mb-1">
                      Correo
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="email" value={contact.userEmail} name="userEmail" onChange={handleChange} placeholder="Tu email" />

                    <label className="block text-black text-sm font-bold mb-1">
                      Comentario
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-1 text-black" value={contact.userText} name="userText" onChange={handleChange} placeholder="Tu mensaje"/>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cerrar
                      </button>
                      <button
                        className="text-dark fourth-color active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>

                </div>

              </div>
            </div>
          </div>
        </>
      ) : null}
    </>



  );
}

export default CustomNavbar;