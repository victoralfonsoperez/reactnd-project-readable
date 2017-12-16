import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import Post from './Post'

class ListPosts extends Component {
    deletePost = id => {
        this.props.onDeletePost(id)
    }

    votePost = (id, option) => {
        this.props.onVotePost(id, option)
    }

    render() {
        const { posts } = this.props

        return (
            <div className="list-posts">
                {
                    posts && posts.map((post) => (
                        <Post
                            key={ post.id }
                            post={ post }
                            onDeletePost={this.deletePost}
                            onVotePost={this.votePost}
                        />
                    ))
                }
            </div>
        )
    }
}

export default ListPosts