import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import gainImg from '../assets/img/GAIN 3.png';
import avatar from '../assets/img/avatar.png';
import img1 from '../assets/img/character/28.png';
import img2 from '../assets/img/character/29.png';
import img3 from '../assets/img/character/263.png';
import img4 from '../assets/img/character/516.png';
import img5 from '../assets/img/character/556.png';
import img6 from '../assets/img/character/589.png';
import img7 from '../assets/img/character/957.png';
import img8 from '../assets/img/character/972.png';
import img9 from '../assets/img/character/5088.png';


export default function Create(){
    
    return (
        
        <div className='Create'>
            <div className='alineUploadImg'>
                <div className='uploadImg'>
                    <h2>YOUR FACE</h2>
                    <div className='imgFrame'>
                        <img alt='test' src={avatar}/>
                    </div>
                    <Button variant='contained'>사진찍기</Button>
                    <input type={"file"} accept=".png, .jpg, .jpeg" required/>
                    <img alt='test' className='gainLogo' src={gainImg}/>
                </div>
            </div>
            <div className='sampleImg'>
                <h2>choose one</h2>
                <div className='imgArray'>
                    <img alt='1' className='rec' src={img1}/>
                    <img alt='2' className='rec' src={img2}/>
                    <img alt='3' className='rec' src={img3}/>
                    <img alt='4' className='rec' src={img4}/>
                    <img alt='5' className='rec' src={img5}/>
                    <img alt='6' className='rec' src={img6}/>
                    <img alt='7' className='rec' src={img7}/>
                    <img alt='8' className='rec' src={img8}/>
                    <img alt='9' className='rec' src={img9}/>
                </div>
                <Link to="/result">
                    <Button className="submitButton" variant='contained'>결과 확인하기</Button>
                </Link>
            </div>
        </div>
    );
}
