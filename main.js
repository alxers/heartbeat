const HR_STEP = 3;
const RESTING_HR = 60;
const RESTING_MIN_HR = RESTING_HR - HR_STEP;
const RESTING_MAX_HR = RESTING_HR + HR_STEP;

const ZONE_1_MIN_HR = RESTING_MAX_HR;
const ZONE_1_MAX_HR = RESTING_MAX_HR + 54;

const ZONE_2_MIN_HR = ZONE_1_MAX_HR + 1;
const ZONE_2_MAX_HR = ZONE_2_MIN_HR + 16;

const ZONE_3_MIN_HR = ZONE_2_MAX_HR + 1;
const ZONE_3_MAX_HR = ZONE_3_MIN_HR + 17;

const ZONE_4_MIN_HR = ZONE_3_MAX_HR + 1;
const ZONE_4_MAX_HR = ZONE_4_MIN_HR + 17;

const ZONE_5_MIN_HR = ZONE_4_MAX_HR + 1;
const ZONE_5_MAX_HR = ZONE_5_MIN_HR + 14;

// Returns random value within given range
let randHR = (minHR, maxHR) => () => Math.floor(Math.random() * (maxHR - minHR) + minHR);

let currentHR = randHR(RESTING_MIN_HR, RESTING_MAX_HR, HR_STEP);
let randBoolean = () => Math.round(Math.random());
let heartPump = (hr) => {
  if (randBoolean()) {
    hr += 1;
  } else {
    hr -= 1;
  }

  return hr;
};

let zoneLimiter = (currHR, zoneMin, zoneMax) => {
  if (currHR < zoneMin) {
    return zoneMin;
  }

  if (currHR > zoneMax) {
    return zoneMax;
  }

  return currHR;
};

let displayHR = (currHR, minHR, maxHR) => {
  let hr = currHR;
  setInterval(() => {
    hr = zoneLimiter(heartPump(hr), minHR, maxHR);
    document.querySelector('.hr').innerHTML = hr;
    console.log(hr);
  }, 1000)
};

displayHR(currentHR(), 55, 65);
