const promisesArr = [];

for (let i = 1; i < 11; i++) {
  promisesArr.push(
    fetch(`https://swapi.dev/api/planets/${i}`)
      .then((res) => res.json())
      .then((j) => j.name)
  );
}

const results = await Promise.all(promisesArr);
console.log(results);
