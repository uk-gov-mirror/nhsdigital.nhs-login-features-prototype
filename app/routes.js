// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line



// Branching on scan or video
router.post('/alt-challenge-response/v1/index', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var scanorvideo = req.session.data['scanorvideo']
  
    // Check whether the variable matches a condition
    if (scanorvideo == "scan"){
      // Send user to scan
      res.redirect('/alt-challenge-response/v1/scan')
    }
    else {
      // Send user to video
      res.redirect('/alt-challenge-response/v1/video')
    }
  
  })


// Branching on say or sign
router.post('/alt-challenge-response/v1/video/index', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var sayorsign = req.session.data['sayorsign']
  
    // Check whether the variable matches a condition
    if (sayorsign == "say"){
      // Send user to scan
      res.redirect('/alt-challenge-response/v1/video/say')
    }
    if (sayorsign == "write"){
        // Send user to scan
        res.redirect('/alt-challenge-response/v1/video/write')
      }
    else {
      // Send user to video
      res.redirect('/alt-challenge-response/v1/video/sign')
    }
  
  })

module.exports = router;
