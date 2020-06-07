const domainURL = 'http://safEscapesBackend.mybluemix.net/';
// for get url request
const getFetch = url =>
  fetch(`${domainURL}${url}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response?.json())
    .then(response => response)
    .catch(err => console.log(err));

const postFetch = (url, body) =>
  fetch(`${domainURL}${url}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.log(err));

export {getFetch, postFetch};
