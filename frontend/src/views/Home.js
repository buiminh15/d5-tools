import React from 'react'
import { Nav, Tab, Tabs } from 'react-bootstrap'
import CardList from './components/card/CardList'
import Header from './components/common/Header'
import TabComponent from './components/tabs/TabComponent'
export default function Home() {
    const list = [
        { key: 'tester', value: 'Tester' },
        { key: 'dev', value: 'Dev' },
        { key: 'pm', value: 'PM' },
        { key: 'comtor', value: 'Comtor' },
        { key: 'excel', value: 'Excel' },
    ]
    const defaultActiveKey = 'tester'
    return (
        <div className='container'>
            <Header />
            <TabComponent list={list} defaultActiveKey={defaultActiveKey} />

        </div>
    )
}
