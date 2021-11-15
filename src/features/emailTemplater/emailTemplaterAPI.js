const baseURL = 'https://mock.at.leanylabs.com/email';

export function sendEmail(email) {
  return fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(email),
  })
    .then(response => response.json());
}
