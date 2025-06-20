// <!-- script.js (JS validation) -->
document.getElementById('regForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const phone = this.phone.value.trim();
  const college = this.college.value.trim();

  if (name && email && phone && college) {
    document.getElementById('successMsg').classList.remove('hidden');
    this.reset();
  }
});
