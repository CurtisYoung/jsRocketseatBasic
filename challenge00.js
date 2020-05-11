function montaEndereco(dadosUsuario){
    var dados = dadosUsuario;


    resultado = "O usuário mora em " + dados.cidade + "/" + dados.uf + ", no bairro " + dados.bairro+ ", na rua " + dados.rua + " com nº " + dados.numero + " ."

    console.log(resultado);
}

function temHabilidade(skills) {
    // código aqui
    if (skills.indexOf("Javascript") !== -1) {
        return true;
    } else{
        return false;
    }

    }
    


    function pares(x, y) {
    var armazenaPares = [];   
    // código aqui
    while(x<=y){
        if((x%2)==0){
            armazenaPares.push(x);
        }
        x++    
    }
    console.log(armazenaPares);
    }

    function experiencia(anos) {
    // De 0-1 ano: Iniciante
    // De 1-3 anos: Intermediário
    // De 3-6 anos: Avançado
    // De 7 acima: Jedi Master
        switch (true) {
            case (anos < 2):
                    console.log("Iniciante");
                    break; 
            case (anos < 4):
                    console.log("Intermediário");
                    break; 
            case (anos < 7):
                    console.log("Avançado");
                    break; 
            case (anos >= 7):
                    console.log("Jedi Master");
                    break;           
            default:
                console.log("Outros");
                break;
        }

    }

    function   skillsUsuario(skillsUser){

        for (let value of skillsUser) {
        console.log("O "+ value.nome + " possui as habilidades: " + value.habilidades.join(", "));
        }

    }

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
    };

var skills = ["Javascript", "ReactJS", "React Native"];

var anosEstudo = 5;

var usuarios = [
        {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
        },
        {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
        }
    ];


    montaEndereco(endereco);

    pares(32, 321);

   console.log( temHabilidade(skills)); // true ou false

   experiencia(anosEstudo);
   skillsUsuario(usuarios);  