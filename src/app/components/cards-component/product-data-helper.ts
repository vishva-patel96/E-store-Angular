export interface RawProductData {
    id: number,
    item_name: string,
    item_description: string,
    storage_location: string,
    inventory_level: number,
    image: string
  }

export class productData {

        public static getProductdata(rawData: RawProductData[]) {
            let result = [];
            for(let i of rawData) {
                let obj:any = {}
                obj.itemName = i.item_name;
                obj.itemDesc = i.item_description;
                obj.img = i.image
                result.push(obj);
            }
            return result
        }
}