import React from 'react';

function Food({ fav }) {
  return <hi>I like {fav}!</hi>
}

function App() {
  return (<div>
    <h1>Hello!!</h1>
    <Food fav="kimchi"/>
    </div>
  );
}

export default App;
