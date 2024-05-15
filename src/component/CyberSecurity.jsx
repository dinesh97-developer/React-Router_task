import Card from "./Card";


export function CyberSecurity() {
  let csContent = [
    {
      id:1,
     title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
     image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
     date: "16 Apr, 2024"
     },
     {
      id:2,
     title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
     date: "26 Mar, 2024"
     },
     {
      id:3,
     title: "What Is Hacking? Types of Hacking & More",
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
     date: "25 Mar, 2024"
     },
     {
      id:4,
     title: "8 Different Types of Cybersecurity and Threats Involved",
     image: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png",
     date: "08 Sep, 2024"
     },
     {
      id:5,
     title: "What is Cybersecurity? Importance and its uses & the growing challenge...",
     image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
     date: "04 Oct, 2024"
     },
     {
      id:6,
     title: "Is coding required for cybersecurity? If yes, how crucial is coding for cyb...",
     image: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
     date: "25 Mar, 2024"
     },
     {
      id:7,
     title: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
     image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-600x314.png",
     date: "25 Mar, 2024"
     },
     {
      id:8,
     title: "The Ultimate Cybersecurity Roadmap for Beginners",
     image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
     date: "23 Mar, 2024"
     }
     
  ];
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {csContent.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  )
}

// export default CyberSecurity