## Notes:
  - Add README file with the steps of configuring your app, running, and testing it
  - Use git and the commit messages to make sense

## Requirements:
- Create vue application
- Consider the project to be SCALEABLE
- Create mobile first responsive app
- Don't use CSS frame works
- Use SASS and follow the guidelines mentioned bellow
- Create unit tests that validates all your code

- create a responsive YOUTUBE app
- head bar:
  - in mobile it will be scrollable
  - in desktop it will be fixed

- the main page:
  - is a search page /search?query={txt}
- in mobile:
  - it will look like mobile1.png has header, filters, and body
  - the header contains logo search text and search icon
  - when u click on the search key the search text will convert to search input like in search-control.png
  - the loading will be like the mobile-loading-state.png
  - the filters is 2 dropdowns one with type all, channel, and play list
  - the other with upload date today, this week this month
  - the body contains channels, videos, and play Lists with different shapes like in the screenshot
  - the channel has load more items when u click will be loading more items like in loadmore.png, and loading.png

- in desktop:
  - it will looks like desktop-view.png/ desktop-view-1.png
  - the heder is fixed when scrolling
  - the header has the logo and the search controllers
  - the second header had the results count and the filters button
  - when u click the filters button it will open the filters area like in desktop-filters.png
  - when u search (write in textbox and press enter or click the search button) the loading bar will appear like in desktop-loading.png
  - when u click any of the filters the loading bar will appear too and the filters area will hide
  - using filters the same as in the youtube page and u can check the desktop-filters-1.png for details
  - the page will use enless scrolling when you scroll to the end of the page it will load more like in desktop-loading-on-scroll-end.png

- channel page: /channel/{channelId}
  - some data about the channel and a list of its videos + playlists like in mobile-channel-details.png / desktop-channel-details.png

- the details page: /video/{video/id}
  - will has embed video and some of its data and videos List like in desktop-video-details.png / mobile-video-details.png:
    - the playlist videos in case of playlists
    - a list of related videos in case of a video is clicked

- when clicking on the video in any page the details page will open
- when click on the cannel it will open the channel page
- when click on a play list from search and channel pages the details page will open

use youtube Apis:
the search Api https://developers.google.com/youtube/v3/docs/search/list#try-it
related videos https://developers.google.com/youtube/v3/docs/search/list
channel playlist https://developers.google.com/youtube/v3/docs/playlists/list
cannel sections: https://developers.google.com/youtube/v3/docs/channelSections/list
playlist videos https://developers.google.com/youtube/v3/docs/playlistItems/list
video details https://developers.google.com/youtube/v3/docs/videos/list
channel details https://developers.google.com/youtube/v3/docs/channels/list

### Preferred:
- Use git and the commit messages to make sense
- try to use linters SASS, and js be consistent in the way of writing ur code

### Guidelines
- BEM,& SMACSS in writing you scss code.
- css guideline:
  - http://cssguidelin.es/.
- js guidelines:
  - https://github.com/airbnb/javascript/tree/master/es5
- please follow vue guidlines
