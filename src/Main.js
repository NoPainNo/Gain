import React from 'react';
import Button from '@mui/material/Button';
import gainImg from './img/GAIN 1.png';
import logoImg from './img/logoImg 1.png';

export default function Main(){
    return (
        <div className='Main'>
            <div>
                <img className='gainImg' src={gainImg}/>
            </div>
            <div className='logo'>
                <img className='logoImg' src={logoImg}/>
            </div>
            <h2>WELCOME</h2>
            <div className='pText'>
                <p>당신의 특별한 캐릭터</p>
                <p>지금 바로 만들어보세요!</p>
            </div>
            <Button variant='contained'>START</Button>
        </div>
    );
}