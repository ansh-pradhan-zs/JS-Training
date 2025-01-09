async function fetchData() {
  try {
    const api1 = "https://jsonplaceholder.typicode.com/posts";
    const api2 = "https://jsonplaceholder.typicode.com/comments";
    const api3 = "https://jsonplaceholder.typicode.com/todos";

    const res1 = await fetch(api1);
    const data1 = await res1.json();
    console.log("data from api1 is: ", data1);

    const res2 = await fetch(api2);
    const data2 = await res2.json();
    console.log("data from api2 is: ", data2);

    const res3 = await fetch(api3);
    const data3 = await res3.json();
    console.log("data from api1 is: ", data3);

    return { data1, data2, data3 };
  } catch (error) {
    console.log(error);
  }
}

fetchData()
  .then((data) => console.log("Fetched all data: ", data))
  .catch((err) => console.log(err));
