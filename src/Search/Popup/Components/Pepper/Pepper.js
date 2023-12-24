import '../../../pepper.style.css';

function Pepper({ cocktailItem, PATH, toggleActive }) {
    return (
        <div className="BackGround-Pepper">
            <div className="BackGround-Pepper__Container">
                <div className='ContentImage-Pepper'>
                    <img title={cocktailItem.name} src={PATH(`./${cocktailItem.img}`)} />
                </div>

                <div className='Content-text'>
                    <div className='Content-text__Container'>
                        <div className='Content-text__Content'>
                            <h2> {cocktailItem.name} </h2>
                            <span>Tipo: {cocktailItem.type} </span>
                            <p>{cocktailItem.preparation}</p>

                            <ul>
                                {cocktailItem.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>

                            <h3> Recomendaciones: </h3>
                            <p>{cocktailItem.recommendations}</p>
                        </div>
                    </div>
                </div>
                <button onClick={toggleActive}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}


export default Pepper;