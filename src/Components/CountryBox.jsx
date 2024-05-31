import React from 'react'

import style from "./CountryApp.module.css"
import { Button } from 'react-bootstrap'

const CountryBox = (props) => {
    const {name , flags , languages , capital , region , area , population ,maps} = props.country
    const handleDelete = (name) => {
        props.onRemove(name)
    }
  return (
    <div className={style.countryBox}>
        <div className={style.countryFlag}>

        <img src={flags.png} alt={name.common}  />
        </div>
        <div className={style.countryDes}>

        <p >Nmae : {name.common}</p>
        <p >Capital : {capital}</p>
        {/* <p >Languages : {languages}</p> */}
        <p >Area : {area}</p>
        <p >Population : {population}</p>
        <p className={style.maps}>Maps : <a href={maps.googleMaps} target="_blank">{maps.googleMaps}</a></p>
        <p >Region : {region}</p>
        <Button onClick={() => handleDelete(name.common)} variant="danger" className={`mt-2 ${style.deleteBtn}`}>Delete</Button>
        </div>
    </div>
  )
}

export default CountryBox