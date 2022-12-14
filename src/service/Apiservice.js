import axios from '../utils/AxiosCustomize'

const getAllDataFE02 = () => {
    return axios.get('fe02-typical')
}
const getAllDataFE07Div1 = () => {
    return axios.get('fe07-div1')
}
const getAllDataFE07Div2 = () => {
    return axios.get('fe07-div2')
}
const getAllDataPortfolio = () => {
    return axios.get('portfolio')
}
const getAllDataStDigitalIcon = () => {
    return axios.get('st-digital-icon')
}
const getAllDataStDigitalImage = () => {
    return axios.get('st-digital-image')
}
export {getAllDataFE02,getAllDataFE07Div1,getAllDataFE07Div2,getAllDataPortfolio,
    getAllDataStDigitalIcon,getAllDataStDigitalImage}