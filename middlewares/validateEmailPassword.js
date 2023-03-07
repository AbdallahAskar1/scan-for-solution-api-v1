// email and password validation middleware
 const validateEmailPassword = (req, res, next) => {
    const { email, password } = req.body;
  
    // regular expressions to check email and password
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  
    // check if email is valid
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }
  
    // check if password is valid
    if (!passwordRegex.test(password)) {
      return res
        .status(400)
        .json({ message: "Invalid password. Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit." });
    }
  
    // if email and password are valid, move on to the next middleware
    next();
  };
module.exports= validateEmailPassword;