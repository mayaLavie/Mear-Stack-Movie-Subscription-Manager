import './App.css';
import MainPageComp from './MainPage'
import LoginComp from './Login'

import {useHistory} from 'react-router-dom'
import {AppBar,Toolbar, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {useEffect,useState} from 'react';
import {isAuth} from './Auth';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(125),
    },
    title: {
      flexGrow: 1,
    },
  }));
  

function App ()
{         let history = useHistory();
        
        let [authStatus, setauthStatus] = useState(false)

        let Authorization = async () =>

        {  const StatusFromAuth = await isAuth()
            
            console.log(StatusFromAuth)
            setauthStatus(StatusFromAuth);
            console.log(authStatus);
        }

        useEffect(() => {
            
            Authorization()
            
        }, [authStatus])

        const classes = useStyles();

      
    return(
      
      <Container>
      

        <AppBar position="static">
        <Toolbar> <h3>IMDBIL</h3> 
        <h4 className={classes.menuButton}>
         { authStatus?    sessionStorage["UserName"] : ""}   
         </h4>
        </Toolbar>
        </AppBar>


      
     
  
      {
           authStatus? <MainPageComp/> : <LoginComp/>
      }
  
   
  </Container>
    )
  
}


export default App;
