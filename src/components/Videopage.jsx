import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APPID, SERVERID } from './utils/constant';

const Videopage = () => {
   const{id} =  useParams()
   const roomID = id;
   let myMeeting = async (element) => {
  // generate Kit Token
   const appID = APPID ;
   const serverSecret = SERVERID;
   const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "Munis");

 
  // Create instance object from Kit Token.
   const zp = ZegoUIKitPrebuilt.create(kitToken);
   // start the call
   zp.joinRoom({
     container: element,
     sharedLinks: [
       {
         name: 'Copy link',
         url:
          window.location.protocol + '//' + 
          window.location.host + window.location.pathname +
           '?roomID=' +
           roomID,
       },
     ],
     scenario: {
       mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
     },
   });
}

  return (
    <div ref={myMeeting} className='w-screen h-screen absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
        
    </div>
  )
}

export default Videopage;