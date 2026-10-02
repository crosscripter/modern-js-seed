const { log } = console;
const { stringify } = JSON;

type User = {
  name: string;
  age: number;
};

const alice: User = {
  name: 'Alice',
  age: 42,
};

function userInfo(user: User) {
  log(`User info:\n${stringify(user)}`);
}

userInfo(alice);
userInfo({ name: 'Bob', age: 18 });
