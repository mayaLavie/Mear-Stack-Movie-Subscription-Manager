import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import * as Utils from '../services/BL Movies'
import * as UtilsSubs from '../services/BL Subs'
import * as UtilsMembers from '../services/BL Members'

import React from 'react';

import {Button, Container} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import SubsWComp from './SubsW'



const useStyles = makeStyles((theme) => ({
  root: {
   maxWidth: 800,
    border : 'solid #e1e1e1',
  },
  media: {
    height: 0,
    paddingTop: '16:9', 
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
 
}));



function SubWComp (props)
{ 
   const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };  

  let history = useHistory();
  const [Genres,setGeners]=useState([]);
  const [Id,setId] = useState();
  const [Subs,setSubs] = useState([]);
  const [MemberName,setMemberName] = useState([])
  
  
  
  useEffect(() =>
  {  
     setGeners(props.dataToMovie.Genres)
     setId(props.dataToMovie._id)
     SubsMovie();
    }, [] )

  

    const deleteMovie = async() =>
      { 
       await Utils.deleteMovie(Id)
       window.location.reload('./Movies')
      }

    const SubsMovie = async () =>
    { 
      
                        //getting the exact MemberId for the requested Movie
                        let SubsByMovie =  await UtilsSubs.getSubByMovie(props.dataToMovie._id)
                      
                        //getting all Members
                        let Creatures = await UtilsMembers.getAllMembers()

                         let Answer2 = SubsByMovie.map(M => 
                        { 
                                 return Creatures.filter(C => 
                                  {
                                    return  C._id === M.MemberID
                                  })
                        })
                      
                            setMemberName(Answer2);

    }


    return(<div>

       <Container style={{width: '300%', margin: '2%'}} >


                <Card  className={classes.root}>
                <CardHeader
                          title={props.dataToMovie.Name}
                
                           subheader={props.dataToMovie.Genres.join(' - ')} />
                          <CardMedia
                            className={classes.media}
                            image="/static/images/cards/paella.jpg"
                            title="Paella dish" />

                          <img src={props.dataToMovie.ImageUrl}/>

                          {MemberName.map((item,index) => {
                           return <div  key={index}><SubsWComp  dataToSubsW={item}  /></div> })}
                            
                          <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Premierd {props.dataToMovie.YearPremiered}
                                  </Typography>
                                        
                                    </CardContent>
                                        <CardActions disableSpacing>
                                                 <Button  variant="outlined" onClick={()=> (history.push('/EditMovie/'+Id))}>Edit Movie</Button>
                                        <IconButton aria-label="delete" color="secondary"  onClick={()=> deleteMovie(Id)}>                                
                                                 <DeleteIcon />
                                        </IconButton >
                    
                                        <IconButton
                                                  className={clsx(classes.expand, {
                                                    [classes.expandOpen]: expanded,
                                                  })}
                                                  onClick={handleExpandClick}
                                                  aria-expanded={expanded}
                                                  aria-label="show more">
                                            <ExpandMoreIcon />
                                          </IconButton>
                                        </CardActions>
                                                
                                         <Collapse in={expanded} timeout="auto" unmountOnExit>
                                          <CardContent>
                                        <Typography paragraph>On Screen:</Typography>
                                        <Typography paragraph >                                    
                                </Typography>
                        </CardContent>
                  </Collapse>
                </Card>               
      </Container>


    </div>)
  
}


export default SubWComp;
