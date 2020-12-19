let uri = './sample-weather.json';
let req = new Request(uri, { method: 'GET' });
let container, df;
let round = Math.round;

document.addEventListener('DomContentLoaded', init);

function init() {
  container = document.getElementById('container');
  df = new DocumentFragment();

  fetch(req)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('BAD HTTP');
      }
    })
    .then((json) => {
      // create the weather grid
      createGrid(json);

      // highlight the times it'll be raining
      showRainyHours(json);

      // highest temp
      showHighestTemp(json);
    })
    .catch((err) => {
      console.log(err);
    });
}

function createGrid(json) {
  json.hourly.data.forEach((hour) => {
    // to show the temp
    let div = document.createElement('div');
    div.classList.add('hour');
    let timestamp = hour.time;
    div.id = 'ts_' + timestamp.toString();
    let temp = round(hour.temperature).toString();
    div.textContent = temp.toString().concat('\u00B0');
    div.title = hour.summary;

    // to show the time
    let span = document.createElement('span');
    let timmy = new Date(timestamp * 1000);
    span.textContent = timmy.getHours().toString().concat(':00');

    div.appendChild(span);
    df.appendChild(div);
  });

  container.appendChild(df);
}


function showRainyHours(json) {
  json.hourly.data.filter((hour) => {
    return hour.precipProbability > 0.5;
  }).map((hour) => {
    return hour.time;
  }).forEach((timestamp) => {
    let id = 'ts_'.concat(timestamp);
    document.getElementById(id).classList.add('precip');
  });
}


function showHighestTemp(json) {
  let highObject = json.hourly.data.reduce((acc, hour) => {
    if (hour.temperature > acc.temperature) {
      return { temp: hour.temperature, time: hour.time };
    } else {
      return acc;
    }
  }, { temp: -100, time: 1000 });

  let id = 'ts_' + highObject.time;
  console.log(document.getElementById(id));
  document.getElementById(id).classList.add('hot');
}
