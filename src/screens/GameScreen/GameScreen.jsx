import MonsterCanvas from "../../components/Canvas/MonsterCanvas";
import HealthBar from "../../components/HealthBar/HealthBar";
import './gamescreen.scss';
import Damage from './Damage/Damage';
import Level from './Level/Level';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import AnimatedNumbers from "react-animated-numbers";

export default function GameScreen() {
    const money = useSelector(state => state.money);

    useEffect(() => {
        const moneyDiv = document.getElementById('money');
        moneyDiv.style.animation = 'money 0.5s linear infinite';
        setTimeout(() => {
            moneyDiv.style.animation = ''
        }, 500)
    }, [money])

    return (<>
        <Damage />
        <div className='d-flex justify-content-center align-items-center'>
            <Level />
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <div>
                <img src='../../../public/images/coin.png' className='gamescreen-coin'/>
            </div>
            <div className='money' id='money'>
                {money}
            </div>
        </div>
        <div className='canvas position-absolute w-100 h-100'>
            <MonsterCanvas className='h-100'/>
        </div>
        <div className='health_bar position-absolute d-flex justify-content-center w-100'>
            <HealthBar/>
        </div>
    </>)
}