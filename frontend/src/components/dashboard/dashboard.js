import React from 'react'
import Note from '../note/note'

class Dashboard extends React.Component {
  state = {
    numberOfNotes: 0
  }

  createNewNote = () => {
    this.setState({
      numberOfNotes: this.state.numberOfNotes + 1
    })
  }

  render() {
    return (
      <div id="board">
        <h3>My note dashboard!</h3>
        <button onClick={this.createNewNote}>Create new note</button>
        { [...Array(this.state.numberOfNotes)].map((_, i)=>  <Note key={i} />) }
      </div>
    )
  }
}

export default Dashboard
