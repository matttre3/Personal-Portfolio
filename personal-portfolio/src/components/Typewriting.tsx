
import { useState,useEffect } from 'react';

const Typewriting = () => {
    const [typeElement, setTypeElement] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const words = ["Front-end Developer", "UX/UI Designer"];
    useEffect(() => {
        function type() {
          const currentWord = words[wordIndex];
          let newText;
      
          if (!isDeleting) {
            newText = currentWord.substring(0, charIndex + 1);
            setCharIndex((prevCharIndex) => prevCharIndex + 1);
          } else {
            newText = currentWord.substring(0, charIndex - 1);
            setCharIndex((prevCharIndex) => prevCharIndex - 1);
          }
      
          setTypeElement(newText);
      
          if (!isDeleting && charIndex === currentWord.length) {
            setIsDeleting(true);
          } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length);
          }
        }
      
        const typingSpeed = isDeleting ? 200 : 200;
        const typeTimeout = setTimeout(type, typingSpeed);
      
        return () => clearTimeout(typeTimeout);
      }, [typeElement, charIndex, isDeleting, wordIndex, words]);
    
  
    return (
    <>
    {typeElement}
    </>
  )
}

export default Typewriting



