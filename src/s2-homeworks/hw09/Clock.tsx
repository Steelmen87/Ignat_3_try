import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const [toggle, setToggle] = useState<boolean>(false)

    const start = () => {
        setToggle(true)
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
        let id = setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(+id)
    }

    const stop = () => {
        setToggle(false)
        /*saveState('hw9-date',new Date())*/
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        clearInterval(timerId)

    }

    const onMouseEnter = () => setShow(true)
    const onMouseLeave = () => setShow(false)

    let day = date.getUTCDate() < 10 ? '0' + date.getUTCDate() : date.getUTCDate()
    let month = date.getUTCMonth() + 1

    let Hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    let Minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    let Seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

    const stringTime = Hours + ':' + Minutes + ':' + Seconds // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = day + '.' + (month < 10 ? '0' + month : month) + '.' + date.getFullYear()

    // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
    const language = 'en-EN';
    const stringDay = date.toLocaleString(language, {weekday: 'long'})
    const stringMonth = date.toLocaleString(language, {month: 'long'});

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-date'}>{stringDate}</span>,{' '}
                            <span id={'hw9-month'}>{stringMonth}</span>

                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={toggle} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!toggle} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
