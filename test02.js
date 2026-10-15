
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '10s',
};

export default function () {
  const response = http.get(
    'https://quickpizza.grafana.com'
  );

  check(response, {
    'Status code is 404': (r) => r.status === 200,
  });

  console.log(`Status code: ${response.status}`);

  sleep(1);
}
