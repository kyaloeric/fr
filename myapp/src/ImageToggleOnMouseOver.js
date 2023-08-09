import React, {useRef} from "react";

const ImageTogglerOnMouseOver = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
        
    return (
        <img onMOuseOver={() =>{
            imageRef.current.src = secondaryImg;
        }} onMouseOut={() => {
            imageRef.current.src = primaryImg;
        }}
        src={primaryImg}
        alt="" ref={imageRef}
        />
    );
};

export default ImageTogglerOnMouseOver;
