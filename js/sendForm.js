const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callBack, falseCallBack) => {
    const request = new XMLHttpRequest();
    request.open('POST', server);

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
            return;
        }
        if (request.status === 200 || request.status === 201) {
            const response = JSON.parse(request.responseText);

            callBack(response.id);
        } else {
            falseCallBack(request.status);
            throw new Error(request.status);
        }
    });

    request.send(data);
};

const formELems = document.querySelectorAll('.form');

const formHandler = (form) => {
    const smallElem = document.createElement('small');
    form.append(smallElem);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = {};


        for (const { name, value } of form.elements) {
            if (name) {
                data[name] = value;
            }
        }



        sendData(JSON.stringify(data),
            (id) => {
                smallElem.innerHTML = 'Ваша заявка № ' + id + '!<br>В ближайшее время с вами свяжемся!';
                smallElem.style.color = 'green';
                // smallElem.style.textAlign = 'top';
                
            },
            (err) => {
                smallElem.textContent = 'Тех. неполадки, попробуйте позже:(';
                smallElem.style.color = 'red'
                
            });

        form.reset();
    })
}

formELems.forEach(formHandler);


