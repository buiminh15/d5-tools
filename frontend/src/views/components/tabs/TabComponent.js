import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { features } from '../../../models/features'
import { featuresComtor } from '../../../models/featuresComtor'
import { featuresExcel } from '../../../models/featuresExcel'
import ContentTabComponent from './ContentTabComponent'

export default function TabComponent(props) {
    const selectListArr = [
        { category: 'tester', selectedItem: 'Data generator', list: features },
        // { category: 'dev', selectedItem: 'Apple1', list: ['Apple1', 'Orange', 'Mango'] },
        // { category: 'pm', selectedItem: 'Apple2', list: ['Apple2', 'Orange', 'Mango'] },
        { category: 'comtor', selectedItem: 'File translator', list: featuresComtor },
        { category: 'excel', selectedItem: 'Tool Admin', list: featuresExcel },
    ]
    return (
        <Tabs defaultActiveKey={props.defaultActiveKey} id="uncontrolled-tab-example">
            { props.list.map(item => (
                <Tab eventKey={item.key} title={item.value}>
                    <div className="container">
                        {selectListArr.map(list => list.category === item.key ? 
                            (<ContentTabComponent list={list} category={item.key}/>) : null)}
                    </div>
                </Tab>
            ))
            }
        </Tabs>
    )
}
