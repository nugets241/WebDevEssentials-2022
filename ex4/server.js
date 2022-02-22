const express = require('express')
const app = express()
const port = 3000




//Greetings (Extra)
app.get('/', (req, res) => {
  res.send('Well, hello there!')
})




//Task 1 (JSON object)
app.get('/json', (req, res) => {
  res.setHeader("Content-Type", "application/json")
  res.json({Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5, Sunday: 6})
})




//Task 2 (HTML page)
app.get('/html', (req, res) => {
  res.setHeader("Content-Type", "text/html")
  res.send(`
  <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <title>Days of the Week</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    
    <body>
        <h1>Days of the Week</h1>
        <table width="420">
            <tr>
                <td>Monday</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Tuesday</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>4</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Sunday</td>
                <td>6</td>
            </tr>
        </table>
            
    </body>
    </html>
    `)
})




//Task 3 (HTML page of requested row)
app.get('/html/:id', (req, res) => {
  let obj = {Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5, Sunday: 6}
  let objKeys = Object.keys(obj)
  let request = `${req.params.id}`;

  res.setHeader("Content-Type", "text/html")
  res.send(`
  <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <title>Days of the Week</title>
        <link rel="stylesheet" href="../styles.css">
    </head>
    
    <body>
        <h1>Days of the Week</h1>
        <table width="420">
            <tr>
                <td>` + objKeys[request] + `</td>
                <td>` + obj[objKeys[request]] + `</td>
            </tr>
        </table>
            
    </body>
    </html>
    `)
})




//Task 4 (Access CSS file)
app.use(express.static(__dirname))




app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})