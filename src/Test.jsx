import  store  from "./redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter";


function Test() {
   const dispatch = useDispatch()

   
   
   store.dispatch(increment())
   store.dispatch(increment())
   store.dispatch(increment())
   
   store.dispatch(decrement()) 
   
   console.log(store.getState())

  return <div>app</div>;
}

export default Test;
