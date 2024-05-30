import React, { useEffect, useState } from 'react';
import axios from "axios";
import Country from './Country';
import Header from './Header';
import style from "./CountryApp.module.css";
import Container from './Container';

const Countrys = () => {
    // api call
    const api = "https://restcountries.com/v3.1/all";
    const [country, setCountry] = useState([]);
    const [filterCountry, setFilterCountry] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countryLength, setCountryLength] = useState("");

    useEffect(() => {
        async function allCountrys() {
            try {
                setIsLoading(true);
                const data = await axios.get(api);
                setCountry(data.data);
                setFilterCountry(data.data);
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        }
        allCountrys();
    }, []);

    useEffect(() => {
        setCountryLength(filterCountry.length);
    }, [filterCountry]);



    const handleSearch = (value) => {
        const searchValue = value.toLowerCase();
        const searchOutput = country.filter((con) => {
            const countryName = con.name.common.toLowerCase();
            return countryName.startsWith(searchValue);
        });
        setFilterCountry(searchOutput);
    };
    const handleRemoveCountry = (name) => {
        const updatedCountry = country.filter((con) => con.name.common !== name);
        const updatedFilterCountry = filterCountry.filter((con) => con.name.common !== name);
        setCountry(updatedCountry);
        setFilterCountry(updatedFilterCountry);
    };
    return (
        <div className={style.countrys}>
            <Container>
                <Header onCountryLength={countryLength} onSearch={handleSearch} />
                {isLoading && <p>Loading...</p>}
                {error && <p>Failed to Fetch</p>}
                {filterCountry && <Country onCountry={filterCountry} onRemove={handleRemoveCountry} />}
            </Container>
        </div>
    );
};

export default Countrys;
