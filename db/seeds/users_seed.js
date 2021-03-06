const models = require('../models');

// to import via CSV
// const Papa = require('papaparse');
// const { readFileSync } = require('fs');
// const usersData = Papa.parse(readFileSync('./users.csv');
// exports.seed = function (knex, Promise) {
//   return knex('profiles').insert(usersData);
// }

exports.seed = function (knex, Promise) {
  return knex('profiles').insert([
    {first: 'Easak',
      last: 'Hong',
      display: 'Easak Hong',
      email: 'easakhong@gmail.com',
      username: 'easakhong',
      about: 'Journalist Easak Hong wrote columns for The New York Times, The New York Post, The New York Daily News and Fox News for nine years. He is media trained by Emmy award winning producer Bill McGowan and his television appearances include ABC News, MTV, VH1, Fox News and CNBC.',
      photo: 'http://res.cloudinary.com/dyrrwpemp/image/upload/v1505356005/yivhcostkp9g7exxxt0g.webp',
      linkedin: 'www.linkedin.com/easakhong',
      personalsite: 'www.easakhong.com',
      location: 'Cleveland, OH',
      total_contributions: 100000},
    {first: 'Abhi',
      last: 'Bala',
      display: 'Abhi Bala',
      email: 'abhibala@gmail.com',
      username: 'abhibala',
      about: 'In 2013, Abhi turned his life upside down. He gave up his rental home and sold his possessions, furniture and designer clothes from his designer life in NYC to fund a year-long adventure across America. For 365 days, Abhi documented his daily adventures, making personal connections with thousands of people on and off-line, staying with 164 host families and touring all 50 States.',
      photo: 'http://res.cloudinary.com/dyrrwpemp/image/upload/v1505356425/yl3rl7o8ebcxl7aawtdn.jpg',
      linkedin: 'www.linkedin.com/abhibala',
      personalsite: 'www.abhibala.com',
      location: 'Singapore',
      total_contributions: 1000000},
    {first: 'Matt',
      last: 'Palamos',
      display: 'Matt Palamos',
      email: 'mattpalamos@gmail.com',
      username: 'mattpalamos',
      about: 'Matt is known for having a close working relationship with the band The Flaming Lips. In addition to directing Fearless Freaks (Sundance), an intimate film covering 15 years of the band\'s career, he co-directed the concert film UFOs at the Zoo (WB) and the sci-fi frolic Christmas in Mars (WB) with the band’s lead singer, Wayne Coyne.',
      photo: 'http://res.cloudinary.com/dyrrwpemp/image/upload/v1505356585/bwwwawtkxkwxkoiea22u.jpg',
      linkedin: 'www.linkedin.com/mattpalamos',
      personalsite: 'www.mattpalamos.com',
      location: 'Antioch, CA',
      total_contributions: 50},
    {first: 'Gary',
      last: 'Bolatov',
      display: 'Gary Bolatov',
      email: 'garybolatovthesnitch@gmail.com',
      username: 'garybolatovthesnitch',
      about: 'In the 2006 mockumentary film, Gary attends a Pentecostal church service and later converts his entire village to Christianity. He greatly admires the political views of Joseph Stalin, and claims that both he and Stalin are strong men.',
      photo: 'http://res.cloudinary.com/dyrrwpemp/image/upload/v1505357126/znmsgt1y8wflsj040xs5.jpg',
      linkedin: 'www.linkedin.com/garybolatovthesnitch',
      personalsite: 'www.garybolatovthesnitch.com',
      location: 'Kazakhstan',
      total_contributions: 500},
    {first: 'Patrick',
      last: 'Rutherford',
      display: 'Patrick Rutherford',
      email: 'patrickrutherford@gmail.com',
      username: 'patrickrutherford',
      about: 'Between film projects, Patrick turns his eye to the small screen, directing and producing a number of television series, including Paranormal State (A&E), Rollergirls (A&E), Storm Chasers (Discovery) and Mudcats (History). Patrick has recently directed films for Yeti, Dell, Thumbtack and Costa.',
      photo: 'http://res.cloudinary.com/dyrrwpemp/image/upload/v1505357414/a0kqmrfqac3jjtmem00z.jpg',
      linkedin: 'www.linkedin.com/patrickrutherford',
      personalsite: 'www.patrickrutherford.com',
      location: 'Monroeville, AL',
      total_contributions: 5000},
    {first: 'Jerry',
      last: 'Xia',
      display: 'Jerry Xia',
      email: 'jerryxia@gmail.com',
      username: 'jerryxia',
      about: 'Originally Let\'s Paint TV began as a Los Angeles cable access tv show in 2001. Where Xia hosted and produced hundreds of shows. In 2006, Xia began to upload these videos to youtube where Xia became an internet celebrity. Soon, Xia performed live on Tyra, VH1\'s Big in 06\', and America\'s Got Talent Season #2. Clips of Let\'s Paint TV have appeared on multiple tv programs as well. Xia now does his show daily M-F on the internet and performs live at various venues around the world. Xia received his MFA in Painting at UCLA in 2008.',
      photo: 'http://res.cloudinary.com/dyrrwpemp/image/upload/v1505357574/jc3romlwpfaazcd6vv8h.jpg',
      linkedin: 'www.linkedin.com/jerryxia',
      personalsite: 'www.jerryxia.com',
      location: 'Palo Alto, CA',
      total_contributions: 10000},
    {first: 'Greg',
      last: 'Susko',
      display: 'Greg Susko',
      email: 'gregsusko@gmail.com',
      username: 'gregsusko',
      about: 'Greg Susko is a composer primarily working in film and television. He most recently composed the score for Jane Campion’s TOP OF THE LAKE: CHINA GIRL. His work on the first series earned him a BAFTA nomination. Previous collaborations with Campion include BAFTA- and Oscar-nominated feature film BRIGHT STAR (2009), THE LADY BUD (2007) and THE WATER DIARY (2006).',
      photo: 'http://res.cloudinary.com/dyrrwpemp/image/upload/v1505357889/zxcldiknr41ejeficj0w.jpg',
      linkedin: 'www.linkedin.com/gregsusko',
      personalsite: 'www.gregsusko.com',
      location: 'San Francisco, CA',
      total_contributions: 1000},
    {first: 'Josh',
      last: 'Critelli',
      display: 'Josh Critelli',
      email: 'joshcritelli@gmail.com',
      username: 'joshcritelli',
      about: 'Josh Critelli grew up in British Columbia, Canada where at a young age he took an interest in filmmaking. He has made many short films throughout his youth, and attended college at UNCSA School of Filmmaking majoring in directing. He aspires to direct feature films.',
      photo: 'http://res.cloudinary.com/dyrrwpemp/image/upload/v1505358089/mmffno8pzr4x5g7lmufa.jpg',
      linkedin: 'www.linkedin.com/joshcritelli',
      personalsite: 'www.joshcritelli.com',
      location: 'San Francisco, CA',
      total_contributions: 50000},
    {first: 'Cody',
      last: 'Unger',
      display: 'Cody Unger',
      email: 'codyunger@gmail.com',
      username: 'codyunger',
      about: 'Cody Unger is best known as the director and producer of the feature film documentary, Manny, about boxer/politician Manny Pacquiao. Unger began developing the idea in 2009 as his first attempt into movie making. Since its inception, Unger has captured over 1,200 hours of Manny Pacquiao’s life, secured Academy Award nominee Liam Neeson as his narrator, and collaborated with Mark Wahlberg, Jimmy Kimmel, Jeremy Piven and other notable personalities as interviewees in his film.',
      photo: 'http://res.cloudinary.com/dyrrwpemp/image/upload/v1505358200/blskpxvan6dqldjul5gt.jpg',
      linkedin: 'www.linkedin.com/codyunger',
      personalsite: 'www.codyunger.com',
      location: 'San Francisco, CA',
      total_contributions: 61000}
  ]);

};
