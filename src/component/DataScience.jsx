import Card from "./Card";


export function DataScience() {
  let dsContent = [
    {
      id:1,
     title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
     date: "16 Apr, 2024"
     },
     {
      id:2,
     title: "12 Real-World Data Science Examples: Power Of Data Science",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp",
     date: "25 Mar, 2024"
     },
     {
      id:3,
     title: "Can A Commerce Student Do Data Science?",
     image: "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-1536x804.png",
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
     },
     {
      id:7,
     title: "How to become a Data Scientist after Mechanical Engineering?",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-1536x1024.jpg",
     date: "16 Apr, 2024"
     },
     {
      id:8,
     title: "Everything about Data Scientist Salary in India | 2024",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Everything-about-Data-Scientist-Salary-in-India-2023-1536x804.png",
     date: "02 Apr, 2024"
     },
     {
      id:9,
     title: "Top Product-Based Companies for Data Science Freshers",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
     date: "10 Nov, 2024"
     }
     
  ];
  return (
    <>
      <div className="container">
        <div className="row py-5">
          {dsContent.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  )
}

// export default DataScience