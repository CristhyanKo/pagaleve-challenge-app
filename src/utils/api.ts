import axios from 'axios'

const api = axios.create({ baseURL: <string>process.env.REACT_APP_API_URL, cancelToken: new axios.CancelToken((cancel) => cancel) })

export default api
