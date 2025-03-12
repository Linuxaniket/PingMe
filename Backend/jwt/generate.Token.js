import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "5d",
  });
  res.cookie("jwt", token, {
    secure: true, //https
    httpOnly: true, //xss attack protection
    sameSite: "Strict", //csrf attack protection
  });
};

export default createTokenAndSaveCookie;
