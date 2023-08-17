import React, { useState, useEffect } from "react";

interface ResponseProps {
    text: string;
}

const Response: React.FC<ResponseProps> = ({ text }) => {

    const [typedText, setTypedText ] = useState<string>("");
    const [currentIndex, setCurrentIndex ] = useState(0);
    const [cusorVisible, setCursorVisible] = useState<boolean>(true);

    useEffect(() => {

        if (currentIndex < text.length) {

            const timer = setTimeout(() => {
                setTypedText((prev) => prev + text[currentIndex])
                setCurrentIndex((prev) => prev + 1)
            }, 1);

            return () => {
                clearTimeout(timer);
            }
        }
        
       
    }, [text, typedText, setCurrentIndex]);

    useEffect(() => {
        if (typedText.length === text.length) {
            const timer = setTimeout(() => {
                setCursorVisible(false);  
            }, 400);

            return () => {
                clearTimeout(timer);
            }
        }
    }, [text, typedText]);

  return (
    <div>
      <span>{typedText}</span>
      {
        cusorVisible && (
            <span className="font-extrabold">|</span>
        )
      }
    </div>
  )
}

export default Response
