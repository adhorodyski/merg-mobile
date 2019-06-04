import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchAuth } from '../../actions/authActions'
import { fetchLoggedUser } from '../../actions/loggedUserActions'

import { Main } from '../Shared/UI'
import Picture from './Picture'
import Personal from './Personal'
import General from './General'
import Legal from './Legal'
import Logout from './Logout'

class Settings extends PureComponent {
  componentDidMount = async () => {
    await this.props.fetchAuth()
    await this.props.fetchLoggedUser()
  }

  render() {
    return (
      <Main>
        <Picture />
        <Personal />
        <General />
        <Legal />
        <Logout />
      </Main>
    )
  }
}

export default connect(null, { fetchAuth, fetchLoggedUser })(Settings)
