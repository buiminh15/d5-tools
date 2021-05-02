import React, { useEffect } from 'react';
import { URL_EMAIL_GENERATOR } from '../../helpers/constant'

export default function GuidGenerator(props) {
    useEffect(() => {
        window.open(URL_EMAIL_GENERATOR, "_blank")
        props.history.push('/')
    });
    return (
        <div>

        </div>
    )
}
