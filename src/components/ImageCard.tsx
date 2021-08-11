import React, { useState } from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';

interface imageCardProps {
    imageDetails?: {
        id: number,
        imageSrc: string,
        name: string,
        info: string
    };
}

const ImageCard: React.FC<imageCardProps> = ({imageDetails}) =>  {

  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory()

  const imageClickHandler = () => {
      console.log('Boom', history.location)
      
        history.push(`/product/${imageDetails?.id}`)
  }

  return (
    <div style={{display: 'flex', padding: 16}}>
        <img src={imageDetails?.imageSrc} alt={imageDetails?.name} style={{height: 300, width: 300}} 
        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
        onClick={imageClickHandler}/>
        {isHovered && <p>{imageDetails?.info}</p>}
    </div>
  );
}

export default ImageCard;
