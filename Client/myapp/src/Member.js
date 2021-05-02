import { useState,useEffect} from 'react'
import * as UtilsSubs from './BL Subs'
import * as Utils from './BL'
import * as UtilsMembers from './BL Members'
import AddSub from './AddSub'
import {useHistory} from 'react-router-dom'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  Box: {
  border : 'solid',
  }
});




function MemberComp (props)
{   
  
  const classes = useStyles();
  let history = useHistory();

  const [NameDateOFSub,setNameDateOFSub] =useState([])
  const [MoviesIds,setMoviesIds] =useState([])
  const [Dates,setDates] =useState([])
  const [MovieNames,setMovieNames] =useState([])
  const [Bool,setBool] = useState(false);


  useEffect(()  =>
  {
         SubMember();
   
  }, [] )


const SubMember = async ()=>
{ 
  let SubsByMember =  await UtilsSubs.getSubByMember(props.dataToMember._id)

 if(SubsByMember != null){
                         //run on returned Subscription to get the requested Movie-Ids
                        let MoviesIds =SubsByMember.map(M => {return M.MovieID})
                        setMoviesIds(MoviesIds)

                         //run on returned Subscription to get the requested Dates
                        let Dates = SubsByMember.map(M =>{return M.Date})
                        setDates(Dates)
                        
                       //running on each MovieId to get the requested Movie Name .
                       // Hey Yaniv,How are you?? 
                       // Question -   How can I insert here an "if" if i recieve null from "getMovieName"
                        let TempArray  = await Promise.all( MoviesIds.map(async (Mid) =>
                        {return Utils.getMovieName(Mid)}))
                        setMovieNames(TempArray);
                        
                        NameAndDate()

 }else{
      console.log('this member didnt watched any movies');
 }

 

}
// Is this Function Is Ok? sometime it just doent happen..i dont know why :(
const NameAndDate = ()=>
{ console.log('how many time run')
 let TempArray2 = []
     MovieNames.map(i=>{
         Dates.filter(j=>{
               if(Dates.indexOf(j) === MovieNames.indexOf(i) )
                {   
                     TempArray2.push({Name:i,Date:j})
                     setNameDateOFSub(TempArray2);
                     console.log(NameDateOFSub);
                }
            })
        })
 }


const EditMember =()=>
{
  history.push('/EditMember/'+props.dataToMember._id)
}

const DeleteMember = async() =>
{ 
 await UtilsMembers.deleteMember(props.dataToMember._id)
 window.location.reload('./Subscriptions')
 await UtilsSubs.deleteSubByMember(props.dataToMember._id)
 
}


    return(<div>
    
    <Card     variant="outlined"
                 className={classes.root}>
      <CardContent>
      
        <Typography variant="h5" component="h2">
          {props.dataToMember.Name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.dataToMember.Email}<br/>
          {props.dataToMember.City}
        </Typography>
        <Box >

          
{
        ///and also here - doesnt matter how many movies ,the member has seen,it only return 1 on the react,
        // is it beacuse of the useEffect? couldn't get the problem....
       // THANK YOU !!!!


            <ul>{                                            
                    NameDateOFSub.map((item,index)=>{
                      return <li key={index}>{item.Name} at {item.Date}</li> })
                }     
            </ul>
}
        </Box>
     
        </CardContent>
                          <CardActions>
                            <Button size="small"onClick={()=> EditMember()}>Edit</Button>
                            <IconButton aria-label="delete" color="secondary" onClick={()=> DeleteMember()}>
                                        <DeleteIcon />
                            </IconButton >
                            <Button size="small"onClick={()=> (setBool(!Bool))}>Subscribe for New Movie</Button>
                          </CardActions>


                      <Box   style={{display : Bool? 'block' : 'none'  }}  >
                             <AddSub IdOfMember= {props.dataToMember._id}/>
                      </Box>

    </Card>                      
       

     


    </div>)
  
}


export default MemberComp;
