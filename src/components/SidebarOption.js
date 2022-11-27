import React from 'react'
//stylesheets
import '../assets/stylesheets/SidebarOption.css';
//react-router
import {useNavigate,Navigate,useLocation } from 'react-router-dom';
//firebase
import db from '../firebase/firebase';
import { collection, addDoc } from "firebase/firestore"; 

const SidebarOption = ({Icon,addChannelOption,id,title}) => {
  const history = useNavigate ();
  const selectChannel=()=>{
    // console.log(id)
    if(id){
      history(`/room/${id}`)
    }
    else{
      // console.log('else')
     history(title)
    }
  };

  const { pathname } = useLocation();

 const addChannel =async ()=>{
    const channelName = prompt('Please enter the channel name :');
    if(channelName){
  const docRef = await addDoc(collection(db, "rooms"), {
        name: channelName
      });
    }
  };
  return (
    <div className='sidebarOption' onClick={addChannelOption ? addChannel:selectChannel}>
        {Icon && <Icon className='sidebarOption__icon' />}
        {
          Icon?(<h3>{title}</h3>):(<h3 className='sidebarOption__channel'>
            <span className='sidebarOption__hash'>#</span> {title}
          </h3>)
        }
    </div>
  )
}

export default SidebarOption