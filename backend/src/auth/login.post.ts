import * as argon2 from 'argon2';
import { Request, Response } from 'express';
import { UsersModel } from '../model/users';
import * as jwt from "jsonwebtoken";
// import { ObjectID } from "typeorm";

export interface TokenPayload {
  _id: string;
  email: string;
}

export async function login(req: Request, res: Response){
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res
    .status(400)
    .json({ message: "`email` and `password` are required" });
  }

  // Check if user exists
  const user = await UsersModel.findOne({ email });
  if (!user) {
    return res
    .status(400)
    .json({ message: "Invalid email or password" });
  }

  // Check if the provided password is correct
  const passwordHash = user?.passwordHash;
  const correctPassword = await argon2.verify(passwordHash!, password);
  if (!correctPassword) {
    return res
    .status(400)
    .json({ message: "Invalid email or password" });
  }

  // // Generate a session code and set it in a cookie
  // const sessionCode = uuid.v4();
  // await setSessionCode(user.id, sessionCode);
  // res.setHeader('Set-Cookie', cookie.serialize('session_code', sessionCode, {
  //   httpOnly: true,
  //   maxAge: 60 * 60 * 24 // 1 day
  // }));

//   // Return the session code in the response
//   res.send({ sessionCode });
// }

// Generate token
const token = jwt.sign(
  {
    _id: user?._id,
    email: user?.email
  },
  process.env.JWT_SECRET!
);

 res.status(200).send({ token });
}