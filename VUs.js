import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 3,
  iterations: 6,
};

export default function () {
  http.get('https://quickpizza.grafana.com');
  sleep(1);
} 