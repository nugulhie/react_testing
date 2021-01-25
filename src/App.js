import React from 'react';

function Temp({name}) {
  return <h1>temp {name}</h1>
}

const tempIs = [
  {
    name : "1"
  },
  {
    name : "2"
  },
  {
    name : "3"
  },
  {
    name : "4"
  }
];


function App() {
  return (
    <div>
      hello
    {tempIs.map(teem => <Temp name = {teem.name}/>)}
    
    </div>
  );
}

export default App;
