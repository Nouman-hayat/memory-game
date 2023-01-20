import { useState } from 'react'
import Card from './Card'
import { allimg } from '../data'
function Grid(props) {
 
    const cardchoice=allimg.slice(0 , props.tcard)
   
    const [items, setItems] = useState(cardchoice.sort(() => Math.random() - 0.5))
   const [gridvalue, setGridvalue] = useState(0);

    //   const [items, setItems] = useState(
    //     allimg.sort(() => Math.random() - 0.5)
    //   );
   
    const [prev, setPrev] = useState(-1);

    function check(current){
        if(items[current].id == items[prev].id){
          items[current].stat = "correct"
            items[prev].stat = "correct"
            if (current == props.tcard -1) {
                props.updatesdata();
                console.log("dd")
            }
            setItems([...items])
            setPrev(-1)
            props.updatecounter();
            
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
    }, 1000)
        }
    }

    function handleClick(id) {
        props.updateimg(items[id].name);
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
           
        }else{
            check(id)
        }
        
    }
   

    return (
      <div className="container">
        {items.map((item, index) => (
          <Card
            key={index}
            item={item}
            id={index}
            handleClick={handleClick}
            
          />
        ))}
      </div>
    );
}

export default Grid