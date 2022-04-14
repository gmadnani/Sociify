const path = require("path");
const express = require("express");
// const session = require("express-session");
const { engine } = require("express-handlebars");
// const routes = require("./controllers");
// const helpers = require("./utils/helpers");

// const sequelize = require("./config/connection");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars.js engine with custom helpers
// const hbs = exphbs.create({ helpers });

// const sess = {
//   secret: process.env.SESSION_SECRET,
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', engine({
  layoutsDir: `${__dirname}/views/layout`, 
  defaultLayout: 'main',
  extname: "handlebars", 
}));
app.set("views", path.join(__dirname, '/views'));
app.set("view engine", "handlebars");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.use(routes);
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/register', (req, res) => {
  res.render('register', { layout: 'register' } );
});

// sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
// });