const fs = require('fs');

const generateHTML = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <title>Portfolio</title>
    </head>
    <body>
        <header class ='p-5 mb-4 header bg-light'>
            <div class="container">
                <h1 class="display-4">Hi! My name is Chris</h1>
                <p class="lead">I am from Riverside, California</p>
                <h3>Contact Me</h3>
                <ul class="list-group">
                    <li class="list-group-item">Github username is</li>
                    <li class="list-group-item">LinkedIn: https://www.linkedin.com/in/chrisluisgomez/ </li>
                </ul>
            </div>
        </header>
    </body>
    </html>`;
}

const init = () => {
    const html = generateHTML();
    const fileName = 'index.html'
    fs.writeFile(fileName, html, (err) => {
        err ? console.log(err) : console.log(`Successfully created ${fileName}!`);
        })
}

init();