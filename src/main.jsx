import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/navbar.module.css'
import './components/Heroes/heroes.module.css'
import {MonsterStatusProvider} from "./contexts/MonsterStatus.jsx";
import App from "./components/App/App";
import {BrowserRouter} from "react-router-dom"
import {createStore} from "redux";
import {Provider} from "react-redux";
import { initCloudStorage } from '@telegram-apps/sdk';

const defaultState = {
    level: 1,
    curHealth: 100000,
    maxHealth: 100000,
    healthBarFill: 100,
    dps: 1000,
    dpc: 5000,
    money: 100000,
    profit_hour: 100,
    curHeroesView: 'lines',
    isWorkshop: true,
    opacityStrokeWorkshop: 1,
    opacityStrokeScience: 1,
    isScience: true,
    mouseX: 0,
    mouseY: 0,
    colorRangs: {
        0: '#686D76',
        1: '#3D6250',
        2: '#363F5D',
        3: '#925925',
        4: '#AC3838',
        5: '#470F33',
        6: '#C9B445'
    },
    heroes: {
        hero1: {
            type: 'unlocked',
            image: '/images/hero_img.png',
            rang: 1,
            name: 'Ласс синеглазый',
            level: 10,
            dps: 100,
            priceUp: 999,
            text: 'Искусный владелец лука. \n' +
                'Его скорость поражает!'
        },
        hero2: {
            type: 'locked',
            image: '/images/hero_img.png',
            rang: 0,
            name: 'Ласс синеглазый',
            text: 'Искусный владелец лука. \n' +
                'Его скорость поражает!',
            level: 10,
            dps: 100,
            priceUp: 999
        },
        hero3: {
            type: 'need_activate',
            image: '/images/hero_img.png',
            rang: 0,
            name: 'Ласс синеглазый',
            text: 'Искусный владелец лука. \n' +
                'Его скорость поражает!',
            level: 10,
            dps: 100,
            priceUp: 999
        },
        hero4: {
            type: 'unlocked',
            image: '/images/hero_img.png',
            rang: 1,
            name: 'Ласс синеглазый',
            text: 'Искусный владелец лука. \n' +
                'Его скорость поражает!',
            level: 10,
            dps: 100,
            priceUp: 999
        },
        hero5: {
            type: 'unlocked',
            image: '/images/hero_img.png',
            rang: 1,
            name: 'Ласс синеглазый',
            text: 'Искусный владелец лука. \n' +
                'Его скорость поражает!',
            level: 10,
            dps: 100,
            priceUp: 999
        },
        hero6: {
            type: 'unlocked',
            image: '/images/hero_img.png',
            rang: 2,
            name: 'Ласс синеглазый',
            text: 'Искусный владелец лука. \n' +
                'Его скорость поражает!',
            level: 10,
            dps: 100,
            priceUp: 999
        }
    }
}

const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'LEVEL_UP':
            if (state.level === 1)
                return {...state, level: 10}
            else if (state.level === 10)
                return {...state, level: 25}
            else if (state.level === 25)
                return {...state, level: 100}
            else if (state.level === 100)
                return {...state, level: 1000}
            else
                return {...state, level: 1}
        case 'CHANGE_HEROES_VIEW':
            return {...state, curHeroesView: state.curHeroesView === 'grid' ? 'lines' : 'grid'}
        case 'CHANGE_WORKSHOP_OPACITY':
            return {...state, opacityStrokeWorkshop: state.opacityStrokeWorkshop === 1 ? 0.5 : 1, isWorkshop: state.isWorkshop !== true}
        case 'CHANGE_SCIENCE_OPACITY':
            return {...state, opacityStrokeScience: state.opacityStrokeScience === 1 ? 0.5 : 1, isScience: state.isScience !== true}
        case 'GET_DAMAGE':
            return {...state, curHealth: state.curHealth - state.dpc}
        case 'FULL_HP':
            return {...state, curHealth: state.maxHealth}
        case 'REDUCE_FILL_HEALTHBAR':
            return {...state, healthBarFill: (state.curHealth / state.curHealth) * 100}
        case 'SET_MOUSE_X':
            return {...state, mouseX: action.payload}
        case 'SET_MOUSE_Y':
            return {...state, mouseY: action.payload}
        case 'ADD_MONEY':
            return {...state, money: state.money + 3989237}
        default:
            return state
    }
}

const store = createStore(reducer);


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <MonsterStatusProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MonsterStatusProvider>
    </Provider>
)
