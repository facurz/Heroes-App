import React from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeroList } from '../components/HeroList';
import { HeroesContext } from '../context/HeroesContext';
import queryString from 'query-string';
import { useState } from 'react';

export const HeroByPublisherPage = () => {
    const { getPublishers, isLoading, reset } = useContext(HeroesContext);

    const navigate = useNavigate();
    const location = useLocation();
    const { q = 'Marvel Comics' } = queryString.parse(location.search);
    const [selectValue, setSelectValue] = useState(q);
    

    const publishers = getPublishers();

    const handleSelectOption = e => {
        const value = e.target.value;
        setSelectValue(value);
        navigate(`?q=${value}`);
        reset();
    };

   

    return (
        <>
            {isLoading ? (
                <h4>Loading...</h4>
            ) : (
                <>
                    <section className='index_container'>
                        <form className='index_container_form'>
                            <h2>SELECT YOUR FAVORITE PUBLISHER</h2>
                            <select
                                onChange={e => handleSelectOption(e)}
                                defaultValue={q}
                            >
                                {publishers.map(publish => (
                                    <option key={publish} value={publish}>
                                        {publish}
                                    </option>
                                ))}
                            </select>
                        </form>
                    </section>

                    <HeroList publisher={selectValue}> </HeroList>
                </>
            )}
        </>
    );
};
