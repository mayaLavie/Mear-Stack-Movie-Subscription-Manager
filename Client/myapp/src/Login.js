import {useState } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import {Button} from '@material-ui/core';
import Card from '@material-ui/core/Card';


function LoginComp  (props)
{    
    const [LoginData, setLoginData] = useState({UserName :'',Password :''});
   

    const  login =  (e) =>
      { 
        e.preventDefault();
        
         axios.post("http://localhost:8000/api/users/login",LoginData)
         .then(resp =>{
                         
                     if(resp.data.status === true)
                     {
                       sessionStorage.setItem('UserName',resp.data.user);
                        sessionStorage.setItem('TOKEN',resp.data.accessToken);
                        window.location.reload();
                     }else{
                      alert(resp.data.note);

                     }
        }     )
        
      }

 

 return(<div>
      <Card>
      <br/><br/>

      <form onSubmit={e=>login(e)}>
          <TextField id="filled-basic" label="UserName"  variant="filled"
             onChange={e=>setLoginData({...LoginData,UserName:e.target.value})}
          /><br/><br/>

          <TextField  type="password" id="filled-basic" label="Password" variant="filled" 
             onChange={e=>setLoginData({...LoginData,Password:e.target.value})}
          /><br/><br/>
          <Button   type="submit" value="login" variant="outlined" >Log In</Button>

      </form>
      </Card>
      <br/>
     
     
    </div>)
  
}


export default LoginComp;
