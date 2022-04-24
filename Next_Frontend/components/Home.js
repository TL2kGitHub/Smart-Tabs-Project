function Home() {
  return (
    <div>
      <div className="introBox">
        <div className="intro">Introduction:</div>
        <div className="info">
          The purpose of the Smart Tabs Application Window Formatter is to allow 
          the user to format their desktop the way they want it and allow them to 
          view how long they are spending on their devices. The user first clicks on a 
          shortcut of a .bat file that runs a Python script. The Python script formats 
          the user’s specified application windows that are currently open on the desktop. 
          The mouse tracker code is also started when you click on the shortcut and 
          continually runs while you are using your desktop or laptop. The mouse 
          tracker code sends user data (the data consists of how long the user has 
          used each application) to the Mongo DB database. The user can access the 
          Smart Tabs website (hosted by Amazon Web Services or AWS) by searching 
          for it online. The user can access the activity chart page where they can 
          view how long they are spending on each application (the data from the 
          database is requested by the frontend and displayed on the activity chart). 
          The user can also access the total activity page that has a gauge that 
          displays the total length of time they have spent of their PC. This project 
          will benefit its users by making their lives easier which will boost 
          their productivity overall.
        </div>
        <img src="Smart.gif" alt="ST" className="centreGif"></img>
      </div>
    </div>
  );
}

export default Home;
