// All variants that I have tested are shown below:

// codegen`module.exports = 'console.log("Hello, codegen!")'`

// codegen`module.exports = ''`

codegen`module.exports = \`
const what = 'codegen';
console.log('Hello, ' + what + '!');
\`
`;
