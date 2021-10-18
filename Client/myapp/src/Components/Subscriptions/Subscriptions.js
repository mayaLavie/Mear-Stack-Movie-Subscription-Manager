import { Container } from '@material-ui/core'
import { useState,useEffect} from 'react'
import * as UtilsMembers from './../services/BL Members'
import MemberComp from './../Members/Member'

import {Button, container} from '@material-ui/core';


function SubscriptionsComp (props)
{   
    const [Members,setMembers] = useState([])

  useEffect(()  =>
  {
    AllMembers();
   
  }, [] )

    
  const AllMembers = async () =>
  {
    setMembers(await UtilsMembers.getAllMembers());
  } 

 const AddNewMember = () =>
 {
  props.history.push('/AddMember')

 }
 
    return(<div>
      <Container>
        
                    <Button   variant="outlined" onClick={()=> AddNewMember()}>New Member</Button> 
                    {
                      Members.map(item =>
                        {
                          return <div key={item._id}><MemberComp dataToMember={item}/></div>
                        })
                    }                        
       

       </Container>


    </div>)
  
}


export default SubscriptionsComp;