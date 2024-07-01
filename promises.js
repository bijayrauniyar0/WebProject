function fetchData() {
    fetch('https://jsonplaceholder.tpicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            console.log("data:"+ data.title);
        })
        .catch(error => {
            console.error('Cannot Find Data');
        });
}
fetchData();
