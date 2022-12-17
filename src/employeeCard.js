const createEmployee = (role,info) =>{ 
        `
        <section class="card col-12 col-md-3 mb-2">
            <div class="card-header bg-dark">
                <h2 class="text-light">
                    ${info.name}
                </h2>
                <h4 class="text-light">
                <i class="fas fa-mug-hot"></i> ${role}
                </h4>
            </div>
            <div class="card-body bg-tertiary">
                <h5>ID: ${info.id}</h5>
                <h5>Email: <a href="mailto:${info.email}">${info.email}</a></h5>
                ${role=='Manager'?'<h5>Office Number: ${info.officeNum}</h5>':''}
                ${role=='Engineer'?'<h5>Github: ${info.gitHub}</h5>':''}
                ${role=='Intern'?'<h5>School: ${info.intern}</h5>':''}
            </div>
        </section>
`
};