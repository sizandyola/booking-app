export type Event = {
    title: string;
    image: string;
    address: string;
    date: string;
    price: string;
    description: string;
};

export const events: Event[] = [
    {
        title: 'Music Festival',
        image: 'music_festival.jpg',
        address: '123 Main St, City, Country',
        date: 'September 20, 2023',
        price: '$50',
        description: 'A weekend of live music and fun in the sun!',
    },
    {
        title: 'Sports Game',
        image: 'sports_game.jpg',
        address: '456 Elm Rd, Town, Country',
        date: 'October 5, 2023',
        price: 'Free',
        description: 'Cheer for your favorite team in this exciting game!',
    },
    {
        title: 'Movie Night',
        image: 'movie_night.jpg',
        address: '789 Oak Ave, Village, Country',
        date: 'November 10, 2023',
        price: '$10',
        description: 'Enjoy a night under the stars with a classic film.',
    },
];
