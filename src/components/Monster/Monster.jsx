import { useMonsterStatus } from "../../contexts/MonsterStatus";
import Choul from "../monsters/Choul.jsx";
import React, {useEffect, useState} from "react";
import './monster.scss';
import {useDispatch, useSelector} from "react-redux";
import Choul_Boss from "../monsters/Choul-Boss";
import Choul_Festering from "../monsters/Choul-Festering";
import Choul_Grotesque from "../monsters/Choul-Grotesque";
import Choul_Scavenger from "../monsters/Choul-Scavenger";


export default function Monster(props) {
    const {setAnimationIndex, setIsSpawn, isSpawn, setHealth, monster, setMonster} = useMonsterStatus();
    const [counter, setCounter] = useState(0);
    const uron = useSelector(state => state.dpc);
    const health = useSelector(state => state.curHealth);
    const maxHealth = useSelector(state => state.maxHealth);
    const dispatch = useDispatch();
    const [xcoord, setXcoord] = useState(0);
    const [ycoord, setYcoord] = useState(0);

    function randomIntFromInterval(min = 0, max = chouls.length) {
        const newNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return newNumber !== monster ? newNumber : randomIntFromInterval(min, max);
    }

    const xPositions = ['20%', '30%', '40%', '50%', '60%', '70%', '80%'];

    const handleClickMonster = (e) => {
        setXcoord(e.clientX);
        setYcoord(e.clientY);
        if (health > 0) {
            let damageDiv = document.createElement('div');
            damageDiv.className = 'damage position-fixed z-3';
            damageDiv.id = `damage${counter}`;
            damageDiv.innerHTML = `<p>-${uron}</p>`;
            damageDiv.style.color = '#B0B0B0';
            damageDiv.style.left = `${xPositions[randomIntFromInterval(0, 6)]}`;
            damageDiv.style.top = `30%`;
            document.body.appendChild(damageDiv);
            setTimeout(() => {
                const damageToRemove = document.getElementById(`damage${counter}`);
                document.body.removeChild(damageToRemove);
            }, 1000);

            if (health > uron) {
                setAnimationIndex(2);
                setHealth(health - uron);
                dispatch({type: "GET_DAMAGE"});
                setCounter(counter + 1);
                setTimeout(() => {
                    setAnimationIndex(0);
                },);
            }

            else if (health <= uron) {
                setHealth(0);
                dispatch({type: "GET_DAMAGE"});
                setAnimationIndex(3);
                setTimeout(() => {
                    setAnimationIndex(0);
                    dispatch({type: 'FULL_HP'});
                    setTimeout(() => {
                        setMonster(randomIntFromInterval());
                    });
                }, 1000)
            }
        }
    }

    //ПОЯВЛЕНИЕ
    if (!isSpawn) {
        setAnimationIndex(1);
        setTimeout(() => {
            setAnimationIndex(0);
            setIsSpawn(true);
        }, 800)
    }

    //ЗОНА КЛИКА
    if (document.getElementById('damage-zone') !== null) {
        const removeZone = document.getElementById('damage-zone');
        document.body.removeChild(removeZone);
    }
    const damageDiv = document.createElement('div');
    damageDiv.className = 'position-fixed z-3';
    damageDiv.onclick = handleClickMonster;
    damageDiv.id = 'damage-zone';
    damageDiv.style.marginLeft = '10%';
    damageDiv.style.top = '25%';
    damageDiv.style.width = '80%';
    damageDiv.style.height = '50%';
    document.body.appendChild(damageDiv);

    const chouls = [
        <Choul scale={1.2} />,
        <Choul_Boss />,
        <Choul_Festering />,
        <Choul_Grotesque />,
        <Choul_Scavenger />
        ];

    //МОНЕТЫ
    useEffect(() => {
        if (health === 0) {
            let coin1 = document.createElement('div');
            coin1.className = 'coin1 position-fixed z-3';
            coin1.innerHTML = '<img src="../../../public/images/coin.png" />'
            coin1.id = `coin1`;
            coin1.style.left = `${xcoord}px`;
            coin1.style.top = `${ycoord}px`;
            document.body.appendChild(coin1);

            let coin2 = document.createElement('div');
            coin2.className = 'coin2 position-fixed z-3';
            coin2.innerHTML = '<img src="../../../public/images/coin.png" />'
            coin2.id = `coin2`;
            coin2.style.left = `${xcoord}px`;
            coin2.style.top = `${ycoord}px`;
            document.body.appendChild(coin2);

            let coin3 = document.createElement('div');
            coin3.className = 'coin3 position-fixed z-3';
            coin3.innerHTML = '<img src="../../../public/images/coin.png" />'
            coin3.id = `coin3`;
            coin3.style.left = `${xcoord}px`;
            coin3.style.top = `${ycoord}px`;
            document.body.appendChild(coin3);

            setTimeout(() => {
                const coin1ToRemove = document.getElementById(`coin1`);
                document.body.removeChild(coin1ToRemove);
            }, 1000);

            setTimeout(() => {
                const coin2ToRemove = document.getElementById(`coin2`);
                document.body.removeChild(coin2ToRemove);
            }, 1200);

            setTimeout(() => {
                const coin3ToRemove = document.getElementById(`coin3`);
                document.body.removeChild(coin3ToRemove);
            }, 800);

            setTimeout(() => {
                dispatch({type: 'ADD_MONEY'});
            }, 500);
        }
    }, [health]);

    return (<>
            {chouls[monster]}
        </>)
}