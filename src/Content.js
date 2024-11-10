import React from 'react'

function content() {

  const handleNameChange = () => {
    const names = ['bob', 'Kevin', 'Denis'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <main>
      <p>
        Hello {handleNameChange()}
      </p>
    </main>
  )
}

export default content