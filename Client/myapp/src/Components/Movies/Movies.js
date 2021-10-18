import {useState, useEffect} from 'react'
import * as Utils from '../services/BL Movies'
import MovieComp from './Movie'
import {Button,Container} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

function MoviesComp (props)
{   
  const [AllMovies,setAllMovies]=useState([]);
  const [Search ,setSearch]=useState('')
  
  const GetAllMovies = async () =>
  {
    setAllMovies (await Utils.getAllMovies());
 
  }

  useEffect(() =>
  {  
    GetAllMovies();
     
  }, [] )

   const filteredMovies = AllMovies.filter (movie =>{
    return movie.Name.toLowerCase().includes(Search.toLowerCase())
   })

    return(<div>
       
                <Container>
                        
                        <Button   variant="outlined" onClick={()=> GetAllMovies()}>All Movies</Button>
                        <Button   variant="outlined" onClick={()=> (props.history.push('/AddMovie'))}>New Movie</Button> 
                        <InputBase id="Standard-basic" lable="Standard" variant="outlined" 
                            placeholder="Search "onChange={e=>setSearch(e.target.value)}/>

                        {
                          filteredMovies.map(item =>
                            {
                              return <div key={item._id}><MovieComp dataToMovie={item}/></div>
                            })
                        }
     
                   </Container>
    </div>)
  
}


export default MoviesComp;
