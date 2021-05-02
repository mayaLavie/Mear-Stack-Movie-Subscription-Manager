import {useState, useEffect} from 'react'
import * as UtilsMembers from './BL Members'


function AddMemberComp (props)
{   
  
   const [idEdit, setidEdit] = useState(props.match.params.id);

  const [MemberData, setMemberData] = useState({Name :'',Email :'',City:''});
 
  useEffect(() =>
  {  
    
  }, [] )

  const  createMember = async  (e) =>
  { 
    e.preventDefault();
   await UtilsMembers.addMember(MemberData)
    props.history.push("/Subscriptions");
  }


return(<div>

     <form onSubmit={e=>createMember(e)}>
          <h3>Add A new Member </h3>
          Name:<input type="text" onChange={e=>setMemberData({...MemberData,Name:e.target.value})}/><br/>
          Email:<input type="text" onChange={e=>setMemberData({...MemberData,Email:e.target.value})}/><br/>
          City:<input type="text" onChange={e=>setMemberData({...MemberData,City:e.target.value})}/><br/>

          <input type="submit" value="Create" /> 


          
      </form>


     

    </div>)
  
}


export default AddMemberComp;
