import { createNewUser, findUserByEmail } from '../models/user.models.mjs'
import bycrypt from 'bcryptjs'
export const Me=(req,res)=>
{
    
        if(!req.session.user)
        {
            return res.status(401).json({ message: "Unauthorized" });
        }
        res.status(200).json({ user: req.session.user });
    
}

export const Register=async(req,res)=>
{
    const {name,email,password}=req.body

    
    try
    {
        // Checking if the user exists
        
        const user=await findUserByEmail(email)
        if(user)
        {
            return res.status(400).json(
                {
                    message:"User already exists."
                }
            )
        }

        else
        {
            // Hashing the password
            const hashedpassword=await bycrypt.hash(password,10)
            // Creating a user 
            await createNewUser({name,email,password:hashedpassword})
            return res.status(200).json(
                {
                    message:"User created successfully"
                }
            )
        }


    }

    catch(error)
    {
       res.status(500).json({ message: error.message })
    }

}

export const Login=async (req,res)=>
{
    const {email,password}=req.body

    // Accessing the user:
    try{
    const user=await findUserByEmail(email)

    if(!user)
    {
        return res.status(400).json(
            {
                message:"Invalid Credentials."
            }
        )
    }

    // Checking password entered by the user

    const isMatch=await bycrypt.compare(password,user.password)

    // if password not matched send corresponding response
    if(!isMatch) return res.status(400).json({message:"Invalid Credentials."})

    else
    {
        // Saving user in session
        req.session.user={
            id:user.id,
            email:user.email,
            name:user.name
        }
    
        res.status(200).json({ msg: 'Login successful', user: req.session.user })
    }   
    }

    catch(error)
    {
        res.status(500).json({ message: error.message })
    }

}

export const Logout=(req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: "Logout failed." });
        }
        res.clearCookie('session-id'); // Must match your cookie name in session config
        res.status(200).json({ message: "Logged out successfully." });
    });
}