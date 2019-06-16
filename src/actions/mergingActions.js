import { FETCH_MERGING } from './types'
import axios from 'axios'
import { AuthSession } from 'expo'
import * as base from '../variables'

export const fetchMerging = () => async dispatch => {
  await axios.get(`${base.API_URL}/api/merging`)
  .then(res => {
    const {
      facebook,
      twitter,
      instagram,
      spotify,
      tumblr,
      youtube,
      tags
    } = res.data.user

    dispatch({
      type: FETCH_MERGING,
      payload: {
        letContinue: (
          facebook
          || twitter
          || instagram
          || spotify
          || tumblr
          || youtube
        ) ? true : false,
        facebook: facebook ? true : false,
        twitter: twitter ? true : false,
        instagram: instagram ? true : false,
        spotify: spotify ? true : false,
        tumblr: tumblr ? true : false,
        youtube: youtube ? true : false,
        creatorsTags: tags
      }
    })
  })
  .catch(err => console.log((err)))
}

// authenticate with Twitter
export const authTwitter = () => async dispatch => {
  await fetch(`${base.API_URL}/api/auth/connect/twitter`, {
    method: 'post'
  })
  .then(async res => {
    // request for permission
    let redirectUrl = AuthSession.getRedirectUrl()
    let result = await AuthSession.startAsync({
      authUrl: `${res.url}&redirect_uri=${encodeURIComponent(redirectUrl)}`
    })

    // save & check authentication result
    const { oauth_token, oauth_verifier } = result.params
    await fetch(`${base.API_URL}/api/auth/twitter/callback?oauth_token=${oauth_token}&oauth_verifier=${oauth_verifier}`)
    .then(res => {
      console.log(res)
    })
  })
  .catch(err => console.log(err))
}

// authenticate with Youtube
export const authYoutube = () => async dispatch => {
  await fetch(`${base.API_URL}/api/auth/connect/youtube`, {
    method: 'post'
  })
  .then(async res => {
    // request for permission
    let redirectUrl = AuthSession.getRedirectUrl()
    let result = await AuthSession.startAsync({
      authUrl: `${res.url}?redirect_uri=${encodeURIComponent(redirectUrl)}`
    })

    // save & check authentication result
    const { code } = result.params
    await fetch(`${base.API_URL}/api/auth/youtube/callback?code=${code}`)
    .then(res => {
      console.log(res)
    })
  })
  .catch(err => console.log(err))
}

// authenticate with Tumblr
export const authTumblr = () => async dispatch => {
  await fetch(`${base.API_URL}/api/auth/connect/tumblr`, {
    method: 'post'
  })
  .then(async res => {
    // request for permission
    let redirectUrl = AuthSession.getRedirectUrl()
    let result = await AuthSession.startAsync({
      authUrl: `${res.url}&redirect_uri=${encodeURIComponent(redirectUrl)}`
    })

    // save & check authentication result
    const { oauth_token, oauth_verifier } = result.params
    await fetch(`${base.API_URL}/api/auth/tumblr/callback?oauth_token=${oauth_token}&oauth_verifier=${oauth_verifier}`)
    .then(res => {
      console.log(res)
    })
  })
  .catch(err => console.log(err))
}
