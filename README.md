peerjs-with-nodewebkit(NW.js)-tutorial
===============================

## What's this?

This is a demo for [A tutorial on using PeerJs in node-webkit app][1]. It shows how to integrate [PeerJs][2] into your [node-webkit/NW.js][3] app, thus making your app able to do P2P communication.

## How to run this demo?

It can be run on a single machine or two machines, your computer(s) needs to be connected to Internet.

### run on a single machine

1. Download node-webkit from [here][4]

2. Install [node.js][5]

3. [Download this demo][6] or `git clone https://github.com/laike9m/peerjs-with-nodewebkit-tutorial.git`

4. Enter app directory, run `npm install` to install all dependencies

5. Run the app. Node-webkit has great [documentation][7] on this. 

6. You'll see this window  
![](http://laike9m.com/media/content/BlogPost/images/peer-nw-1.jpg)

7. Click `receive` button first, then click `send` button.

If all goes well, you'll find a newly created file called `received_gitignore` in app's directory. This file is exactly the same as `.gitignore`, You just transferred it to yourself!

### run on two machines

Step 1-6 is are the same, you should do them on both machines.

On one machine, click `receive` button, on the other machine, click `send` button. `.gitignore` will be transferred and saved as `received_gitignore` on receiving side.

## Detailed implementation

See my tutorial: [A tutorial on using PeerJs in node-webkit app][1]

[1]:http://www.laike9m.com/blog/a-tutorial-on-using-peerjs-in-node-webkit-app,57/
[2]:http://peerjs.com/
[3]:https://github.com/rogerwang/node-webkit/
[4]:https://github.com/rogerwang/node-webkit#downloads
[5]:http://nodejs.org/
[6]:https://github.com/laike9m/peerjs-with-nodewebkit-tutorial/archive/master.zip
[7]:https://github.com/rogerwang/node-webkit/wiki/How-to-run-apps