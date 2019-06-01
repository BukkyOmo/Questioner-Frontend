import jwtDecode from 'jwt-decode';

const tokenExpired = (token) => {
  const date = Date.now();
  const decoded = jwtDecode(token);
  const expired = date < decoded.exp;
  return expired;
};

export default tokenExpired;
