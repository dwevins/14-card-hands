export default function getFetch(fetchURL) {
  let object = '';
  fetch(`${fetchURL}`)
    .then((res) => res.json())
    .then((result) => {
      object = result;
    });

  return object;
}
