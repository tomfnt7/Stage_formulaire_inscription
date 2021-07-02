/*document.addEventListener('ContentLoaded', event => { charge le script uniquement la page est chargé entièrement*/

    const form=document.querySelector("form")
    const formContainer=document.querySelector("#formContainer") /* le # permet de selectionné un id, un . permet de selectionné une classe*/
    const name= document.querySelector('input[name="name"]')
    const surname= document.querySelector('input[name="surname"]')
    const email= document.querySelector('input[name="email"]')
    const password= document.querySelector('input[name="password"]')
    const message=document.querySelector("#message")
    const messageContainer=document.querySelector("#messageContainer")

    form.addEventListener("submit", event =>{
        event.preventDefault() /*évite que la page reload une fois qu'on appuie sur le bouton envoyé*/

        const envoie ={
            name: name.value,
            surname: surname.value, /*reprend la valeur du const surname au dessus qui a pris la valeur de input surname*/
            email: email.value,
            password: password.value,
        }
        //console.log(envoie)
        fetch ("https://expressmongotypescript.herokuapp.com/user/signup",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(envoie)
        })
            .then((res) =>{
                console.log("statut de la requête =>", res.ok , res.status)
                return res.json()
            })
            .then((data)=> {
                console.log("data =>", data)
                message.innerHTML=data.message;
                messageContainer.classList.add("hidden")/*class list permet de ciblé la classe MessageContainer afin de faire apparaître le message de validation ou nn de l'inscription*/
                if (data.success===true){
                    formContainer.classList.toggle("hidden")
                }
                setTimeout(()=> {
                    messageContainer.classList.add("hidden")
                }, 3000)
            })
    })


//})
