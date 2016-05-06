const express = require('express');
const passport = require('passport');
const facebookFail_env = process.env.FACEBOOKFAIL || require('../../../config.js').facebookFail;
const facebookSuccess_env = process.env.FACEBOOKSUCCESS || require('../../../config.js').facebookSuccess;
const logout_env = process.env.LOGOUT || require('../../../config.js').logout;

const router = express.Router();
const encode = require('urlencode');

// Facebook authentication
router.get('/facebook', passport.authenticate('facebook', { session: false, scope: ['email', 'public_profile'] }));

router.get('/facebook/callback',
  passport.authenticate('facebook', { session: false, failureRedirect: facebookFail_env }),
  (req, res) => {
    const user = req.user
    console.log('Facebook callback req.user', req.user);
    res.redirect(facebookSuccess_env+"?access_token=" + req.user.access_token + "&url_pic="+encode(req.user.avatar)+"&name="+req.user.facebook.name+"&profileUrl="+encode(req.user.profileUrl)+"&id="+req.user.id);
  }
);

// Check for user info
router.post('/', passport.authenticate('bearer', { session: false }),
  (req, res) => {
    res.status(200).json(req.user);
  }
);

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(logout_env);
});

module.exports = router;
