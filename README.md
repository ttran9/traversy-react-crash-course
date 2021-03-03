# React Crash Course 2021

# Some Information

    - This is just my following along with the react crash course [here](https://www.youtube.com/watch?v=w7ejDZ8SWv8)

# Notes

    - For Production Deployment:
        - npm run build
            - react-scripts build
            - creates an assets directory inside of build and this can be used to deploy the app.
            - can install the "serve" package.
                - npm i -g serve
                - this is just an http server.
                - serve -s build -p 8000
                    - deploy the build folder on port 8000

    - For JSON Server:
        - Download [here](https://www.npmjs.com/package/json-server)
            - note we don't install it globally.
            - npm i json-server
        - useEffect: used to deal with side effects or to deal with them when a page loads.

    - Routing portion of the video:
        - Note: using the location hook to check if the about component should be displayed may not be ideal but it was a quick hack I was using to just use the location hook.