import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './heroes.module.css'
import {useSelector} from "react-redux";

export default function GridViewHero(props) {
    const colorRangs = useSelector(state => state.colorRangs);
    const image = props.image;
    const rang = props.rang;
    const type = props.type;

    return <>
        <div className={'mb-4 col-4 position-relative h-auto'}>
            <div className={styles.grid_border}>
                <div className={'position-relative'}>
                    <div className={styles['rang0']}>
                        <img src={image} className={'h-100 w-100'}/>
                    </div>
                </div>
            </div>
        </div>
    </>
}