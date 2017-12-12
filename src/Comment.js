import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa'

class Comment extends Component {
    render() {
      const { comment } = this.props
  
      return (
        <div className="comment">
            <h3>COMMENTS</h3>
        <ul>
          {
              comment.map((comment) => (
                <li key={comment.id}>
                <span>BODY: {comment.body}</span><br></br>
                <span>AUTHOR: {comment.author}</span><br></br>
                <span>DELETED: {comment.deleted}</span><br></br>
                <span>ID: {comment.id}</span><br></br>
                <span>PARENTDELETED: {comment.parentDeleted}</span><br></br>
                <span>PARENTID: {comment.parentId}</span><br></br>
                <span>TIMESTAMP: { new Date(comment.timestamp).toLocaleString() }</span><br></br>
                <span>VOTESCORE: {comment.voteScore}</span><br></br>
              </li>
              ))
          }
        </ul>
        </div>
      )
    }
  }

  export default Comment