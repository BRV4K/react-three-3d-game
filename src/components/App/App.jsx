import Navbar from "../NavBar/NavBar";
import Routers from "../../router/Routers";
import './app.scss';

export default function App() {
    if (document.getElementById('damage-zone') !== null && window.location.pathname !== '/') {
        const removeZone = document.getElementById('damage-zone');
        document.body.removeChild(removeZone);
    }

    return <>
        <div className='app m-0 p-0 w-100 h-100 overflow-hidden position-relative'>
            <Routers />
            <Navbar />
        </div>
    </>
}