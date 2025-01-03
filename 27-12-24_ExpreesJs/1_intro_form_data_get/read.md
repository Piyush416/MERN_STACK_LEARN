# Template Enginer
** use for dynamically render the page **
1. ejs
2. hjs
3. pug
** Template engine are small proejct to render dynamical data example: <%javaScript Code %>**


# For Big project we use reactJs 

- **default port number for backend is 3000**
- **default port number for frontend is 8080**
- ***default port number for mongodB is 27017***


# **res.end() will automatically handle by express**
1. res.send() --> send data
2. res.send_file() -> send the file like html
3. res.json() -> to respond the json file


## Middlewar in Express
- **with the help of middlewar we can server all static file**
- we donot have to make each route for static file in node we do it.....
- **app.use(express.static("path of the folder where all static file"))**