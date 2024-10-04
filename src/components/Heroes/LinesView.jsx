import LinesViewHeroUnlocked from "./LinesViewHeroUnlocked";
import {useSelector} from "react-redux";
import LinesViewHeroLocked from "./LinesViewHeroLocked";
import LinesViewHeroActivate from "./LinesViewHeroActivate";

export default function LinesView() {
    const heroes = useSelector(state => state.heroes)

    return <>
        <div className={'container w-100 d-flex flex-column justify-content-center align-items-center'}>
            {Object.keys(heroes).map((hero) => {
                return (heroes[hero].type === 'unlocked' ? (<LinesViewHeroUnlocked hero={heroes[hero]} />) : (heroes[hero].type === 'locked' ? (<LinesViewHeroLocked hero={heroes[hero]} />) : <LinesViewHeroActivate hero={heroes[hero]} />))
            })}
        </div>
    </>
}