import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import Comment from './Comment'

class ListComments extends Component {
    render() {
        const { comments } = this.props

        return (
            <div className="list-comments">
                {
                    comments.map((comment) => (
                        <Comment key={ comment.name } comment={ comment }/>
                    ))
                }
            </div>
        )
    }
}

export default ListComments
