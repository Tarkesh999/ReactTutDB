import React from 'react';

const Gallery: React.FC = ():JSX.Element =>  {
  const images: string[]= ["https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
"https://images.livemint.com/img/2019/10/08/1600x900/2019-10-07T102129Z_1_LYNXMPEF960L5_RTROPTP_3_HARLEY-DAVIDSON-ELECTRICBIKE_1570505064296_1570505080774.JPG"];
  return (
    <div>
      {images.map((item, ind) => <img src={item} style={{height: 300, width: 300}}/>)}
    </div>
  );
}

export default Gallery;
