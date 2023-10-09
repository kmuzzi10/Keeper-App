import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";


const App = ()=>{
    return <div>
    <Header/>
    <div className='container'>
    <div  className='row'>
        <Note />
    </div>
        <Footer />
    </div>
    
</div>
};

export default App;