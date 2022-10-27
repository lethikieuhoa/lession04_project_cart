var initialState = [
    {
        id: 1,
        name: 'iPhone 7plus',
        image: 'https://chamsocdidong.com/uploads/2020/06/sua-loi-phan-mem-iphone-7-plus.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung Galaxy S7',
        image: 'http://p-vn.ipricegroup.com/uploaded_fb257d52ba48bd3dc132de516cc74ff7.jpg',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 400,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Oppo F1s',
        image: 'https://cdn.tgdd.vn/Products/Images/42/81592/oppo-f1s-vanghong1-org.png',
        description: 'Sản phẩm do Oppo sản xuất',
        price: 450,
        inventory: 5,
        rating: 5
    }
];
const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}
export default products;
