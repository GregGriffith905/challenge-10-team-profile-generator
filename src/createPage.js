const openHTML = () =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    `;
const employeeSection = (role,{name,id,email,officeNumber,gitHub,school}) =>
    `   <div>
            <h2>${name}</h2>
            <h4> ${role}</h4>
            <h5>ID: ${id}</h5>
            <h5>Email: <a href='mailto:${email}'>${email}</a></h5>
            ${role=='Manager'?`<h5>Office Number: ${officeNumber}</h5>`:''}`+
           `${role=='Engineer'?`<h5>Github: ${gitHub}</h5>`:''}`+
           `${role=='Intern'?`<h5>School: ${school}</h5>`:''}`+`
        </div>
    `;    
const closeHTML = () =>
    `</body>
    </html>
    `;


let createPage = (manager,engineers,interns) =>{
    let returnVal;
    returnVal = openHTML();
    returnVal += employeeSection('Manager',manager);
    engineers.forEach(engineer => returnVal += (employeeSection('Engineer',engineer)));
    interns.forEach(intern => returnVal += (employeeSection('Intern',intern)));
    returnVal += closeHTML();
    return returnVal;
}

module.exports = createPage;
