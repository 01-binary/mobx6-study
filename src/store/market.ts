import { observable } from "mobx";
import counter from './count';

export interface SelectedItem {
  name: string;
  price: number;
  count: number;
}

export interface Market {
  selectedItems: SelectedItem[];
  put: (name: string, price: number) => void;
  take: (name: string) => void;
  total: () => void;
}

const market = observable<Market>({
  selectedItems: [],
  put(name: string, price: number) {
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
    exists.count += counter.number;
  },
  take(name: string) {
    const itemToTakeIndex: number = this.selectedItems.findIndex(
      (item: any) => item.name === name
    );
    if (itemToTakeIndex > -1) {
    //   itemToTake.count--;
    this.selectedItems[itemToTakeIndex].count--;

      if (this.selectedItems[itemToTakeIndex].count === 0) {
        // 갯수가 0 이면
        this.selectedItems.splice(itemToTakeIndex, 1); // 배열에서 제거처리합니다.
      }
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
