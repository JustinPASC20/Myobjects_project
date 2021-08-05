# objects_project

## Instructions
1. Do NOT alter the HTML or CSS and do not use an outside library.

2. Finish setting up the info object in the script.js file

    - Following the format of the first item in the info object, complete the other 3 profiles with 3 other people in your breakout room
    - Remember to create all the same properties as for the first profile, and the same method 

3. Create a variable to reference the div with the id: #content

4. Create a variable called firstPerson to reference the first <a> tag using the id: #first

    - We will be treating this a tag like we have been using <button> tags

5. Setup the first onclick event for the #first <a> tag

    - *Hint: remember to prevent refresh*
    - Inside of this event, create FOUR new elements stored under different variables:
        - Create a <div> tag
        - Create 3 different <p> tags
    - Set the innerHTML for the first <p> tag you created to display person #1's first and last name in a sentence
        - ex: "My name is Francisco Bermúdez"
    - Set the innerHTML for the next <p> tag to display a sentence stating the height of the person
    - Set the innerHTML for the final <p> tag to display a sentence stating their favorite food, and color
    - Using your knowledge about changing CSS with JS change the following styles for our <div> that we made:
        - color: "white"
        - fontSize = "50px"
        - margin = "5% 20% 5% 20%"
        - padding = "30px"
        - border = "solid black 5px"
    - IMPORTANT: we have now created these 4 elements, but we have to add them to our HTML
        - We want to put our 3 <p> tags inside of our <div>, then add our <div> to our #content, HOW do we do that???
            - First, using appendChild add our 3 <p> tags to our <div>
            - Then, add our <div> to our #content :)

6. Now that we have completed one of our profiles, the next step is to repeat steps 4 - 5 for the other 3 people

7. EXTRA CREDIT: edit your code so that only ONE profile can be displayed at a time!

8. EXTRA EXTRA CREDIT: Add a <button> to our profiles in addition to the 3 <p> tags, when the button is pressed it should run the methods that we wrote for all of our profiles