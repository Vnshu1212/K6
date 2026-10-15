
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
    'Status code is 200': (r) => r.status === 200,
    'Response is under 1 second': (r) => r.timings.duration < 1000,
  });

  sleep(1);
}
