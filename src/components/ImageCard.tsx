import React from 'react';

const ImageCard: React.FC = ({imageSrc}):JSX.Element =>  {
 
  return (
    <div >
        <img src={imageSrc} />
    </div>
  );
}

export default ImageCard;
