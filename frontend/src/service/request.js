
import axios from 'axios';
import { URL_SERVER } from '../helpers/constant'

const get = (api) => {
  return axios.get(URL_SERVER.BASE_URL + api)
}
const post = (api, body, config) => {
  return axios.post(URL_SERVER.BASE_URL + api, body, config)
}

export default { get, post }

