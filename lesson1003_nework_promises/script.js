const userName = document.getElementById("userName");
const repos = document.getElementById("repos");
const loader = document.getElementById("loader");


userName.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("sbmBtn").click();
    }
});

function getRepos() {

    cleanTable(repos);

    let userNameValue = userName.value.trim();

    if (!userNameValue) {
        return
    }

    loader.style.display = "block";

    const url = `https://api.github.com/users/${userNameValue}/repos`;

     fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.message === 'Not Found') {
                createNotFoundBlock(userNameValue);
                loader.style.display = "none";
                return
            }

            let repoTbl = createTable();
            let tblBody = document.createElement("tbody");

            data.forEach((repo) => {
                let name = repo.name;
                let language = repo.language || "Not specified";
                let description = repo.description || "No description";

                let row = document.createElement("tr");
                row.innerHTML = `<td>${name}</td><td>${language}</td><td>${description}</td>`;
                tblBody.appendChild(row);
           });

            repoTbl.appendChild(tblBody);
            document.body.appendChild(repoTbl);
            repoTbl.setAttribute("border", "2");
            repos.appendChild(repoTbl);

            loader.style.display = "none";
        })
        .catch((error) => {
            console.log("Oops error: " + error);
            loader.style.display = "none";
        });
}

function cleanTable(repos) {
    if (repos.hasChildNodes()){
        repos.removeChild(repos.firstChild);
    }
}

function createNotFoundBlock(userNameValue){
    const notFound = document.createElement('p');
    notFound.innerText = `User with name ${userNameValue} was not found :(((`;
    notFound.setAttribute('class', 'notFound')
    repos.appendChild(notFound);
}

function createTable(){
    const repoTbl = document.createElement("table");
    const tblHead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Name</th><th>Language</th><th>Description</th>';
    tblHead.appendChild(headerRow);
    repoTbl.appendChild(tblHead);
    return repoTbl;
}