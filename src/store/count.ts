import { observable } from 'mobx'

const countObject = observable({
  // 헷갈릴 수 있으니 num으로 작명
  num: 0,
  increase() {
    this.num++
  },
  decrease() {
    this.num--
  },
})

export default countObject

//2. makeAutoObservable
// class Count {
//   number: number = 0

//   constructor() {
//     makeAutoObservable(this)
//   }

//   increase = () => {
//     this.number++
//   }
//   decrease = () => {
//     this.number--
//   }
// }

// const countClass = new Count()
// export default countClass

//1. makeObservable
// class Count {
//     number: number = 0;
  
//     constructor() {
//       makeObservable(this, {
//         number: observable,
//         increase: action,
//         decrease: action,
//       });
//     }
  
//     increase = () => {
//       this.number++;
//     };
//     decrease = () => {
//       this.number--;
//     };
//   }
  
//   const countStore = new Count();
//   export default countStore;