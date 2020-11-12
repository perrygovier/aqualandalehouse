import { CSSProperties } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from './Layout.module.css';


const Layout = props => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.content}>
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;