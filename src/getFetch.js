export default function getFetch(fetchURL) {
  return fetch(`${fetchURL}`)
    .then((res) => res.json());
}
