const people = [
  {
    name: "João",
    street: "Av. São Paulo",
    city: "Sorocaba",
    state: "São Paulo",
    country: "Brazil",
    telephone: null,
    birthday: "...",
    gender: "Male"
  },
  {
    name: "Maria",
    street: "Av. São Paulo",
    city: "Sorocaba",
    state: "São Paulo",
    country: "Brazil",
    telephone: "3233-4858",
    birthday: "...",
    gender: "Female"
  },
  {
    name: "José",
    street: "Av. São Paulo",
    city: "Sorocaba",
    state: "São Paulo",
    country: "Brazil",
    telephone: "3233-4858",
    birthday: "...",
    gender: "Male"
  },
  {
    name: "Pedro",
    street: "Av. São Paulo",
    city: "Sorocaba",
    state: "São Paulo",
    country: "Brazil",
    telephone: "3233-4858",
    birthday: "...",
    gender: "Male"
  },
  {
    name: "Bruna",
    street: "Av. São Paulo",
    city: "Sorocaba",
    state: "São Paulo",
    country: "Brazil",
    telephone: "3233-4858",
    birthday: "04/08/1997",
    gender: "Female"
  }
];

people.forEach(person => {
  const b = document.querySelector(".list-holder");
  const d = document.createElement("div");
  const name = document.createElement("div");
  name.className = "name";
  const n = document.createTextNode(
    person.gender == "Male"
      ? "👨  " + person.name
      : "👩  " + person.name
  );

  name.appendChild(n);
  d.appendChild(name);
  b.appendChild(d);

  name.addEventListener("click", ev => {

    removeCurrentList();
    removeSelected();

    name.className += " selected"
    const list = document.createElement("ul");
    d.appendChild(list);

    const keys = Object.keys(person);

    let count = 10;
    keys.forEach(key => {
      if (key == "name") return;
      setTimeout(() => {
        const li = document.createElement("li");
        const text = document.createTextNode(
          key == null
            ? "..."
            : person[key]
        );
        li.appendChild(text);
        list.appendChild(li);
      }, count);
      count += 20;
    });
  });
});

function removeSelected() {

  const el = document.querySelector('.selected');
  if (!el) return;
  el.className = 'name'
}

function removeCurrentList() {
  const currentList = document.querySelector('ul');
  if (currentList) currentList.remove()
}