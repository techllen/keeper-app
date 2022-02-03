import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
    return <div>
        <Header />
        {notes.map(enteredNotes =>
            <Note
                key={enteredNotes.key}
                title={enteredNotes.title}
                content={enteredNotes.content}
            />
        )};
        <Footer />
    </div>
}

export default App;