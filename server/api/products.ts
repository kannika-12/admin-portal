export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: "Cat Portrait",
      price: 250, // ราคาลดแล้ว
      originalPrice: 1000, // ราคาปกติ
      rating: 4,
      reviews: 44,
      image: "/dog-1.avif",
    },
    {
      id: 2,
      title: "Dog Portrait",
      price: 300,
      originalPrice: 1000,
      rating: 5,
      reviews: 68,
      image: "/dog-4.jpg",
    },
    {
      id: 3,
      title: "Bird Portrait",
      price: 180,
      originalPrice: 1000,
      rating: 3,
      reviews: 12,
      image: "/dog-2.jpg",
    },
    {
      id: 4,
      title: "Hamster Portrait",
      price: 220,
      originalPrice: 1000,
      rating: 4,
      reviews: 27,
      image: "/dog-3.jpg",
    },
  ];
});
