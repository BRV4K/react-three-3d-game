import {useSelector} from "react-redux";
import GridViewHero from "./GridViewHero";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './heroes.module.css'
import React from "react";

export default function GridView() {
    const heroes = useSelector(state => state.heroes);

    return <>
        <div className={'m-auto ms-2 me-2 overflow-hidden'}>
            <div className={'row'}>
                {Object.keys(heroes).map((hero) => {
                    return <>
                        <GridViewHero image={heroes[hero].image} rang={heroes[hero].rang}/>
                    </>
                })}
            </div>
        </div>
    </>
}