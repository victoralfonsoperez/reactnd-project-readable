import React, { Component } from 'react'
import serializeForm from 'form-serialize' // eslint-disable-line no-unused-vars
import uuidv1 from 'uuid/v1' // eslint-disable-line no-unused-vars

class CreatePost extends Component {
	state = {
		visible: false
	}

	toggleMenu = value => {
		this.setState({ visible: value })
	}

	submitData = (e) => {
		e.preventDefault()

		const values = serializeForm(e.target, { hash: true })
		//set the timestamp to number
		values.timestamp = parseInt(values.timestamp, 10)
		values.commentCount = 0
		values.voteScore = 0
		values.deleted = false

		if (this.props.onCreatePost)
			this.props.onCreatePost(values)
			this.toggleMenu()
	}

    render() {
    	const { category } = this.props

        return (
            <div className="create-posts">
            	{
					!this.state.visible &&
					<button onClick={() => this.toggleMenu(true)}>Create New Post</button>
				}

				{
					this.state.visible &&
					<button onClick={() => this.toggleMenu(false)}>Cancel</button>
				}
				
				{
					this.state.visible && 
					<form onSubmit={this.submitData} className="create-post-form">
						<input
							type="text"
							placeholder="Post Title"
							name="title"
							required
						/>

						<input
							type="text"
							placeholder="author"
							name="author"
							required
						/>

						<input className="hidden" type="text" readOnly name="category" value={category.name}></input>
						<input className="hidden" type="number" readOnly name="timestamp" value={Date.now()}></input>
						<input className="hidden" type="text" readOnly name="id" value={uuidv1()}></input>

						<textarea
							name="body"
							rows="4"
							cols="50"
							placeholder="Please enter the post body"
							required
							>
						</textarea>

						<button>Submit</button>
					</form>
				}
            </div>
        )
    }
}

export default CreatePost