import styles from './heroes.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PriceUpButton from "./PriceUpButton";
import Offcanvas from "./OffCanvas"
import {useSelector} from "react-redux";

export default function LinesViewHeroUnlocked(props) {
    const colorRangs = useSelector(state => state.colorRangs);


    const hero = props.hero;
    const image = hero.image;
    const name = hero.name;
    const level = hero.level;
    const dps = hero.dps;
    const rang = hero.rang;
    const priceUp = hero.priceUp;

    return <>
            <div className={styles.border_box}>
                <div className={styles.line_box_unlocked}>
                    <div className={'d-flex'}>
                        <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                            <div className={'m-auto position-relative'}>
                                    <img src={image} className={styles.line_img}/>
                                    <div className={'position-absolute top-0 left-0'}>
                                        <img src={`/images/rang${rang}.svg`} className={styles.line_img}/>
                                    </div>
                            </div>
                        </div>
                        <div className={'ms-4'}>
                            <h3>{name}</h3>
                            <div className={'ms-2 position-relative'}>
                                <p>Уровень: {level}</p>
                                <p>ДПС: {dps}</p>
                                <p>Ранг: {rang === 0 ? '-' : rang}</p>
                                <div>
                                    <svg width="6vw" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5.3199V1H5.3199M5.3199 21H1V16.6801M16.6806 21H21V16.6801M16.6806 1H21V5.3199" stroke="#B28E4C" strokeOpacity="0.2" strokeMiterlimit="20" strokeLinecap="round"/>
                                        <path d="M10.3643 13.9032C10.858 13.9032 11.2582 13.5237 11.2582 13.0556C11.2582 12.5875 10.858 12.208 10.3643 12.208C9.87057 12.208 9.47034 12.5875 9.47034 13.0556C9.47034 13.5237 9.87057 13.9032 10.3643 13.9032Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10.3639 13.0557V14.7507" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17.5159 8.08823V6.02002" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17.5157 8.08838L16.1986 9.63678" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15.6086 6.95215L17.5158 8.08796" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17.5159 8.08838L18.833 9.63678" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M19.423 6.95215L17.5159 8.08796" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15.7279 11.9604V16.8697C15.7279 17.4959 15.1963 17.9999 14.5359 17.9999H6.19203C5.53161 17.9999 5 17.4959 5 16.8697V10.6537C5 10.0275 5.53161 9.52344 6.19203 9.52344H13.1577" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6.79919 6.39059C6.79919 4.51806 8.40025 3 10.3752 3C12.3501 3 13.9511 4.51806 13.9511 6.39059" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M13.9508 6.39062V7.52054" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6.79907 6.10791V7.52024" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className={styles.priceup_button}>
                                    <PriceUpButton priceUp={priceUp} text={'Улучшить'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <div className={'offcanvas offcanvas-bottom h-auto m-0 bg-body'} tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
            <div className={styles.offcanvas_cont}>
                <div className="offcanvas-header m-0 p-0">
                    <button type="button" className="btn-close btn-close-white mt-1" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
                </div>
                <div className="h-75 m-0 p-0">
                        <Offcanvas hero={hero}/>
                </div>
            </div>
        </div>
    </>
}