import React from "react"
import { Button, Form, Table } from "react-bootstrap";
import "./DotsTable.css"

interface dotsData {
    label: string;
    vision: number;
    ability: number;
}


interface IProps {
    dots: dotsData[],
    addNewDot:any,
    onChangeVal:any,
    deleteRow:any
}

const DotsTable = (props: IProps) => {

    const {dots,addNewDot ,onChangeVal ,deleteRow} = props

    return (
        <div className="tableContainer">

        <Button
            draggable
            onClick={addNewDot}
            className="addBtn"
            size="sm"
            variant="white">
            Add
        </Button>

        <Table className="table" size="sm" bordered variant="dark">
            <thead>
                <tr>
                    <th style={{ width: 240 }}>label</th>
                    <th >Vision</th>
                    <th >Ability</th>
                    <th >Delete</th>
                </tr>
            </thead>
            <tbody>
                {dots?.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <Form.Control
                                    className="formControl"
                                    value={item?.label}
                                    onChange={(e) => onChangeVal(e as any, "label", index)}
                                    size="sm"
                                    placeholder="50"
                                />

                            </td>
                            <td>
                                <Form.Control
                                    min={0}
                                    max={100}
                                    type="number"
                                    value={item?.vision}
                                    onChange={(e) => onChangeVal(e as any, "vision", index)}
                                    className="formControl"
                                    size="sm"
                                    placeholder="50"
                                />
                            </td>

                            <td>
                                <Form.Control
                                    min={0}
                                    max={100}
                                    className="formControl"
                                    type="number"
                                    value={item?.ability}
                                    onChange={(e) => onChangeVal(e as any, "ability", index)}
                                    size="sm"
                                    placeholder="50"
                                />
                            </td>

                            <td>
                                <Button
                                    className="deleteBtn"
                                    size="sm"
                                    variant="white"
                                    onClick={() => deleteRow(index)}  >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    </div>
    )
}

export default DotsTable