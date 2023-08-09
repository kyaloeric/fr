 import React from "react";
 import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";


 const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="/images-4.jpg"
                                    secondaryImg="/static/speakers/images-1.jpg" 
                                    alt=""/>
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="/images-3.jpg"
                                    secondaryImg="/static/speakers/images-2.jpg" 
                                    alt=""/>

        </div>
    );
 };

 export default ImageChangeOnMouseOver;