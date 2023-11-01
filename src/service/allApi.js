// import BASE_URL from "./baseUrl";
// import {commonStructure} from './commonStructure'
import BASE_URL from '../service/baseUrl'
import {commonStructure} from '../service/commonStructure'

export const userInquiryApi=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/express/user/add-inquiry`,body)
}