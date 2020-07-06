import React from 'react'

const HiddenSearchForm = () => {
    return  (
        <li className="nav-item toggle-nav-search hidden-caret">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#search-nav"
                role="button"
                aria-expanded="false"
                aria-controls="search-nav"
              >
                <i className="fa fa-search" />
              </a>
        </li>
    )
}
export default HiddenSearchForm 