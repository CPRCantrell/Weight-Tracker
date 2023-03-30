import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const [enteries, setEntries] = useState([{weight: 270, date: "11-30-2022"},{weight: 265, date: "12-20-2022"}])

  function logNewEntry(entry){
    let tempEntries = [...enteries, entry]
    setEntries(tempEntries)
  }

  return (
    <div>
      <DisplayEntries allEnteries={enteries} />
      <AddEntryForm logNewEntry={logNewEntry}/>
    </div>
  );
}

export default App;