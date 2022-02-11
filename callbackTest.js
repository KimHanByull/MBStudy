 
// function run() {
//     const start = Date.now();
//     for (let i = 0; i < 1000000000; i++) {}
//     const end = Date.now();
//     console.log(end - start + 'ms');
//   }
 
//   run();
//   console.log('Done !!!');
 
 
  // function run() {
  //   setTimeout(() => {
  //     const start = Date.now();
  //     for (let i = 0; i < 1000000000; i++) {}
  //     const end = Date.now();
  //     console.log(end - start + 'ms');
  //   }, 1000/* 1000ms 추가되어 done 보다 늦게 출력 */);
  // }
 
  // run();
  // console.log('Done !!!');

   
// function run(callback) {
//   setTimeout(() => {
//     const start = Date.now();
//     for (let i = 0; i < 1000000000; i++) {}
//     const end = Date.now();
//     console.log(end - start + 'ms');
//     callback();
//   }, 1000);
// }

// run(() => {
//   console.log('Done !!!');
// });


// function run() {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           const start = Date.now();
//           for (let i = 0; i < 1000000000; i++) {}
//           const end = Date.now();
//           console.log(end - start + 'ms');
//           resolve();
//       }, 1000);
//   });
// }

// run().then(() => {console.log('Done !!!');});  //then 비동기 실행 잘 될 경우 이어서 실행
// run().then(() => {return run()}).then(() => {console.log('Done !!!');});

function run() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const start = Date.now();
          for (let i = 0; i < 1000000000; i++) {}
          const end = Date.now();
          console.log(end - start + 'ms');
          resolve();
      }, 1000);
  });
}

async function process() {
  await run();
  await run();
  console.log('Done !!!');
}

process();
