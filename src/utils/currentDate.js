const getCurrentDate = () => {
  return new Date().toLocaleDateString('en-GB', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'});
}

export default getCurrentDate