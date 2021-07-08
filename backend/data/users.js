import bcrypt from 'bcrypt'
const User = [
	{
		name: "Admin User",
		email: "admin@example.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},
	{
		name: "saikiran",
		email: "saikiran@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		name: "hunter",
		email: "hunter@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
];

export default User