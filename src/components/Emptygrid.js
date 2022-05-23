import React ,{ useState } from 'react'
import Emptycard from './emptycard';
export default function Emptygrid() {
    const [loopval, setloopval] = useState(32);
    return (
        <div className="container empty-grid">
            
            
    
       
        <Emptycard />
        <Emptycard />
        <Emptycard />
        <Emptycard />
        <Emptycard />
        <Emptycard />
        <Emptycard />
        <Emptycard />
        <Emptycard />
        <Emptycard />
        <Emptycard />
        <Emptycard />
      </div>
    );
}
