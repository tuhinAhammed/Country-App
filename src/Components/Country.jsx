import React from 'react'
import {v4 as uuidv4} from "uuid"
import CountryBox from './CountryBox';
import style from "./CountryApp.module.css"

const Country = ( { onCountry , onRemove }) => {
// console.log(uuidv4());

    return (
        <div className ={style.countryOverflow}>
            { 
                onCountry.map((country => {
                    const countryNew = { country, id : uuidv4()}
                    return <CountryBox {...countryNew}  key ={countryNew.id} onRemove={onRemove}/>
                }))
            }
        </div>
    )
}

export default Country