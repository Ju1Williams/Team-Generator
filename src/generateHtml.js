const index = require('../index')

//Only getting one card

function generateMarkdown(engineerResponse) {
    return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Employee ID</title>
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
      </head>

      <body>
        <header>
        <h1 class="header">Software Team</h1>
        </header>
      <section id="cards">
        <div class = "card border-primary mb-3" styl="max width: 18rem;">
        <div class ="card-header" id="classHeader">${engineerResponse.name}</div>
        <div class ="card-header" id="classHeader">Engineer</div>
        <div class ="card-body text-primary</div>
            <p class="card-text"> ID: ${engineerResponse.id}</p>
            <p class="card-text">Email: ${engineerResponse.email}</p>
            <p class="card-text">github: Githhub${engineerResponse.github}</p>
        </div>
        </div>
        </section>



      
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
      </body>
    </html`
}
module.exports = generateMarkdown