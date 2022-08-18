function refresh() {
  document.querySelector('.refresh').classList.toggle('refreshed');
  /* eslint-disable */
  location.reload();
}

export { refresh };