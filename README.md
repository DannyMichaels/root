# root
https://root-green-transport.netlify.app/

## Project Overview
Root is an application designed to provide sustainable transportation methods to users. The first iteration will include information on the different types of transportation where users can add, delete, edit or view options and shows transportion policies and initatives for select cities in the US. The second iteration introduces the concept of a user login as well as mobile breakpoints throughout the site. 

This project was built by a team of developers in collaboration with a UX/UI team who provided the overall concept & design of the app, wireframes and all assets.

## Team Expectations Worksheet
https://docs.google.com/document/d/1O9Oq98FUw1qUGOwiCEekuJjSE56oMeLVoL6ADvQQzQ8/edit?usp=sharing

## Whimsical Diagram
https://whimsical.com/5mRKMSMpTjbL66AQxEUpJf

## GitHub Project Board
https://github.com/allicue/root/projects/1?add_cards_query=is%3Aopen

## Example Schema
```
const transportationType = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true }
  }
)
```

