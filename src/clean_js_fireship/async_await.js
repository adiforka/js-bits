const random = () => {
    return Promise.resolve(Math.random());
};

const sumRandomAsyncNums = async () => {
    const first = await random();
    const second = await random();
    const third = await random();

   return first + second + third;
}

sumRandomAsyncNums().then(sum => console.log(sum));

