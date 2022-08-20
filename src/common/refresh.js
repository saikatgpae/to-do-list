const refresh = () => {
  document.querySelector('.refresh').classList.toggle('refreshed');
  window.location.reload();
};

export default refresh;