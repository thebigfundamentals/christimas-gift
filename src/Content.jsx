import React, { useState } from 'react';
import { Texts, Answers } from './ContentTexts';


function Content() {
    const [answer, setAnswer] = useState('');
    const [phase, setPhase] = useState(0);

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
        return <div className='Content-inner'>
            <img src={`images/${phase}.jpg`} />
            <h3>
                {Texts[phase]}
            </h3>
            {renderInput()}
        </div>
    }
    const renderInput = () => {
        if (phase !== 10) {
            return <div><input value={answer} onChange={e => setAnswer(e.target.value)} />
                <button className='button-24' role='button' onClick={handleSubmit}>Responder</button></div>
        }
        else {
            return null
        }
    }
    return (
        <div className="Content">
            {renderContent()}
        </div>
    )
}

export default Content

