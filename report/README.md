# CS/IT 4830 Hack Week Report
### *Evan Gerstner, Avery Wald, Mike Weiss*

## [Check out the app here](http://www.mjwcbc.me:8081/)

## Introduction
We decided to use the tools and knowledge gained this semester to build a data visualization/data retrieval website utilizing Spotify's API.  Our aim for this is to create an app that can display data about a user's listening habits in an interesting format.
## Problem
People are always interested in their Spotify statistics; for proof of this, look no further than the Yearly Wrapped that Spotify releases December of each year. It displays interesting data about your listening habits, but there are some issues. First, as the name implies, it only comes out once a year. Also, the data is mainly text format with some pictures of album covers or artists. There isn't anything interesting like graphs that display the data.
## Solution
A PWA that uses Spotfy's [pretty robust API](https://developer.spotify.com/documentation/) to display meaningful metrics about a Spotify user in interesting an intuitive ways. We made an app that allows a user to log in directly with their Spotify account.
## Implementation

### Running and Testing Locally
1. Clone the repo
2. Change directories to the angular app with `cd code/app/`
3. Install node / angular dependencies with `npm i`
4. Run the app with `ng serve`

Note: Running the app locally by following these instructions will be an accurate display of the app with the local test data. However, the login features won't work locally since you need the Node.js script to do this. Instead, just navigate to `/dashboard` and the dashboard will load with the test data.

### *Related work*
[Stats for Spotify Website](https://www.statsforspotify.com/):
This website displays Spotify data like recently played, top tracks, and top artists with timeframes that the user can select.
Overall it's very polished, but the data is mostly in list format, especially the recently played page.
Also, it doesn't use graphs or any similar visual aids.

[Spotify's Yearly Wrapped](https://open.spotify.com/genre/2020-page?locale=en):
This was a big inspiration for the project we ended up implementing. Spotify gives you information about your top tracks, your top artists, and top genre for the calendar year.
However, like Stats for Spotify, it doesn't provide any graphs and we also felt that there were extra metrics that we could add to our application. This would hopefully end up yielding a more robust overview of one's listening habits. Plus, our app would be available at any time, not just yearly.

### I. Spotify API Authentication
This is an integral part of the whole system, the app relies on Spotify's music listening data and streaming service. On top of having a good platform, Spotify has good open source API documentation and some example auth scripts on [Github](https://github.com/spotify/web-api-auth-examples). We modified this authorization flow to use a cookie instead of passing parameters in the URL. We also made it work with Angular and other miscellaneous things such as HTTPS functionality.

### Backend
- Node.js script hosted on AWS EC2 instance (app.js).
    - Script handles Spotify Authorization, which is the OAuth2 flow (/login and /callback)
    - It also handles the API calls for data retrieval (e.g. /api/userinfo )
    - Script utilizes Express.js
- Example of API data retrieval:
Using the Spotify Get User Profile Info API:
![Get User Profile Info API](https://github.com/Mizzou-CSIT4830-CS7830-F20/hackweekprojects-appstronauts/blob/master/screenshots/API_Get_User_Profile.PNG)
We are able to return the Users Spotify profile data in JSON form:
![Get User Profile Info JSON](https://github.com/Mizzou-CSIT4830-CS7830-F20/hackweekprojects-appstronauts/blob/master/screenshots/API_Json_Data.PNG)
This Get User Info API is utilized in our project and displayed on the [User Info Page](https://www.mjwcbc.me:8081/dashboard/user-info)
![Get User Profile Info JSON](https://github.com/Mizzou-CSIT4830-CS7830-F20/hackweekprojects-appstronauts/blob/master/screenshots/API_User_Info_Page.PNG)

### Frontend
- The frontend was built using Angular, Bootstrap, and NgCharts
    - Gets data from the API middleman server
        - uses cookie service and auth guards to secure app and user data
        - funnels data through typed models for easy graphing
        - graphing library to data visualization
        - bootstrap for quick and responsive styling

### Who Implemented What
- Mike
    - Created the Node.js script and hosted the production build on my server
    - Set up the Guards in Angular to stop URL hacking
    - Created the first implementation of the data service (this service was later revised by Avery)
    - Did some of the frontend data computation (e.g. % of explicit content and average duration)
    - Assisted in getting the data into the graphing service in order to facilitate graph creation
    - Created a few of the Angular types for data uniformity
- Avery
    - Set up documentation resources
        - READMEs
        - Resource lists
    - Facilitated repo workflow
        - Handling branching, pulls, and merges to keep feature dev branches separate and easy to integrate
        - kanban to-do list
    - Set up Angular project structure
        - created most of the model interfaces for easy API data funnelling
        - routing configuration
    - built Angular frontend components
        - dashboard and sidebar component with data binding and eventemitters
    - built Angular pages
        - dashboard
        - 404 page
    - bootstrapped Angular components/pages
    - reviewed / revised code and supported Mike and Evan when needed
- Evan
    - Created the charts to take data from Test data
        - Bubble Chart component
            - Created new top artist type so chart could accept data & keep name and image together for table below
        - Radar Chart component
            - Created radar artist type so 'y-axis' could be dynamic and artists would match up with correct plays
    - Worked with Mike to get the data into the graphing services
        - Allowed for data to be taken dynamically from the API's
    - Assisted Mike with making Top Arists table to ensure it was in same order as bubble chart

## Knowledge Gained
- Working with a REST API
- Using a third party login (we used Spotify's user accounts for our login)
- OAuth2 Flow
- Angular Concepts
    - Use of the HTTP Client for get requests
    - Use of guards to ensure login
    - Use of the ngx-cookie-service to help with login and API requests
- Chartmaking with [Chart.js & ng2-charts](https://www.positronx.io/angular-chart-js-tutorial-with-ng2-charts-examples/ )
    - How to shift to accept dynamic data input

## Future Work
- One idea is to integrate even more features of the Spotify API
    - For example, usage of the [Audio Features](https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-audio-features/ ) and [Recommendations](https://developer.spotify.com/documentation/web-api/reference/browse/get-recommendations/ ) endpoints
        - Audio features grabs audio data (e.g. acousticness, danceability, enegry) when provided song ids
        - Recommendations returns recommended songs based on track attribute parameters, such as the aforementioned acousticness, danceability, and energy stats
        - We could have it so that our page gets your top tracks, then gets audio features from those tracks, then averages out those audio feature values, and then uses those averages to obtain recommended songs
