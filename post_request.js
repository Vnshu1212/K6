
import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 1,
  iterations: 1,
};

export default function () {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const payload = JSON.stringify({
    title: 'My first k6 test',
    body: 'Learning API testing',
    userId: 1,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = http.post(url, payload, params);

  check(response, {
    'Status code is 201': (r) => r.status === 201,
    'Response contains title': (r) =>
      r.json('title') === 'My first k6 test',
    'Response contains userId': (r) =>
      r.json('userId') === 1,
  });

  console.log(`Status: ${response.status}`);
  console.log(`Response: ${response.body}`);
}
