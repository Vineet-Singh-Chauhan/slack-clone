import React from 'react'
//stylesheet
import '../assets/stylesheets/Message.css';

const Message = (props) => {
  return (
    <div className='message'>
        <img src={props.userImg} alt="..." />
        <div className='message__info'>
            <h4>{props.user} 
            <span className='message__timestamp'>

            {new Date(props.timestamp?.toDate()).toUTCString()}
            </span>
            </h4>
            <p>{props.message}</p>
        </div>


    </div>
  )
}

export default Message