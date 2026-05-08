import React from 'react'

const App = () => {
  const relatives = ["Ramesh", "Suresh", "Rakesh", "Mahesh"]
  return (
    <div id="main">
               {/* Do not remove the main div */}
               
                <ol key="relativeList">
                  {relatives.map((item, index) => (
                    <li key={`relativeListItem${index}`}>{item}</li>
                ))}
                </ol>
                
               
    </div>
  )
}

export default App
