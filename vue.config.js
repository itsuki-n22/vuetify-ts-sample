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
      const express = require('express');

      app.use(express.json({}))
      app.get('/hoge', (req, res) => {
        res.status(201).json({ message: "hogege" })
      })

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
