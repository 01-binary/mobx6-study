import { observable } from "mobx";

const market = observable({
  selectedItems: [] as any,
  put(name: any, price: any) {
    const exists: any = this.selectedItems.find(
      (item: any) => item?.name === name
    );
    if (!exists) {
      this.selectedItems.push({
        name,
        price,
        count: 1,
      });
      return;
    }
    exists.count++;
  },
  take(name: any) {
    const itemToTake: any = this.selectedItems.find(
      (item: any) => item.name === name
    );
    itemToTake.count--;
    if (itemToTake.count === 0) {
      // 갯수가 0 이면
      this.selectedItems.remove(itemToTake); // 배열에서 제거처리합니다.
    }
  },
  get total() {
    console.log("총합 계산...");
    return this.selectedItems.reduce((previous: any, current: any) => {
      return previous + current.price * current.count;
    }, 0);
  },
});

export default market;
