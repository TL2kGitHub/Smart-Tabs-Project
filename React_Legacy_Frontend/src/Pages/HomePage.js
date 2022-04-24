import React from "react";

function Home() {
  return (
    <div className="introBox">
      <div className="intro">Introduction:</div>
      <div className="info">
        Here is a brief summary of why I am doing this 
        for my final year project and how the Smart 
        Tabs Application Window Formatter works. 
        During my work placement last year, I was 
        constantly switching application windows 
        and tabs as I could be using up to ten 
        different windows at any one time. 
        This caused some frustration and I 
        felt like there had to be an easier 
        way to solve this whenever all the 
        windows get jumbled around the desktop work 
        space. This is when my final year project 
        idea was born. As soon as I started my fourth year 
        in college I quickly began researching the 
        best way to accomplish this. The way I have 
        come up for the application window formatter 
        to work is by simply running a Python script 
        that implements the win32gui libraries to 
        format the specific application windows 
        that have been chosen and assigning them 
        at different points on the desktop workspace. 
        This is done by moving the windows to the X 
        and Y co-ordinates on the screen and then 
        specifying what their length and width 
        should be in pixel count. As for now I have 
        the general workings done on the Python 
        script and have done the majority of the 
        front-end work of the Smart Tabs website.
      </div>
      <img src="Smart.gif" alt="ST" className="centreGif"></img>
    </div>
  );
}

export default Home;
