import Card from './Card'
const SchoolEvents = [{
        title: 'WE welcome you to our Anual General Meeting ( AGM )',
        date: '25th September 2024',
    image: '/games.png',
    content: 'hello world'
},
    {
        title: 'WE welcome you to our Anual General Meeting ( AGM )',
        date: '25th September 2024',
    image: '/games.png',
    content: 'Welcome to our AGM'
    },
    {
        title: 'WE welcome you to our Anual General Meeting ( AGM )',
        date: '25th September 2024',
    image: '/games.png',
    content: 'hello world. Welcome to our Annual General Meeting'
},
]

export default function Events() {
    return (
         <div>
            <h3 className="text-xl font-semibold mt-3">Our Events</h3>
            {SchoolEvents.map((Event, index) => (
                <Card key={index} title={Event.title} date={Event.date} image={Event.image} content={Event.content} />
            ))}
        </div>
    )
}