import React, { Component } from 'react';
import './App.css';
import uuidv1 from 'uuid/v1'
import * as Api from './Api' // eslint-disable-line no-unused-vars

class App extends Component {
  state = {
    categories: [],
    posts: [],
    category: [],
    post: {},
    newpost: {}
  }

	componentDidMount () {
    let category = 'react'
    let data = {
      id: uuidv1(),
      title: 'React is a great way to improve javascript skills',
      body: 'This project helps me to get better at react',
      author: 'victorperez',
      category: 'udacity',
      deleted: false,
      voteScore: 0,
      commentCount: 0,
      timestamp: Date.now()
    }

    /* Api.createPost(data).then((newpost) => {
      this.setState({ newpost })
    }) */

		Api.getCategories().then((categories) => {
			this.setState({ categories })
    })
    
    Api.getPosts().then((posts) => {
			this.setState({ posts })
    })
    
    Api.getCategoryPosts(category).then((category) => {
			this.setState({ category })
    })
    
    Api.getSinglePost("2aabe9c0-ddb8-11e7-ae7f-b92c97863714").then((post) => {
			this.setState({ post })
    })
  }

  render() {
    let categories = this.state.categories
    let posts = this.state.posts
    let category = this.state.category
    let post = this.state.post

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
        <ul>
          {
            posts.map((value) => (
              <li key={value.id}>
                <span>ID: {value.id}</span><br></br>
                <span>TITLE: {value.title}</span><br></br>
                <span>BODY: {value.body}</span><br></br>
                <span>CATEGORY: {value.category}</span><br></br>
                <span>AUTHOR: {value.author}</span><br></br>
                <span>COMMENTCOUNT: {value.commentCount}</span><br></br>
                <span>DELETED: {value.deleted}</span><br></br>
                <span>VOTESCORE: {value.voteScore}</span><br></br>
              </li>
            ))
          }
        </ul>

        <h3>CATEGORY POSTS</h3>
        <ul>
          {
            category.map((value) => (
              <li key={value.id}>
                <span>TITLE: {value.title}</span><br></br>
                <span>BODY: {value.body}</span><br></br>
                <span>CATEGORY: {value.category}</span><br></br>
                <span>AUTHOR: {value.author}</span><br></br>
                <span>COMMENTCOUNT: {value.commentCount}</span><br></br>
                <span>DELETED: {value.deleted}</span><br></br>
                <span>VOTESCORE: {value.voteScore}</span><br></br>
              </li>
            ))
          }
        </ul>

        <h3>POST</h3>
        <ul>
          {
              <li key={post.id}>
                <span>TITLE: {post.title}</span><br></br>
                <span>BODY: {post.body}</span><br></br>
                <span>CATEGORY: {post.category}</span><br></br>
                <span>AUTHOR: {post.author}</span><br></br>
                <span>COMMENTCOUNT: {post.commentCount}</span><br></br>
                <span>DELETED: {post.deleted}</span><br></br>
                <span>VOTESCORE: {post.voteScore}</span><br></br>
              </li>
          }
        </ul>
        
      </div>
    );
  }
}

export default App;
