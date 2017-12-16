import React, { Component } from 'react'
import './App.css'
import uuidv1 from 'uuid/v1' // eslint-disable-line no-unused-vars
import * as Api from './Api' // eslint-disable-line no-unused-vars
import CategorySelector from './CategorySelector'
import ListPosts from './ListPosts'
import CreatePost from './CreatePost'
import { Switch, Route, Redirect } from 'react-router-dom' // eslint-disable-line no-unused-vars

class App extends Component {
  state = {
    categories: [],
    posts: [],
    category: [],
    categoryPosts: [],
    post: {},
    newpost: {},
    postVote: '',
    comments: [],
    postComment: {},
    commentVote: ''
  }

	componentDidMount () {
    //commentData
    /* let commentData = {
      id: uuidv1(),
      parentId: '2aabe9c0-ddb8-11e7-ae7f-b92c97863714',
      body: 'This is a comment test',
      author: 'victorperez',
      timestamp: Date.now()
    } */

    /* let editData = {
      title: 'React is a great way to improve my javascript skills',
      body: 'This project is helping me to get better at react and redux'
    }

    let editCommentData = {
      timestamp: Date.now(),
      body: 'This is an edited comment'
    }

    let option = {
      option: 'upVote'
    } */

    //create post, requires the post data
    /* Api.createPost(data).then((newpost) => {
      this.setState({ newpost })
    }) */

    //delete post, requires the post ID
    /* Api.deletePost('identificador123').then((deletedPost) => {
      console.log({ deletedPost })
    }) */

    //votePost requires the post id and an option upVote or downVote
    /* Api.votePost( '2aabe9c0-ddb8-11e7-ae7f-b92c97863714', option ).then((postVote) => {
      this.setState({ postVote })
    }) */

    //set the available categories from the api
    Api.getCategories().then((categories) => {
      this.setState({ categories })
    })

    //sets a default category
    Api.getCategoryPosts('react').then((categoryPosts) => {
      this.setState({ categoryPosts })
    })
    
    /*Api.getPosts().then((posts) => {
			this.setState({ posts })
    })*/
    
    //editPost requires the post id and the edit data, 
    /* Api.editPost('2aabe9c0-ddb8-11e7-ae7f-b92c97863714', editData).then((newpost) => {
      //console.log({ newpost })
    }) */

    //
    /* Api.commentPost(commentData).then((postComment) => {
      console.log({ postComment })
    }) */

    //delete comment, requires the comment ID
    /* Api.deleteComment('828329a0-dde6-11e7-9599-e373cf1963cb').then((deletedComment) => {
      console.log({ deletedComment })
    }) */

    //votePost requires the post id and an option upVote or downVote
    /* Api.voteComment( 'eb118520-dde6-11e7-af31-979f316ae76d', option ).then((commentVote) => {
      this.setState({ commentVote })
    }) */

    //editComment requires the comment id and the edit data, 
    /* Api.editComment('d680eec0-dde6-11e7-874f-6bf0c092fb1e', editCommentData).then((newpost) => {
      //console.log({ newpost })
    }) */

    /* Api.getSinglePost("2aabe9c0-ddb8-11e7-ae7f-b92c97863714").then((post) => {
			this.setState({ post })
    }) */

    /*Api.getPostComments('8xf0y6ziyjabvozdd253nd').then((comments) => {
      this.setState({ comments })
    })*/
  }

  getAllCategoryPosts = category => {
    Api.getCategoryPosts(category).then((categoryPosts) => {
			this.setState({ categoryPosts })
    })
  }

  createNewPost = data => {
    Api.createPost(data).then(newpost => {
      this.setState(state => ({
        categoryPosts: state.categoryPosts.concat([ newpost ])
      })
      )
    })
  }

  deletePost = id => {
    Api.deletePost(id).then(id => {
      this.setState(state => ({
        categoryPosts: state.categoryPosts.filter((id) => { id })
      }))
    })
  }

  render() {
    let categories = this.state.categories
    let posts = this.state.categoryPosts

    return (
      <div>

      <CategorySelector categories={ this.state.categories }
        onCategoryChange={this.getAllCategoryPosts}
      />

      <Switch>
        <Redirect from="/" exact to='/react' />
        {
          categories.map((category) => (
            <Route exact path={`/${category.path}`} key={category.name} render={() => (
              <div>
                <div className="posts-container">
                  <h2 className="post-container-title">{`${category.name} posts`}</h2>
                  <ListPosts
                    key={category.name}
                    posts={ posts }
                    onDeletePost={this.deletePost}
                  />
                </div>

                <CreatePost
                  key={category.name}
                  onCreatePost={this.createNewPost}
                  category={category}/>
              </div>
            )} />
          ))
        }
      </Switch>

        {/* <h3>POSTS</h3>
          {
            posts.map((value) => (
              <Post key={ value.id } post={ value }/>
            ))
          }

        <h3>CATEGORY POSTS</h3>
          {
            category.map((value) => (
              <Post key={ value.id } post={ value }/>
            ))
          }

        <h3>POST</h3>
        <Post post={this.state.post}/> */}
      </div>
    );
  }
}

export default App
