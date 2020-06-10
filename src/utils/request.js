/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseContent(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  if (response.headers.get("Content-Type").includes('text')) {
    return response.text();
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Set http request headers and options
 *
 * @param  {string} type      Content type
 *
 * @return {object|undefined} Returns either the options, or throws an error
 */
function setRequestOptions(type) {
  let options;
  if (type === 'text') {
    options = { 'Content-Type': 'text/plain' };
  } else {
    options = { 'Content-Type': 'application/json' };
  }
  return options;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {string} method    HTTP method
 * @param  {object} data      data for POST/PUT method
 * @param  {string} type      Content type
 *
 * @return {object}           The response data
 */
export default async function request(url, method = 'GET', data = undefined, type = 'json') {
  const requestHeader = await setRequestOptions(type);
  const options = {
    headers: requestHeader,
    method
  };
  if (data) {
    options.body = JSON.stringify(data);
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseContent)
    .then(data => data)
    .catch(error => {
      const response = error.response;
      if (response === undefined) {
        error.message = 'Network Error';
        error.type = 'warning';
      } else {
        error.type = 'error';
        error.status = response.status;
        error.statusText = response.statusText;
        response.text().then(text => {
          try {
            const json = JSON.parse(text);
            error.message = json.reason;
          } catch (ex) {
            error.message = text;
          }
        });
      }
      return {
        error: true,
        message: error.message,
        type: error.type
      };
    });
}
