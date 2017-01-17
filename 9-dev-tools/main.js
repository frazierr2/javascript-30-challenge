(function(){

  const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

  function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
  }

  // Regular
  console.log('hello');
  // Interpolated
  console.log('Hello I am a %s string!', 'poop');
  // Styled
  console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow:10px 10px 0 blue');
  // warning!
  console.warn('OH NOOOO');
  // Error :|
  console.error("Shit!");
  // Info
  console.info('Crocodiles eat 3-4 people per year!');
  // Testing
  console.assert(1 === 2, "That is wrong");
  // clearing
  console.clear();
  // Viewing DOM Elements
  // console.log(p);
  // console.dir(p)

  // Grouping together
  dogs.forEach(dogs => {
    console.log(`This is ${dogs.name}`);
  })

    // BUT... to group everything together
  dogs.forEach(dogs => {
    console.group(`${dogs.name}`);
    console.log(`This is ${dogs.name}`);
    console.log(`${dogs.name} is ${dogs.age} years old`);
    console.log(`${dogs.name} is ${dogs.age * 7} dog years old`);
    console.groupEnd(`${dogs.name}`)
  });
  // counting
  console.count('Ryan');
  console.count('Ryan');
  console.count('Ryan');
  console.count('Ryan');
  console.count('Ryan');
  // timing
  console.time('fetching data');
  fetch('https://api.github.com/users/frazierr2')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching data')
      console.log(data);
    });
}());
