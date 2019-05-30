import * as base from '../variables'

// TWITTER STREAM
export const getTwitterStream = async user => {
  const { twitterID } = user
  const dataWrapper = {
    data: {
      id: twitterID,
      user: user
    }
  }
  return await fetch(`${base.API_URL}/api/lists/streamTwitter`,
  {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataWrapper)
  }
)
.then(res => { return res.json() })
.then(data => { return data })
.catch(err => console.log(err))
}

// INSTAGRAM STREAM
export const getInstagramStream = async user => {
  const { instagramToken } = user
  const dataWrapper = {
    data: {
      token: instagramToken,
      user: user
    }
  }
  return await fetch(`${base.API_URL}/api/lists/streamInstagram`,
  {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataWrapper)
  }
)
.then(res => { return res.json() })
.then(data => { return data })
.catch(err => console.log(err))
}

// TUMBLR STREAM
export const getTumblrStream = async user => {
  const { tumblrName } = user
  const dataWrapper = {
    data: {
      tumblrName: tumblrName,
      user: user
    }
  }
  return await fetch(`${base.API_URL}/api/lists/streamTumblr`,
  {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataWrapper)
  }
)
.then(res => { return res.json() })
.then(data => { return data })
.catch(err => console.log(err))
}

// YOUTUBE STREAM
export const getYoutubeStream = async user => {
  const { youtubeID } = user
  const dataWrapper = {
    data: {
      id: youtubeID,
      user: user
    }
  }
  return await fetch(`${base.API_URL}/api/lists/streamYoutube`,
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataWrapper)
    }
  )
  .then(res => { return res.json() })
  .then(data => { return data })
  .catch(err => console.log(err))
}
