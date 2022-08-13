const ApiError = require('../exceptions/api-error');
const config = require("../config");
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {    
  try {
    const authorizationHeader = req.headers.cookie; 
    // console.log("authorizationHeader", authorizationHeader);
    if (!authorizationHeader) {
      
      return next(ApiError.UnauthorizedError());
    }
    
    const token = authorizationHeader.split('=')[1];
    // console.log("token", token);
    if (!token) {
      return next(ApiError.UnauthorizedError());
    }
    
    const userData = jwt.verify(token, config.JWT_ACCESS_KEY);
    // console.log("userData", userData);
    if (!userData) {
      return next(ApiError.UnauthorizedError());
    }

    req.user = userData; 
    next(); 
  } catch (e) {
    return next(ApiError.UnauthorizedError());
  }
};
