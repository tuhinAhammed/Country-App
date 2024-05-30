import React, { useEffect, useState } from 'react'

import style from "./CountryApp.module.css"


const Search = ({onSearch}) => {
    const [searchValue, setSearchValue] = useState("")
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    useEffect(() => {
        onSearch(searchValue);

    },[searchValue])
    return (
        <div>
            <input type="text" placeholder='Search Countrys' className={style.searchBox} onChange={handleChange} />
        </div>
    )
}

export default Search