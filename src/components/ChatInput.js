import { Button } from '@mui/material'
import React, { useState } from 'react'
//stylesheets
import '../assets/stylesheets/ChatInput.css'

import '../assets/stylesheets/ChatInput.css';

import db from '../firebase/firebase';
import { collection, addDoc ,serverTimestamp} from "firebase/firestore"; 


import {useStateValue} from '../assets/contextapi/StateProvider';
import { useParams } from 'react-router-dom';
import { ResetTv } from '@mui/icons-material';

function ChatInput({channelName,channelId}) {

    const [{ user }] = useStateValue();

    const [input,setInput] = useState('');
    const roomId = useParams();


    const sendMessage= async (e)=>{
        // alert('click')
        e.preventDefault();
        // console.log(roomId.roomId)

        if(channelId){
            const docRef = await addDoc(collection(db, `rooms/${roomId.roomId}/messages`), {
                message: input,
                timestamp:serverTimestamp(),
                user:user?.displayName,
                userImg: user?.photoURL,

              });
            //   console.log("Document written with ID: ", docRef.id);

            setInput('')
        }

    }

  return (
    <div className='chatInput'>
        <form>
            <input placeholder={`Message #${channelName?.toLowerCase()}`} value={input} onChange={e=>{setInput(e.target.value)}} />
            <Button type="submit" onClick={sendMessage}>
                SEND
            </Button>
        </form>

    </div>
  )
}

export default ChatInput