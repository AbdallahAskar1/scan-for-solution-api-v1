// email and password validation middleware
 const validateEmailPassword = (req, res, next) => {
    const { email, password } = req.body;
  
    // regular expressions to check email and password
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }
  
    if (!passwordRegex.test(password)) {
      return res
        .status(400)
        .json({ message: "Invalid password. Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit." });
    }
  

    next();
  };
module.exports= validateEmailPassword;