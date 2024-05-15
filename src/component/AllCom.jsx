import React from 'react';
import Card from './Card';

export function AllCom() {
    let allContent = [
        {
            id:1,
           title: "Use ReactJS to Fetch and Display Data from API – 5 Simple Steps",
           image :"https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js-1536x864.png",
           date: "21 Mar, 2024"
           },
           {
            id:2,
           title: "How to Render an Array of Objects in React? [in 3 easy steps]",
           image : "https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs-1536x864.png",
           date: "21 Mar, 2024"
           },
           {
            id:3,
           title: "Top 10 Unique Project Ideas for College Students",
           image : "https://www.guvi.in/blog/wp-content/uploads/2023/06/feature-image-unique-project-ideas.jpg",
           date:"21 Mar, 2024"
           },
           {
            id:4,
           title: "Top 30 Mini Project Ideas For College Students [UPDATED]",
           image : "https://www.guvi.in/blog/wp-content/uploads/2015/02/blog-2-600x314.png",
           date: "25 Mar, 2024"
           },
           {
            id:5,
           title: "20 Mechanical Engineering Project Ideas",
           image : "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Mechanical-Engineering-Project-Ideas.webp",
           date: "25 Mar, 2024"
           },
           {
            id:6,
           title: "10 Hardest and Easiest Programming Languages in 2024",
           image : "https://www.guvi.in/blog/wp-content/uploads/2023/03/programming-lang-features-image.jpg",
           date:" 14 Mar, 2024"
           },
           {
            id:7,
           title: "30 Best JavaScript Project Ideas For You [3 Bonus Portfolio Projects]",
           image : "https://www.guvi.in/blog/wp-content/uploads/2023/02/animated-javascript-project-image.jpg",
           date:"25 Mar, 2024"
           },
           {
            id:8,
           title: "Top 9 TCS Xplore Python Coding Questions [DeCode with GUVI]",
           image : "https://www.guvi.in/blog/wp-content/uploads/2022/08/6.-TCS-Xplore-Python-Coding-Questions.png",
           date: "25 Mar, 2024"
           },
           {
            id:9,
           title: "How to Setup React Router v6? | Tutorial 2024",
           image : "https://www.guvi.in/blog/wp-content/uploads/2023/01/How-to-set-up-1536x864.png",
           Date: "25 Mar, 2024"
           },
           
    ];
    return (
        <>
            {console.log(allContent)}
            <div className="container">
                <div className="row py-5 d-flex justify-content-center">
                    {allContent.map((card) => {
                        return <Card key={card.id} data={card} />;
                    })}
                </div>
            </div>
        </>
    );
}
