import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import gainImg from '../assets/img/GAIN.png';
import img1 from '../assets/img/character/28.png';
import img2 from '../assets/img/character/29.png';
import img3 from '../assets/img/character/263.png';
import img4 from '../assets/img/character/516.png';
import img5 from '../assets/img/character/556.png';
import img6 from '../assets/img/character/589.png';
import img7 from '../assets/img/character/957.png';
import img8 from '../assets/img/character/972.png';
import img9 from '../assets/img/character/5088.png';
import { useState } from 'react';


export default function Select(){
    const [imageSrc, setImageSrc] = useState('');
    const [selected,setSelected] = useState();

    
    const clickFilter = (e) =>{
        console.log(e.alt);
        setSelected(e.alt);
    }
    
    return (
        <div className='Select'>
            <div className='sampleImg'>
                <img className='gainImg' src={gainImg}/>
                <div className='imgArray'>
                    <div className="borderBox" onClick={(e) => clickFilter(e.target)}><img alt='1' className='rec' src={img1}/></div>
                    <div className="borderBox" onClick={(e) => clickFilter(e.target)}><img alt='2' className='rec' src={img2}/></div>
                    <div className="borderBox" onClick={(e) => clickFilter(e.target)}><img alt='3' className='rec' src={img3}/></div>
                    <div className="borderBox" onClick={(e) => clickFilter(e.target)}><img alt='4' className='rec' src={img4}/></div>
                    <div className="borderBox" onClick={(e) => clickFilter(e.target)}><img alt='5' className='rec' src={img5}/></div>
                    <div className="borderBox" onClick={(e) => clickFilter(e.target)}><img alt='6' className='rec' src={img6}/></div>
                    <div className="borderBox" onClick={(e) => clickFilter(e.target)}><img alt='7' className='rec' src={img7}/></div>
                    <div className="borderBox" onClick={(e) => clickFilter(e.target)}><img alt='8' className='rec' src={img8}/></div>
                    <div className="borderBox" onClick={(e) => clickFilter(e.target)}><img alt='9' className='rec' src={img9}/></div>
                </div>
                <div className='instruction'>
                    <p>원하는 필터를 선택해주세요.</p>
                    <p>사용자의 사진 + 캐릭터 필터</p>
                    <p id="bold">= 나만의 캐릭터 탄생</p>
                </div>
                <Link to="/result">
                    <Button className="submitButton" variant='contained'>결과보기</Button>
                </Link>
            </div>
        </div>
    );
}
