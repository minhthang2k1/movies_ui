import styles from "./SearchForm.module.scss";
import Search from "antd/es/input/Search";
import React, { useState } from "react";
import SearchResults from "./SearchResults";

export let query = "";

const SearchForm = () => {
  const [item, setItem] = useState("");
  const handleSubmit = () => {
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
