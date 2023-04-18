import * as argon2 from 'argon2';
import { UsersModel } from '../model/users';
import { Request, Response } from 'express';

export async function hashPassword(pass: string){
    const hash = await argon2.hash(pass);
    return hash;
  }

export async function signup(req: Request, res: Response){
    const { email, password } = req.body;
    
    // Validate input
    if (!email || !password) {
        return res.status(400).json({ message: "`email` and `password` are required" });
    }

    // Check if user already exists
    const user = await UsersModel.findOne(({ email }));
    if (user) {
        return res.status(400).json({error: 'User already exists'});
    }

    // Create User
    const newUser = new UsersModel({ 
        email, 
        passwordHash: await hashPassword(password), 
    });

    try {
        await newUser.save();
        return res.status(201).json({ message: "Signup success! Please log in." });
      } catch (err) {
        console.log(err);
        return res
          .status(401)
          .json({ error: "Error signing up, please try again." });
      }
};
