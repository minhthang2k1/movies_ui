import styles from "./SearchForm.module.scss";
import Search from "antd/es/input/Search";
import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import { useLocation, useNavigate } from "react-router-dom";

export let query = "";

const SearchForm = () => {
  const [item, setItem] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  query = location.search.slice(7);
  console.log(location);
  console.log(query);
  const handleSubmit = () => {
    navigate(`/search?query=${item}`);
    const value = item;
    if (value) {
      query = value;
      setItem("");
    } else {
      setItem("");
    }
    return query;
  };

  return (
    <div>
      <section className={styles.search}>
        <div className={styles.subMedia}>
          <Search
            name="query"
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
            onSearch={handleSubmit}
          />
        </div>
      </section>
      <SearchResults query={query} />
    </div>
  );
};

export default SearchForm;
