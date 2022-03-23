const { User } = require('../models');

const userData = [
    {
        username: "diny_bour",

        github: "dinyb",
        email: "diny_b@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "matt_b",

        github: "mattb",
        email: "matt_b@gmail.com",
        password: "p@ssword9"
    },

    {
        username: "leeo_n",

        github: "leenorris",
        email: "lee_no@gmail.com",
        password: "p@ssword45"
    },
    {
        username: "sahana",

        github: "saha23",
        email: "saha@gmail.com",
        password: "p@ssword66"
    },
    {
        username: "poojitha",

        github: "poojitha",
        email: "poojitha@gmail.com",
        password: "p@ssword7"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
