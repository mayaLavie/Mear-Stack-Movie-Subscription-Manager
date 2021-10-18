import { Button } from '@material-ui/core';
import {useState, useEffect} from 'react'
import * as Utils from '../services/BL Movies'


function AddMovieComp (props)
{   
  const [movieData, setmovieData] = useState({Name :'',YearPremiered :'',Genres:[]});
 

  useEffect(() =>
  {  
    
    }, [] )

  
 const  createMovie =  (e) =>
      { 
        e.preventDefault();
        Utils.addMovie(movieData)
        props.history.push("/Movies");
      }
    return(<div>

<form onSubmit={e=>createMovie(e)}>
          <h3>Add A new Movie </h3>
          Name:<input type="text" onChange={e=>setmovieData({...movieData,Name:e.target.value})}/><br/>
          Premiered:<input type="text" onChange={e=>setmovieData({...movieData,YearPremiered:e.target.value})}/><br/>
          Genres:<input type="text" onChange={e=>setmovieData({...movieData,Genres:e.target.value})}/><br/>
          ImageUrl:<input type="text" onChange={e=>setmovieData({...movieData,ImageUrl:e.target.value})}/><br/>

          <input type="submit" value="Create" /> 


          



      </form>




    </div>)
  
}


export default AddMovieComp;
