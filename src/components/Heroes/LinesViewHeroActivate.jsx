import styles from './heroes.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PriceUpButton from "./PriceUpButton";
import ActivateButton from "./ActivateButton";
import {useSelector} from "react-redux";

export default function LinesViewHeroActivate(props) {
    const colorRangs = useSelector(state => state.colorRangs);

    const hero = props.hero;
    const image = hero.image;
    const name = hero.name;
    const rang = hero.rang;

    return <>
        <div className={styles.border_box}>
            <div className={styles.line_box_activate}>
                <div className={'d-flex m-auto'}>
                    <div className={'m-auto position-relative'}>
                        <div className={styles[`rang${rang}`]}>
                            <img src={image} className={styles.line_img_lock}/>
                        </div>
                    </div>
                    <div className={'ms-4'}>
                        <h3>{name}</h3>
                        <p>Поздравляем, ваш герой собран.</p>
                        <p>Нажмите активировать что бы призвать его.</p>
                        <div className={styles.priceup_button_locked}>
                            <ActivateButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}