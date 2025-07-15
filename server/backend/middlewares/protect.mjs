export const protect=(req,res,next)=>
{
 if (req.session && req.session.user) {
    next(); // Proceed to the next middleware/route handler
  } else {
    return res.status(401).json({ message: "Unauthorized: Please log in first" });
  }
};