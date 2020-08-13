const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

//Load Models
require('./models/User');
require('./models/Story');

//Passport Config
require('./config/passport')(passport);

//Load Routes
const index = require('./routes/index');
const auth = require('./routes/auth');
const stories = require('./routes/stories');

//Load Keys
const keys = require('./config/keys');

//Handlebars helpers
const {
    truncate,
    stripTags,
    formatDate,
    select,
    editIcon
} = require('./helpers/hbs');

//Map global promises
mongoose.Promise = global.Promise;

//Mongoose connect
mongoose.connect(keys.mongoURI, {
    //useMongoClient: true
    useNewUrlParser: true
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Method override middleware
app.use(methodOverride('_method'));

//Handlebars middleware
app.engine('handlebars', exphbs({
    helpers: {
        truncate: truncate,
        stripTags: stripTags,
        formatDate: formatDate,
        select: select,
        editIcon: editIcon
    },
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Set global vars
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Use Routes
app.use('/', index);
app.use('/auth', auth);
app.use('/stories', stories);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});