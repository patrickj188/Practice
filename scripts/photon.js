// uses API for Patricle Photon, a tiny arduino like computer that is reporting things!
const particle = new Particle();
const component = document.getElementById('soil-read-container');

const toke = 'f50e6bd841e35fd9b8366ce7f823561d92ef32f1';



const getSoilReading = () => {
  var fnPr = particle.callFunction({ deviceId: '3f0023000547353138383138', name: 'getMoisture', argument: '', auth: toke });

  fnPr.then(data => {
    console.log(data)
    if (data.statusCode === 200) {
        component.textContent = data.body.return_value;
    } else {
      console.log('err');
    }
  })
  .catch(err => {
    console.log('err', err);
  })
};

