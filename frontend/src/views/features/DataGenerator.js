// import React, { useState } from 'react'
// import TextareaAutosize from 'react-textarea-autosize';
// import { features } from '../../models/features'
// import Dropdown from 'react-dropdown';
// import faker from "faker";

// export default function DataGenerator() {
//     var init = {
//         number: null,
//         result: null,
//         format: "JSON",
//         types: [
//             {
//                 title: "Name",
//                 subtypes: [
//                     { title: "Full name", method: faker.name.findName },
//                     { title: "First name", method: faker.name.firstName },
//                     { title: "Last name", method: faker.name.lastName }
//                 ]
//             },
//             {
//                 title: "Address",
//                 subtypes: [
//                     { title: "Country", method: faker.address.country },
//                     { title: "State", method: faker.address.state },
//                     { title: "City", method: faker.address.city },
//                     { title: "Street", method: faker.address.streetAddress },
//                     { title: "Zip code", method: faker.address.zipCode }
//                 ]
//             },
//             {
//                 title: "Number",
//                 subtypes: [
//                     { title: "Random number", method: faker.random.number },
//                     { title: "Phone number", method: faker.phone.phoneNumber }
//                 ]
//             },
//             {
//                 title: "Internet",
//                 subtypes: [
//                     { title: "UUID", method: faker.random.uuid },
//                     { title: "Email", method: faker.internet.email },
//                     { title: "Username", method: faker.internet.userName },
//                     { title: "Password", method: faker.internet.password },
//                     { title: "Domain name", method: faker.internet.domainName },
//                     { title: "IP Address", method: faker.internet.ip }
//                 ]
//             }
//         ],
//         selectedItems: [
//             { title: "UUID", type: { title: "UUID", method: faker.random.uuid }, arrayLength: "" },
//             { title: "Full name", type: { title: "Full name", method: faker.name.findName }, arrayLength: "" },
//             { title: "Email", type: { title: "Email", method: faker.internet.email }, arrayLength: "" },
//             { title: "Phone number", type: { title: "Phone number", method: faker.phone.phoneNumber }, arrayLength: "" },
//             { title: "Country", type: { title: "Country", method: faker.address.country }, arrayLength: "" }
//         ]
//     }
//     const feature = features.filter(item => item.name === 'data-generator')[0]
//     const optionsValues = [
//         'JSON', 'XML', 'CSV', 'YAML', 'SQL'
//     ];
//     const [options, setOptions] = useState(optionsValues);
//     var [format, setFormat] = useState(init.format);

//     return (
//         <div>
//             <section>
//                 <div class="inner">
//                     <h1 class="s-title">{feature.title}</h1>
//                     <h2 class="s-sub-title">{feature.subTitle}</h2>
//                     <div class="s-block">
//                         <div>
//                             <form >
//                                 <div class="s-sub-block">
//                                     <label>
//                                         <input
//                                             required
//                                             placeholder="Number"
//                                             type="number"
//                                             min="1"
//                                             max="1000"
//                                             step="1"
//                                         />
//                                     </label>
//                                     <Dropdown
//                                         options={options}
//                                         onChange={(e) => setFormat(e.value)}
//                                         value={options[0]}
//                                     />
//                                     <button type="submit">Generate</button>
//                                 </div>
//                                 <div class="s-sub-block">
//                                     <table>
//                                         <thead>
//                                             <tr>
//                                                 <th>#</th>
//                                                 <th>Title</th>
//                                                 <th>Type</th>
//                                                 {
//                                                     format === 'JSON' &&
//                                                     <th>Array</th>
//                                                 }
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {init.selectedItems.map((item, index) => (
//                                                 <tr>
//                                                     <td>{index + 1}</td>
//                                                     <td>
//                                                         <label>
//                                                             <input
//                                                                 required
//                                                                 type="text"
//                                                                 maxlength="30"
//                                                                 value={item.title.trim()}
//                                                             />
//                                                         </label>
//                                                     </td>
//                                                     <td>
//                                                         <label>
//                                                             <select v-model="item.type">
//                                                                 <optgroup v-for="type in types">
//                                                                     <option
//                                                                         v-for="subtype in type.subtypes"

//                                                                     >{subtype.title}
//                                                                     </option>
//                                                                 </optgroup>
//                                                             </select>
//                                                         </label>
//                                                     </td>
//                                                     <td v-if="format === 'JSON'">
//                                                         <label>
//                                                             <input
//                                                                 placeholder="Length"
//                                                                 type="number"
//                                                                 min="1"
//                                                                 max="10"
//                                                                 step="1"
//                                                                 v-model="item.arrayLength"
//                                                                 class="array-length-field"
//                                                             />
//                                                         </label>
//                                                     </td>
//                                                     <td>

//                                                     </td>
//                                                 </tr>
//                                             ))}

//                                             <tr>
//                                                 <td colspan="4">

//                                                 </td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </form>
//                         </div>
//                         <div class="textarea-form">
//                             <TextareaAutosize
//                                 placeholder="The result appears here..."

//                                 class="s-textarea"
//                                 v-model="result"
//                             ></TextareaAutosize>
//                             <div class="icons">
//                                 <span>
//                                 </span>
//                                 <span >

//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                     <p class="s-description">{feature.description}</p>
//                 </div>
//             </section>
//         </div>
//     )
// }
