import Card from './Environment Card'
const SchoolEvents = [{
        title: 'We welcome you to our Anual Tree Planting Day',
        date: '25th September 2024',
    image: '/games.png',
    content: 'Join us in making our school greener! On Tree Planting Day, students and staff come together to plant trees around the campus, promoting environmental stewardship and enhancing our green spaces. This initiative not only beautifies our surroundings but also contributes to a healthier ecosystem and provides hands-on learning experiences about the importance of trees and conservation. Participants will learn about different tree species, proper planting techniques, and the long-term benefits of trees, such as improving air quality, providing habitats for wildlife, and combating climate change. Lets work together to create a sustainable future and foster a sense of responsibility towards our environment.'
},
    {
        title: 'We welcome you to our Anual Tree Planting Day',
        date: '25th September 2024',
    image: '/games.png',
    content: 'Join us in making our school greener! On Tree Planting Day, students and staff come together to plant trees around the campus, promoting environmental stewardship and enhancing our green spaces. This initiative not only beautifies our surroundings but also contributes to a healthier ecosystem and provides hands-on learning experiences about the importance of trees and conservation. Participants will learn about different tree species, proper planting techniques, and the long-term benefits of trees, such as improving air quality, providing habitats for wildlife, and combating climate change. Lets work together to create a sustainable future and foster a sense of responsibility towards our environment.'
    },
    {
        title: 'We welcome you to our Anual Tree Planting Day',
        date: '25th September 2024',
    image: '/games.png',
    content: 'Join us in making our school greener! On Tree Planting Day, students and staff come together to plant trees around the campus, promoting environmental stewardship and enhancing our green spaces. This initiative not only beautifies our surroundings but also contributes to a healthier ecosystem and provides hands-on learning experiences about the importance of trees and conservation. Participants will learn about different tree species, proper planting techniques, and the long-term benefits of trees, such as improving air quality, providing habitats for wildlife, and combating climate change. Lets work together to create a sustainable future and foster a sense of responsibility towards our environment.'
},
]

export default function Activities() {
    return (
         <div className="px-4 lg:px-16">
            <h3 className="text-xl font-semibold mt-3">Our Activities</h3>
            {SchoolEvents.map((Event, index) => (
                <Card key={index} title={Event.title} date={Event.date} image={Event.image} content={Event.content} />
            ))}
        </div>
    )
}