const sendForm = () => {

    const form = document.querySelector(".modal")

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const text = form.querySelector("input[type=text]")
        const tel = form.querySelector("input[type=tel]")
        const email = form.querySelector("input[type=email]")

        const sendObj = {
            name: text.value,
            tel: tel.value,
            email: email.value
        }

        // fetch('https://jsonplaceholder.typicode.com/todos/4')
        //     .then(response => {
        //         if (response.status === 404) throw new Error("Not Found")
        //         console.log(response)
        //         return response.json()
        //     })
        //     .then(data => {
        //         console.log(data)
        //     })
        //     .catch(error => {
        //         console.warn(error.message);
        //     })
        //     .finally(() => {
        //         console.log("Finally!")
        //     })

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendObj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

            .then((response) => {

                if (response.status != 201) throw new Error("Error!.")
                return response.json()

            })

            .then((json) => console.log(json))

            .catch(error => {
                alert("Ошибка!")
            })

            .finally(() => {
                text.value = ""
                tel.value = ""
                email.value = ""
                console.log("Форма очищена")
            })

    })
}


sendForm()