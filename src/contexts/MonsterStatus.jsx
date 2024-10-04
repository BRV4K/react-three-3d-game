import {createContext, useContext, useState} from "react";

const MonsterStatusContext = createContext({});

export const MonsterStatusProvider = (props) => {
    const [animationIndex, setAnimationIndex] = useState(0);
    const [animations, setAnimations] = useState([]);
    const [health, setHealth] = useState(100);
    const [monster, setMonster] = useState(0);
    const [isSpawn, setIsSpawn] = useState(false);
    const [colorBar, setColorBar] = useState('success');
    const [questCount, setQuestCount] = useState(1);

    return (<MonsterStatusContext.Provider value={{
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
        health,
        setHealth,
        monster,
        setMonster,
        isSpawn,
        setIsSpawn,
        colorBar,
        setColorBar,
        questCount,
        setQuestCount
    }}>
        {props.children}
    </MonsterStatusContext.Provider>)
}

export const useMonsterStatus = () => {
    return useContext(MonsterStatusContext);
}