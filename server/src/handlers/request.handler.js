import { validationResult } from "express-validator";

const validate = (req, res, next) => {
  const errors = validationResult(res);
  if (!errors.isEmpty()) return res.status(400).json(errors.array()[0].msg);
  next();
};

export default { validate };
