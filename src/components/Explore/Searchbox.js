import React, { PureComponent } from 'react'
import { View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import {
  newExploreQuery,
  searchWithQuery
} from '../../actions/exploreActions'
import styled from 'styled-components'
import { palette } from '../Shared/palette'
import * as theme from '../Shared/themes'
import { Ionicons } from '@expo/vector-icons'

import { Tile } from '../Shared/UI'

const StyledTile = styled(Tile)`
  position: relative;
  width: auto;
  margin: 10px 10px 0 10px;
  padding: 0;
  box-shadow: 0 4px 3px ${theme.smallShadowColor};
  background: ${theme.overlayBackgroundColor};
`

export const IconSearch = styled(Ionicons)`
  position: absolute;
  top: 15px;
  left: 18px;
`

export const IconClear = styled(Ionicons)`
  position: absolute;
  top: 8px;
  right: 10px;
  padding: 5px 10px;
  z-index: 10;
`

const Input = styled.TextInput`
  width: 100%;
  height: 100%;
  padding: 0 50px;
  border-radius: 10px;
  background: transparent;
  color: ${theme.primaryTextColor};
  font-weight: bold;
  font-size: 18px;
  z-index: 1;
`

class Searchbox extends PureComponent {
  askQuery = async queryValue => {
    await this.props.newExploreQuery(queryValue)
    await this.props.searchWithQuery()
  }

  render() {
    const { exploreQuery, newExploreQuery } = this.props

    return (
      <StyledTile>
        <IconSearch
          name="ios-search"
          size={20}
          color={`${palette.lightText}`} />
        {
          exploreQuery !== '' &&
          <IconClear
            name="ios-close-circle-outline"
            size={25}
            onPress={() => this.askQuery('')}
            color={`${palette.lightText}`} />
        }
        <Input
          value={exploreQuery}
          onChangeText={value => this.askQuery(value)}
          placeholder='Search whatever!'
          placeholderTextColor={`${palette.lightText}`} />
      </StyledTile>
    )
  }
}

const mapStateToProps = state => ({
  exploreQuery: state.explore.exploreQuery
})

export default connect(
  mapStateToProps,
  {
    newExploreQuery,
    searchWithQuery
  }
)(Searchbox)
