import React from 'react';
import image from  './image.png';
const Contact = () => {
    return(
        <div className='contact'>
            <h1><strong>Contact Us </strong></h1>
            <p style={{marginRight: '200px'}}>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        <div style={{display:'flex'}}>
        <div style={{marginRight: '150px'}}>
        <form className='rook'>
        <button style={{marginRight: '20px'}}>&#128172; VIA SUPPORT CHAT </button>
        <button style={{width: '200px'}}>&#128222; VIA CALL</button>
        <br></br>
        <button style={{marginTop: '20px', width: '385px'}}>&#128172; VIA EMAIL CHAT </button>
        <br></br>
        <br></br>
        <label>Name</label>
        <br></br>
        <input type='text' style={{width: '380px'}}></input>
        <br></br>
        <br></br>

        <label>Email</label>
        <br></br>
        <input type='email' style={{width: '380px'}}></input>
        <br></br>
        <br></br>
        <label>Text</label>
        <br></br>
        <textarea type='text' style={{width: '385px', height: '50px'}}></textarea>
        <br></br>
        
        <button type = 'submit' style={{marginLeft: '260px',marginTop: '10px', width: '130px'}}>Submit</button>
        </form>
        </div>
        <div>
            <img src={image} alt='contact'/>
        </div>
        </div>
        </div>
        
    )
};
export default Contact;