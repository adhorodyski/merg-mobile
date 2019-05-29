import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import styled from 'styled-components'

const StyledText = styled.Text`
  font-size: 14px;
  color: #333333;
  padding: 0 20px;
  margin: 5px auto;
`

class Note extends PureComponent {
  render() {
    const { about } = this.props
    return (
      <StyledText>
        {about}
      </StyledText>
    )
  }
}

const mapStateToProps = state => ({
  about: state.loggedUser.about
})

export default connect(mapStateToProps)(Note)
