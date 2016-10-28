Promise.all({one: 1, two: 2, three: 3})
  .then(({one, two, three}) => {
    console.log(one);
  });

Promise.all([1, 2, 3])
  .then(([one, two, three]) => {
    console.log(one);
  });

//export default 0;