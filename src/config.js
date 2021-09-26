const token = localStorage.getItem('token');
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};
console.log(token);
export default config;
