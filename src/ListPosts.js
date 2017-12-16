import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import Post from './Post'

class ListPosts extends Component {
    deletePost = id => {
        this.props.onDeletePost(id)
    }

    render() {
        const { posts, onDeletePost } = this.props

        return (
            <div className="list-posts">
                {
                    posts.map((post) => (
                        <Post
                            key={ post.id }
                            post={ post }
                            onDeletePost= {this.deletePost}
                        />
                    ))
                }
            </div>
        )
    }
}

export default ListPosts