import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import Post from './Post'

class ListPosts extends Component {
    render() {
        const { posts } = this.props

        return (
            <div className="list-posts">
                {
                    posts.map((post) => (
                        <Post key={ post.id } post={ post }/>
                    ))
                }
            </div>
        )
    }
}

export default ListPosts