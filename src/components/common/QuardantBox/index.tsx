import React from 'react';
import { Dot } from '../../common';
import "./QuardantBox.css"

interface dotsData {
    label: string;
    vision: number;
    ability: number;
}

interface IProps {
    dots: dotsData[],
    onDragOver: any,
    dragOver: any,
    dragStart: any
}


const QuardantBox = (props: IProps) => {

    const { dots, onDragOver, dragStart, dragOver } = props

    const labels = () => {
        return (
            <>
                <div className='challengers'>Challengers</div>
                <div className='leaders'>Leaders</div>
                <div className='niche'>Niche Players</div>
                <div className='visionaries'>Visionaries</div>
            </>

        )
    }

    return (
        <div onDragOver={(event) => onDragOver(event)} className="quardant"  >

            <div style={{ position: 'absolute' }}>
                <div className="horizontal" />
                <div className="vertical" />
            </div>

            {labels()}

            {dots?.map((item, index) => {
                return (
                    <Dot
                        key={index}
                        item={item}
                        selectedIndex={index}
                        dragStart={dragStart}
                        dragOver={dragOver}
                        onDragOver={onDragOver}
                    /> 
                )
            })}


        </div>
    )
}

export default QuardantBox