import React, { useState,useEffect } from 'react'
//stylesheets
import '../assets/stylesheets/Sidebar.css';
//icons
import { Add, Apps, BookmarkAddOutlined, Create, Drafts, ExpandLess, ExpandMoreOutlined, FiberManualRecord, FileCopy,  Inbox, InsertComment, PeopleAlt } from '@mui/icons-material';
//components
import SidebarOption from './SidebarOption';
import db from '../firebase/firebase';
import { onSnapshot,collection } from "firebase/firestore";
import { useStateValue } from '../assets/contextapi/StateProvider';

// const db = getFirestore(app);

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

const Sidebar = () => {
    const [{ user }] = useStateValue();

    const [channels,setChannels] = useState([]);
    
    // const q = query(collection(db, "cities"), where("state", "==", "CA"));
    useEffect(()=>{
        // const q = query(collection(db, "cities"), where("state", "==", "CA"));
        onSnapshot(collection(db, "rooms"), (docs) => { setChannels(docs.docs);
            // ((docs.docs.map(e=>console.log(e.data().name))))
            
        });
        // db.collection('rooms').onSnapshot(snapshot=>(
        //     setChannels(
        //         snapshot.docs.map(doc=>({
        //             id: doc.id,
        //             name:doc.data().name
        //         }))
        //     )
        // ))
    },[])
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <div className="sidebar__info">

                    <h2>Team Asper</h2>
                    <h3>
                        <FiberManualRecord />
                        <div>
                        {user?.displayName}
                        </div>
                    </h3>
                </div>
                <Create />

            </div>
                <SidebarOption Icon={InsertComment} title='Threads'/>
                <SidebarOption Icon={Inbox} title='Mentions & reactions'/>
                <SidebarOption Icon={Drafts} title='Saved items'/>
                <SidebarOption Icon={BookmarkAddOutlined} title='Channel browser'/>
                <SidebarOption Icon={PeopleAlt} title='People & user groups'/>
                <SidebarOption Icon={Apps} title='Apps'/>
                <SidebarOption Icon={FileCopy} title='File Browser'/>
                <SidebarOption Icon={ExpandLess} title='Show less'/>
                <hr/>
                <SidebarOption Icon={ExpandMoreOutlined} title='Channels'/>
                <hr/>
                <SidebarOption Icon={Add} title='Add Channels' addChannelOption={true}/>
                {/* Connect to dB and list all the channels */}
                {/* SidebarOption.. */}
                {channels.map(channel=>(
                    // console.log(channel.id)
                    <SidebarOption title={channel.data().name} id={channel.id} key={channel.data().id+channel.data().name} />
                ))}

        </div>
    )
}

export default Sidebar