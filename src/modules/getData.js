const getData = (str) => {
  return fetch(`https://test-462a5-default-rtdb.firebaseio.com/goods.json`)
    .then((response) => {
      return response.json();
    });
}

export default getData;