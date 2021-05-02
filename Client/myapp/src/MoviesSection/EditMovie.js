import {useState, useEffect} from 'react'
import * as Utils from '../BL'


function EditMovieComp (props)
{   
  
   const [idEdit, setidEdit] = useState(props.match.params.id);

  const [movieEdit, setmovieEdit] = useState({Name :'',YearPremiered :'',Genres:[]});
 
  useEffect(() =>
  {  
    getMovie()
  }, [] )


   const getMovie = async () => {
        setmovieEdit(await Utils.getMovie(idEdit)) 
        console.table(movieEdit);
      }

  
   const editMovie = async  (e) => { 
        e.preventDefault();
        await Utils.editMovie(idEdit,movieEdit)
        props.history.push("/Movies");
      }



return(<div>

        <form onSubmit={e=>editMovie(e)}>
            <h3>Edit Movie </h3>
            Name:<input type="text" value ={movieEdit.Name} onChange={e=>setmovieEdit({...movieEdit,Name:e.target.value})}/><br/>
            Premiered:<input type="text"  value ={movieEdit.YearPremiered} onChange={e=>setmovieEdit({...movieEdit,YearPremiered:e.target.value})}/><br/>
            Genres:<input type="text"  value ={movieEdit.Genres} onChange={e=>setmovieEdit({...movieEdit,Genres:e.target.value})}/><br/>
            Image:<input type="text"  value ={movieEdit.ImageUrl} onChange={e=>setmovieEdit({...movieEdit,ImageUrl:e.target.value})}/><br/>

            <input type="submit" value="Save" />     
        </form>

     

    </div>)
  
}


export default EditMovieComp;
