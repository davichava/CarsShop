export interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    img: 'Redmi.jpg',
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    img: 'PhoneMini.jpg',
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    img: 'PhoneStandard.jpg',
    name: 'Phone Standard',
    price: 299,
    description: 'Very Goood!!!'
  },
  {
    id: 4,
    img: 'SamsungA12.jpg',
    name: 'Samsung A12',
    price: 599,
    description: 'Ram 28 GB'
  },
  {
    id: 5,
    img: 'huaweip30.jpg',
    name: 'huawei p30',
    price: 2799000,
    description: 'Ram 128 GB'
  },
  {
    id: 6,
    img: 'redminote9pro.jpg',
    name: 'redmi note 9 pro',
    price: 1045000,
    description: 'Ram 128 GB'
  },
  {
    id: 7,
    img: 'redminote10.jpg',
    name: 'redmi note 10',
    price: 1005000,
    description: 'Ram 128 GB'
  }
];