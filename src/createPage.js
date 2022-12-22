const openHTML = () =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
        <title>Meet The Team</title>
    </head>
    <header>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1"><h1>Meet The Team</h1></span>
            </div>
        </nav>
    </header>
    <body>
    <div class="container text-right">
    <div class="row align-items-start">
      
      
    `;
const employeeSection = (employee) =>{
    let {name,id,email,officeNumber,gitHub,school} = employee;
    let role = employee.getRole();
    let icon = employee.getIcon();
    return `
        <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body bg-primary">
            <h3 class="card-title">${name}</h3>
            <h5 class="card-text">${icon} ${role}</h5>
            </div>
            <div class="card-body" >
                <ul class="list-group list-group-flush" >
                <li class="list-group-item" ><h6>ID: ${id}</h6></li>
                <li class="list-group-item"><h6>Email: <a href='mailto:${email}'>${email}</a></h6></li>
                ${role=='Manager'?`<li class="list-group-item"><h6>Office #: ${officeNumber}</h6></li>`:''}`+
               `${role=='Engineer'?`<li class="list-group-item"><h6>Github: <a href='https://github.com/${gitHub}'>${gitHub}</a></h6></li>`:''}`+
               `${role=='Intern'?`<li class="list-group-item"><h6>School: ${school}</h6></li>`:''}`+`
                </ul>
            </div>  
        </div>
        </div>
       
    `;}    
const closeHTML = () =>
    `</div>
    </div>
    </body>
    </html>
    `;
let createPage = (manager,engineers,interns) =>{
    let returnVal;
    returnVal = openHTML();
    returnVal += employeeSection(manager);
    engineers.forEach(engineer => returnVal += (employeeSection(engineer)));
    interns.forEach(intern => returnVal += (employeeSection(intern)));
    returnVal += closeHTML();
    return returnVal;
}
module.exports = createPage;


