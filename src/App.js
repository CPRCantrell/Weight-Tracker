import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [enteries, setEntries] = useState([{weight: 270, date: "11-30-2022"},{weight: 265, date: "12-20-2022"}])

  return (
    <div>
      <DisplayEntries allEnteries={enteries} />
    </div>
  );
}

export default App;