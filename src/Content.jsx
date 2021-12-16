import React, { useState, useEffect } from 'react';
import { Texts, Answers } from './ContentTexts';

const imgs = [
    'images/0.jpg',
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg'
]

function Content() {
    const [answer, setAnswer] = useState('');
    const [phase, setPhase] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = () => {
        const givenAnswer = answer.toLowerCase();
        if (givenAnswer.includes(Answers[phase])) {
            const actualPhase = phase;
            setPhase(actualPhase + 1);
            setAnswer('');
        } else {
            return
        }
    };
    const renderContent = () => {
        if (isLoading) {
            return <div className='Content-inner'>
                <img className='rotate' src='/images/santa-loader.png' alt='Santa' />
                <h4>Carregando...</h4>
            </div>
        }
        return <div className='Content-inner'>
            <img src={imgs[phase]} alt='phase' />
            <h3>
                {Texts[phase]}
            </h3>
            {renderInput()}
        </div>
    }
    const renderInput = () => {
        if (phase !== 10) {
            return <div><input value={answer} onChange={e => setAnswer(e.target.value)} />
                <button className='button-24' onClick={handleSubmit}>Responder</button></div>
        }
        else {
            return null
        }
    }
    useEffect(() => {
        const cacheImages = async (srcArray) => {
            const promises = await srcArray.map(src => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });
            await Promise.all(promises);
            setIsLoading(false);
        }
        cacheImages(imgs);
    }, []);
    return (
        <div className="Content">
            {renderContent()}
        </div>
    )
}

export default Content

