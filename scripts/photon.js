// uses API for Patricle Photon, a tiny arduino like computer that is reporting things!

const component = document.getElementById('soil-read-container');

const particle = new Particle();
const username = PARTICLE_USER;
const password = PARTICLE_PASS;
let token;

particle
  .login({ username, password })
  .then(data => token = data.body.access_token), err => console.error('login', err);

const getSoilReading = () => {
  fetch("https://api.particle.io/v1/devices/3f0023000547353138383138/getMoisture?access_token=f50e6bd841e35fd9b8366ce7f823561d92ef32f1 -d arg=''")
    .then(res => {
      if (res.status === 200) {
        console.log('Device variable retrieved successfully:', res);
        component.textContent = data.body.return_value + '\n\n  Sick doggie! If you see this number, this is getting reported from the houseplant in the bathroom. Doesn\'t do us much good at the moment though'
      }
    }, err => {
      console.log('An error occurred while getting attrs:', err);
    });
};

