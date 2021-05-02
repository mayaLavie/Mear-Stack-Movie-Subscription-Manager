import axios from 'axios'

export  const isAuth = async () =>
{ 
   if(sessionStorage['TOKEN'])
   {
            try{
              await  axios.post("http://localhost:8000/api/users/authToken",{accessToken:sessionStorage['TOKEN']})

             // console.log("send token")
               return true 
               
            }
            catch{
              // console.log("didnt catch")

                return false
            }
   }
   else{
    //  console.log("token not exist")

      return false
      
   }

}

