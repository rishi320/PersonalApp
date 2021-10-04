import { useState } from "react";
import SignUp from "../SignUp/SignUp";
import Home from "../../Dashboard/Home";

function SignIn({setSigned,newUser, modifySigned}) {
    //const declarations
    // const details = [{userName:"Rishitha", email:"rishitha01@gmail.com", password:"babitha07"},
                    //  {userName:"Babi", email: "babith@gmail.com", password:"chinnu01"}]
    // const flags = {
    //     isSignIn : false,
    //     isSignup : false,
    //     isHome : false,
    //     user : ''
    // }
    //making variables reactive
    const [details, setDetails] = useState( [{userName:"Rishitha", email:"rishitha01@gmail.com", password:"babitha07"},
                                             {userName:"Babi", email: "babith@gmail.com", password:"chinnu01"}])
    const [flags, setFlags] = useState({ isSignIn : false,
                                         isSignup : false,
                                         isHome : false,
                                         user : '' })

    const handleSubmit = (e) =>{
        e.preventDefault()

        let newDetails = details.concat(newUser)
        setDetails(newDetails)  //check for the usage of if statement
        let username = document.getElementById('username').value
        let passWord = document.getElementById('password').value
        
        console.log("funtion",setSigned)
        details.map((d) => {
            if( d.userName === username && d.password === passWord){

                return setSigned(true, username)
                    //flag setting and sending username to homepage
                    //set isHome flag to true to go to the home page
            }
        })

    }

    const handleChange = (e) =>{
        setDetails({
            ...details
        })
    }

    const onSignup = () =>{
       
        setFlags({isSignup:true})
    }

 
    return(
        <div>
        {flags.isSignup===true ? <SignUp modifySigned={modifySigned}/> : 
         (<div className="login-form">
            <form onSubmit={handleSubmit}>
                <label className='signin-data'>Username</label>
                <input autoFocus
                       type='text'
                       id='username'
                    //    onChange = {(e)=> setUserName(e.target.value)}
                       required
                       />
                <label className='signin-data'>Password</label>
                <input type='password'
                       id='password'
                    //    value={password}
                    //    onChange = {(e)=> setPassword(e.target.value)}
                       required
                       />
                <button>Log in</button>
            </form>
            <a onClick={onSignup}>Sign up</a>
           </div>)
        }
        </div>
        
    );
}

export default SignIn;