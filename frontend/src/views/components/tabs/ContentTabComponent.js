import React from 'react'
import LeftContentTabComponent from './LeftContentTabComponent'
import FeatureCardList from '../card/FeatureCardList'

export default function ContentTabComponent(props) {
    const renderRightContent = () => {
        switch (props.category) {
            case 'tester':
                return <FeatureCardList features={props.list.list}/>
            case 'pm':
                return <FeatureCardList />
            case 'dev':
                return <FeatureCardList />
            case 'comtor':
                return <FeatureCardList features={props.list.list}/>
            case 'excel':
                return <FeatureCardList features={props.list.list}/>
            default:
                break;
        }
    }
    return (
        <div className='row'>
            <div className="col-3" style={{ paddingLeft: 0, paddingRight: 0, borderRadius: 0 }}>
                <LeftContentTabComponent selectList={props.list} />
            </div>
            <div className="col-9" style={{ paddingLeft: 0, paddingRight: 0, height: '80vh' }}>
                {renderRightContent()}
            </div>
        </div>
    )
}
