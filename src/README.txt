To run the application:

    - either open folder in an IDE with an interal terminal OR guide to the folder in your CMD
    - run ionic serve
    - application should open in browser of choice

-------------------------------------------------------------------------------------------------------------------

HOW TO USE:

- The application has a few pages

The homepage is used for the user profile, showcases data stored of various user information
Use the top left menu button to show navigation
        -- Home
            * user profile
        -- Video Examples
            * Can be updated with new video links. Shows embedded exercise examples
        -- Weekly Workouts
            * Workouts "updated" weekly. Click on each workout to have a pop up description of the workout
        -- Personal Trainers
            * Showcases current trainers to work with, click bottom right CONTACT button to "send" them an email for services.
        -- Gym Finder
            * Will ask to confirm you location with alter
            * Select predetermined places and distance
            * Map is updated with locations for gyms near you

**** USE CASE ****

You the user may want to first open the application and go straight to the weekly workouts, hitting the top left to open the navigation and then proceeding to the weekly workouts page
you can view the workouts while also scrolling down to the custom log section
this can be saved using the save button to go and check out the tutorials on the exercises
these tutorials can be found again through the navigation menu in the video examples link
after viewing the video example you can proceed back to your workout that you saved earlier

-------------------------------------------------------------------------------------------------------------------

FEATURES USED IN APPLICATION:

Routing - menu navigation has routing features
Services
GeoLocation - used for the gym finder page to search a selected place based on users location
localStorage - stores custom or current workout that the user may be tracking, allows for leaving of page (maybe to check video of tutorial for the exercise) and to come back
Pipes - used for santizing the youtube links so that they can be embedded
Ionic 
Angular 2

-------------------------------------------------------------------------------------------------------------------

CODE ORGANIZATION:

--- APP
    contains most of the application within, plus the main app.module and other main files for overall application routing, etc
--- ASSETS
    was going to use JSON files to implement a list of exercises, see information.json for an idea
--- PAGES
    overall program structure is stored within this folder, works with the routing done in the app files
--- PIPES
    sanitizes youtube links for proper iframe embedding on the exercise list page

-------------------------------------------------------------------------------------------------------------------


