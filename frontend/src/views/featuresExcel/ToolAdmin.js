import React, { useEffect } from 'react';
import request from '../../service/request';
import Header from '../components/common/Header';
import { useGlobalContext } from '../../context/context';
import { CATEGORY_EXCEL } from '../components/common/constant';
import { URL_SERVER } from '../../helpers/constant';
import fileDownload from 'js-file-download'

export default function ToolAdmin(props) {
    var {
        getFeatureExcel
    } = useGlobalContext();

    const feature = getFeatureExcel(CATEGORY_EXCEL.TOOL_ADMIN);

    useEffect(() => {
        downloadFile()
    })

    const downloadFile = async () => {
        try {
            // const res = await request.get(URL_SERVER.DOWNLOAD_TOOL_ADMIN_FILE)
            // const url = window.URL.createObjectURL(new Blob([res.data]));
            // const link = document.createElement('a');
            // link.href = url;
            // link.setAttribute('download', 'ToolAdmin.xlsm');
            // document.body.appendChild(link);
            // link.click();
            // console.log('dasda ', res)
            // const blob = new Blob([res.data], {
            //     type:
            //         'application/vnd.ms-excel.sheet.macroEnabled.12',
            // });
            // fileDownload(blob, 'ToolAdmin.xlsm');
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Header />
            <div>
                <div className="container">
                    <a href={'http://localhost:4000/api/v1' + URL_SERVER.DOWNLOAD_TOOL_ADMIN_FILE} >Download</a>
                    <a href={'https://stackoverflow.com/'} >Download</a>
                </div>
            </div>
        </>
    );
}
