module.exports = (req, res, next) => {
   
    if( (!req.user.role==='Admin') ||(!req.user.role==='Manager') ){
        return res.status(403).send('Your are not authorized.')
    }
      next();
  
};