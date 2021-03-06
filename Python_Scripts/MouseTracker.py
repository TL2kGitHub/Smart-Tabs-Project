# Not my own written code.
# Can be seen on: https://dev.to/tkkhhaarree/track-windows-app-usage-time-using-python-h9h


from win32gui import GetForegroundWindow
import psutil  # cross-platform library for receiving info on running processes
import time  # provides various functions to manipulate time values
import win32process  # GetWindowThreadProcessId: Retrieves the identifier of the thread and process that created the specified window.

usageTime = {}
timeStamp = {}


while True:
    currentApp = psutil.Process(win32process.GetWindowThreadProcessId(GetForegroundWindow())[1]).name().replace(".exe", "")
    App = currentApp.replace("explorer", "File Navigation")  # changes explorer to file navigation to represent both file explorer and desktop navigation
    timeStamp[App] = int(time.time())
    time.sleep(1)  # delays for 1 second
    if App not in usageTime.keys():  # .keys() not needed
        usageTime[App] = 0

    usageTime[App] = usageTime[App] + int(time.time()) - timeStamp[App]

    print(usageTime)


