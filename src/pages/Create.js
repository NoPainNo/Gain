import React from 'react';
import Button from '@mui/material/Button';
import rec from '../assets/img/Rectangle.png';
import gainImg from '../assets/img/GAIN 3.png';
import avatar from '../assets/img/avatar.png';

export default function Create(){
    
    return (
        
        <div className='Create'>
            <div className='uploadImg'>
                <h2>YOUR FACE</h2>
                <div>
                    <img alt='test' src={avatar}/>
                </div>
                <Button variant='contained'>사진찍기</Button>
                <input type={"file"} accept="image/*"/>
                <img alt='test' className='gainLogo' src={gainImg}/>
            </div>
            <div className='sampleImg'>
                <h2>choose one</h2>
                <div className='imgArray'>
                    <img alt='1' className='rec' src={rec}/>
                    <img alt='2' className='rec' src={rec}/>
                    <img alt='3' className='rec' src={rec}/>
                    <img alt='4' className='rec' src={rec}/>
                    <img alt='5' className='rec' src={rec}/>
                    <img alt='6' className='rec' src={rec}/>
                    <img alt='7' className='rec' src={rec}/>
                    <img alt='8' className='rec' src={rec}/>
                    <img alt='9' className='rec' src={rec}/>
                </div>
                <Button variant='contained'>결과 확인하기</Button>
            </div>
        </div>
    );
}
