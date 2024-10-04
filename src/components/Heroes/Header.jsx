import styles from './heroes.module.css';
import ChangeButton from "./ChangeButton";
import WorkshopButton from "./WorkshopButton";
import ScienceButton from "./ScienceButton";
import LevelButton from "./LevelButton";

export default function Header() {

    return <>
        <div className={styles.header}>
            <div className={'m-auto'}>
                <ChangeButton />
            </div>
            <div className={'m-auto'}>
                <WorkshopButton />
            </div>
            <div className={'m-auto'}>
                <ScienceButton />
            </div>
            <div className={'m-auto'}>
                <LevelButton />
            </div>
        </div>
    </>
}