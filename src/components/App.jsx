import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"


const App = ()=>{
    return <div>
    <Header/>
    <div className='container'>
    <div  className='row'>
        {notes.map(noteArray=>{
            return <Note 
               key = {noteArray.key}
               title={noteArray.title}
               content={noteArray.content}

            />
        })}
    </div>
        <Footer />
    </div>
    
</div>
};

export default App;