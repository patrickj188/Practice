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
  particle
    .getVariable({ deviceId: PARTICLE_DEVICE_ID, name: 'soil_read', auth: token })
    .then(data => {
      console.log('Device variable retrieved successfully:', data);
      component.textContent = data.body.result + '\n\n  Sick doggie! If you see this number, this is getting reported from the houseplant in the bathroom. Doesn\'t do us much good at the moment though'
    }, err => {
      console.log('An error occurred while getting attrs:', err);
    });
};

