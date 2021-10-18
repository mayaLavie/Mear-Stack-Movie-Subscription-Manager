import axios from 'axios'

export  const isAuth = async () =>
{ 
   if(sessionStorage['TOKEN'])
   {
            try{
              await  axios.post("http://localhost:8000/api/users/authToken",{accessToken:sessionStorage['TOKEN']})

             
               return true 
               
            }
            catch{
              

                return false
            }
   }
   else{
    

      return false
      
   }

}

