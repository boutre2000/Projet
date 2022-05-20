
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions } from '@mui/material';
import Button from '@mui/material/Button';

export default function Reset   ()  {
    
   const {token} = useParams();
   const [email, setEmail] = useState();
   const [password,setPassword] = useState()  ;
   const [error, setError] = useState(false);
   const [open, setOpen] = useState(false);

        
   const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
const handleLogin = () => {
      window.location.href='/' 
  };
        
      axios.get('http://localhost:4000/login/reset', { params: {resettoken: token}})
          .then((response)=> {
          console.log(response);
          if (response.data.message === 'Valid URL') {
           
              setEmail(response.data.useremail),
              
              setError(false)
        } else{
         
              setError(true)
          
        }
    }) 

    
    
    const   updatePassword= (e) => {
        e.preventDefault();
        
        
       axios.put(
            'http://localhost:4000/login/updatePass',
            {
              email,
              password,
              resettoken: token  } )
            .then(response=>{
          console.log(response.data);
          if (response.data.message === 'Mot de passe modifie') {
              setError(false)
              
          } else {
            setError(true)
          }
        })

    }
    
      
      if(error){
          return(
              <div>
                  <p>
                      Ce lien  n'est pas valide 
                  </p>
              </div>
          )
      }else{
        return (
            <div>
              <h1> Veuillez saisir votre nouveau mot de passe</h1>
              <form className="password-form" onSubmit={updatePassword}>
              <label>
             <p>Mot de passe</p>
          <input type="password" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' onChange={(event) => setPassword(event.target.value)} />
        </label>
                  
             
        <div className='button'>
          <button type="login" onClick={handleClickOpen}>Modifier</button>
        </div>
              </form>
      
			<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		  >
			<DialogTitle id="alert-dialog-title">
			  {" Mot de passe modifié "}
			</DialogTitle>
			<DialogContent>
			  <DialogContentText id="alert-dialog-description">
			 Votre mot de passe a bien été modifié, vous pouvez maintenant vous connecter !  .
			  </DialogContentText>
			</DialogContent>
            <DialogActions>
          <Button onClick={handleLogin}> Se connecter </Button>
        </DialogActions>
			</Dialog>
         
            </div>
          );
        
  }
}


Reset.propTypes = {
    // eslint-disable-next-line react/require-default-props
    match: PropTypes.shape({
      params: PropTypes.shape({
        token: PropTypes.string.isRequired,
      }),
    }),
  };
  


  /*


  import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';




export default class Reset extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      updated: false,
      isLoading: true,
      error: false,
    };
  }

  async componentDidMount() {
  
    try {
      const response = await axios.get('http://localhost:4000/login/reset', {
        params: {
          resettoken: this.props.match.params.token,
        },
      });
      // console.log(response);
      if (response.data.message === 'Valid URL') {
        this.setState({
          email: response.data.email,
          updated: false,
          isLoading: false,
          error: false,
        });
      }
    } catch (error) {
      this.setState({
        updated: false,
        isLoading: false,
        error: true,
      });
    }
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updatePassword = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
  
    try {
      const response = await axios.put(
        'http://localhost:4000/login/updatePass',
        {
          email,
          password,
          
        },
      );
      console.log(response.data);
      if (response.data.message === 'Mot de passe modifie') {
        this.setState({
          updated: true,
          error: false,
        });
      } else {
        this.setState({
          updated: false,
          error: true,
        });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  render() {
    const {
 password, error, isLoading, updated 
} = this.state;

    if (error) {
      return (
        <div>
          
        
            <h4>Problem resetting password. Please send another reset link.</h4>
         
        </div>
      );
    }
   
    return (
      <div>
        
        <form className="password-form" onSubmit={this.updatePassword}>
        <label>
             <p>Password</p>
          <input type="password" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' onChange={this.handleChange('password')} />
        </label>
        <div className='button'>
          <button type="login">Login</button>
        </div>
        </form>

        {updated && (
          <div>
            <p>
              Your password has been successfully reset, please try logging in
              again.
            </p>
          </div>
        )}
        
      </div>
    );
  }
}

Reset.propTypes = {
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }),
  }),
};
*/