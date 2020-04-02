import nodemailer from 'nodemailer';
import config from './config';

let length: number = config.userpass.length;

function sendmail() {
	let number: number = Math.round(Math.random() * length);
	let transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		auth: {
			user: config.userpass[number].user,
			pass: config.userpass[number].pass
		}
	});
	transporter.verify(function(error, success) {
		if (error) {
			console.log(error);
			process.exit(1);
		} else {
			console.log('Server is ready to take our messages');
		}
	});
	transporter
		.sendMail({
			from: config.userpass[number].user,
			to: config.targetemail,
			replyTo: config.userpass[number].user,
			subject: config.subject,
			text: config.body
		})
		.then((info) => {
			console.log('Success');
		})
		.catch((error) => {
			console.log('Something is wrong');
			process.exit(1);
		});
}

setInterval(sendmail, config.interval);
