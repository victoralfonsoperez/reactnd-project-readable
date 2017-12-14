import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { NavLink } from 'react-router-dom'

class CategorySelector extends Component {
    render() {
        const { categories, onCategoryChange } = this.props

        return(
            <div className="category-selector">
                <div>
                    <nav>
                        {
                            categories.map((category) => (
                                <NavLink
                                    exact={true}
                                    key={ category.name }
                                    activeClassName="active"
                                    to={ `/${category.path}` } onClick={() => {
                                    onCategoryChange(category.name)
                                }}>
                                    { category.name }
                                </NavLink>
                            ))
                        }
                    </nav>
                </div>
            </div>
        )
    }
}

export default CategorySelector