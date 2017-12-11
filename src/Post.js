import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa'

class Post extends Component {
    render() {
      const { post } = this.props
  
      return (
        <div className="post">
          <h2>{ post.title }</h2>
          <div className="post-vote">votes: <span className="post-vote-score">{ post.voteScore }</span></div>
          <div className="post-body">
            <p>
              { post.body }
            </p>
          </div>
          <div className="post-author"><FontAwesome.FaUser/> <span className="post-author-name">{ post.author }</span></div>
          <div className="post-date"><FontAwesome.FaCalendarO />
            <span className="post-date-value">{ new Date(post.timestamp).toLocaleString() }</span>
          </div>
  
          <div className="post-comment-count"><FontAwesome.FaCommentsO />
            <span className="post-comment-count-value">{ post.commentCount }</span>
          </div>
  
          <div className="post-actions">
            <button><FontAwesome.FaEdit/></button>
            <button className="delete-button"><FontAwesome.FaTrashO/></button>
  
            <button><FontAwesome.FaThumbsODown/></button>
            <button><FontAwesome.FaThumbsOUp/></button>
  
            <button className="comment-button"><FontAwesome.FaComment/></button>
          </div>
        </div>
      )
    }
  }

  export default Post