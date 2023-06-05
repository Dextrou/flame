import { useState } from "react";
import './flame.css'
const Flame=()=>{
    let [firstname,setFirstName] = useState('');
    let [lastname,setLastName] = useState('');
    let [decision,setDecision] = useState(null);
  function flamer(){
  let str=new Set();
  let FirstName=new Set();
  let LastName = new Set();
  for(let i of firstname){
    for(let j of lastname){
        if(i===j){
            str=str.add(i);
        }
        else if(i!==j){
         FirstName=FirstName.add(i);
         LastName = LastName.add(j);
        }
    }
  }
  if(FirstName.size!==0 && LastName.size!==0){
    let sum = parseInt((FirstName.size + LastName.size)%6);
  switch(sum){
    case 1:
      setDecision('Friends');
      break;
      case 2:
        setDecision('Love');
        break;
        case 3:
          setDecision('Affection');
          break;
          case 4:
            setDecision('Enemy')
            break;
            case 5:
              setDecision('Siblings')
              break;
              default:
                setDecision('No Match Found');
  }
  }
  else{
    setDecision('Please Enter Valid Input');
  }
  }

    
    function Cleaner(){
        setFirstName('');
        setLastName('');
        setDecision(null);
    }
    return (
   <div className="flame">
    <div className="input">
    <input type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstname} className="firstname"/>
      <input type="text" onChange={(e)=>setLastName(e.target.value)} value={lastname} className="lastname"/>
    </div>
      <div className="button">
      <button type="submit" onClick={flamer} className="submit">Calculate relationship Future</button>
      <button type="reset" onClick={Cleaner} className="reset">clear</button>
      </div>
      <div className="result">
      <p>{decision}</p>
      </div>
      
   </div>
    )
}
export default Flame;