const express = require("express");
const app = express()
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");


const LocalStrategy = require("passport-local").Strategy;



const db = require("./config/db");
const Users = require("./models/User")
const authUser = require("./utils/authUser");

const routes = require("./routes");
const { use } = require("passport");


app.use(morgan("tiny"));
app.use(express.json());

app.use(
    session({
        secret: "inmobiliaria",
        resave:false,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
        },
        authUser
    )
);

passport.serializeUser((user,done) => {
    done(null,user.id);
});

passport.deserializeUser(async (id,done)=>{
const user = await Users.findByPk(id);
done(null,user);    
});

app.use("/",routes);

const PORT = process.env.PORT || 3001;

db.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Server listening ON ${PORT}`))
});