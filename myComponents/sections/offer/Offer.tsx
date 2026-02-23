import React from "react";
import SectionContent from "../../common/SectionContent";
import {data} from './data'
const Offer = () => {
  return (
    <div>
      <SectionContent badge={data.badge} title={data.title} description={data.description}/>
    </div>
  );
};

export default Offer;
