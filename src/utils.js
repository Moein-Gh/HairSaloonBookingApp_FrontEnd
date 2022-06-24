const addToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
const getFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

module.exports = { addToLocalStorage, getFromLocalStorage };
