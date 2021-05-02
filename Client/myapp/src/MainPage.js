import {useEffect} from 'react'
import {Switch, Route,useHistory} from 'react-router-dom'
import { Button, Container } from "@material-ui/core"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MovieIcon from '@material-ui/icons/Movie';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



import LoginComp from './Login'
import MoviesComp from './MoviesSection/Movies'
import SubscriptionsComp from './Subscriptions'
import AddMovieComp from './MoviesSection/AddMovie'
import EditMovieComp from './MoviesSection/EditMovie'
import EditMemberComp from './EditMember'
import AddMemberComp from './AddMember'


const useStyles = makeStyles({
  root: {
    width: 1100,
  },
});

function MainPageComp (props)
{    
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0); 
  let history = useHistory();

  useEffect(() =>
  {
    
  }, [] )

  const LogOut =()=>
  {
    sessionStorage.clear()
    window.location.assign('/')
  }
 

    return(
        
     <Container>
    
              <BottomNavigation
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  showLabels
                  className={classes.root}
                                             >
                  <BottomNavigationAction label="Movies" icon={< MovieIcon/>}  onClick={()=> { history.push('/Movies');}} />
                  <BottomNavigationAction label="Subscriptions" icon={<SubscriptionsIcon />} onClick={()=> { history.push('/Subscriptions');}} />
                  <BottomNavigationAction label="Log Out" icon={<ExitToAppIcon/>} onClick={()=> LogOut()}/>
              </BottomNavigation>

              

      <Switch>
            <Route  path="/login" component={LoginComp} />
            <Route  path="/MainPage" component={MainPageComp} />
            <Route exact path="/Movies" component={MoviesComp} />
            <Route exact path="/AddMovie" component={AddMovieComp} />
            <Route exact path="/EditMovie/:id" component={EditMovieComp} />
            <Route exact path="/EditMember/:id" component={EditMemberComp} />
            <Route exact path="/AddMember" component={AddMemberComp} />

            <Route exact path="/Subscriptions" component={SubscriptionsComp} />
      </Switch>
    
   
  
      </Container>
    )
  
}


export default MainPageComp;
