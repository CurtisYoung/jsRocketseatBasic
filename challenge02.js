function checaIdade(idade) {
    // Retornar uma promise
    return new Promise(function(resolve,reject){
        if(idade>18){
            resolve("Maior que 18 anos");
        } else {
            reject("Menor que 18 anos");
        }

    });
    
   }


   checaIdade(20)
    .then(function(response) {
    setTimeout(() => {
        console.log(response)
    }, 2000); ;
    })
    .catch(function(reject) {
    setTimeout(() => {        
        console.log(reject);
    }, 2000);
    });

function listRepositories(userName) {
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/'+userName+'/repos');
        xhr.send(null);

        xhr.onreadystatechange = () =>{
            if(xhr.readyState === 4){
                if (xhr.status === 200) {                    
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('erro 404 (Página de usuário inexistente)');
                }

            }
        }


    });
    
}
function getUsername() {
    var listArray = document.querySelector('#containerList');
    var inputName = document.querySelector('input[name="user"]').value;
    var ulRepos = document.createElement('ul');
    listArray.appendChild(ulRepos);
    var repo = document.createElement('li');
    repo.appendChild(document.createTextNode("Carregando ..."));
    ulRepos.appendChild(repo);
    document.querySelector('input[name="user"]').value='';
    listRepositories(inputName)
    .then(function(response) {
        
        setTimeout(() => {
            ulRepos.innerHTML = '';
            var returnObject = response;
            for (var i = 0; i < returnObject.length; i++) {
                var item = document.createElement('li');
        
                item.appendChild(document.createTextNode(returnObject[i].name));
        
                ulRepos.appendChild(item);
            }
        }, 2000); 
        })
        .catch(function(reject) {
        setTimeout(() => {        
            console.log(reject);
        }, 2000);
        });
    
}