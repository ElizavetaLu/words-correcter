import { SyntheticEvent, useEffect, useState } from "react";
import "./SearchWords.scss";


const SearchWords = () => {

    const [searchTerm, setSearchTerm] = useState<string>('')


    const onSearchSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        if (!searchTerm.trim()) return;

    }


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            //search request
        }, 300)

        return () => clearTimeout(timeoutId)
    }, [searchTerm])


    return (
        <form className="search" onSubmit={onSearchSubmit} >
            <input
                type="text"
                className="search__input"
                placeholder="Search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            < button type="submit" className="search__button" >
                <img src="/images/icons/search.png" alt="search" className="search__icon" />
            </button>
        </form>
    )
}
export default SearchWords