import styles from './heroes.module.css'

export default function ActivateButton(props) {

    return <>
        <div className={'position-relative'}>
            <svg width="30vw" viewBox="0 0 117 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M109.781 17.1208L93.6577 33.0002H20.5089L2 17.1208L20.5089 1.23877H93.6577L109.781 17.1208Z" fill='#365D4C'stroke="#B28E4C" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M115.41 16.882L99.2864 32.7614H26.1375L7.62868 16.882L26.1375 1H99.2864L115.41 16.882Z" stroke="#B28E4C" stroke-miterlimit="10"/>
            </svg>
            <div className={styles.activate_text}>
                <span>Активировать</span>
            </div>
        </div>
    </>
}