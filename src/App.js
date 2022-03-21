import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import {Button} from "./components/Button"
import { Table } from "./components/Table";
  
function App() {
   const [id , setId] = useState(0)
   const [theam,setThem] = useState("light") ; 
    
  return (
    <div className="App">
      <Button id1>Primary button</Button>
      <Button id2>Default Button</Button>
      <Button id3>Dashed Button</Button>
      <Button id4>Text Button</Button>
      <Button id5>Link Button</Button> 
    </div>
  );
}

export default App;


// {/* <Table>
// {" "}
// {/* // this is your styled component */}
// <thead>
//   {" "}
//   <tr>
//     <th>Rank</th>
//     <th>Name</th>
//     <th>Points</th>
//     <th>Team</th>
//   </tr>{" "}
// </thead>
// <tbody>
//   {" "}
//   <tr>
//     <td>1</td>
//     <td>Domenic</td>
//     <td>88,110</td>
//     <td>dcode</td>
//   </tr>{" "}
//   <tr>
//     <td>2</td>
//     <td>Sally</td>
//     <td>72,400</td>
//     <td>Students</td>
//   </tr>{" "}
//   <tr>
//     <td>3</td>
//     <td>Nick</td>
//     <td>52,300</td>
//     <td>dcode</td>
//   </tr>{" "}
// </tbody>
// </Table> */}