import logo from './logo.svg';
import './App.css';
import Functionalcomp from './components/Functionalcomp';
import Classcomp from './components/Classcomp';
import Navbar from './components/Navbar';
import Props from './components/Props';
import Statecomp from './components/Statecomp';
import Dstrctprpsfunccomp from './components/Dstrctprpsfunccomp';
import Dstrctprpsclasscomp from './components/Dstrctprpsclasscomp';
import Dstrctstteclscomp from './components/Dstrctstteclscomp';
function App() {
  return (
    <div className="App">

    {/* these are child components */}

    <Functionalcomp />  
    <Classcomp name="Jadav" age="30" birthplace="India"/>
    <Classcomp name="Jhon" age="31" birthplace="America"/>
    <Classcomp name="Jonathan" age="32" birthplace="London"/>
    <Navbar /> 
    <Props name="Rahim" age="20" birthplace="Dhaka">এই চাইল্ড কম্পোনেন্ট এ আমরা closing ট্যাগ use না করে জেনারেল html starting ending ট্যাগ use করেছি এবং starting ending tag এর মাঝের কোনো টেক্সট আউটপুট প্রিন্ট করার জন্য props.children লিখতে হয় </Props>
    <Props name="Karim" age="25" birthplace="Rangpur"/>
    <Props name="Jadhu" age="30" birthplace="Gaibandha"/>

    
    <Statecomp />
    <Dstrctprpsfunccomp name="Md.Shamsuzzaman" age="30" />
    <Dstrctprpsclasscomp naam="Ironman" boyosh="32" />
    <Dstrctstteclscomp />


    </div>
  );
}

export default App;

