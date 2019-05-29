import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchAuth } from '../../actions/authActions'
import { fetchLoggedUser } from '../../actions/loggedUserActions'

import { Main } from '../Home/Home'
import River from './River'
import About from './About'

class ProfileScreen extends PureComponent {
  componentDidMount = async () => {
    await this.props.fetchAuth()
    await this.props.fetchLoggedUser()
  }

  render() {
    return (
      <Main>
        <About />
        <River />
      </Main>
    )
  }
}

export default connect(null, { fetchAuth, fetchLoggedUser })(ProfileScreen)
