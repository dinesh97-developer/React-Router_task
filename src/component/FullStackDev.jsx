import Card from "./Card";


export function FullStackDev() {
  let fsdContent = [
    {
      id:1,
     title: "Best Full-Stack Development Project Ideas in 2024",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
     data: "25 Mar, 2024"
     },
     {
      id:2,
     title: "How Long Would It Take to Be a Full Stack Developer?",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
     data: "26 Mar, 2024"
     },
     {
      id:3,
     title: "How does Apache work? A detailed introduction to Apache",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png",
     data: "26 Mar, 2024"
     },
     {
      id:4,
     title: "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024",
     image: "https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png",
     data: "26 Mar, 2024"
     },
     {
      id:5,
     title: "10 Best Database Management Systems For Software Developers",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png",
     data: "22 Mar, 2024"
     },
     {
      id:6,
     title: "6 Essential Prerequisites For Learning ReactJS",
     image: "https://www.guvi.in/blog/wp-content/uploads/2021/05/react-600x314.jpg",
     data: "25 Mar, 2024"
     },
     {
      id:7,
     title: "Top 10 Full-Stack Developer Frameworks in 2024",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg",
     data: "16 Apr, 2024"
     },
     {
      id:8,
     title: "Best Web Development Roadmap for Beginners 2024",
     image: "https://www.guvi.in/blog/wp-content/uploads/2021/05/react-600x314.jpg",
     data: "17 Apr, 2024"
     },
     
     {
      id:9,
     title: "7 Best Full-Stack Development Online Courses [2024]",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
     data: "25 Mar, 2024"
     }
     
  ];
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {fsdContent.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  )
}

// export default FullStackDev