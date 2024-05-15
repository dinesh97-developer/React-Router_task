import Card from "./Card";


export function Career() {
  let careerContent = [
    {
      id:1,
     title: "Top Product-Based Companies for Data Scientists in 2024",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
     date: "26 Mar, 2024"
     },
     {
      id:2,
     title: "Roles and Responsibilities of a Data Scientist",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4-1536x866.png",
     date: "16 Apr, 2024"
     },
     {
      id:3, 
     title: "How Long Would It Take to Learn Data Science?",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science-1536x804.png",
     date: "16 Apr, 2024"
     },
     {
      id:4,
     title: "Top Product-Based Companies for Data Scientists in 2024",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
     date: "26 Mar, 2024"
     },
     {
      id:5,
     title: "Roles and Responsibilities of a Data Scientist",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4-1536x866.png",
     date: "16 Apr, 2024"
     },
     {
      id:6,
     title: "How Long Would It Take to Learn Data Science?",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science-1536x804.png",
     date: "16 Apr, 2024"
     }
     
  ];
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {careerContent.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  )
}
