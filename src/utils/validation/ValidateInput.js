export default ValidateInput = (email, password) => {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email === '' || mailformat.test(email) === false) {
    alert('Please provide valid email');
  } else if (password === '') {
    alert('Please provide valid password');
  } else if (password.length < 8) {
    alert('Weak Password!!Password should be of length more than 8');
  } else if (!password.match(/[a-z]/g)) {
    alert('Password should contain atleast one letter');
  } else if (!password.match(/[!@#$%^&*]/g)) {
    alert('Password should contain atleast one special character');
  } else if (!password.match(/[0-9]/g)) {
    alert('Password should contain atleast one digit');
  } else {
    return true;
  }
  return false;
};
