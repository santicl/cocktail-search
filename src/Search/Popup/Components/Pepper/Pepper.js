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
            </div>
        </div>
    );
}


export default Pepper;