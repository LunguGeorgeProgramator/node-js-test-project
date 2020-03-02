I am using a virtual envirement to run node js server and ubuntu as operating system, this application is a mini administration system for medics that tracks patients and treatments for them.

1. To set up one use this tutorial:
    
    https://medium.com/@jaheenafsarsyedks/how-to-create-a-virtual-environment-for-node-js-479c743ef137

2. To start the server just activate the envirement comand (Note this is my activation path ../../node-js-projects/node-js-12.16 use your one path 'YOUR_ENV_PATH'):

        source YOUR_ENV_PATH/bin/activate # my vritaul env is node-js-projects/node-js-12.16
    
3. Then create a folder for the project (my folder is projects) and then set path in terminal with comand (Note this is my projects path ../../node-js-projects use your one path 'YOUR_PROJECTS_PATH'):

        cd YOUR_PROJECTS_PATH/projects   
        
4. Copy the project files to your project folder.

5. To set all the node js packages run comand:

        npm install
6. Run the migration file to create all the tables in data base:

        npx ./migrations.js
   
7. Then start the server with comand:

        node app.js
      
8. To see result in browser just load link:

     http://0.0.0.0:6060/

    (NOTE: I am using local host port 6060 just because it was free on my machine, set any other port in settings.js file)

    https://github.com/LunguGeorgeProgramator/node-js-test-project/blob/master/settings.js
    
        server: {
            hostname: '0.0.0.0',
            port: 6060,
        },
    
  9. To run the tests, enter comand in terminal:

         npm run test
  
  
    
      
  
  
