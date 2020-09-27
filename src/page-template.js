// create the about section
const generateAbout = (aboutText) => {
  if (!aboutText) {
    return "";
  }

  return `
      <section class="my-3" id="about">
        <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
        <p>${aboutText}</p>
      </section>
    `;
};

const generateProjects = (projectsArr) => {
  return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class="flex-row justify-space-between">
        ${projectsArr
          .filter(({ feature }) => feature)
          .map(({ name, description, languages, link }) => {
            return `
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <h3 class="portfolio-item-title text-light">${name}</h3>
              <h5 class="portfolio-languages">
                Built With:
                ${languages.join(", ")}
              </h5>
              <p>${description}</p>
              <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
            </div>
          `;
          })
          .join("")}
  
        ${projectsArr
          .filter(({ feature }) => !feature)
          .map(({ name, description, languages, link }) => {
            return `
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
              <h3 class="portfolio-item-title text-light">${name}</h3>
              <h5 class="portfolio-languages">
                Built With:
                ${languages.join(", ")}
              </h5>
              <p>${description}</p>
              <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
            </div>
          `;
          })
          .join("")}
        </div>
      </section>
    `;
};

module.exports = (templateData) => {
  // destructure page data by section
  const { projects, about, ...header } = templateData;

  return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">${
            header.name
          }</h1>
          <nav class="flex-row">
            <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
              header.github
            }">GitHub</a>
          </nav>
        </div>
      </header>
      <main class="container my-5">
         ${generateAbout(about)}
         ${generateProjects(projects)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${
    header.name
  }</h3>
      </footer>
    </body>
    </html>
    `;
};


// // create the about section
// const generateManager = (managerData) => {
//   const { name, id, email, jobTitle, officeNumber } = managerData[0];
//   if (!managerData[0]) {
//     return "";
//   }

//   return `
//         <div class="card" id="">
//           <div class="card-header">
//             <h2>${name}</h2>
//             <h4>${jobTitle}</h4>
//           </div>
//           <div class="crd-body">
//                 <p> ID : ${id}</p>
//                 <p>Email : ${email}</p>
//                 <p>Office-Number:${officeNumber}</p>
//           </div>
//         </div>
//       `;
// };
// const generateEngineer = (engineerData) => {
//   //   const { name, id, email, jobTitle, officeNumber } = engineerData;
//   if (!engineerData) {
//     return "";
//   }

//   return `
//   ${engineerData.map(({ name, id, email, jobTitle, github }) => {
//     return `<div class="card" id="">
//       <div class="card-header">
//         <h2>${name}</h2>
//         <h4>${jobTitle}</h4>
//       </div>
//       <div class="crd-body">
//             <p> ID : ${id}</p>
//             <p>Email : ${email}</p>
//             <p>GitHub:${github}</p>
//       </div>
//     </div>`;
//   })}
        
//       `;
// };
// const generateIntern = (internData) => {
//   //   const { name, id, email, jobTitle, officeNumber } = internData;
//   if (!internData) {
//     return "";
//   }

//   return `
//   ${internData.map(({ name, id, email, jobTitle, school }) => {
//     return `<div class="card" id="">
//       <div class="card-header">
//         <h2>${name}</h2>
//         <h4>${jobTitle}</h4>
//       </div>
//       <div class="crd-body">
//             <p> ID : ${id}</p>
//             <p>Email : ${email}</p>
//             <p>School:${school}</p>
//       </div>
//     </div>`;
//   })}
        
//       `;
// };

// module.exports = (templateData) => {
//   // destructure page data by section
//   const { manager, engineer, intern } = templateData;

//   return `
//       <!DOCTYPE html>
//       <html lang="en">
    
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Portfolio Demo</title>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//         <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Open+Sans:wght@400;600&family=Roboto&display=swap" rel="stylesheet">
//         <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//         <link rel="stylesheet" href="style.css">
//       </head>
    
//       <body>
//         <header>
          
//             <nav class="">
//             <h1>TEAM</h1>
            
//             </nav>
       
//         </header>
//         <main class="container my-5">
//            ${generateManager(manager)}
//            ${generateEngineer(engineer)}
//            ${generateIntern(intern)}
//         </main>
//         <footer class="container text-center py-3">
//           <h3 class="text-dark">&copy; ${new Date().getFullYear()} by solomon </h3>
//         </footer>
//       </body>
//       </html>
//       `;
// };
