# Hack Week Project

## Overview

_Due Sunday, November 22 at 11:59:00pm_

_Submit through GitHub Classroom **AND** Canvas_

GitHub Classroom Link: [https://classroom.github.com/g/Ma94uQFr](https://classroom.github.com/g/Ma94uQFr)

In JavaScript terms, I’d like you to…

```javascript
// Get your friends
$.get("http://cs-it:4830-7830/friends", function (friends) {
  // Get your computers
  for (var i in friends) {
    friends[i].getComputer();
  }
  // And some snacks
  while (snacks > 0 && energyDrinks > 0) {
    friends.code();
  }
});
```

In other words, the Hack Week Project is a collaborative, exploration-style challenge where you are to brainstorm and build a complete web application prototype. When the word `prototype` is being used here, it means a valid beta version of the app where the app is working correctly and can be demonstrated to the rest of the class using a live version.

**Help with Decision:** If you need help on making a decision then let us know. The best project idea is something that interests you!

## Getting Started and GitHub Submission Link

To start the challenge, go to the link above.

Each feature (maybe each group member) will have their own branch.

`Link` your account, `clone` the repository, make a new `branch`, go into the `code` directory, and `create` your application

Make sure you start a new `development` branch. The `master` branch will be the production branch. At the end, when you are finished, do the final `commit` from all the feature branches back to the `development`, and the final `merge` to `master` then `push` the `master`, `development`, and all the other feature branches back up for grading.

**If you work the entire time on master, you will get points deducted.** This is not a good industry practice.

After pushing back to `origin` for the final submission, I recommend to go to your remote repository on GitHub, download the repository which will give you a zip file of your repo on your local machine, then submit that zip to canvas. The challenge submission will require both on GitHub and Canvas.

**Note:** Make sure the Canvas submission has all of the elements that are included in your GitHub submission which includes a link to the server, the raw code, the journal, and screenshots of the application. **Make sure the canvas submission is up-to-date.**

## Requirements

You should send me a list of your team and a team name. However, you should get started now, don't wait.

The content and function of the application are up to you. You could create a mashup that combines various web technologies and APIs; you could borrow concepts and ideas from the class; or you could search around the Internet and tech blogs for inspiration.

Hack Week is set for the week before Thanksgiving Break. Each project team will demo their work after Thanksgiving Break on Tuesday 12/8 and Thursday 12/10. Presentations are required for the grade, so have some fun while doing it and use this opportunity to show off your work!!

Hack Week Projects account for 20% of your weighted grade. Please use GitHub Classroom to share your code and Amazon AWS to host the result, you are also welcome to make a hybrid application. Firebase and other hosting services can be used. Submit a link to each here and **be sure to include the names of your group members**. Note: If you need a group, then let me know. This semester we will be working in groups of 3s.

**Note:** Make sure you test your application and make sure it works correctly. Run through the document that you created (act like you are the person grading the assignment) to make sure the document is crystal clear.

## What and Where to Submit

**For GitHub:**

1. Raw Code:
   - Server side code
   - Front end code
   - Database queries/schema
   - etc.
2. Report with URL to your instance and:
   - Documentation for project (Format of document is Markdown. The documentation should be more like a project report not a list of items with the following sections).
     - URL to Instance
     - Introduction
       - Group name, Group members, what you worked on and how to use it, basic background information
     - The problem
       - What are you trying to solve
     - Your solution
       - How you decided to solve the problem
     - Related Work
       - Competitors
       - Similar projects
       - List the pros and cons of similar project/competitors and why your product is better
         - Can be better in all areas, which should be explained
         - Or can be better in specific set of areas
     - Implementation
       - Talk about the technologies you used
       - How you used them
       - Who implemented what
       - What and where we should look for grading purposes
         - What do you want to show off in terms of hard work
         - What are you proud of that you accomplished
         - Show us where you did good work
     - Knowledge Gained
       - Pointers, knowledge, tricks to inform the rest of the class
     - Future Work
       - What needs to be finished before the due date
       - What you wanted/planned to do but were not able to finish it
       - Most probably won't, but if you plan to work on this project after the course then please explain what your future plan is
3. Screenshots of your application running with the system clock.
   - Take screenshots of ALL of your finished code
   - The system clock must contain the date/time to be valid
   - **Note:** Link the screenshots in your report as in previous challenges/explorations

**For Canvas:**

4. Submit the URL to the Team's GitHub Classroom Repo
5. Submit your URL to your instance using a "URL Submission" type
6. Then click on `Resubmit`, download your GitHub repository after your final submission and submit that zip file on Canvas and named it `<TeamName>HackWeekProjectF20.zip` where you replace `<TeamName>` with your actual team name.
7. IF you made a mobile application with Ionic, then make sure you submit your app files either .apk or .ipa files, or the links to the application on the iOS app store or Google play store, but only if you created an Ionic application

**NOTE:** For canvas, you cannot submit different types of submissions at the same time. Therefore, you may submit two different submissions, the first submission will be a `URL submission`, where you will copy and paste your URL to your output on the instance and GitHub Repo, then click submit. After the submission is successful, you will click on the big blue button called `Re-submit assignment`, then do a second submission for a `file upload`. You will upload a zip file from your final GitHub submission. On your end it will look like you only submitted the zip file but on our end we will see both submissions.

Total points is 200 -> 100 points for finished product and 100 points for demo/presentation.

Have fun hacking!

## Notes:

1. There is a `code` directory in the GitHub classroom template, this is where your raw code will go. Make sure you do not submit any build code here.
2. There is a `report` directory, this is where your markdown `.md` file will go for the report. Please link your screenshots in the report as in previous challenges. Place your URL link in the report. As well as the information that was asked of you in the requirements.
3. There is a `screenshots` directory, you can place your screenshots there, but please link them in your report.

## Help

If there is anything unclear about what you need to do please let me or the TAs know. If you need help, office hours are located under `Modules` -> `Course Information` -> `Office Hours and TA Information`

## Due date/time

This hack week project will be **due at 11:59:00PM on Sunday, November 22**. Therefore, you will have approximately 2 weeks to complete this assignment. This includes pushing everything to GitHub classroom, submitting the downloaded zip from GitHub on Canvas, and posting the discussion.

**NOTE:** Remember to complete the discussion board.
**NOTE:** Remember to submit the Instance link, GitHub link, and zip file on Canvas
**NOTE:** IF you created an Ionic application make sure you submit your app files
**NOTE:** Good place to look at structure of slides and presentation: [The Slide-Structure of a Technical 20-min Presentation](http://dslsrv1.rnet.missouri.edu/resources/Slides%20Guideline%20For%20A%20Technical%20Presentation.htm)
**NOTE:** Good place to look at [How to Give a Good Talk](https://www.professorwergeles.com/HowToGiveATalk.pptx)
**NOTE:** Good place to look at [How to Write a Good Technical Article](http://www.cs.columbia.edu/~hgs/etc/writing-style.html)

---

> © 2020 Professor Wergeles. All rights reserved.
> _This document is provided with the materials for an educational course and are meant for personal use by the student while participating in the course and is not to be distributed to others._
