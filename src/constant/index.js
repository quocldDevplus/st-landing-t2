export const menuItems = [
    { id: 1, content: 'Home', to: '/' },
    {
        id: 2,
        content: 'What we do',

        childrens: [
            { id: 1, content: 'St Software', to: '/st-software' },
            { id: 2, content: 'St Digital', to: '/st-digital' },
            { id: 3, content: 'St Icubation', to: '/st-icubation' },
        ],
    },
    { id: 3, content: 'Who we are', to: '/who-we-are' },
    { id: 4, content: 'Portfolio', to: '/portfolio' },
    { id: 5, content: 'Join us', to: '/join-us' },
    { id: 6, content: `Let's talk`, to: '/lets-talk' },
];
