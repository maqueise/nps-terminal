import axios from 'axios'
import qs from 'querystring'

const axiosInstance = axios.create({
  baseURL:"http://192.168.2.156:4000/api/",
})
axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const registerNps = async(scale:number)=>{
 const response = await axiosInstance('nps/store',{
    method:"POST",
    data:qs.stringify({pontuacao:scale})
  })

  return response

}


export {registerNps}
