/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 28 May 2025
 */


import React from "react";


const leadership: React.FC = () => (
    <div className={"primary-section"}>
        {(() => {
            const aboutContents = [
                {
                    name: "Jamie Kim",
                    position: "President",
                    grade: "Senior",
                    image: "jamie",
                    contents: `
                    What's up my lovelies! I'm Jamie, your Woodson Science Olympiad President for the 2025-2026 season. It's been a long five years since I first started participating, and it's been an incredibly exciting ride! My favorite part about Science Olympiad is the community it builds. Being a part of this club has improved me so much as a competitor, leader, and person. In the room, you can find me tabbing my binders or scrambling to finish my cheat sheets. As a jack-of-all-trades for study events, I don't specialize in one category. Outside of WSO, you can find me spending atrocious amounts of money on clothes while listening to Neon Trees and Cigarettes After Sex.`
                },
                {
                    name: "Elaina Wi",
                    position: "Vice President",
                    grade: "Junior",
                    image: "elaina",
                    contents: "Hello! I'm Elaina, a junior who loves life science events. In my 2 (almost 3) years of scioly, I’ve enjoyed creating detailed cheatsheets for my events and hanging out after competitions. Overall, my favorite WSO experiences have been late night snacking at 2025 nationals and participating in nervous small talk with other teams before horrendous WIDI builds are revealed. My passion in STEM is rooted in my interest in agricultural science, especially food dairy science. Outside of scioly, you can usually find me napping, practicing archery, or creating art. As vice president, I hope to bridge the teams together and help everyone have a great year!"
                },
                {
                    name: "Ivy Zhao",
                    position: "Secretary",
                    grade: "Junior",
                    image: "ivy",
                    contents: "Hello, I am Ivy Zhao and I am a senior who has been a part of WSO for the last 4 years. Being part of WSO has allowed me to explore my passion for science while competing and learning with an amazing team. The most memorable moments this club has given me include scarfing down food late at night during nats and venturing around UMW after regionals. My favorite events are entomology, forestry, and fossils thanks to all the enjoyable memories I have gained and the amazing people I got to work with. If I had to choose, my favorite insects would be braconid wasps, my favorite tree would be Magnolia virginiana, and my favorite extinct invertebrates would be eurypterids."
                },
                {
                    name: "Maddie Cho",
                    position: "Treasurer",
                    grade: "Senior",
                    image: "maddie",
                    contents: "Hello! My name’s Maddie and I’m a senior who joined Science Olympiad last year. My favorite things are staring at money, counting money, and swimming in money. I’m technically a chem person, but I’ll dabble in earth and life sci occasionally. You can typically find me sleeping, drawing, tracking money, and sometimes doing work. I didn’t know that Science Olympiad existed until a year and a half ago, but I’ve met some of my best friends and learned a lot about myself and my interests through this club."
                },
                {
                    name: "Ada Qin",
                    position: "Build Captain",
                    grade: "Senior",
                    image: "ada",
                    contents: "Hey everyone! I’m Ada, and I’m one of your co-build captains this year! You can usually spot me by my signature purple jacket, tinkering away at something-whether it’s cardboard crafts, wire sculptures, or one of our event builds. This year, I’m competing in Machines, Engineering CAD, and Electric Vehicle, and I couldn’t be more excited to dive into the mechanical side of Science Olympiad. When I’m not building or testing, you’ll probably catch me listening to Frank Sinatra while working on my next project or more likely taking a power nap in some random corner. I can’t wait to help lead our build team and make this season an unforgettable one!"
                },
                {
                    name: "Timothy Lin-Lee",
                    position: "Co-Build Captain",
                    grade: "Sophmore",
                    image: "timmy",
                    contents: "Hi, I'm Timothy! I'm a sophomore and this is my fourth year in Science Olympiad (including middle school). You can probably find me sitting/lying on the couch in Ms. Babcock's room before and after school. I participate in Science Olympiad because I enjoy learning new things. I also enjoy being part of the team and the thrill that comes with receiving results. I mostly do physics events such as Circuit Lab, Machines, Wind Power, and Optic even though I also enjoy doing builds such as Helicopter and Air Trajectory. Outside of Science Olympiad, I also play basketball and volleyball as well as playing the viola in orchestra. My favorite Science Olympiad memory is going to Nationals and spending time with the team in Nebraska! I look forward to learning new things, making memories, and having fun in the upcoming season!"
                },
                {
                    name: "Nathan Nguyen",
                    position: "Technical Captain",
                    grade: "Senior",
                    image: "nathan",
                    contents: `Jello! I am Nathan Nguyen, a senior who is going into their third year of Science Olympiad. 
                    Every since joining WSO, my high school experience has been filled with unforgettable moments, 
                    from the winning of medals to the sleepless nights before competition. My favorite memory from Science 
                    Olympiad was playing around at on the Fairfax High School Field after my first in-person competition.
                    As for events that I specialize in: Codebusters, Robot Tour, Astronomy, and the best event of all time, Fermi. 
                    I am excited to continue contributing to the success of our team and helping to make this year a memorable one.`
                },
                {
                    name: "Katie Yen",
                    position: "Logistics Officer",
                    grade: "Junior",
                    image: "katie",
                    contents: "Hello everyone! I'm Katie, and I'm your logistics officer for this year! You can often find me in the lab mixing questionable chemicals together (don't be like me, safety is important). This year, I'm competing in Forensics, Chemistry Lab, and Codebusters - I'm super excited to see just how much we can learn from these events! When I'm not grinding any tests, I spend my free time listening to jazz, playing the guitar, and solving logic puzzles. I look forward to helping make this season the best Woodson Science Olympiad has ever been! "
                },
                {
                    name: "Ian Gonzalez",
                    position: "Study Captain",
                    grade: "Junior",
                    image: "ian",
                    contents: "Hi, I'm Ian, a junior in my fourth year in Science Olympiad! Science Olympiad has been an outlet for me to challenge myself academically while also meeting some of the best people I've befriended in high school. I hope that WSO is a place where people can connect with others while having fun learning about various areas of science! Outside of Science Olympiad, I enjoy band, orchestra, and K-Pop dance."
                }
            ];

            return (
                aboutContents.map((officer, _) => (
                    <div className={"bio-container row"} data-aos={"fade-up"}>
                        <div className={"col-xs-12 col-sm-12 col-md-3 col-lg-3"}>
                            <img className="bio-image" src={`${process.env.PUBLIC_URL}/images/${officer.image}.jpg`} alt={officer.image} />
                        </div>
                        <div className={"col-xs-12 col-sm-12 col-md-9 col-lg-9"}>
                            <h2 className={"bio-name"}>{officer.name}</h2>
                            <div className={"bio-position"}>{officer.position}</div>
                            <div className={"bio-text"}>{officer.contents}</div>
                        </div>
                    </div>
                ))
            )

        })()}
    </div>
);


export default leadership;

