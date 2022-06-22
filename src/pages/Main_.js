import React from 'react';
import Button from '@mui/material/Button';
import gainImg from '../assets/img/GAIN 2.png';
import logoImg from '../assets/img/logoImg 1.png';

export default function Main_(){
    return (
        <div className='Main_'>
            <div className='gain'>
                <img className='gainImg' src={gainImg}/>
            </div>
            <div className='welcome'>
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
        </div>
    );
}