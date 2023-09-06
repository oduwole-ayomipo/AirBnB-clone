# AirBnB Online Exerience Clone Project

This project is a clone of the AirBnB online experiences page that was developed using create react app. Here, three component was rendered (Navbar, Hero and the Card component) which were styled using tailwind css.

## Table of contents

- [AirBnB Online Exerience Clone Project](#airbnb-online-exerience-clone-project)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued Development](#continued-development)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See the badge displayed on the card to identify whether an experience is online, sold out or none.
- Obtain information about each experience, such as descriptions, pricing, and location

### Screenshot

![](https://github.com/oduwole-ayomipo/AirBnB-clone/blob/main/airbnbclone.png)


### Links

- [Solution URL](https://github.com/oduwole-ayomipo/airbnb-clone)
- [Live Site URL](https://airbnbclone.netlify.app/)

## My process

### Built with

- JavaScript
- React Library
- Tailwind CSS
- Mobile-first workflow


### What I learned

- The concept of props, 
- Creating components from an array
- Using the .map() function to iterate over an array of data in a database and creating a new array that will be displayed on the browser
- The spread operator in js
- Understanding and getting familiar with the different tailwind classes
- Applying the mobile first approrach with tailwind css
- And so much more...


#### These are some snippets I am proud of


```js
/// card badge logic
    let badgeText 
     if (props.card.openSpots === 0) {
        badgeText = "Sold Out"
     } else if (props.card.location === "Online") {
        badgeText = "Online"
     }
    

    return (
        <div className="card-array relative pr-6 flex flex-row md:pr-12 ">
            {/* card badge */}
            {badgeText &&
                <div className="card-badge absolute my-2 mx-3 bg-slate-200 py-1 px-2 rounded">
                    <h3 className="badge-text text-xs font-bold uppercase">{badgeText}</h3> 
                </div>
            }
            {/* card badge end */}
    )
```

```js
    const cardElement = cardData.map (card => {
    return (
      <Card 
        key = {card.id}
        card = {card}
      />
    )   
  })
```

### Continued Development

In future iterations of my journey on coding with react, I plan to learn:

- Event Listeners In React
- Concept of State and Stateless
- Form Handling
- Side Effects in react

## Author

- Oduwole Ayomipo
- Twitter - [JustAyooo](https://www.twitter.com/ayooo.eth)


## Acknowledgments
ME and Bob ziroll from Srcimba Community
