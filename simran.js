const router=require("express").Router();
const nodemailer = require('nodemailer');
const {jsPDF} = require('jspdf');
router.post('/email',async(req,res)=>{
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., 'Gmail', 'Outlook'
    auth: {
      user: 'simrantandon2801@gmail.com',
      pass: 'xsgwagciovqzrywq',
    },
  });
  
  // Define the email options
  const mailOptions = {
    from: 'simrantandon2801@gmail.com',
    to: 'simrantandon2801@gmail.com',
    subject: 'Hello from Nodemailer',
    text: 'This is a test email sent from Nodemailer using Node.js.',
  };
  
  // Send the email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('Error occurred:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
})
router.post('/simran',async(req,res)=>{
    res.send('good')
})
router.get('/b', (req, res) => {
    // Create a new jsPDF instance
    const doc = new jsPDF({
		orientation: 'portrait',
		unit: 'px',
		format: [500, 700],
	  });
  
    // Add content to the PDF
    doc.text('Rajiv sorry sorry sorry sorry sorry', 10, 10);
  
    // Generate the PDF buffer
    const buffer = doc.output();
  
    // Set the response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="sample.pdf"');
  
    // Send the PDF buffer as the response
    res.send(buffer);
  });
  
  
module.exports=router
