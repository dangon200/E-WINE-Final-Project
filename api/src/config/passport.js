const LocalStrategy = require('passport-local').Strategy
const { User } = require('../db')
const bcrypt = require('bcryptjs')

const { v4: uuid4 } = require('uuid')

const GithubStrategy = require('passport-github').Strategy
const GITHUB_CLIENT_ID = '16195f4d0c06b0663b86'
const GITHUB_CLIENT_SECRET = '409469fba5224953aa8f3bce01db250b9e6d7957'

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email' },
      (username, password, done) => {
        // Match User
        User.findOne({
          where: {
            email: username
          }
        })
          .then((user) => {
            if (!user) return done(null, false, { message: 'Usuario no existe!' })

            // Match password
            bcrypt.compare(password, user.password, (err, result) => {
              if (err) throw err

              if (result) {
                return done(null, user)
              } else {
                return done(null, false, { message: 'Password incorrecto' })
              }
            })
          })
          .catch((error) => {
            console.log(error)
          })
      }
    )
  )

  passport.use(
    new GithubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: 'http://localhost:3001/auth/github/callback'
      },
      async function (accessToken, refreshToken, profile, cb) {
        const userExist = await User.findOne({
          where: {
            email: profile.profileUrl
          }
        })

        if (userExist) {
          cb(null, userExist)
        } else {
          const userCreated = await User.create({
            id: uuid4(),
            username: profile.displayName,
            email: profile.profileUrl,
            password: 'password',
            region: ''
          })
          cb(null, userCreated)
        }
      }
    )
  )

  // Create a Cookie!
  passport.serializeUser(function (user, done) {
    return done(null, user.id)
  })

  passport.deserializeUser(function (id, done) {
    User.findByPk(id)
      .then((user) => {
        return done(null, user)
      })
      .catch(() => {
        done(new Error(`Usuario con el id ${id} no existe!`))
      })
  })
}
