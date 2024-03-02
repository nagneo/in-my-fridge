
export const load = async ({ params }) => {
  
  // todo: 이건 나중에 연습
  // const tempAsyncFunction = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     console.log('setTimeout');
  //   }, 1000);
  // });
  // await tempAsyncFunction;

  const tempList = [
    {
      id: 1,
      title: "first fridge",
      description: "first fridge description",
      created: "2021-01-01",
    },
    {
      id: 2,
      title: "seconde fridge",
      description: "second fridge description",
      created: "2021-01-02",
    }
  ]
  return { list: tempList };
}