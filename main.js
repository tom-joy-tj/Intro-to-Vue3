const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 1, colour: 'green' },
                { id: 2, colour: 'blue' },
            ],
            sizes: ['Small', 'Medium', 'Large'],
        }
    }
})
