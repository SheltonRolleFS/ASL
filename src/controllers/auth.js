const express = require('express')
const router = express.Router()
const request = require('request')
const querystring = require('querystring')

router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.get('/callback', async (req, res) => {
    const { code } = req.query
    await request({
        uri: 'https://github.com/login/oauth/access_token',
        qs: {
            client_id: 'd5895cc0b46eefc0976a',
            client_secret: 'a6a265a4ff5e2bccc2052c061768c3793cc0dfd3',
            code
        }
    }, async (err, response, body) => {
        const { access_token } = querystring.parse(body)  
        req.session.access_token = access_token
        res.redirect('/')
    })
})

module.exports = router