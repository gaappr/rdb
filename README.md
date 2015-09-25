# rdb
A node.js remote debugging tool specifically aimed at debugging javascript within the Adobe DPS app framework. Note that at this
point this is a very basic framework.

To run:

Server Side
1. Create a folder for the debugger to run in
2. Switch to the newly created folder
3. npm install socket.io
4. copy node_rdb.js to the directory created in step 1
5. Edit the node_rdb.js file to set the port you would like to listen on (default is 3000) 
6. Run the remote debugger using the command "node node_rdb.js"

Client Side
1. Include the remoteDebugger.js file in your html
2. Set the port the server is listening on in the remoteDebugger.js (default is 3000)
3. Include the following js file in the head of your html so that socket.io will work: https://cdn.socket.io/socket.io-1.2.0.js
4. Use console.log, console.error, console.info, and console.warn normally within your javascript

If you're having trouble connecting to the remote server you should ensure that your firewall is allowing the necessary port through.
