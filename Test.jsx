
import { useContext  , React} from "react";
import {MyContext} from "./MyContext";

const Test = () => {
  const {name, setName} = useContext(MyContext);

  return (
    <div className="h-screen justify-center">
        <h1>{name}</h1>
        <button onClick={()=> {setName("Hello Iam Mern Stack Developer")}}>Click Me </button>
     
    </div>
  );
}

export default Test;
