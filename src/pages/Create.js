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
import { useState } from 'react';


export default function Create(){
    const [imageSrc, setImageSrc] = useState('');
    const [selected,setSelected] = useState();

    const encodeFileToBase64 = (fileBlob) => {
          
        const reader = new FileReader();
    
        reader.readAsDataURL(fileBlob);
    
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
          };
        });

      };
    
    const clickFilter = (e) =>{
        console.log(e.alt);
        setSelected(e.alt);

    }
    
    return (
        <div className='Create'>
            <div className='alineUploadImg'>
                <div className='uploadImg'>
                    <h2>YOUR FACE</h2>
                    <div className='imgFrame'>
                        {imageSrc == ''? <img id="defaultImg" src={avatar}/> :<img id='previewImg' src={imageSrc} />}
                    </div>
                    <Button variant='contained'>사진찍기</Button>
                    <label className="input-file-button" for="input-file">
                        이미지 가져오기
                    </label>
                    <input type="file" id="input-file" style={{display:"none"}} accept=".png, .jpg, .jpeg" required onChange={(e) => {
                  encodeFileToBase64(e.target.files[0]);
                }}/> 
    
                    <img alt='test' className='gainLogo' src={gainImg}/>
                </div>
            </div>
            <div className='sampleImg'>
                <h2>choose one</h2>
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
                <Link to="/result">
                    <Button className="submitButton" variant='contained'>결과 확인하기</Button>
                </Link>
            </div>
        </div>
    );
}
