const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;
const cors = require("cors");

const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
const User = require("./models/user");
const Chat = require("./models/message");

mongoose
    .connect("mongodb+srv://ganeshkasture9595:ganesh@cluster0.ax2xd.mongodb.net/")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB");
    });

app.listen(port, () => {
    console.log("Server is running on 3000");
});

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //check if the email is already registered
        const existingUser = await User.findOne({ email });
        console.log("no user with this email ")
        if (existingUser) {
            console.log("Email already registered");
            return res.status(400).json({ message: "Email already registered" });
        }

        //create a new User
        const newUser = new User({
            name,
            email,
            password,
        });

        //generate the verification token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");

        console.log("verification token created ")
        //save the user to the database
        console.log("Saving new user:", newUser);
        await newUser.save();
        console.log("User saved:", newUser);

        //send the verification email to the registered user
        sendVerificationEmail(newUser.email, newUser.verificationToken);

        console.log("new user saved")
        res
            .status(200)
            .json({ message: "User registered successfully", userId: newUser._id });
    } catch (error) {
        console.log("Error registering user", error);
        res.status(500).json({ message: "Registration failed" });
    }
});
const sendVerificationEmail = async (email, verificationToken) => {
    const transpoter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ganeshkasture9595@gmail.com",
            pass: "dkscooqrjywdrazm",
        },
    });

    // const mailOptions = {
    //     from: "matchmake.com",
    //     to: email,
    //     subject: "Email verification",
    //     text: `Please click on the following link to verify your email : http://localhost:3000/verify/${verificationToken}`,
    // };


    const mailOptions = {
        from: "support@agrotech.com",
        to: email,
        subject: "Verify Your Email - AgroTech",
        html: `
            <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
                <header style="background-color: #4CAF50; color: white; padding: 15px; text-align: center;">
                    <h1 style="margin: 0;">AgroTech</h1>
                    <p style="margin: 0; font-size: 14px;">Empowering Farmers with Technology</p>
                </header>
                <div style="padding: 20px;">
                    <h2 style="color: #4CAF50;">Verify Your Email</h2>
                    <p>Welcome to AgroTech! We're thrilled to have you onboard.</p>
                    <p>
                        To get started and access your dashboard, please verify your email address by clicking the button below:
                    </p>
                    <div style="text-align: center; margin: 20px 0;">
                        <a href="http://localhost:3000/verify/${verificationToken}" 
                            style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;">
                            Verify Email
                        </a>
                    </div>
                    <p>If the button doesn't work, you can also verify by copying and pasting the link below into your browser:</p>
                    <p style="word-break: break-word; color: #555;">http://localhost:3000/verify/${verificationToken}</p>
                    <p style="margin-top: 20px;">If you have any questions, feel free to reach out to us at <a href="mailto:support@agrotech.com" style="color: #4CAF50; text-decoration: none;">support@agrotech.com</a>.</p>
                    <p>Happy Farming!<br>The AgroTech Team</p>
                </div>
                <footer style="background-color: #f9f9f9; color: #777; font-size: 12px; text-align: center; padding: 10px;">
                    © ${new Date().getFullYear()} AgroTech, All Rights Reserved.
                </footer>
            </div>
        `,
    };
    

    //send the mail
    try {
        await transpoter.sendMail(mailOptions);
    } catch (error) {
        console.log("Error sending the verification email");
    }
};

//verify the user
app.get("/verify/:token", async (req, res) => {
    try {
        const token = req.params.token;

        const user = await User.findOne({ verificationToken: token });
        if (!user) {
            return res.status(404).json({ message: "Invalid verification token" });
        }

        //mark the user as verified
        user.verified = true;
        user.verificationToken = undefined;

        await user.save();

        res.status(200).json({ message: "Email verified Sucesfully" });
    } catch (error) {
        console.log("errror", error);
        res.status(500).json({ message: "Email verification failed" });
    }
});

const generateSecretKey = () => {
    const secretKey = crypto.randomBytes(32).toString("hex");

    return secretKey;
};

const secretKey = generateSecretKey();

//endpoint to login
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        //check if the user exists already
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
            return res.status(401).json({ message: "Invalid email or password" });
        }

        //check in password is correct
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalide password" });
        }

        const token = jwt.sign({ userId: user._id }, secretKey);

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: "login failed" });
    }
});



