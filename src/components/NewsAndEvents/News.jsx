import Card from "./Card"
const news = [{
        title: 'School renovation project completion',
        date: '24th April 2024',
        image: '/seb.jpg',
        content: 'At Mundika High, we are dedicated to providing a nurturing and inclusive learning environment that fosters academic excellence, personal growth, and the development of essential life skills. Our committed team of educators works tirelessly to inspire a love for learning, encourage critical thinking, and prepare our students to face the challenges of the future with confidence and integrity. We believe in a holistic approach to education, which is reflected in our comprehensive curriculum, diverse extracurricular activities, and community engagement initiatives.'
},
{
        title: 'School renovation project completion',
        date: '24th April 2024',
        image: '/seb.jpg',
        content: 'At Mundika High, we are dedicated to providing a nurturing and inclusive learning environment that fosters academic excellence, personal growth, and the development of essential life skills. Our committed team of educators works tirelessly to inspire a love for learning, encourage critical thinking, and prepare our students to face the challenges of the future with confidence and integrity. We believe in a holistic approach to education, which is reflected in our comprehensive curriculum, diverse extracurricular activities, and community engagement initiatives.'
    },
{
        title: 'School renovation project completion',
        date: '24th April 2024',
        image: '/seb.jpg',
        content: 'At Mundika High, we are dedicated to providing a nurturing and inclusive learning environment that fosters academic excellence, personal growth, and the development of essential life skills. Our committed team of educators works tirelessly to inspire a love for learning, encourage critical thinking, and prepare our students to face the challenges of the future with confidence and integrity. We believe in a holistic approach to education, which is reflected in our comprehensive curriculum, diverse extracurricular activities, and community engagement initiatives.'
},
]
export default function News() {
    
    return (
        <div>
            <h3 className="text-xl font-semibold mt-3">Recent News</h3>
            {news.map((news, index) => (
                <Card key={index} title={news.title} date={news.date} image={news.image} content={news.content} />
            ))}
        </div>
    )
}