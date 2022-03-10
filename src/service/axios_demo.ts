import axios from 'axios'

axios.defaults.baseURL = 'http://httpbon.org'
axios.defaults.timeout = 10000

axios.interceptors.request.use()
axios.interceptors.response.use()
