import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import Post from './Post'
import { Link } from 'react-router-dom'

class ListPosts extends Component {
    render() {
        const { posts } = this.props

        return (
            <div className="list-posts">
                {
                    posts.map((post) => (
                        <Link to={ post.id }>
                            <Post key={ post.name } post={ post }/>
                        </Link>
                    ))
                }
            </div>
        )
    }
}

export default ListPosts