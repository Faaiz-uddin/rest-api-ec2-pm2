import rateLimit from "express-rate-limit";


export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Too many requests, please try again later."
  },
  statusCode: 429,
  standardHeaders: true,
  legacyHeaders: false,
});

export const authLimiter = rateLimit({
 windowMs: 1 * 60 * 1000,  // 1 minute
  max: 3,                   // 3 requests per minute
  message: {
    success: false,
    message: "Too many auth requests, please try again after 1 minute."
  },
  statusCode: 429,  
  standardHeaders: true,
  legacyHeaders: false,
});