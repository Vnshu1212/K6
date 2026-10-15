
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,
  iterations: 1,
};

export default function () {
  const response = http.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  const user = response.json();

  check(response, {
    'Status code is 200': (r) => r.status === 200,
    'User name is correct': () => user.name === 'Leanne ikGraham',
    'Email field exists': () => typeof user.email === 'string',
    'User ID is 1': () => user.id === 1,
  });

  console.log(`User name: ${user.name}`);
  console.log(`User email: ${user.email}`);

  sleep(1);
}
