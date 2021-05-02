import { useState,useEffect} from 'react'
import TextField from '@material-ui/core/TextField'
import {Button,Container} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import * as Utils from './BL'
import * as UtilsSubs from './BL Subs'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function AddSubComp (props)

{  const [ChossenMovie,setChossenMovie] = useState('')

  const [NewSub,setNewSub] = useState({MemberID :props.IdOfMember,MovieID:'' ,Date:''})
  const [MovieList,setMovieList] = useState([])
  const classes = useStyles();

  useEffect(() =>
  {  
   getMovies()
  }, [props] )////thst's the only wat i got the all Movies---is that OK?
 
  const getMovies =async()=>
  {
   let SubList = await Utils.getAllMovies()
   setMovieList(SubList);
  }

  const handleChange = (event) => {
        setNewSub((updater, callback)=>({...NewSub,MovieID:event.target.value}))
  };    

 const Subscribe =async(e)=>
 {    
     setNewSub(()=>({...NewSub,MovieID:ChossenMovie}))
     await UtilsSubs.addSub(NewSub)
 }


 
    return(
    <Container>
    <Card>
    
    <TextField className={classes.formControl} type='date' onChange={e => setNewSub({...NewSub,Date:e.target.value}    )}/>
     <br/>
        <Select className={classes.formControl}
          value={NewSub.MovieID}
          onChange={handleChange}
        >
          <MenuItem value="" >
            <em>None</em>
          </MenuItem>
          {
            MovieList.map(item =>{
              return <MenuItem key={item._id} value={item._id}>{item.Name}</MenuItem>
            })
          }
        
        </Select>
        <FormHelperText className={classes.formControl}>Choose Your Movie</FormHelperText><br/>

        <Button size="small"onClick={()=> Subscribe()}>Subscribe</Button>


        <br/>

    

         
      





       </Card>
    </Container>
    )
  
}


export default AddSubComp;
