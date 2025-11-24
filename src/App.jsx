import { useState } from "react";

const App = () => {

  const [notesHeading, setNotesHeading] = useState("");
  const [notes, setNotes] = useState("");

  const [displayNotes, setDisplayNotes] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    
    const copyNotes = [...displayNotes];
    copyNotes.push({notesHeading, notes})
    setDisplayNotes(copyNotes);
    
    setNotesHeading("");
    setNotes("");
  }

  const deleteNote = (index) => {
    const copyNotes = [...displayNotes];
    copyNotes.splice(index, 1);
    setDisplayNotes(copyNotes);
  }

  return(
    <div className="h-screen lg:flex bg-black text-white overflow-auto">
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className="flex gap-4 lg:w-1/2 p-10 flex-col items-start">
        <h1 className="text-2xl lg:text-4xl mb-2 font-bold text-center">Add Notes</h1>
        <input 
        type="text" 
        placeholder="Enter Notes Heading" 
        className="px-5 w-full font-medium py-2 border-2 outline-none rounded" 
        value={notesHeading}
        onChange={(e) => {
          setNotesHeading(e.target.value)
        }}
         />
        <textarea 
        type="text"
        placeholder="Enter Notes Here..."
        className="px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded"
        value={notes}
        onChange={(e) => {
          setNotes(e.target.value)
        }}
        ></textarea>
        <button 
        type="submit" 
        className="bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded"
        >
        Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10 ">
        <h1 className="text-2xl lg:text-4xl font-bold  text-center ">Recent Notes</h1>
        <div className=" flex flex-wrap justify-center items-center lg:items-start lg:justify-start gap-5 lg:mt-6  lg:h-[90%] overflow-auto  max-h-screen ">
          {displayNotes.map(function (elem, index)  {
            return  <div key={index} 
            className="flex justify-between flex-col items-start relative h-52 w-40 bg cover rounded-xl text-black pt-9 pb-4 px-4 bg-white/90 shadow-lg shadow-gray-400/30')]">
            <div>
              <h3 className="leading-tight text-lg font-bold">{elem.notesHeading}</h3>
              <p className="mt-2 leading-tight text-xs font-semibold text-gray-600">{elem.notes}</p>
            </div>
            <button onClick={() => {
              deleteNote(index)
            }} className="w-full cusrso-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white">
            Delete</button>
            </div>
          })}
        </div>
       </div>
    </div>
  )
}
export default App