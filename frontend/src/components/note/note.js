import React from 'react'

class Note extends React.Component {
  render() {
    return (
      <div>
        <textarea cols="30"
                  rows="10"
                  placeholder="Note me!"
                  defaultValue="">
        </textarea>
      </div>
    )
  }
}

export default Note
