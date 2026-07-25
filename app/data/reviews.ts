// Real patient reviews from California Hearing Center's Google Business Profile,
// transcribed verbatim (owner-supplied). Displayed as social proof + linked to
// the live Google listing. NOTE: we intentionally do NOT emit Review/
// AggregateRating structured data for these — Google's guidelines disallow
// marking up third-party (Google-sourced) reviews on your own site.

export const googleReviewsUrl =
  "https://www.google.com/maps/place/California+Hearing+Center/@37.5681951,-122.4039485,13z/data=!4m8!3m7!1s0x808f9e742810d86f:0xdf763ec3be019083!8m2!3d37.5681951!4d-122.3277308!9m1!1b1!16s%2Fg%2F1thk8_03";

export type Review = {
  name: string;
  when: string;   // e.g. "a month ago", "2 years ago"
  text: string;
};

// A curated, verbatim selection of 5-star Google reviews (diverse across
// clinicians, offices, and topics). More live on the Google listing.
export const reviews: Review[] = [
  { name: "C Okazaki", when: "a month ago", text: "Dr. Hatem did a thorough job in testing and fitting an appropriate hearing aid. We particularly liked her approach in finding a comfortable fit with the hearing aids. She is a pleasant and enjoyable person. We highly recommend Dr. Hatem to anyone needing assistance in their hearing." },
  { name: "Regina Borchenko", when: "2 months ago", text: "I had a great experience at the California Hearing Center. The staff was knowledgeable, polite and made the whole process feel pretty easy. It's the kind of service I expected from a place in San Mateo. Highly recommended." },
  { name: "Salomi Daftary", when: "3 weeks ago", text: "I cannot recommend Dr. Savin at CA Hearing Center in San Mateo highly enough. I have unilateral hearing loss due to otosclerosis and had tried several hearing aids in the past without much success. I was seriously considering surgery as my only option before I found Dr. Savin." },
  { name: "Robert Shannon", when: "a week ago", text: "Timely, patient, good explanations and good results. Very happy." },
  { name: "Joan Sears", when: "4 months ago", text: "California Hearing Center offers fantastic service for their hearing products. Compared to other hearing aid providers, this business is superior, not just the professionals but the variety of the technology they use for precision assessment. I hope you have the same great experience." },
  { name: "Kristen Pierce", when: "3 months ago", text: "I have been going to CHC for almost 5 years, and I really believe Kira has my best interests in mind. She doesn't try to upsell — I trust her recommendations completely. Plus, she is great at getting earwax out!" },
  { name: "Shirley Ames", when: "2 months ago", text: "Dr Gianna Hatem is a wonderful caring audiologist. Always, willing to do whatever she can for the best hearing possible for her patients." },
  { name: "Dominic Palmisano", when: "6 months ago", text: "My first experience with hearing aids happened with California Hearing Center. I was impressed with the professional and relax environment at the San Mateo office. I want to shout out to Sierra Melendez for the extraordinary personalize service she gave me during adjustments needed to make the experience 100%!" },
  { name: "Cecile Mesirov", when: "8 months ago", text: "My experience with Dr. Savin and staff was so informative and rewarding. There was no pressure to purchase hearing aids after a thorough examination and trial period. In fact we decided to wait and check back in 6 months to a year. I was so impressed. I will be returning when I'm ready. Thank you Dr. Savin!" },
  { name: "Frank Masci", when: "8 months ago", text: "I have been to California Hearing Center in San Carlos many times. I have not only been treated respectfully and professionally, but also with joy. I forward to my appointments and know that should I ever have a problem, it will be taken care of immediately, and, most importantly, it will be solved." },
  { name: "optician weileyecare", when: "7 months ago", text: "This is my first experience with hearing devices. I am so impressed with Dr. Giana Hatem. She is professional, knowledgeable, patient, and kind. I continue to be very grateful for my positive experiences with her." },
  { name: "Paul Regan", when: "11 months ago", text: "My experience at California Hearing Center was very positive. Kira was very professional in her analysis of my hearing needs and provided a comfortable and effective solution. I give her a total thumbs up!" },
  { name: "Ross Kirsling", when: "3 years ago", text: "Had an exceptional experience here. I came in for a hearing test, expecting that I'd just get my results and be sent on my way, but Dr. Patty Anderson educated me on what tinnitus really is and how I can better understand my own situation. Thanks so much!" },
  { name: "David Isenman", when: "4 years ago", text: "Top rate and precise hearing test consistent with the clinical findings. Common sense approach to possible solutions. No sales hype. A professionally run office with excellent service. I highly recommend the California Hearing Center!" },
  { name: "Talia Byrne-Haber", when: "2 years ago", text: "Dr. Anderson did a hearing test and wax removal after I had some issues with sudden sensorineural hearing loss. She was extremely professional, kind, and took the time to thoroughly educate me about my time sensitive hearing needs. I will absolutely be returning to her in the future, and would recommend her to others as well!" },
  { name: "Patrice Peyret", when: "2 years ago", text: "I received very thorough hearing tests during my very first visit and promptly got the aids I needed. Since then, the maintenance has been efficient and timely during my subsequent visits. I also got print outs of the test results so that I could save redoing those tests for a subsequent visit with an ENT specialist." },
  { name: "Helayne Franzblau", when: "2 years ago", text: "I brought my hearing aid in for a cleaning and to check to make sure it was working properly, and I found this location much better than the people I worked with in Oregon. They did a much better job at explaining what they were doing and in cleaning the hearing aid so I was very satisfied with my service." },
  { name: "Frances Chin", when: "2 years ago", text: "Dr. Torio provided excellent and compassionate care in helping fit my mother with a new hearing aid. Dr. Torio was gentle and meticulous in making adjustments and went the extra mile. After 3 months, my mother is now happy to hear better. Our family is so grateful to California Hearing Center and Dr. Torio." },
  { name: "Rosemary Bosque", when: "4 years ago", text: "The California Hearing Center has consistently given me excellent care over several years. Always well versed in the latest technology, the entire staff has been very professional, and attentive to my needs. I highly recommend them for their outstanding customer service and expertise." },
  { name: "Nancy Crabbe", when: "4 years ago", text: "California Hearing Center has provided me with the best hearing quality I have had. In past years I've worked with 2 other services and audiologists, and the results were not of their quality or accuracy. The whole staff are helpful." },
  { name: "Robert Herrera", when: "5 years ago", text: "Great experience at the San Mateo clinic with Lais Ama and Dr Benson. Lais was flexible, creative, and helped me to get the necessary services that I needed for a project. Dr Benson and Lais have great touch and provided exemplary care. Highly recommended." },
  { name: "Bill Fergusson", when: "3 years ago", text: "I have been a client of California Hearing Center for several years, and would not go anywhere else for hearing diagnosis and care. In the most recent case, I got new custom domes for my hearing aids, and Darcy Benson saw me on two occasions to make sure the fit was right." },
  { name: "syzygy5", when: "2 years ago", text: "Outstanding service from the audiologist, Lais Ama. This is by far the most professional and knowledgeable hearing aid company I have dealt with after more than sixty years of using hearing aids." },
  { name: "Randall Weaver", when: "3 years ago", text: "The service I received from the staff at California Hearing Center was simply EXCELLENT. Each staff member I interacted with — from the doctor of audiology to the office manager to the interns — offered great support and expertise. They were all a pleasure to work with." },
  { name: "Mary Legallet", when: "5 years ago", text: "Very knowledgeable, professional and caring staff. They want me to hear as well as I am able and not just sell me a product. I'd give them 10 stars!" },
  { name: "James Cook", when: "2 years ago", text: "Excellent visit. Richard gave very clear directions and useful info on hearing aid use." },
  { name: "Mike Galanter", when: "7 months ago", text: "Awesome staff, great service, and I can finally hear clearly again. Couldn't ask for better care." },
  { name: "irina dotsenko", when: "7 months ago", text: "Everyone here is so kind and patient. They made the whole hearing test and fitting process easy and stress-free." },
  { name: "Roman Irner", when: "10 months ago", text: "Best audiologist in San Francisco Bay Area!" },
  { name: "Fred Palmer", when: "2 years ago", text: "Very thorough and detailed exam with excellent communication. Very pleased with the service." },
  { name: "Mike Putnam", when: "a year ago", text: "Very professional. Took me step by step and explained as she went along. Discussed the results with me at the end. I would recommend California Hearing Center in San Mateo." },
  { name: "Gilberto Santos", when: "a year ago", text: "Doctor was super detailed explaining what was going on. Very happy!" },
  { name: "Bobbi Maniscalco", when: "2 years ago", text: "I am impressed by the entire staff and especially Dr. Kira Savin. She is very knowledgeable, efficient and has a great personality." },
  { name: "Ann Hayashi", when: "7 years ago", text: "I have been a very satisfied customer of California Hearing Center for many years. Lais Ama has done a wonderful job of fitting me with my newest devices." },
  { name: "Bill Zonner", when: "3 years ago", text: "Lais is a professional. Very knowledgeable, takes time to explain specifics and answers all questions thoroughly. Also a great personality." },
  { name: "Bob Miller", when: "a year ago", text: "Dr. Savin was thorough in her fitting of my new hearing aids and was clear in her explanations of what she was doing and why." },
  { name: "Emily Hall", when: "3 years ago", text: "They were thorough with the hearing exam and took great care in listening to me. I highly recommend them." },
  { name: "Yvonne Birek", when: "4 years ago", text: "Darcy is the best audiologist I have ever met. She is caring, professional, knowledgeable and efficient. The office staff are welcoming and friendly." },
  { name: "Stacey Badillo", when: "4 years ago", text: "I've been going to California Hearing Center for years and they have always been extremely professional and handle all my needs. All of the staff members are personable, courteous and helpful. Highly recommended." },
  { name: "Ben Moreci", when: "4 years ago", text: "Quality products and professional courteous service. The best hearing service I have had yet and by far the best hearing aids I have had to date. I highly recommend California Hearing Center." },
  { name: "Judy Waterman", when: "4 years ago", text: "California Hearing has consistently given my hearing problems personal and caring attention for years. I am impressed by their prompt service, what nice people they are and the diligence they show in helping me hear as well as possible." },
  { name: "Robert La Mar", when: "4 years ago", text: "California Hearing is simply the best. The entire staff is professional and knowledgeable regarding all aspects of hearing difficulties. Over the years that I have been a patient of the California Hearing Center I have always felt I have received the best personal service, the best advice and the best value." },
  { name: "Tom Blank", when: "4 years ago", text: "I went in to have them look at the broken aid. They completely fixed it while I was in the office and refurbished my other one at the same time. No fuss no muss no charge. These are great people." },
  { name: "Anne Scanlan-Rohrer", when: "a year ago", text: "Dr. Anderson is a gem. Friendliest doctor ever and she really knows her stuff. The staff is very efficient also." },
  { name: "Charlie Cowan", when: "4 years ago", text: "Lais Ama is extremely knowledgeable and professional specialist. I would highly recommend her to any one with a hearing deficiency." },
  { name: "Jay White", when: "3 years ago", text: "California Hearing Center has provided my hearing aid service for many years. Always very prompt, efficiently and professionally." },
  { name: "Gene Marie Foschi", when: "4 years ago", text: "Excellent Hearing Center. They are professional, knowledgeable and very friendly. Best hearing resources in San Mateo area. I highly recommend them for all your hearing needs." },
  { name: "Patricia", when: "3 years ago", text: "Dr. Benson takes a real interest in my hearing issues. She takes the time to listen to me and answer all of my questions. She is 100% the best. I wouldn't go anywhere else." },
  { name: "Ron Kardos", when: "4 years ago", text: "This is a quality place. I am quite glad I went there. They have credibility as they told me I don't need a hearing aid." },
  { name: "Michael Glazer", when: "6 years ago", text: "My life has been so much better since becoming a customer of CHC. Most medical appointments are dreadful but not here at CHC. I feel welcome and they help me hear better - I give them 5 Stars +!" },
  { name: "Bobbi F", when: "2 years ago", text: "It has been a pleasure working on my hearing issues with Richard. He is very patient and truly dedicated to making it work. I would definitely recommend him to anyone with a hearing problem or who thinks they may have one." },
  { name: "Robert Gallucci", when: "2 years ago", text: "Service is always great. Kira is terrific to work with." },
  { name: "Merrily Robinson", when: "9 months ago", text: "Professional!! Personable!! Thorough!! Thank you!" },
  { name: "Jonathan Schaefer", when: "11 years ago", text: "After years of annual hearing tests, I needed hearing aids for the first time. Dr Benson came highly recommended by an audiology clinic in SF, and I find her to be phenomenal. She has the most thorough testing regimen I had ever been through." },
  { name: "Patty Gurski", when: "a year ago", text: "Everybody is great! Dr Savin wonderful! Very pleasant experience! Thank you." },
];
