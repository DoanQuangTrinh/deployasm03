import React from "react";
import banner1 from './assets/banner1.jpg'
import styles from './Home.module.css'
import { useNavigate } from "react-router-dom"; 
// import Categories from "./Categories";
const Home = () => {
    const navigate = useNavigate();
    const browseClick = () => {
        navigate('/');
    }
    return(
        <div className={styles.homeStyleImg}>
            <img className={styles.imageHome} src={banner1} alt="mybanner"/>
            <div className={styles.newPaper}>
                <h6 className={styles.newinspiration}>NEW INSPIRATION 2020</h6>
                <p>20% OFF ON NEW SEASON</p>
                <button onClick={browseClick}>Browse collections</button>
            </div>
            
        </div>
    )
}

export default Home;