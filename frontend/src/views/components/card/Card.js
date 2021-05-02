import React from 'react';
import { Link } from 'react-router-dom';
import { URL_SERVER } from '../../../helpers/constant'
export default function Card({ title, subTitle, path, description }) {
  const toolAdminPath = URL_SERVER.BASE_URL + URL_SERVER.DOWNLOAD_TOOL_ADMIN_FILE
  const toolRedminePath = URL_SERVER.BASE_URL + URL_SERVER.DOWNLOAD_TOOL_REDMINE_FILE
  return (
    <div className="container bg-white h-100 p-3">
      <div className="font-weight-bold">{subTitle}</div>
      <br />
      <div className="">{description}</div>
      <br />
      <div className="">
        {
          path === '/tool-admin/' &&
          <a href={toolAdminPath} target="_blank" rel="noopener noreferrer" >
            {title}
          </a>
        }
        {
          path === '/tool-redmine/' &&
          <a href={toolRedminePath} target="_blank" rel="noopener noreferrer" >
            {title}
          </a>
        }
        {
          (path !== '/tool-redmine/' || path !== '/tool-admin/') &&
          <Link className="text-uppercase" to={path}>
            {title}
          </Link>
        }


        {/* {
          path === '/tool-admin/' ?
            <a href={toolAdminPath} target="_blank" rel="noopener noreferrer" >
              {title}
            </a> :
            <Link className="text-uppercase" to={path}>
              {title}
            </Link>
        } */}
      </div>
    </div>
  );
}
