import React from 'react';
import ImageCard from './ImageCard';

// interface ProductProps {
//   id: number;
// }


const Product: React.FC= ():JSX.Element =>  {


  const images= [
    {id: 0, name: "KTM", imageSrc: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", info:"KTM RC 200"},
    {id: 1, name: "Harley", imageSrc: "https://images.livemint.com/img/2019/10/08/1600x900/2019-10-07T102129Z_1_LYNXMPEF960L5_RTROPTP_3_HARLEY-DAVIDSON-ELECTRICBIKE_1570505064296_1570505080774.JPG", info: "Harley Davidson Electric Bike"},
    {id: 2, name: "Pinagle", imageSrc:"https://cdn.autoportal.com/bp-v3/img/models/7e/b/ducati-panigale-v4-1509974166.jpeg", info: "Ducati Pinagle V4" },
    {id: 3, name: "Ducati naked", imageSrc: "https://images.ctfassets.net/x7j9qwvpvr5s/3ePyWwkdfMrzN7dqShC6Z9/93fe54b27b3669f263f6469ace82ede2/Model-Menu-MY20-Diavel-1260-S-Ducati-Red.png", info: "Ducati Pinagle naked Bike"}
  ];

  //TODO: generalize to id extracted from url
  const selectedItem = images[0]; 

  return (
    <div>
      <h1>{selectedItem.name}</h1>
      <ImageCard imageDetails={selectedItem}/>
    </div>
  );
}

export default Product;
