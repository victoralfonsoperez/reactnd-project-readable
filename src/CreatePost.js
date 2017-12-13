import React, { Component } from 'react';

class CreatePost extends Component {
	state = {
		visible: false
	}

	toggleMenu = value => {
		this.setState({ visible: value })
	}

	submitData = (e) => {debugger
		e.preventDefault()
		const values = e.target
	}

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

    render() {

        return (
            <div className="create-posts">
            	{!this.state.visible && <button onClick={() => this.toggleMenu(true)}>Create New Post</button>}

				{this.state.visible && <button onClick={() => this.toggleMenu(false)}>Cancel</button>}
				
				{this.state.visible && 
					<form onSubmit={this.submitData} className="create-post--form">
						<input
							type="text"
							placeholder="Post Title"
							name="title"/>
						<input
							type="text"
							placeholder="author"
							name="author"
							/>
						<select>
							<option>Option category</option>
						</select>
						<textarea rows="4" cols="50" placeholder="Please enter the post body"></textarea>

						<button>Submit</button>
					</form>
				}

            </div>
        )
    }
}

export default CreatePost