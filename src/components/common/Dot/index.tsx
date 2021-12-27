import React from 'react';
import "./Dot.css";

interface dotsData {
    label: string;
    vision: number;
    ability: number;
}

interface Iprops {
    selectedIndex: number;
    dragStart:  any;
    dragOver:  any; 
    onDragOver:  any;  
    item: dotsData;  
}




const Dot = (props: Iprops) => {

    const {selectedIndex,  dragStart , dragOver,onDragOver , item} = props

    return (
        <div
            key={selectedIndex}
            draggable
            onDragOver={onDragOver}
            onDragStart={(e) => dragStart(e, selectedIndex)}
            onDragEnd={(e) => dragOver(e, selectedIndex)}
            style={{ position: 'absolute', left: item.vision * 4 - 7, bottom: item.ability * 4  -25, backgroundColor: 'transparent' }}>

            <div className="dot" />

            <div className="dotLabel">
                {item.label}
            </div>
        </div>
    )
}

export default Dot