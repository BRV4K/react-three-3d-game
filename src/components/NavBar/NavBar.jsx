import 'bootstrap/dist/css/bootstrap.min.css';
import Heroes from '../menuButtons/Heroes'
import React from "react";
import Upgrade from "../menuButtons/Upgrade";
import Game from "../menuButtons/Game";
import Quest from "../menuButtons/Quest";
import Friends from "../menuButtons/Friends";
import styles from './navbar.module.css'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useMonsterStatus} from "../../contexts/MonsterStatus";

export default function Navbar() {
    const {questCount, setQuestCount} = useMonsterStatus();

    const deleteDamageZone = () => {

    };

    return(
        <>
            <div className={styles.container}>
                <Link to={'/heroes'} className='link-underline-opacity-0'>
                    <div className={styles.item}>
                        <div className='top-0 mt-1'>
                            <Heroes/>
                        </div>
                        <div className={'text-white p-0 m-0'}>
                            <p>Heroes</p>
                        </div>
                    </div>
                </Link>
                <div className={styles.item}>
                    <div className='top-0 mt-1'>
                        <Upgrade />
                    </div>
                    <div className={'text-white p-0 m-0'}>
                        <p>Upgrade</p>
                    </div>
                </div>
                <Link to={'/'}>
                    <div className={styles.item}>
                        <Game />
                    </div>
                </Link>
                <div className={styles.item}>
                    <div className='top-0 mt-1'>
                        <Quest />
                    </div>
                    <div className={'text-white p-0 m-0'}>
                        <p>Quest</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className='top-0 mt-1'>
                        <Friends />
                    </div>
                    <div className={'text-white p-0 m-0'}>
                        <p>Friends</p>
                    </div>
                </div>
            </div>
        </>
    )
}
