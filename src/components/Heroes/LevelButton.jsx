import styles from './heroes.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from "react-redux";
import { initCloudStorage } from '@telegram-apps/sdk';

export default function LevelButton() {
    const dispatch = useDispatch();
    const level = useSelector(state => state.level);

    // const cloudStorage = initCloudStorage();
    // const level = cloudStorage.get('level');

    const levelUp = () => {
        dispatch({type: 'LEVEL_UP'});
        // cloudStorage.set('level', level);
    }

    return <>
        <div onClick={levelUp} className={'position-relative'}>
            <svg height={41} width={52} fill="none" viewBox="0 0 52 41" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00014 8.25738V1H8.25751M8.25751 40.2573H1.00014V32.9999M43.7434 40.2573H51V32.9999M43.7434 1.00005H51V8.25743" stroke="#B28E4C" stroke-miterlimit="20" stroke-linecap="round"/>
            </svg>
            <div className={styles.level_text}>
                <p>X{level}</p>
            </div>
        </div>
    </>
}