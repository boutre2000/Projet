module.exports = (req, res, next) => {
   
      if (!req.user.role==='Admin') {
          return res.status(403).send('Your are not admin user..')
      }
        next();
    
  };