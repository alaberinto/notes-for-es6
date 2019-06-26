const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

/*
function getTop100Campers() {
    //fetch or get data
    //returns a promise ("promise to send some data")
    fetch(apiUrl)
    .then((r) => r.json()) //promise into JSON, which is another promise
    .then((json) => {
      console.log(json[0])
    }).catch((error) => {
      console.log('failed');
    });
}
*/

async function getTop100Campers() {
    const response = await fetch(apiUrl);
    const json = await response.json();

    console.log(json[0]);
}

getTop100Campers();
