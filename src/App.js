import React, { Component } from 'react';
import './App.css';
import uuidv1 from 'uuid/v1' // eslint-disable-line no-unused-vars
import * as Api from './Api' // eslint-disable-line no-unused-vars

class Post extends Component {
  render() {
    const { post } = this.props

    return (
      <div className="post" key={ post.key }>
        <h2>{ post.title }</h2>
        <div className="post-vote">{ post.postVote}</div>
        <div className="post-body">
          <p>
            { post.body }
          </p>
        </div>
        <div className="post-author">{ post.author }</div>
        <div className="post-date">{ new Date(post.timestamp).toLocaleString() }</div>

        <div className="post-comment-count">{ post.commentCount}</div>
      </div>
    )
  }
}

class App extends Component {
  state = {
    categories: [],
    posts: [],
    category: [],
    post: {},
    newpost: {},
    postVote: '',
    comments: [],
    postComment: {},
    commentVote: ''
  }

	componentDidMount () {
    let category = 'react'

    //data required to create a post
    /* let data = {
      id: uuidv1(),
      title: 'React is a great way to improve javascript skills',
      body: 'This project helps me to get better at react',
      author: 'victorperez',
      category: 'udacity',
      deleted: false,
      voteScore: 0,
      commentCount: 0,
      timestamp: Date.now()
    } */

    //commentData
    /* let commentData = {
      id: uuidv1(),
      parentId: '2aabe9c0-ddb8-11e7-ae7f-b92c97863714',
      body: 'This is a comment test',
      author: 'victorperez',
      timestamp: Date.now()
    } */

    let editData = {
      title: 'React is a great way to improve my javascript skills',
      body: 'This project is helping me to get better at react and redux'
    }

    let editCommentData = {
      timestamp: Date.now(),
      body: 'This is an edited comment'
    }

    let option = {
      option: 'upVote'
    }

    //create post, requires the post data
    /* Api.createPost(data).then((newpost) => {
      this.setState({ newpost })
    }) */

    //delete post, requires the post ID
    /* Api.deletePost('identificador123').then((deletedPost) => {
      console.log({ deletedPost })
    }) */

    //votePost requires the post id and an option upVote or downVote
    Api.votePost( '2aabe9c0-ddb8-11e7-ae7f-b92c97863714', option ).then((postVote) => {
      this.setState({ postVote })
    })

		Api.getCategories().then((categories) => {
			this.setState({ categories })
    })
    
    Api.getPosts().then((posts) => {
			this.setState({ posts })
    })
    
    Api.getCategoryPosts(category).then((category) => {
			this.setState({ category })
    })

    //editPost requires the post id and the edit data, 
    Api.editPost('2aabe9c0-ddb8-11e7-ae7f-b92c97863714', editData).then((newpost) => {
      //console.log({ newpost })
    })

    //
    /* Api.commentPost(commentData).then((postComment) => {
      console.log({ postComment })
    }) */

    //delete comment, requires the comment ID
    /* Api.deleteComment('828329a0-dde6-11e7-9599-e373cf1963cb').then((deletedComment) => {
      console.log({ deletedComment })
    }) */

    //votePost requires the post id and an option upVote or downVote
    Api.voteComment( 'eb118520-dde6-11e7-af31-979f316ae76d', option ).then((commentVote) => {
      this.setState({ commentVote })
    })

    //editComment requires the comment id and the edit data, 
    Api.editComment('d680eec0-dde6-11e7-874f-6bf0c092fb1e', editCommentData).then((newpost) => {
      //console.log({ newpost })
    })

    Api.getSinglePost("2aabe9c0-ddb8-11e7-ae7f-b92c97863714").then((post) => {
			this.setState({ post })
    })

    Api.getPostComments('2aabe9c0-ddb8-11e7-ae7f-b92c97863714').then((comments) => {
      this.setState({ comments })
    })
  }

  render() {
    let categories = this.state.categories
    let posts = this.state.posts
    let category = this.state.category
    let comments = this.state.comments

    return (
      <div>
        <h3>CATEGORIES</h3>
        <ul>
          {
            categories.map((value) => (
              <li key={value.name}>
                <a>{value.name}</a>
              </li>
            ))
          }
        </ul>

        <h3>POSTS</h3>
          {
            posts.map((value) => (
              <Post post={ value }/>
            ))
          }

        <h3>CATEGORY POSTS</h3>
          {
            category.map((value) => (
              <Post post={ value }/>
            ))
          }

        <h3>POST</h3>
        <Post post={this.state.post}/>

        <h3>COMMENTS</h3>
        <ul>
          {
              comments.map((comment) => (
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
    );
  }
}

export default App;
