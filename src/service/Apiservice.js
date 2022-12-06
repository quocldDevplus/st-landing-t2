import axios from '../utils/AxiosCustomize'

const getAllDataFE02 = () => {
    return axios.get('fe02-typical')
}
const getAllDataFE07Div1 = () => {
    return axios.get('fe07-div1')
}
export {getAllDataFE02,getAllDataFE07Div1}