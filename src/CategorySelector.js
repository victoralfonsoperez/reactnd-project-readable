import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { NavLink } from 'react-router-dom'

class CategorySelector extends Component {
    render() {
        const { categories, onCategoryChange } = this.props

        return(
            <div className="category-selector">
                <div>
                    <ul>
                        {
                            categories.map((category) => (
                                <li key={ category.name }>
                                <NavLink
                                    activeClassName="active"
                                    activeStyle={{ color: 'red' }}
                                    to={ category.path } onClick={() => {
                                    onCategoryChange(category.name)
                                }}>
                                    { category.name }
                                </NavLink></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default CategorySelector