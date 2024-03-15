import Buttoncomponent from "./components/functional/button";
import Imagecomponent from "./components/functional/button/image";
import Orderlist from "./components/functional/button/orderlist";
import Unorderlist from "./components/functional/button/unorderlist";


function App() {
  return (
    <div >
      <Buttoncomponent></Buttoncomponent>
      <Imagecomponent></Imagecomponent>
      <Unorderlist></Unorderlist>
      <Orderlist></Orderlist>
    </div>
  );
}

export default App;
