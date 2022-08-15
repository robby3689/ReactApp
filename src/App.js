import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';

 
function App() {
  let todos =[
  { Sno:1,
    title:"Go to market",
    desc: "You Need to go to Market to get this work done"},
  
    { Sno:2,
    title:"Go to Shop",
    desc: "You Need to go to market to get this work done2"},
    
  { Sno:3,
    title:"Go to Mall",
    desc: "You Need to go to market to get this work done3"}

  ]
  return (
    <> 
    <Header title="My Todos List" searchBar={true}/>
    <Todos/>
    <Footer/>
    </>
  );
}

export default App;
