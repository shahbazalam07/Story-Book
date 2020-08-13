const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Story = mongoose.model('stories');
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth');

router.get('/', ensureGuest, (req,res) => {
    
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('index/welcome');
});

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    Story.find({
        user: req.user.id
    }).then(stories => {
        
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        res.render('index/dashboard', {
            stories: stories
        });
    });
});

router.get('/about', (req, res) => {
    
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('index/about');
});

module.exports = router;