import {useState, useEffect} from 'react'
import * as UtilsMembers from '../services/BL Members'


function EditMemberComp (props)
{   
  
   const [idEdit, setidEdit] = useState(props.match.params.id);

  const [MemberEdit, setMemberEdit] = useState({Name :'',Email :'',City:''});
 
  useEffect(() =>
  {  
    getMember()
  }, [] )


   const getMember = async () => {
        setMemberEdit(await UtilsMembers.getMember(idEdit)) 
      }

  



     const editMember = async  (e) => { 
           e.preventDefault();
           await UtilsMembers.editMember(idEdit,MemberEdit)
          props.history.push("/Subscriptions");
      }


return(<div>

        <form onSubmit={e=>editMember(e)}>
            <h3>Edit Member </h3>
            Name:<input type="text" value ={MemberEdit.Name} onChange={e=>setMemberEdit({...MemberEdit,Name:e.target.value})}/><br/>
            Premiered:<input type="text"  value ={MemberEdit.Email} onChange={e=>setMemberEdit({...MemberEdit,Email:e.target.value})}/><br/>
            City:<input type="text"  value ={MemberEdit.City} onChange={e=>setMemberEdit({...MemberEdit,City:e.target.value})}/><br/>

            <input type="submit" value="Save" />     
        </form>

     

    </div>)
  
}


export default EditMemberComp;
