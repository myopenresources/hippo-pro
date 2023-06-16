import axios from 'axios'

const AxiosUtil = axios.create({
  timeout: 3000,
  withCredentials: true
})

export default AxiosUtil
