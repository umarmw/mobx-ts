import { observable } from "mobx";

const Cities = [
    'Amsterdam',
    'London',
    'Madrid'
  ];
  
  export const createStore = () => {
    const store = {
        query: observable.box(''),
        setQuery(query: string) {
          store.query.set(query.toLowerCase());
        },
        get filteredCities() {
          return Cities.filter(city =>
            city.toLowerCase().includes(store.query.get())
          );
        },
        products: observable.box([], { name: "produxt" }),
        setProducts(updatedProducts:any){
            store.products.set(updatedProducts)
        },
        get updatedProducts(){
            return JSON.parse(JSON.stringify(store.products.get()))
        }
    };
    return store;
  };
  
  export type TStore = ReturnType<typeof createStore>