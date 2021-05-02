import React from 'react'
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
        <>
            <Header />
            <div className='container'>
                <TabComponent list={list} defaultActiveKey={defaultActiveKey} />
            </div>
            <div className='d-flex justify-content-center'>
                Contributors: TuyenNV, DatCQ, CuongPV
            </div>
        </>
    )
}
