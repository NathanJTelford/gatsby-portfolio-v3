import React from 'react';
import homePic from '../pics/Screenshot (3).png'
import storeSearch from '../pics/Screenshot (4).png'
import makeList from '../pics/Screenshot (5).png'
import calc from '../pics/Screenshot (6).png'
import dashboard from '../pics/Screenshot (7).png'
// import edit from '../pics/Edit.jpeg'

const Projects = () => {
    return (
        <div style={{ height: "100vh" }}>
            <h1> <a href='' style={{ color: "#497494" }}>  Budget Butler at a glance </a></h1>
            <p>Here's a look at my first collaborative project called Budget Butler. the app was built to help a user create a shopping list with current prices, calculate the total with ease, and never have to worry about forgetting the list. We used React's library for a streamlined dynamic app. Drag and Drop was implemented to create an easy way of reorganizing the lists.
the app makes calls to APIs to access prices and other info needed for a grocery list. we then use javascript to calculate the total price for the user, and twilio to send a text with the list after they finish building the list. MaterialUi was used to style most of the application.
<span>check out the live site here: <a style={{ color: "black" }} href='https://mybudgetbutler.net/#/'>Budget Butler</a> </span>
                <span>  <a style={{ color: "black" }} href='GitHub code: https://github.com/groupprojectalpha/foodie'>Github</a></span>
            </p>
            <div>
                <img style={{width:"14rem", height:"12rem", margin: "1rem"}} src={homePic} />
                <img style={{width:"14rem", height:"12rem", margin: "1rem"}} src={storeSearch} />
                <img style={{width:"14rem", height:"12rem", margin: "1rem"}} src={makeList} />
                <img style={{width:"14rem", height:"12rem", margin: "1rem"}} src={calc} />
                <img style={{width:"14rem", height:"12rem", margin: "1rem"}} src={dashboard} />

            </div>
            <hr />
            <h1 > <a style={{ color: "#497494" }} href='https://telfordtechnologies.com'>SportsTrack at a glance</a>  </h1>
            <p>This is a look at my first personal project SportsTrack. the apps was designed to keep track of scores when no standard scoreboard is available. I used React's library to kick things off, and JavaScript is used throughout for most of the functionality. I implemented sockets to enable spectators to watch real time updates of the score as the game progresses. styling was done with Sass, and HTML5.
<span>check out the live site here: <a style={{ color: "black" }} href='https://telfordtechnologies.com'>SportsTrack</a> </span>
                <span>  <a style={{ color: "black" }} href='https://github.com/NathanJTelford/Portfolio-Personal-Project'>Github</a></span>
            </p>
            <div>
                <img src='Home.png' />
                <img src='login.png' />
                <img src='../Edit.jpg' />
            </div>
        </div>
    )
}


export default Projects;