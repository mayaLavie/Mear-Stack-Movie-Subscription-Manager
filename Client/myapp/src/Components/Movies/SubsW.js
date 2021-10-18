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



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    border : 'solid #e1e1e1',
    

  },
  media: {
    height: 0,
    paddingTop: '16:9', //
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
 
}));



function SubsWComp (props)
{ 
   
  let history = useHistory();
  const [Watched,setWatched]=useState([]);


  
  
  useEffect(() =>
  {  
     setWatched(props.dataToSubsW)
    }, [] )

  

    

 



     
    

    return(<div>

                   <ul>
                     {Watched.map((item,index) => {
                           return <li key={index}>{item.Name} </li> })
                           } 
                  </ul>


    </div>)
  
    }


export default SubsWComp;
