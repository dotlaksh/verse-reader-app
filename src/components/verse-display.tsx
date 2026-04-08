import React from 'react';
import './verse-display.css';

const VerseDisplay = ({ verse, speaker, meaning }) => {
    return (
        <div className="verse-container">
            <div className="speaker">{speaker}</div>
            <div className="sanskrit-text">{verse.sanskrit}</div>
            <div className="meaning">{meaning}</div>
            <div className="verse-text">{verse.main}</div>
        </div>
    );
};

export default VerseDisplay;