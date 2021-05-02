import { responsiveFontSizes } from '@material-ui/core'
import axios from 'axios'
import * as Auth from './Auth'

const Url = 'http://localhost:8000/api/movies/'



export const getAllMovies = async () =>
{    
    let AuthStatus = await Auth.isAuth()

    if(AuthStatus === true)
    {
        let resp = await axios.get(Url);
        return resp.data
    }
    else{
        return alert('You are Not Loggen in')
    }

   
}


export const addMovie = async (NewMovie) =>
{  
    let AuthStatus = await Auth.isAuth()

    if(AuthStatus === true)
    {
        let resp = await axios.post(Url,NewMovie);
        return resp.data
    }
    else{
        return alert('You are Not Loggen in')
    }

    
}



export const deleteMovie = async (id) =>
{   
    let AuthStatus = await Auth.isAuth()

    if(AuthStatus === true)
    {
        let resp = await axios.delete(Url+id);
        return resp.data
    }
    else{
        return alert('You are Not Loggen in')
    }
 
  

}





export const editMovie = async (id,Movie) =>
{   
    let AuthStatus = await Auth.isAuth()

    if(AuthStatus === true)
    {
        let resp = await axios.put(Url+id,Movie);
        return resp.data
    }
    else{
        return alert('You are Not Loggen in')
    }
 
    
}


export const getMovie = async (id) =>
{
    
    let AuthStatus = await Auth.isAuth()

    if(AuthStatus === true)
    {  
         let resp = await axios.get(Url+id);
         return resp.data
    }
    else{
        return alert('You are Not Loggen in')
    }
 
  
}

export const getMovieName = async (id) =>
{
    let AuthStatus = await Auth.isAuth()

    if(AuthStatus === true)
    {   console.log('inside get movieName')
            let resp = await axios.get(Url+id);
            if(resp != null)
            {  
                return resp.data.Name
              
            }
            else{
                return JSON.stringify(resp.data.name) 
            }
           
            
    }
    else{
        return alert('You are Not Loggen in')
    }
  
}





