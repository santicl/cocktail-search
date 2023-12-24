import { useState } from 'react';
import '../Search/search.style.css';
import Cocktail from '../Search/cocktails.json';
import PepperPopup from './Popup/Components/Pepper/PepperPopup';

function Search() {
    const [keyword, setKeyword] = useState('');
    const [show, setShow] = useState(false);
    const [cocktailItem, setCocktailItem] = useState({});

    const cocktails = Cocktail.cocktails;

    const PATH = require.context('../img/img-cocktail', true);

    const toggleActive = () => {
        setShow(!show);
    }

    let results = [];

    if (keyword) {
        results = cocktails.filter((cocktail) => {
            return cocktail.name.toLowerCase().includes(keyword.toLocaleLowerCase());
        })
    }

    const setTitleToPopup = (title) => {
        const getCocktail = cocktails.filter((cocktail) => {
            return cocktail.name.toLowerCase().includes(title.toLocaleLowerCase());
        });

        setCocktailItem(getCocktail[0]);
        toggleActive();
    }

    const getTitle = (e) => {
        const title = e.target.title;
        setTitleToPopup(title);
    }

    return (
        <section className="Search-Section">
            <div className="Search-Section__Container">

                <h2>Realiza tu búsqueda</h2>

                <section className='Search-Function'>
                    <div className='Search-Function__Container'>

                        <div className='Input-Type-Search'>

                            <div className='Input-Search__Container'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                                <input onChange={(e) => setKeyword(e.target.value)} placeholder='Margarita' type='search' />
                            </div>
                        </div>

                        <section className='Results-Search'>
                            <div className='Results-Search__Container'>


                                <div className='Information-Results'>
                                    <span>
                                        {keyword === '' ? 'Sugerencias:' : 'Resultados:'}
                                    </span>
                                </div>

                                <div className='Results'>
                                    <div className='Results__Container'>
                                        {
                                            results.length == 0 ? <p className='Not-write'>No has escrito nada.</p> : results.map((item, i) => {
                                                return (
                                                    <div onClick={getTitle} key={i} title={item.name} className='Item-Result'>
                                                        <div title={item.name} className='Item-Result-Img'>
                                                            <img title={item.name} src={PATH(`./${item.img}`)} />
                                                        </div>

                                                        <div title={item.name} className='Item-Result-Name'>
                                                            <h3 title={item.name}> {item.name} </h3>
                                                            <ul title={item.name}>
                                                                <li title={item.name}>
                                                                    <span title={item.name}>Ingredientes: </span>
                                                                    <span title={item.name}> {item.ingredients.length} </span>
                                                                </li>
                                                                <li title={item.name}>
                                                                    <span title={item.name}>Tipo: </span>
                                                                    <span title={item.name}> {item.type} </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>


                            </div>
                        </section>


                    </div>
                </section>

            </div>
            <PepperPopup PATH={PATH} cocktailItem={cocktailItem} show={show} toggleActive={toggleActive} />
        </section>
    );
}

export default Search;