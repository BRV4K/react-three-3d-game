import {useSelector} from "react-redux";
import GridView from "./GridView";
import LinesView from "./LinesView";
import styles from "./heroes.module.css"

export default function Heroes() {
    const curView = useSelector(state => state.curHeroesView)
    return <>
        <div className={styles.container_heroes}>
            {curView === 'grid' ? <GridView /> : <LinesView />}
        </div>
    </>
}