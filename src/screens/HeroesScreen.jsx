import styles from '../components/Heroes/heroes.module.css';
import Header from "../components/Heroes/Header";
import GridView from "../components/Heroes/GridView";
import {useSelector} from "react-redux";
import Heroes from "../components/Heroes/Heroes";

export default function HeroesScreen() {

    return <>
        <div className={styles.container}>
            <Header />
            <Heroes />
        </div>
    </>
}