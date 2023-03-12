import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Header from "./header";
import Content from "./content";

import styles from "./DetailMovieLayout.module.scss";

function DetailMovieLayout() {
  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <Header />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default DetailMovieLayout;
