import styles from "./SearchForm.module.scss";
import Search from "antd/es/input/Search";
import { useState } from "react";
export let query = "";
const SearchForm = () => {
  const [item, setItem] = useState("");
  const handleSubmit = () => {
    const value = item;
    if (value) {
      query = value;
    }
    return query;
  };
  console.log(query);
  return (
    <section className={styles.search}>
      <div className={styles.subMedia}>
        <input
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
  );
};

export default SearchForm;
