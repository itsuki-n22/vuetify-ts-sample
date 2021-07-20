module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    port: 8080,
    before: ( app => {

      const users = {
        'foo@domain.com': {
          password: 'password',
          userId: 1,
          token: '1234567890abcdef'
        }
      }
      const lists = [

      ]

      const express = require('express');

      app.use(express.json({}))

      app.post('/auth/login', (req, res) => {
        const { email, password } = req.body
        const user = users[email]
        if (user) {
          if (user.password !== password) {
            res.status(401).json({ message: 'failed login !!!!'})
          } else {
            res.json({ userId: user.userId, token: user.token })
          }
        } else {
          res.status(404).json({ message: 'ユーザーが登録されていません.'})
        }
      })

      app.post('/auth/logout', (req, res) => {
        const { userId, token } = req.body
        const usersTmp = Object.keys(users).map(function(mail){ return users[mail] })
        const user = usersTmp.filter( user => user.userId === userId && user.token === token )[0]
        if (user) {
          if (user.token !== token) {
            res.status(401).json({ message: 'failed logout !!!!'})
          } else {
            res.json({ userId: null, token: null })
          }
        } else {
          res.status(404).json({ message: 'ユーザーが登録されていません.'})
        }
      })

    }),

    proxy: {
      '/api': {
        target: 'http://api.yourservice.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },

  }
};
