import React from 'react'
import GitHubFeed from 'react-github-activity'
 
class GithubActivity extends React.Component {
  render() {
    const fullName = 'Byron Jimenez'
    const userName = 'bydavid1'
    const avatarUrl = 'https://avatars.githubusercontent.com/u/45832100?v=4'
    const events = [/* data result from https://api.github.com/users/${userName}/events */];
    
    return (
    <GitHubFeed
      fullName={fullName} // Provide Full Name as displayed on GitHub
      userName={userName} // Provide User Name as displayed on Guthub
      avatarUrl={avatarUrl} // Provide the avatar url of your github profile
      events={events} // provide array of events using the users '/events' endpoint of github api
    />
    );
  }
}

export default GithubActivity;