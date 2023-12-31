import { useEffect, useRef, useState } from 'react';
import '../Search/search.style.css';
import Cocktail from '../Search/cocktails.json';
import PepperPopup from './Popup/Components/Pepper/PepperPopup';

function Search() {
    const [keyword, setKeyword] = useState('');
    const [show, setShow] = useState(false);
    const [cocktailItem, setCocktailItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [openSelect, setOpenSelect] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const openOption = () => {
        setOpenSelect(!openSelect);
    }

    const selectValue = (e) => {
        leagueInput.current.value = e.target.outerText;
        setOpenSelect(!openSelect);
        if (leagueInput.current.value === '') {
            setShowDelete(false);
        } else {
            setShowDelete(true);
        }
    }

    const toggleDelete = () => {
        if (leagueInput.current.value === '') {
            console.log(leagueInput.current.value)
        } else {
            leagueInput.current.value = '';
            setShowDelete(!showDelete);
            console.log(leagueInput.current.value)
        }
    }

    const leagueInput = useRef();

    useEffect(() => {
        setLoading(true);
    }, [keyword]);


    const cocktails = Cocktail.cocktails;

    const getUniqueIngredients = () => {
        const allIngredients = cocktails.reduce((accumulator, cocktail) => {
            accumulator.push(...cocktail.ingredients);
            return accumulator;
        }, []);

        // Usar Set para obtener valores únicos y convertirlo a un array
        const uniqueIngredients = Array.from(new Set(allIngredients));
        return uniqueIngredients;
    };

    const PATH = require.context('../img/img-cocktail', true);

    const toggleActive = () => {
        setShow(!show);
    }

    let results = [];

    if (keyword && leagueInput.current && leagueInput.current.value) {
        const ingredientToExclude = leagueInput.current.value.toLowerCase();

        // Filtrar los cócteles que no contienen el ingrediente específico y no coinciden con la keyword
        results = cocktails.filter((cocktail) => {
            const hasIngredient = cocktail.ingredients.some(
                (ingredient) => ingredient.toLowerCase() === ingredientToExclude
            );

            const matchesKeyword = cocktail.name.toLowerCase().includes(keyword.toLowerCase());

            // Retornar solo los cócteles que no contienen el ingrediente específico y no coinciden con la keyword
            return !hasIngredient && matchesKeyword;
        });
    } else if (keyword) {
        results = cocktails.filter((cocktail) =>
            cocktail.name.toLowerCase().includes(keyword.toLowerCase())
        );
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
        <section id='next-section' className="Search-Section">
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

                            <div className='Options-S'>
                                <div className='Options__Container'>
                                    <div className='Suggestions'>
                                        <div className='Information-Results'>
                                            <span>
                                                {keyword === '' ? 'Sugerencias:' : 'Resultados:'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className='Filters'>
                                        <span className='Rest'>Restricciones de Ingredientes</span>
                                        <div className='selectOption'>
                                            <input
                                                onClick={openOption}
                                                onBlur={() => {
                                                    setOpenSelect(false);
                                                }}
                                                type='search'
                                                id='league'
                                                ref={leagueInput}
                                                placeholder='Selecciona Ingrediente'
                                                readOnly
                                            />

                                            <button onClick={toggleDelete} className={showDelete === false ? 'Button-Delete' : 'Button-Delete active'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className={openSelect ? 'options active' : 'options'}>
                                            {getUniqueIngredients().map((item, index) => (
                                                <li onClick={selectValue} key={index}>
                                                    {item}
                                                </li>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className='Results-Search'>
                            <div className={keyword === '' ? 'Results-Search__Container' : 'Results-Search__Container active'}>

                                <div className='Results'>
                                    <div className='Results__Container'>
                                        {
                                            keyword === '' ? <p className='Not-write'>No has escrito nada.</p> : results.length === 0 ? <p>No se encontró nada.</p> : results.map((item, i) => {
                                                return (
                                                    <div onClick={getTitle} key={i} title={item.name} className='Item-Result'>
                                                        <div title={item.name} className='Item-Result-Img'>
                                                            {loading && <p className='Loading'>...</p>}
                                                            <img
                                                                title={item.name}
                                                                src={PATH(`./${item.img}`)}
                                                                onLoad={() => setLoading(false)} // Cambia el estado a falso cuando la imagen se carga
                                                                style={{ visibility: loading ? 'hidden' : 'visible' }} // Cambia la visibilidad de la imagen mientras se carga
                                                            />
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