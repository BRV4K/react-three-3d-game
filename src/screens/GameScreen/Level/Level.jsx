import './level.scss';

export default function Level() {

    return (
        <>
            <div className='level_container d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex align-items-center'>
                    <p className='level_word'>Уровень: </p>
                    <p className='level_value'>10</p>
                </div>
                <p className='level_cur_monster'>3/10</p>
            </div>
        </>
    )
}