import React, { useContext } from 'react'
import { HeroesContext } from '../context/HeroesContext';
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
    const {getHeroesByPublishers, isLoading} = useContext(HeroesContext)
    
    
    const heroes = getHeroesByPublishers(publisher);
  

  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'> 
            {isLoading
            ? <h4>Cargando...</h4> 
            : heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero}/>
                ))
            }     
    </div>
  )
}
