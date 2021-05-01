import React, { useState, useCallback, useMemo, useEffect } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import Header from '../components/common/Header';
import { CATEGORY } from '../components/common/constant';
import { URL_SERVER } from '../../helpers/constant';
import { useGlobalContext } from '../../context/context';
import request from '../../service/request';
import DataTable from 'react-data-table-component';
import { TESTCASE_FIELDS } from '../../helpers/constant'
import fileDownload from 'js-file-download'

export default function TestcaseFileGenerator() {
  var {
    getFeature,
  } = useGlobalContext();

  const feature = getFeature(CATEGORY.TESTCASE_FILE_GENERATOR);
  const CustomTitle = ({ row }) => (
    <div>
      {}
      <div>
        <div data-tag="allowRowEvents" style={{ color: 'grey', overflow: 'hidden', whiteSpace: 'wrap', textOverflow: 'ellipses' }}>
          { }
          {row.testcase}
        </div>
      </div>
    </div>
  );

  var [fields, setFields] = useState([])
  var [selectedField, setSelectedField] = useState('login_testcases')
  var [selectedIds, setSelectedIds] = useState([])
  var [data, setData] = useState([])

  const columns = useMemo(() => [
    {
      name: 'Testcases',
      selector: 'testcase',
      sortable: true,
      maxWidth: '60%',
      cell: row => <CustomTitle row={row} />,
    },
  ])

  const handleFields = () => {
    const arr = []
    for (const key in TESTCASE_FIELDS) {
      arr.push(TESTCASE_FIELDS[key])
    }
    setFields(arr)
  }

  useEffect(() => {
    handleFields()
    getTableData()
  }, [selectedField])

  const getTableData = async () => {
    try {
      const res = await request.get(URL_SERVER.GET_TESTCASES + '/' + selectedField)
      if (res.status === 200) {
        console.log('res  sss ', res)
        setData(res.data.testcases[0].testcases)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = (e) => {
    setSelectedField(e.target.name.toLowerCase().replaceAll(' ', '_'))
  }
  const handleChange = useCallback(state => setSelectedIds(state.selectedRows.map(row => row._id)));

  const handleExport = async () => {
    const body = {
      field_name: selectedField,
      ids: selectedIds
    }
    const res = await request.post(URL_SERVER.DOWNLOAD_TESTCASES_FILE, body, { responseType: "arraybuffer" })
    const blob = new Blob([res.data], {
      type:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    fileDownload(blob, 'filename.xlsx');
  }

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="s-title text-center text-capitalize">
          {feature.title}
        </h1>
        <h2 className="s-sub-title text-center text-capitalize">
          {feature.subTitle}
        </h2>
        <div className="row">
          <div className="col-3 border rounded">
            {fields.length > 0 && fields.map(field =>
              <button key={field} name={field}
                className="btn btn-outline-primary btn-sm my-2 w-100 text-wrap"
                onClick={e => handleClick(e)}>{field}</button>
            )}
          </div>
          <div className="col-9 border rounded">
              <button className="btn btn-primary" onClick={handleExport}>Export</button>
              {data.length > 0 && <DataTable
                columns={columns}
                selectableRowsComponent={Checkbox}
                selectableRowsComponentProps={{ color: "primary" }}
                data={data}
                noHeader
                selectableRows
                selectableRowsHighlight
                pagination
                onSelectedRowsChange={handleChange}

              />}
          </div>
        </div>
      </div>

    </>
  )
}
