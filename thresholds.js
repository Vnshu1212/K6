import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 3,
  duration: '10s',

  thresholds: {
    http_req_duration: ['p(95)<1000'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const response = http.get('https://quickpizza.grafana.com');

  check(response, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}