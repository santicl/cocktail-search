import React, { useState, useRef } from 'react';
import '../../../pepper.style.css';

function Pepper({ cocktailItem, PATH, toggleActive }) {
    const [activeSection, setActiveSection] = useState('preparation');
    const subtitleContainerRef = useRef(null);
  
    const showSection = (nombreSeccion) => {
      setActiveSection(nombreSeccion);
      const container = subtitleContainerRef.current;
      const buttonWidth = container.querySelector('button').offsetWidth;
      const index = Array.from(container.children).findIndex((child) => child.textContent === nombreSeccion);
      const scrollOffset = index * buttonWidth;
  
      container.scrollLeft = scrollOffset;
    };
  
    return (
      <div className="BackGround-Pepper">
        <div className="BackGround-Pepper__Container">
          <div className="ContentImage-Pepper">
            <img title={cocktailItem.name} src={PATH(`./${cocktailItem.img}`)} alt={cocktailItem.name} />
          </div>
  
          <div className="Content-text">
            <div className="Content-text__Container">
              <div className="Content-text__Content">
                <h2>{cocktailItem.name}</h2>
                <span>
                    Tipo:
                    <span className='Type'>
                    <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M279-80q-31 0-53.5-20.5T200-151l-80-729h720l-80 729q-3 30-25.5 50.5T681-80H279Zm-43-480 44 400h400l44-400H236Zm-10-80h508l16-160H210l16 160Zm254 360q-14 0-24-10t-10-24q0-15 8.5-34.5T480-393q17 25 25.5 44.5T514-314q0 14-10 24t-24 10Zm0 80q48 0 81-33t33-81q0-41-26.5-89T480-520q-61 69-87.5 117T366-314q0 48 33 81t81 33Zm-244 40h488-488Z"/></svg>
                    {cocktailItem.type}
                    </span> 
                </span>
  
                <div className="Subtitles" ref={subtitleContainerRef}>
                  <div className='Subtitles-Container'>
                  <button
            onClick={() => showSection('preparation')}
            className={activeSection === 'preparation' ? 'active' : ''}
          >
            Preparación
          </button>
          <button
            onClick={() => showSection('ingredients')}
            className={activeSection === 'ingredients' ? 'active' : ''}
          >
            Ingredientes
          </button>
          <button
            onClick={() => showSection('recommendations')}
            className={activeSection === 'recommendations' ? 'active' : ''}
          >
            Recomendaciones
          </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="Content-text"> {/* Contenedor separado para el contenido */}
            <div className="Content-text__Container">
              <div className="Content-text__Content">
                <div className={`seccion preparation ${activeSection === 'preparation' ? 'mostrando' : ''}`}>
                  <h3>Preparación</h3>
                  <p>{cocktailItem.preparation}</p>
                </div>
  
                <div className={`seccion ingredients ${activeSection === 'ingredients' ? 'mostrando' : ''}`}>
                  <h3>Ingredientes</h3>
                  <ul>
                    {cocktailItem.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
  
                <div className={`seccion recommendations ${activeSection === 'recommendations' ? 'mostrando' : ''}`}>
                  <h3>Recomendaciones</h3>
                  <p>{cocktailItem.recommendations}</p>
                </div>
              </div>
            </div>
          </div>
          
          <button className='Close-Pepper' onClick={toggleActive}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }  

export default Pepper;
