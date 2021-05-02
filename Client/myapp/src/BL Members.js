import axios from 'axios'
import * as Auth from './Auth'

const Url = 'http://localhost:8000/api/members/'



export const getAllMembers = async () =>
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

export const getMember = async (id) =>
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


export const editMember = async (id,Member) =>
{   
    let AuthStatus = await Auth.isAuth()

    if(AuthStatus === true)
    {
        let resp = await axios.put(Url+id,Member);
        return resp.data
    }
    else{
        return alert('You are Not Loggen in')
    }

   
}

export const deleteMember = async (id) =>
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


export const addMember = async (NewMember) =>
{   
    let AuthStatus = await Auth.isAuth()

    if(AuthStatus === true)
    {
        let resp = await axios.post(Url,NewMember);
        return resp.data
    }
    else{
        return alert('You are Not Loggen in')
    }
   
}
