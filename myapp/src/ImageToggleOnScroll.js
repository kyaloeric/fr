import React, {useRef, useEffect, useState} from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);

    const [isLoading,setIsLoading] =  useState(true);

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const [inView, setInView] = useState(flase);

    // use effect loads after the first component has been rendered

    useEffect(() => {

        setIsLoading(flase);
        setInView(isInView());
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);


        };

        // useEffect dependency array below is used for optimization
    },[]);

    const scrollHandler = () => {
        setInView(isInView());
    };
        
    return (
        <img src={inView? secondaryImg : primaryImg}
            alt="" ref={imageRef}
        
        />

    );
};

export default ImageToggleOnScroll;
