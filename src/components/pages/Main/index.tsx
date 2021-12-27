import React, { useState } from "react"
import { QuardantBox, DotsTable } from "../../common";
import './Main.css';

interface dotsData {
    label: string;
    vision: number;
    ability: number;
}



const Main = () => {
    const dotsFromStorage: any = localStorage.getItem("dots");

    const [dots, setdots] = useState<dotsData[]>(JSON.parse(dotsFromStorage) ? JSON.parse(dotsFromStorage) : []);
    const [startsPos, setstartsPos] = useState<number[]>([]);


    const storeDots = (dots: any) => {
        localStorage.setItem("dots", JSON.stringify(dots))
    }

    const addNewDot = () => {
        let newObj = {
            label: 'New',
            vision: 50,
            ability: 50,
        }
        setdots([...dots, newObj])
        storeDots([...dots, newObj])
    }


    const deleteRow = (selectedIndex: number) => {
        let newDots: dotsData[] = []
        dots.map((item, index) => { if (index !== selectedIndex) newDots.push(item) })
        setdots(newDots)
        storeDots(newDots)
    }

    const onChangeVal = (event: React.ChangeEvent<HTMLInputElement>, type: string, selectedIndex: number) => {

        let { min, max, value } = event.target
        if (value >= min || value <= max) {
            let newDots: dotsData[] = dots.map((item, index) => {
                if (selectedIndex == index) {
                    let newDot: dotsData = {
                        ...item,
                        [type]: value,
                    }
                    return newDot
                }
                else {
                    return item
                }
            })
            setdots(newDots)
            storeDots(newDots)
        }
        return null;
    }



    const dragOver = (e: any, selectedIndex: number) => {
        let newDots: dotsData[] = []
        newDots = dots.map((item, index) => {
            if (index == selectedIndex) {
                let newDot: any = {}
                newDot.vision = (e.clientX - startsPos[2]) / 4 + item.vision
                newDot.ability = (startsPos[3] - e.clientY  ) / 4 + item.ability
                newDot.label = item.label
                return newDot
            }

            else {
                return item
            }
        })
        setdots(newDots)
        storeDots(newDots)
    }

    const dragStart = (e: any, selectedIndex: number) => {
        let newPos: number[] = []
        newPos[0] = dots[selectedIndex].vision
        newPos[1] = dots[selectedIndex].ability
        newPos[2] = e.clientX
        newPos[3] = e.clientY
        setstartsPos(newPos)
    }


    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    return (
        <div className="main">


            <div className="container">

                <QuardantBox
                    onDragOver={onDragOver}
                    dragStart={dragStart}
                    dragOver={dragOver}
                    dots={dots}
                />

                <DotsTable
                    dots={dots}
                    addNewDot={addNewDot}
                    onChangeVal={onChangeVal}
                    deleteRow={deleteRow}
                />


            </div>



        </div>
    )
}
export default Main;

