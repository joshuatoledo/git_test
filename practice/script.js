const container = document.querySelector('#container');


const para = document.createElement("p");
para.classList.add('paragraph');
para.textContent = "HEY IM RED";
container.appendChild(para);
para.style.color = 'red';


const h3 = document.createElement("h3");
h3.setAttribute("id",'heading');
h3.textContent = 'IM A BLUE H3';
container.appendChild(h3);
h3.style.color = 'blue';


const div = document.createElement('div');
div.classList.add('div');
div.setAttribute('style','background-color: pink; border: 4px solid; borderColor: black;');
div.textContent = "Example"
container.appendChild(div);


const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = 'im in a DIV';
div.appendChild(h1);


const p = document.createElement('p');
p.classList.add('p');
p.textContent = "Me TOO";
div.insertBefore(p,h1);