module.exports = (req, res, next) => {
   
      if (!req.user.role==='Manager') {
          return res.status(403).send('Your are not manager user..')
      }
        next();
    
  };