const myName = 'John Doe';
const greeting = `Hello, my name is ${myName}.`;
console.log(greeting); // Hello, my name is John Doe.
// or
console.log(`Hello, my name is ${myName}.`); // Hello, my name is John Doe.

// string interpolation with expressions
const BACK_END_URL = 'https://backend.jzp.pl';
const usersUrl = `${BACK_END_URL}/users`;
console.log(usersUrl);

// backticks can be used to create multiline strings
const longText = ` Lorem ipsum, dolor sit amet
 consectetur adipisicing elit. Aspernatur inventore reiciendis maiores suscipit adipisci quam asperiores ipsa deleniti? Eligendi quae tempora reiciendis, quis sunt recusandae suscipit quaerat ipsam autem error.
Eum quas eos cum iusto ducimus, esse hic quos molestias repellendus ad perspiciatis ratione, voluptas unde, quae animi harum itaque! Ipsum tempora cum, ipsam officiis molestiae accusantium? Tempora, excepturi esse.`;

console.log`Hello, my name is ${myName}.`;
