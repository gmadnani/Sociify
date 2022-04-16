[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Sociify

## Description

A simple portfolio site for aspiring developers, built with Node, Express, Handlebars, MySQL, and deployed to Heroku.
Use it to create and edit your profile and search/view other peoples on the site.

---

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [URL](#url)
4. [Build](#build)
5. [License](#license)
6. [Contributing](#contributing)
7. [Questions](#questions)

## Installation

You can run this application locally by:

1. Clone this repository `git clone git@github.com:gmadnani/Sociify.git`
2. Navigate to inside the repository `cd Sociify`
3. Install the required packages using `npm install`
4. Copy and rename the .env.EXAMPLE file. `cp .env.EXAMPLE .env`
5. Open the .env file and update it with your MySQL credentials and AWS S3 credentials.
6. Use the MySQL cli to create the database from the schema.sql file in the /db directory. `source db/schema.sql`
7. Exit the MySQL cli. `exit`
8. Seed the database by running `npm run seed`
9. Start the server by running `npm start`
10. By default, the server will be listening on port 3001.

Alternatively, you can use the version hosted on Heroku by navigating to: https://sociify-fortran.herokuapp.com/

## Usage

1. Navigate to: https://sociify-fortran.herokuapp.com/

### Screenshots

#### Editing a user

![Screenshot of the application](/assets/img/edit-user.gif)

#### Searching users

![Screenshot of the application](/assets/img/search-users.gif)

#### Uploading an image

![Screenshot of the application](/assets/img/upload-image.gif)

## URL

The application is deployed here: https://sociify-fortran.herokuapp.com/

## Build

The following technology stack was used:

- Node.JS
- Express.JS
- Handlebars
- Bcrypt
- MySQL
- Sequelize
- AWS S3
- Deployed to Heroku

## License

This project is licensed under MIT.

## Contributing

- Zain Abidin
- Oliver Drew
- Girish Madnani
- Jibril Yusuf

## Questions

If you have any questions please contact us via:

- Zain Abidin [GitHub](https://github.com/zainuabidin)
- Oliver Drew [GitHub](https://github.com/oli-drew)
- Girish Madnani [GitHub](https://github.com/gmadnani)
- Jibril Yusuf [GitHub](https://github.com/jibril12303)
