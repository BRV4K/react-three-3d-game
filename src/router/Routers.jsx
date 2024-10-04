import {Route, Routes} from "react-router-dom";
import GameScreen from "../screens/GameScreen/GameScreen";
import HeroesScreen from "../screens/HeroesScreen"

export default function Routers() {
    return <>
        <Routes>
            <Route path={'/'} element={<GameScreen/>} />
            <Route path={'heroes'} element={<HeroesScreen/>} />
        </Routes>
    </>
}