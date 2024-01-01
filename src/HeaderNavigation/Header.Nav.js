import imgBack from '../img/back-cocktails.png'
import "./header.nav.style.css";
import Brand from '../img/brand-2.png';

function HeaderNav() {
    const mouseDownEffect = () => {
        const nextSection = document.getElementById('next-section');
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
    return (

        <header>
            <div className='Header__Container'>
                <nav>
                   <div className='Nav_Container'>
                   <a className='Brand'>
                    <img src={Brand} /> 
                    </a>
                    <ul>
                        <li><a title='Inicio de página' href='/'>Inicio</a></li>
                        <li><a title='¿Quieres saber de nosotros?' href='/'>Contáctanos</a></li>
                    </ul>
                   </div> 
                </nav>

                <section className="Header-Information">
                    <img src={imgBack} />
                    <div className="Header-Information__InText">
                        <h1>Encuentra o Personaliza tu receta</h1>
                        <p>
                            Realiza tu búsqueda fácil de alguna receta de coctel que no recuerdas en el momento o buscapor ingredientes y recibe sigerencias personalizadas.
                        </p>
                        <div>
                            <button onClick={mouseDownEffect}>Realizar búsqueda</button>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default HeaderNav;