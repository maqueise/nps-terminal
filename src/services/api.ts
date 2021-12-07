import axios from 'axios'
import qs from 'querystring'

const axiosInstance = axios.create({
  baseURL:"http://localhost:4000/api/",
})
axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const registerNps = async(scale:number)=>{
 const response = await axiosInstance('nps/store',{
    method:"POST",
    data:qs.stringify({pontuacao:scale})
  })

  return response

}

const getQuestions = async()=>{
  const response = await axiosInstance('question/list/active')
  return response
}


export {registerNps,getQuestions}
