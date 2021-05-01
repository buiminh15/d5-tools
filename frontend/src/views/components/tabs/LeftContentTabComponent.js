import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useGlobalContext } from '../../../context/context';

export default function LeftContentTabComponent(props) {
    var {
        selectedItemLeftContentTabComponent
    } = useGlobalContext();
    const [selectedItem, setSelectedItem] = useState(props.selectList.selectedItem)
    const handleChange = (index) => {
        setSelectedItem(props.selectList.list[index].title)
        selectedItemLeftContentTabComponent(index)
    }
    return (
        <ListGroup as="ul">
            {props.selectList.list.map((item, index) => (
                <ListGroup.Item as="li" key={index} active={selectedItem === item.title} onClick={() => handleChange(index)}>
                    {item.title}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
