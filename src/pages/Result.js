import React from 'react';
import { Button } from "@mui/material";
import gainImg from '../assets/img/GAIN 1.png';
import logoImg from '../assets/img/logoImg 1.png';
import kakaoImg from '../assets/img/kakao.png';
import linkImg from '../assets/img/link.png';

export default function Result (){
    return (
        <div className="Result">
            <div className='alineDiv'>
                <img className='gainImg' src={gainImg}/>
                <div className='logo'>
                    <img src={logoImg}/>
                </div>
                <Button variant='contained'>결과 저장하기</Button>
                <Button variant='contained'>다시 만들기</Button>
                <p>여러분의 캐릭터를 공유해보세요!</p>
                <div className='buttonWrap'>
                    <div className='button'>
                        <button><img src={kakaoImg}/></button>
                        <p>카카오톡 공유</p>
                    </div>
                    <div className='button'>
                        <button><img src={linkImg}/></button>
                        <p>링크 복사</p>
                    </div>
                </div>
            </div>
        </div>
    );
}