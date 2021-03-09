import styled from "styled-components";
import { useState } from "react";
import axios from 'axios';

const Contact = () => {
    const[email, setEmail] = useState('');
    const[subject, setSubject] = useState('');
    const[body, setBody] = useState('');
    const[confirmation, setConfirmation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = { email, subject, body };

        axios.post('/mes', message)
          .then(function (response) {
            setConfirmation(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (  
        <Container>
            <Pop>
               <Title>CONTACT ME HERE</Title>
               <p>My email: mystickago@gmail.com</p>
               <form onSubmit={handleSubmit}>
                   <input 
                        type="email" 
                        required
                        //disabled="disabled"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email..." 
                    
                    /><br />
                   <input 
                        type="text" 
                        required
                        //disabled="disabled"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Subject..."

                    /><br />
                   <textarea 
                        cols="20" 
                        rows="10" 
                        required
                        //disabled="disabled"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="message..."></textarea><br />
                   <button>SUBMIT</button>
                   <h1>{confirmation}</h1>
               </form>
            </Pop>
        </Container>
    );
}
const Pop = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 0px 15px;
    margin: 10px;
    width: 45%;
    box-shadow: 0px 3px 15px -8px rgba(0,0,0,0.69);

    p {
        color: #747474;
        text-align: center;
        font-style: italic;
    }
    input {
        border-radius: 6px;
        border: gray solid 1px;
        padding: 7px 5px;
        margin: 5px;
        width: 95%;
    }
    textarea {
        border-radius: 6px;
        border: gray solid 1px;
        padding: 5px;
        margin: 5px;
        width: 95%;
    }
    button {
        margin: 5px 5px 6px 5px;
        border: none;
        color: white;
        background-color: #747474;
        padding: 10px;
        border-radius: 6px;

        &:hover {
            background-color: darkgray;
        }
    }
    form {
        margin: auto;
        //filter: blur(4px); 
    }
    h1 {
        text-align: center;
        color: #6A6A6A;
    }

    @media (max-width: 768px){
        width: 90%;
    }
`;
const Title = styled.h3`
    color: #6D6D6D;
    text-align: center;
`;
const Container = styled.div`
    width: 80%;
    margin: -50px auto;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 768px){
        width: 93%;
        margin: -20px auto;
    }
`;

export default Contact;