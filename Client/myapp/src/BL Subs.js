import axios from 'axios'
import * as Auth from './Auth'

const Url = 'http://localhost:8000/api/subscriptions/'



export const getAllSubs = async () =>
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

export const getSubByMovie = async (Movieid) =>
{
    let AuthStatus = await Auth.isAuth()

    if(AuthStatus === true)
    {
        let resp = await axios.get('http://localhost:8000/api/subscriptions/Movieid/'+Movieid);
        return resp.data
    }
    else{
        return alert('You are Not Loggen in')
    }
   
}



export const getSubByMember = async (Memberid) =>
{
    let AuthStatus = await Auth.isAuth()

    if(AuthStatus === true)
    {
        let resp = await axios.get('http://localhost:8000/api/subscriptions/Memberid/'+Memberid);
        return resp.data
    }
    else{
        return alert('You are Not Loggen in')
    }
  
}

export const deleteSubByMember = async (Memberid) =>
{  
    let AuthStatus = await Auth.isAuth()

    if(AuthStatus === true)
    {
        let resp = await axios.delete('http://localhost:8000/api/subscriptions/ByMemberid/'+Memberid);
        return resp.data
    }
    else{
        return alert('You are Not Loggen in')
    }
    

}

export const addSub = async (NewSub) =>
{   
    let AuthStatus = await Auth.isAuth()

    if(AuthStatus === true)
    {
        let resp = await axios.post(Url,NewSub);
        return resp.data  
    }
    else{
        return alert('You are Not Loggen in')
    }
    
    
}
