 import React, {useState, useEffect} from "react";
 import ImageToggleOnScroll from "../src/ImageToggleOnScroll";


 const ImageChangeOnScroll = () => {

    const [currentSpeakerId,setCurrentSpeakerId] = useState(0);

    const [mouseEventCnt,setMouseEventCnt] = useState(0);
    

    useEffect( () =>{
        window.document.title = 'speakerId: $currentSpeaker Id';
        console.log('useEffect: setting title to ${currentSpeakerId');


    },[currentSpeakerId]);
    return (
        <div>
            <span>mouseEventCnt: ${mouseEventCnt}</span>
            {[1124, 187, 823, 1269, 1530].map((speakerId) => {
                return (
                    <div key={speakerId}
                    onMOuseOver={() => {
                        setCurrentSpeakerId(speakerId);

                        // setmouse event to incrememnt our counter
                        setMouseEventCnt(mouseEventCnt + 1);
                        console.log('onMouseOver:${speakerId');

                    }}>
                        <ImageToggleOnScroll
                          primaryImg={'/static/speakers/bw/speakers-${speakerId}.jpg'}
                          secondaryImg={'/static/speakers/speakers-${speakerId}.jpg'}
                          alt=""
                        />                                        


                    </div>
                );
            })};
            

        </div>
    );
 };

 export default ImageChangeOnScroll;


