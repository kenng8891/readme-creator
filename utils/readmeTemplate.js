function readMeTemplate(data) {
  return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


<h1 alight="left"></h1>
<h1 align="center">${data.projectTitle}</h1>
<h2 align="center">By: ${data.personName}</h2>

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

## Description 
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
Licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Test
${data.tests}  

## Questions
All inquiries please email me at ${data.email} link to other projects on github ${data.username}

`;}

module.exports = readMeTemplate; 




