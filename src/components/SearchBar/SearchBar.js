import React, { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import SearchBtn from "../Buttons/SearchBtn";
import Dropdowns from "../Dropdowns/Dropdowns";

import "./SearchBar.css";

function SearchBar() {
    const [search, setSearch] = useState(null);
    const [searchActive, setSearchActive] = useState(null);
    const [filters, setFilters] = useState({
        category: null,
        area: null,
    });
    const [isPressed, setIsPressed] = useState(false);

    const getSearchValue = (val) => {
        setSearch(val);
        setSearchActive(val);
        setFilters({ category: null, area: null });
        setIsPressed(false);
    };

    const getFilterValue = (cat, area) => {
        setFilters({ category: cat, area: area });
        setSearch(null);
        setSearchActive(null);
        setIsPressed(false);
    };

    const formPressedSubmit = () => {
        setIsPressed(true);
    };

    return (
        <div className="searchbar-wrapper">
            {/* Left: Search Input + Button */}
            <div className="searchbar-left">
                <SearchBox
                    search={getSearchValue}
                    isPressed={formPressedSubmit}
                    active={searchActive}
                />
                <SearchBtn
                    isPressed={isPressed}
                    searchVal={search}
                    filterVal={filters}
                />
            </div>

            {/* Right: Category + Area Dropdowns */}
            <div className="searchbar-right">
               <Dropdowns filters={getFilterValue} active={filters} />
            </div>
        </div>
    );
}

export default SearchBar;
