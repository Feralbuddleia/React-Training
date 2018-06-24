#React Basic Practice

## Table of Contents

- [Html Table](#html-table)
- [Iphone Layout](#iphone-layout)
- [Counter](#counter)
- [Timer](#timer)
- [Github User](#github-user)

## Html Table

Write React components for HTML table
A basic HTML table looks like this:
```
<table>
  <tr>
    <td>&nbsp;</td>
    <td>Knocky</td>
    <td>Flor</td>
    <td>Ella</td>
    <td>Juan</td>
  </tr>
  <tr>
    <td>Breed</td>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <td>Age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Owner</td>
    <td>Mother-in-law</td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <td>Eating Habits</td>
    <td>Eats everyone's leftovers</td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
```

Requirements:

* Write a React component for <td>, which is a single data in the table.
* Write a React component for <tr>, which is a row in the table that contains the <td> component.
* Write a React component for <table>, which contains a number of <tr> component.


## Iphone Layout

Requirements:

* Write componets to build a simple iPhone screen layout
* Status bar should always stay in top
* Docker should always stay in bottom
* No need to have the extra icon and text for Apps, just use bordered squares.
* For each row the max number of icons is four

![iphone layout](http://tutorial.haochuan.io/diagram/dist/iphone.png)

## Counter

Build simple counter web application using React:

* You need to have a UI to show the current number in the counter
* You need to have a button, which will increase the counter by after clicking.
* You need to have a button, which will decrease the counter by after clicking.
![counter](http://tutorial.haochuan.io/diagram/dist/react-counter-css.png)

## Timer
Build simple timer web application using React:

* You need to have a UI to show the current number in the timer.
* You need to have a button to toggle the timer. If the time has not started yet or has been  stopped, the text on the button should be "start". Otherwise the text should be "stop".
* You need to have a reset button to reset the number of the time to 0. Please note that if you press the reset button while the timer is running, the time should not stop and will start from 0 again.
* Suppose that you started the timer and stopped it at 3 (second), when you start the timer again without reset, the timer should continue running start from 3.
![timer](http://tutorial.haochuan.io/diagram/dist/react-homework-2.gif)

## Github User

In this homework, we are going to practice sending HTTP request in React and build a web application to view github users. First of all we will send a GET HTTP request to get 100 users from github, and render those data in the UI. Then every time when we click one of the user in the list, we will show the detail user information in the UI.
![github user](http://tutorial.haochuan.io/diagram/dist/react-homework-3.gif)
