import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { features } from '../../models/features'
import Dropdown from 'react-dropdown';
import faker from "faker";

export default function DataGenerator() {
    var init = {
        number: null,
        result: null,
        format: "JSON",
        types: [
            {
                title: "Name",
                subtypes: [
                    { title: "Full name", method: faker.name.findName },
                    { title: "First name", method: faker.name.firstName },
                    { title: "Last name", method: faker.name.lastName }
                ]
            },
            {
                title: "Address",
                subtypes: [
                    { title: "Country", method: faker.address.country },
                    { title: "State", method: faker.address.state },
                    { title: "City", method: faker.address.city },
                    { title: "Street", method: faker.address.streetAddress },
                    { title: "Zip code", method: faker.address.zipCode }
                ]
            },
            {
                title: "Number",
                subtypes: [
                    { title: "Random number", method: faker.random.number },
                    { title: "Phone number", method: faker.phone.phoneNumber }
                ]
            },
            {
                title: "Internet",
                subtypes: [
                    { title: "UUID", method: faker.random.uuid },
                    { title: "Email", method: faker.internet.email },
                    { title: "Username", method: faker.internet.userName },
                    { title: "Password", method: faker.internet.password },
                    { title: "Domain name", method: faker.internet.domainName },
                    { title: "IP Address", method: faker.internet.ip }
                ]
            }
        ],
        selectedItems: [
            { title: "UUID", type: { title: "UUID", method: faker.random.uuid }, arrayLength: "" },
            { title: "Full name", type: { title: "Full name", method: faker.name.findName }, arrayLength: "" },
            { title: "Email", type: { title: "Email", method: faker.internet.email }, arrayLength: "" },
            { title: "Phone number", type: { title: "Phone number", method: faker.phone.phoneNumber }, arrayLength: "" },
            { title: "Country", type: { title: "Country", method: faker.address.country }, arrayLength: "" }
        ]
    }
    const feature = features.filter(item => item.name === 'data-generator')[0]
    const optionsValues = [
        'JSON', 'XML', 'CSV', 'YAML', 'SQL'
    ];
    const [options, setOptions] = useState(optionsValues);
    var [format, setFormat] = useState(init.format);

    return (
        <div>
            <section>
                <div class="inner">
                    <h1 class="s-title">{feature.title}</h1>
                    <h2 class="s-sub-title">{feature.subTitle}</h2>
                    <div class="s-block">
             
                    </div>
                </div>
            </section>
        </div>
    )
}
