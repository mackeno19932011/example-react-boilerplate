/** Sagas in here */

function fetchFakeHomeData() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {

    }, 1000);
  });
}

function* fetchHomeDataWorker(action) {
  try {
    const data = yield fetchFakeHomeData();

  } catch (err) {

  }
}
