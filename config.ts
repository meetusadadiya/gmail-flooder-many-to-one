interface config {
	targetemail: string;
	userpass: Array<{ user: string; pass: string }>;
	subject: string;
	body: string;
	interval: number;
}

let config: config = {
	targetemail: 'targetemail',
	userpass: [
		{ user: 'test1@example.com', pass: 'pass1' },
		{ user: 'test1@example.com', pass: 'pass1' },
		{ user: 'test1@example.com', pass: 'pass1' },
		{ user: 'test1@example.com', pass: 'pass1' },
		{ user: 'test1@example.com', pass: 'pass1' }
	],
	subject: 'subjecthere',
	body: 'bodyhere',
	interval: 3000 //in milliseconds
};

export default config;
