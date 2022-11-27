import React, { useState,useEffect } from 'react';
import "../assets/stylesheets/Chat.css";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
//firebase
import db from '../firebase/firebase';
import { doc, onSnapshot, collection, getDoc ,query, orderBy, limit} from "firebase/firestore";
// import { query, orderBy, limit } from "firebase/firestore"; 
import Message from './Message';
import ChatInput from './ChatInput';

const Chat = () => {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [messages,setMessages] = useState([]);

    useEffect( () => {
        if (roomId) {
            onSnapshot(doc(db, "rooms", `${roomId}`), (doc) => {
                setRoomDetails(doc.data());
                // console.log(doc.id)
            });

            // onSnapshot(collection(db, `rooms/${roomId}`), (e) => {console.log(e)})
            // onSnapshot(collection(db, `rooms/${roomId}`,'messages'), orderBy('timestamp'),(e) => {const msgDoc = e.docs;
               
            //     setMessages(Array.from(msgDoc))
                // msgDoc.map((e)=>{
                    // console.log(e.data().message) ;
                // })
            // console.log(messages[0].data().message)
        // })
        onSnapshot(query(collection(db, `rooms/${roomId}`,'messages'), orderBy('timestamp','asc')),(e)=>{
            const msgDoc = e.docs;
            setMessages(Array.from(msgDoc))
            // console.log(e.docs.data())
        })
        // console.log(q)

        }

        // onSnapshot(doc(db, "rooms",`${roomId}`),(doc)=>{console.log(doc)
        // })
    }, [roomId]);

    // useEffect(()=>{
    //      onSnapshot(collection(db, `rooms/${roomId}`,'messages'), (e) => {const messages = e.docs;
    //         messages.map((e)=>{
    //             console.log(e.data().message) ;
    //         })
    //     // console.log(messages[0].data().message)
    // })

    // },[roomId])


    
    return (
        <div className='chat'>
            {/* <h1>
                you are in the {roomId} room</h1> */}
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>
                            # {roomDetails?.name}
                        </strong>
                        <StarBorderOutlined />
                    </h4>
                </div>

                <div className='chat__headerRight'>
                    <p>
                        <InfoOutlined /> Details
                    </p>
                </div>

            </div>
            <div className="chat__messages">
                {messages.map(e=>(
                    // console.log(e.id)
                    <Message  message={e.data().message} user={e.data().user} userImg={e.data().userImg} key={e.id} timestamp={e.data().timestamp} />
                ))}
               
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId}/>

        </div>
    )
}

export default Chat