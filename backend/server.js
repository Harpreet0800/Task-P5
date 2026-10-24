const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const formData = require("form-data");
const Mailgun = require("mailgun.js");
dotenv.config();
const app = express();
// connecting React to backend
app.use(cors());
// Reading form data from React
app.use(express.urlencoded({ extended: true }));
// Connecting to Mailchimp
mailchimp.setConfig({
  apiKey: process.env.API,
  server: process.env.VERSION});
// Connecting to Mailgun
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY});
// Checking the backend
app.get("/", (req, res) => {
  res.status(200).send("Backend is Working fine");
});
app.post("/subscribe", async (req, res) => {
  const email = req.body.email;
// checking the email
  if (
  typeof email !== "string" ||
  !email ||
  !email.includes("@") ||
  !email.includes(".")) {
  return res.status(400).send("Please enter a valid email.");}
  try {
    // Adding the subscriber to Mailchimp
    await mailchimp.lists.addListMember(process.env.ID, {
      email_address: email,
      status: "subscribed"});
    // Sending the welcome email using Mailgun
    await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: "Mailgun Sandbox <postmaster@" +
        process.env.MAILGUN_DOMAIN + ">",
      to: [email],
      subject: "Welcome to Daily Insider",
      text: "Thank you for subscribing to Daily Insider!"});
    console.log("Subscription successful. Status 200");
    return res.status(200).send(
      "Thank you for subscribing!"
    );} catch (error) {
    console.log("Subscription error:", error.message);
    // Checking if the member already exists
    if (
      error.response &&
      error.response.body &&
      error.response.body.title === "Member Exists"
    ) {
      return res.status(400).send(
        "You have already subscribes to our updates channel!"
      );
    }
    return res.status(500).send(
      "Subscription failed. Please try again.");
  }}); 
// Starting the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
