const maleName = ['Adam', 'Aaron', 'Alexander', 'Andrew', 'Arthur', 'Abraham', 'Adrian', 'Aiden', 'Abdul', 'Alfred', 'Alfie', 'Ash', 'Benjamin', 'Baxter', 'Bernard', 'Billy', 'Blair', 'Bruce', 'Bert', 'Blake', 'Barry', 'Ben', 'Christopher', 'Chris', 'Charles', 'Charlie', 'Cory', 'Connor', 'Callan', 'Caleb', 'Cameron', 'Calvin', 'Callum', 'Calum', 'Casper', 'Craig', 'Carter', 'David', 'Darren', 'Daniel', 'Danny', 'Dominic', 'Dale', 'Damian', 'Dan', 'Danny', 'Darnell', 'Dave', 'Darryl', 'Daryl', 'Dean', 'Declan', 'Denis', 'Drew', 'Douglas', 'Ethan', 'Ed', 'Eddy', 'Erwin', 'Edmond', 'Edward', 'Elliot', 'Ellis', 'Emanuel', 'Ezekiel', 'Eric', 'Ernist', 'Euan', 'Eugene', 'Evan', 'Ewan', 'Ezra', 'Elijah', 'Fanian', 'Findlay', 'Felix', 'Fernando', 'Fred', 'Finn', 'Fletcher', 'Floyd', 'Francis', 'Frank', 'Franklin', 'Fraser', 'Fredrick', 'Gabrial', 'Gabriel', 'Gareth', 'Garry', 'Gary', 'Gavin', 'Geoffrey', 'Gerald', 'George', 'Gerry', 'Gilbert', 'Gino', 'Glen', 'Gordon', 'Graham', 'Grant', 'Greg', 'Graeme', 'Gregor', 'Gus', 'Harry', 'Henry', 'Hadyn', 'Hamish', 'Hamza', 'Haris', 'Harold', 'Harvey', 'Hugh', 'Iain', 'Ian', 'Idris', 'Igor', 'Imran', 'Irfan', 'Isaac', 'Isaiah', 'Jack', 'Jacob', 'Jackson', 'Jayden', 'Jamie', 'Jake', 'Jamal', 'James', 'John', 'Johnathan', 'Jarvis', 'Jason', 'Jasper', 'Jax', 'Jordan', 'Josh', 'Joshua', 'Joseph', 'Kyle', 'Kevin', 'Kai', 'Kian', 'Kane', 'Kaiden', 'Kalvin', 'Karl', 'Liam', 'Logan', 'Lachlan', 'Lance', 'Larry', 'Lars', 'Laurance', 'Lee', 'Leon', 'Leo', 'Leonard', 'Lenny', 'Lewis', 'Lincoln', 'Logan', 'Levi', 'Louis', 'Luca', 'Lucas', 'Luke', 'Michael', 'Mike', 'Max', 'Matthew', 'Mac', 'Mackenzie', 'Malcolm', 'Mark', 'Marc', 'Malik', 'Manuel', 'Mario', 'Marcus', 'Markus', 'Marty', 'Morty', 'Marshall', 'Martin', 'Martyn', 'Mason', 'Matt', 'Max', 'Maurice', 'Noah', 'Nathan', 'Nate', 'Nathanael', 'Neil', 'Nial', 'Nick', 'Nicky', 'Nicholas', 'Nigel', 'Nico', 'Nolan', 'Oliver', 'Odin', 'Oli', 'Olaf', 'Omar', 'Oscar', 'Otis', 'Otto', 'Owan', 'Ozzy', 'Owen', 'Peter', 'Patrick', 'Pablo', 'Paddy', 'Parker', 'Paul', 'Percy', 'Pete', 'Perry', 'Pedro', 'Paulo', 'Pharrell', 'Phillip', 'Philip', 'Pierce', 'Prince', 'Quinn', 'Riley', 'Ralf', 'Ralph', 'Regan', 'Reese', 'Reid', 'Reiley', 'Reilly', 'Reis', 'Reiss', 'Rex', 'Reuban', 'Rhys', 'Richard', 'Ricardo', 'Robert', 'Robbie', 'Rob', 'Roberto', 'Ragnar', 'Rodger', 'Roland', 'Roman', 'Romeo', 'Ronald', 'Ron', 'Ronan', 'Ronnie', 'Ross', 'Roy', 'Ruari', 'Rupert', 'Russell', 'Ryan', 'Ryhs', 'Rory', 'Samuel', 'Sam', 'Simon', 'Stephen', 'Steven', 'Samson', 'Scott', 'Sean', 'Shaun', 'Sebastian', 'Shane', 'Shay', 'Spencer', 'Stan', 'Stanley', 'Stevie', 'Stewart', 'Stirling', 'Stuart', 'Tom', 'Thomas', 'Ted', 'Teddie', 'Terrance', 'Terry', 'Theo', 'Theodore', 'Thor', 'Tim', 'Timmy', 'Toby', 'Todd', 'Tony', 'Travis', 'Trevor', 'Triston', 'Troy', 'Tucker', 'Taylor', 'Tyler', 'Tyrell', 'Tyresse', 'Tyrone', 'Tyson', 'Umar', 'Usman', 'Victor', 'Vaughn', 'Viktor', 'Vince', 'Vincent', 'Vinnie', 'William', 'Wade', 'Waltee', 'Warren', 'Wayne', 'Wilfred', 'Winston', 'Xavier', 'Yanis', 'Zak', 'Zac', 'Zach', 'Zaine'];

const femaleName = ['Amelia', 'Anne', 'Adele', 'Antonia', 'Ashleigh', 'Abby', 'Abbigail', 'Alice', 'Alicia', 'Amber', 'Adelle', 'Aileen', 'Aiesha', 'Amy', 'Aimee', 'Alanna', 'Alexandra', 'Alexa', 'Alisa', 'Alison', 'Amanda', 'Anna', 'Arial', 'Bethany', 'Beth', 'Bryony', 'Bailey', 'Becky', 'Bella', 'Becca', 'Belle', 'Barbara', 'Brenda', 'Britany', 'Brooke', 'Caitlin', 'Clara', 'Carla', 'Carly', 'Charlie', 'Caroline', 'Catherine', 'Catrina', 'Cheryl', 'Chanelle', 'Candice', 'Chantelle', 'Charlotte', 'Chloe', 'Christina', 'Ciara', 'Claire', 'Carmel', 'Carol', 'Caroline', 'Carolyn', 'Crystal',  'Chantelle', 'Dianna', 'Danni', 'Donna', 'Danielle', 'Dawn', 'Daisey', 'Deborah', 'Denise', 'Dionne', 'Dianne', 'Dominique', 'Elaine', 'Elle', 'Ellie', 'Elspeth', 'Eva', 'Emma', 'Edith', 'Eileen', 'Eleonor', 'Erin', 'Elizabeth', 'Ellen', 'Ellie', 'Emily', 'Faith', 'Felecia', 'Fiona', 'Florence', 'Francesca', 'Grace', 'Gabrielle', 'Gabriella', 'Gemma', 'Grace', 'Gwen', 'Gail', 'Georgia', 'Gillian', 'Hailey', 'Holly', 'Hollie', 'Hannah', 'Harriet', 'Heather', 'Helen', 'Hazel', 'Heidi', 'Hope', 'Imogen', 'Irene', 'Isla', 'Ingreid', 'Isobel', 'Jocelyn', 'Jackie', 'Jade', 'Jodie', 'Jasmin', 'Janet', 'Joyce', 'Joy', 'Jemma', 'Jane', 'Janice', 'Jeanette', 'Jean', 'Jenny', 'Julie', 'Joan', 'Jennifer', 'Jessica', 'Joanne', 'Jody', 'Jordyn', 'Judith', 'Julia', 'Juliana', 'Jaqueline', 'Kelly', 'Kim', 'Kerry', 'Kylie', 'Kaitlin', 'Kaleigh', 'Kamila', 'Kiera', 'Kayleigh', 'Kelsey', 'Kimberley', 'Karen', 'Karina', 'Kate', 'Katie', 'Kendra', 'Kirsty', 'Kirsten', 'Lucy', 'Laura', 'Lauren', 'Lauryn', 'Leanne', 'Laurie', 'Leah', 'Lisa', 'Leah', 'Leana', 'Leigh', 'Leona', 'Lori', 'Lesley', 'Lexi', 'Linda', 'Lyndsey', 'Louis', 'Layla', 'Lorna', 'Lydia', 'Lynsey', 'Lidia', 'Lilly', 'Lindsey', 'Lorraine', 'Louise', 'Lynn', 'Maria', 'Margaret', 'Maddison', 'Maggie', 'Mandy', 'Molly', 'Morag', 'Myra', 'Marie', 'Mary-Ann', 'Melanie', 'Melinda', 'Melissa', 'Mhairi', 'Madaline', 'Megan', 'Mollie', 'Michelle', 'Nicola', 'Nikki', 'Nadine', 'Neve', 'Nicole', 'Niamh', 'Maomi', 'Nancy', 'Natalie', 'Natalia', 'Natasha', 'Olivia', 'Poppy', 'Pam', 'Pamela', 'Paige', 'Patricia', 'Pauline', 'Phoebe', 'Penny', 'Polly', 'Poppy', 'Rosie', 'Rachel', 'Rachael', 'Roslyn', 'Rebecca', 'Rhianna', 'Robyn', 'Rose', 'Ruby', 'Ruth', 'Sam', 'Sophie', 'Sarah', 'Sabrina', 'Sacha', 'Sophia', 'Samantha', 'Scarlett', 'Sandra', 'Sofia', 'Sasha', 'Savannah', 'Sally', 'Sandi', 'Sara', 'Selena', 'Shanna', 'Shannon', 'Sharon', 'Shauna', 'Shiela', 'Shirley', 'Stacey', 'Stephanie', 'Susan', 'Sue', 'Summer', 'Suzanne', 'Tamara', 'Tammy', 'Tara', 'Tayler', 'Tina', 'Tori', 'Toni', 'Tracey', 'Teresa', 'Theresa', 'Tiffany', 'Trish', 'Vanessa', 'Victoria', 'Vanessa', 'Veronica', 'Vicki', 'Valerie', 'Vicky', 'Wendy', 'Yasmin', 'Yvonne', 'Zara', 'Zahra', 'Zoe'];

const firstName = ['Adam', 'Aaron', 'Alexander', 'Andrew', 'Arthur', 'Abraham', 'Adrian', 'Aiden', 'Abdul', 'Alfred', 'Alfie', 'Ash', 'Benjamin', 'Baxter', 'Bernard', 'Billy', 'Blair', 'Bruce', 'Bert', 'Blake', 'Barry', 'Ben', 'Christopher', 'Chris', 'Charles', 'Charlie', 'Cory', 'Connor', 'Callan', 'Caleb', 'Cameron', 'Calvin', 'Callum', 'Calum', 'Casper', 'Craig', 'Carter', 'David', 'Darren', 'Daniel', 'Danny', 'Dominic', 'Dale', 'Damian', 'Dan', 'Danny', 'Darnell', 'Dave', 'Darryl', 'Daryl', 'Dean', 'Declan', 'Denis', 'Drew', 'Douglas', 'Ethan', 'Ed', 'Eddy', 'Erwin', 'Edmond', 'Edward', 'Elliot', 'Ellis', 'Emanuel', 'Ezekiel', 'Eric', 'Ernist', 'Euan', 'Eugene', 'Evan', 'Ewan', 'Ezra', 'Elijah', 'Fanian', 'Findlay', 'Felix', 'Fernando', 'Fred', 'Finn', 'Fletcher', 'Floyd', 'Francis', 'Frank', 'Franklin', 'Fraser', 'Fredrick', 'Gabrial', 'Gabriel', 'Gareth', 'Garry', 'Gary', 'Gavin', 'Geoffrey', 'Gerald', 'George', 'Gerry', 'Gilbert', 'Gino', 'Glen', 'Gordon', 'Graham', 'Grant', 'Greg', 'Graeme', 'Gregor', 'Gus', 'Harry', 'Henry', 'Hadyn', 'Hamish', 'Hamza', 'Haris', 'Harold', 'Harvey', 'Hugh', 'Iain', 'Ian', 'Idris', 'Igor', 'Imran', 'Irfan', 'Isaac', 'Isaiah', 'Jack', 'Jacob', 'Jackson', 'Jayden', 'Jamie', 'Jake', 'Jamal', 'James', 'John', 'Johnathan', 'Jarvis', 'Jason', 'Jasper', 'Jax', 'Jordan', 'Josh', 'Joshua', 'Joseph', 'Kyle', 'Kevin', 'Kai', 'Kian', 'Kane', 'Kaiden', 'Kalvin', 'Karl', 'Liam', 'Logan', 'Lachlan', 'Lance', 'Larry', 'Lars', 'Laurance', 'Lee', 'Leon', 'Leo', 'Leonard', 'Lenny', 'Lewis', 'Lincoln', 'Logan', 'Levi', 'Louis', 'Luca', 'Lucas', 'Luke', 'Michael', 'Mike', 'Max', 'Matthew', 'Mac', 'Mackenzie', 'Malcolm', 'Mark', 'Marc', 'Malik', 'Manuel', 'Mario', 'Marcus', 'Markus', 'Marty', 'Morty', 'Marshall', 'Martin', 'Martyn', 'Mason', 'Matt', 'Max', 'Maurice', 'Noah', 'Nathan', 'Nate', 'Nathanael', 'Neil', 'Nial', 'Nick', 'Nicky', 'Nicholas', 'Nigel', 'Nico', 'Nolan', 'Oliver', 'Odin', 'Oli', 'Olaf', 'Omar', 'Oscar', 'Otis', 'Otto', 'Owan', 'Ozzy', 'Owen', 'Peter', 'Patrick', 'Pablo', 'Paddy', 'Parker', 'Paul', 'Percy', 'Pete', 'Perry', 'Pedro', 'Paulo', 'Pharrell', 'Phillip', 'Philip', 'Pierce', 'Prince', 'Quinn', 'Riley', 'Ralf', 'Ralph', 'Regan', 'Reese', 'Reid', 'Reiley', 'Reilly', 'Reis', 'Reiss', 'Rex', 'Reuban', 'Rhys', 'Richard', 'Ricardo', 'Robert', 'Robbie', 'Rob', 'Roberto', 'Ragnar', 'Rodger', 'Roland', 'Roman', 'Romeo', 'Ronald', 'Ron', 'Ronan', 'Ronnie', 'Ross', 'Roy', 'Ruari', 'Rupert', 'Russell', 'Ryan', 'Ryhs', 'Rory', 'Samuel', 'Sam', 'Simon', 'Stephen', 'Steven', 'Samson', 'Scott', 'Sean', 'Shaun', 'Sebastian', 'Shane', 'Shay', 'Spencer', 'Stan', 'Stanley', 'Stevie', 'Stewart', 'Stirling', 'Stuart', 'Tom', 'Thomas', 'Ted', 'Teddie', 'Terrance', 'Terry', 'Theo', 'Theodore', 'Thor', 'Tim', 'Timmy', 'Toby', 'Todd', 'Tony', 'Travis', 'Trevor', 'Triston', 'Troy', 'Tucker', 'Taylor', 'Tyler', 'Tyrell', 'Tyresse', 'Tyrone', 'Tyson', 'Umar', 'Usman', 'Victor', 'Vaughn', 'Viktor', 'Vince', 'Vincent', 'Vinnie', 'William', 'Wade', 'Waltee', 'Warren', 'Wayne', 'Wilfred', 'Winston', 'Xavier', 'Yanis', 'Zak', 'Zac', 'Zach', 'Zaine', 'Amelia', 'Anne', 'Adele', 'Antonia', 'Ashleigh', 'Abby', 'Abbigail', 'Alice', 'Alicia', 'Amber', 'Adelle', 'Aileen', 'Aiesha', 'Amy', 'Aimee', 'Alanna', 'Alexandra', 'Alexa', 'Alisa', 'Alison', 'Amanda', 'Anna', 'Arial', 'Bethany', 'Beth', 'Bryony', 'Bailey', 'Becky', 'Bella', 'Becca', 'Belle', 'Barbara', 'Brenda', 'Britany', 'Brooke', 'Caitlin', 'Clara', 'Carla', 'Carly', 'Charlie', 'Caroline', 'Catherine', 'Catrina', 'Cheryl', 'Chanelle', 'Candice', 'Chantelle', 'Charlotte', 'Chloe', 'Christina', 'Ciara', 'Claire', 'Carmel', 'Carol', 'Caroline', 'Carolyn', 'Crystal',  'Chantelle', 'Dianna', 'Danni', 'Donna', 'Danielle', 'Dawn', 'Daisey', 'Deborah', 'Denise', 'Dionne', 'Dianne', 'Dominique', 'Elaine', 'Elle', 'Ellie', 'Elspeth', 'Eva', 'Emma', 'Edith', 'Eileen', 'Eleonor', 'Erin', 'Elizabeth', 'Ellen', 'Ellie', 'Emily', 'Faith', 'Felecia', 'Fiona', 'Florence', 'Francesca', 'Grace', 'Gabrielle', 'Gabriella', 'Gemma', 'Grace', 'Gwen', 'Gail', 'Georgia', 'Gillian', 'Hailey', 'Holly', 'Hollie', 'Hannah', 'Harriet', 'Heather', 'Helen', 'Hazel', 'Heidi', 'Hope', 'Imogen', 'Irene', 'Isla', 'Ingreid', 'Isobel', 'Jocelyn', 'Jackie', 'Jade', 'Jodie', 'Jasmin', 'Janet', 'Joyce', 'Joy', 'Jemma', 'Jane', 'Janice', 'Jeanette', 'Jean', 'Jenny', 'Julie', 'Joan', 'Jennifer', 'Jessica', 'Joanne', 'Jody', 'Jordyn', 'Judith', 'Julia', 'Juliana', 'Jaqueline', 'Kelly', 'Kim', 'Kerry', 'Kylie', 'Kaitlin', 'Kaleigh', 'Kamila', 'Kiera', 'Kayleigh', 'Kelsey', 'Kimberley', 'Karen', 'Karina', 'Kate', 'Katie', 'Kendra', 'Kirsty', 'Kirsten', 'Lucy', 'Laura', 'Lauren', 'Lauryn', 'Leanne', 'Laurie', 'Leah', 'Lisa', 'Leah', 'Leana', 'Leigh', 'Leona', 'Lori', 'Lesley', 'Lexi', 'Linda', 'Lyndsey', 'Louis', 'Layla', 'Lorna', 'Lydia', 'Lynsey', 'Lidia', 'Lilly', 'Lindsey', 'Lorraine', 'Louise', 'Lynn', 'Maria', 'Margaret', 'Maddison', 'Maggie', 'Mandy', 'Molly', 'Morag', 'Myra', 'Marie', 'Mary-Ann', 'Melanie', 'Melinda', 'Melissa', 'Mhairi', 'Madaline', 'Megan', 'Mollie', 'Michelle', 'Nicola', 'Nikki', 'Nadine', 'Neve', 'Nicole', 'Niamh', 'Maomi', 'Nancy', 'Natalie', 'Natalia', 'Natasha', 'Olivia', 'Poppy', 'Pam', 'Pamela', 'Paige', 'Patricia', 'Pauline', 'Phoebe', 'Penny', 'Polly', 'Poppy', 'Rosie', 'Rachel', 'Rachael', 'Roslyn', 'Rebecca', 'Rhianna', 'Robyn', 'Rose', 'Ruby', 'Ruth', 'Sam', 'Sophie', 'Sarah', 'Sabrina', 'Sacha', 'Sophia', 'Samantha', 'Scarlett', 'Sandra', 'Sofia', 'Sasha', 'Savannah', 'Sally', 'Sandi', 'Sara', 'Selena', 'Shanna', 'Shannon', 'Sharon', 'Shauna', 'Shiela', 'Shirley', 'Stacey', 'Stephanie', 'Susan', 'Sue', 'Summer', 'Suzanne', 'Tamara', 'Tammy', 'Tara', 'Tayler', 'Tina', 'Tori', 'Toni', 'Tracey', 'Teresa', 'Theresa', 'Tiffany', 'Trish', 'Vanessa', 'Victoria', 'Vanessa', 'Veronica', 'Vicki', 'Valerie', 'Vicky', 'Wendy', 'Yasmin', 'Yvonne', 'Zara', 'Zahra', 'Zoe']

const surname = ['Smith', 'Johnson', 'Williams', 'Jones', 'Garcia', 'Miller', 'David', 'Rodriguez', 'Martinez', 'Wilson', 'Anderson', 'Thomas', 'Tayler', 'Moore', 'Martin', 'Harris', 'Sanchez', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Forbes', 'Green', 'White', 'Black', 'Adams', 'MacDonald', 'McDonald', 'Dunn', 'Nelson', 'Baker', 'Hall', 'Campbell', 'Mitchell', 'Richardson', 'Brown', 'Turner', 'Diaz', 'Edwards', 'Collins', 'Stewart', 'Robertson', 'Murphy', 'Morris', 'Cook', 'Rogers', 'Cooper', 'Reed', 'Reid', 'Ward', 'Wood', 'Benne', 'Gray', 'Grey', 'Hughes', 'Prince', 'Sanders', 'Long', 'Foster', 'Taylor', 'Lee', 'Thompson', 'Jackson', 'Clarke', 'Knight', 'Fletcher', 'Wheeler', 'Chapman', 'Baxter', 'Lister', 'Tait', 'Davies', 'Fitz', 'Shaw', 'Townsend', 'Hill', 'Stevenson', 'Davidson', 'Richards', 'Calder', 'Clifford', 'Brooks', 'Watson', 'Payne', 'Burton', 'McLean', 'Macleod', 'Banks', 'Hynd', 'Kerr', 'Murray', 'Simpson', 'Clark', 'Pearce', 'Evans', 'McCarthy', 'Henderson', 'Rose',  'Walls', 'Hart', 'O\'Neill', 'McGowan', 'Patterson', 'Combs', 'Ramsey', 'Norton', 'Norman', 'Atkins', 'Shepherd', 'Parsons', 'Thornton', 'Birch', 'Oak', 'Marshall', 'O\'Connor', 'Rowe', 'Gregory', 'Kennedy', 'O\'Donnell', 'Phillips', 'Specter', 'Pearson', 'Benjamin', 'Ritchie', 'Rettie', 'Armstrong', 'Jamieson', 'Gibson', 'Cunningham', 'McGregor', 'Hay', 'McNab', 'Samson', 'Hancock', 'Haynes', 'Waters', 'West', 'Todd', 'Lloyd', 'Archer', 'Dawson', 'O\'Sullivan', 'Barber', 'Jennings', 'Lane', 'Wilkins', 'Middleton', 'Barnett', 'Robson', 'Briggs', 'Whitehouse', 'Reeves', 'Carpenter', 'Griffin', 'Hope', 'Newman', 'Fitzgerald', 'May', 'Holden', 'Bruce', 'Gould', 'Holland', 'Woodward', 'Bell', 'Poole', 'Day', 'Bird', 'Skinner', 'Watts', 'Holmes', 'Thorpe', 'Saunders', 'Kemp', 'Spencer', 'Vaughn', 'Simmons', 'Dixon', 'Duncan', 'Hunter', 'Slater', 'Davison', 'Welch', 'Clements', 'Wilkinson', 'Heath', 'Farrell', 'Abbott', 'Dyer', 'Rahmam', 'Gallagher', 'O\'Brien', 'Rice', 'Bates', 'Gordon', 'Bryant', 'Bray', 'Peacock', 'Dodd', 'Hilton', 'Sims', 'Page', 'Winter', 'Harrison', 'Davey', 'Marsden', 'Jenkins', 'Wallace', 'Little', 'Hannah', 'Howell', 'Farmer', 'Austin', 'Bradshaw', 'Henry', 'Elliot', 'Sanderson', 'Benson', 'Weston', 'Peters', 'Hobbs', 'Iqbal', 'Barker', 'Williamson', 'Atkinson', "Hutchinson", 'Sharp', 'Swift', 'Coates', 'Burns', 'Tomlinson', 'Cole', 'Fuller', 'Lees', 'Potter', 'Howard', 'Nash', 'Lamb', 'Manning', 'Duffy', 'Parker', 'Wells', 'McKenzie', 'MacKenzie', 'Browne', 'Houghton', 'Bolton', 'Nicholls', 'Harding', 'Warner', 'Marsh', 'Stephenson', 'Mellor', 'Chadwick', 'Wall', 'Bond', 'Kelly', 'Owens', 'Yates', 'Holloway', 'Bailey', 'Hartley', 'Glover', 'Webb', 'Sutton', 'Pollard', 'Baldwin', 'Bennett', 'Kirby', 'Stanley', 'Smart', 'Pepper', 'McColl', 'Greene', 'Cruickshank', 'Cosgrove', 'Ramsay', 'McCluskey', 'Cassells', 'Hume', 'Gent', 'Stiles', 'Christie', 'McKinnon', 'Pringle', 'McNab', 'Stokes', 'Field', 'Patel', 'Ross', 'Donnelly', 'Lambert', 'Gibbons', 'Jordan', 'Freeman', 'Burrows', 'Jarvis', 'Lynch', 'Craig', 'Parkes', 'Doyle', 'Rhodes', 'Ferguson', 'Ashton', 'Wyatt', 'Rowley', 'Hunt', 'Law', 'Holden', 'Turnbull', 'Preston', 'Newton', 'Hargreaves', 'Berry', 'Lyons', 'Fry', 'Powell', 'Carr', 'Sharpe', 'Schofield', 'Hawkins', 'Knowles', 'Reynolds', 'Butcher', 'Osbourne', 'Crawford', 'Faulkner', 'Burke', 'Pickering', 'Flynn', 'Fleming', 'Vincent', 'Noble', 'Kaur', 'Kirk', 'Greenwood', 'Webster', 'Kent', 'Quin', 'Hyde', 'Parkinson', 'Graham', 'Gardiner', 'Sinclair', 'Metcalfe', 'Welche', 'Morton', 'Ellis', 'Hanson', 'Cartwright', 'Sheppard', 'Tucker', 'Short', 'Carter', 'Hurst', 'Hicks', 'Russell', 'Dickson', 'Stone', 'Bull', 'Matthews', 'Walton', 'Buckley', 'Finch', 'Khan', 'Brent', 'Fairley', 'Deans', 'Blyth', 'Morrison', 'McKee', 'Brock', 'Dunlop', 'Hardy', 'Ball', 'MeKenna', 'McKendrick','Roland', 'Devine', 'Pollock', 'Snow', 'Witcher', 'Glassford', 'Gillett', 'McKie', 'Purdie', 'Lucas', 'McGinty', 'Quinn', 'Blackburn', 'MacLachlan', 'MacKay', 'Fitzpatrick', 'Mills', 'Sweeney', 'Harte', 'Malik', 'McLennan', 'O\Connoll', 'Frost', 'Goodman', 'Nightingale', 'Moss', 'Bradford', 'MacInnes', 'Urban', 'Lowe', 'Whyte', 'Milne', 'MacNeil', 'McNeill', 'Flemming', 'Roberts', 'Fowler', 'McLaren', 'Clancy', 'Kim', 'Hogg', 'MacManus', 'Frankson', 'McCusker', 'Johnston', 'McPherson','Hodges', 'Ralston', 'MacGregor', 'Pettigrew', 'Hendry', 'Gilmour', 'Robins', 'Orr', 'Forrest', 'Sutherland', 'Lasky', 'Halsey', 'Thorne', 'Mendez', 'Ramos', 'Tanaka', 'Locke', 'Cutter',  'Keyes', 'Hood', 'Sullivan', 'Hendley', 'Vale', 'Demarco', 'Roland', 'Palmer', 'Vickers', 'Kellogg', 'Markle', 'Chang', 'Hooper', 'Park', 'Munro', 'McCormack', 'Doherty', 'Cavanagh', 'Gunn', 'Higgins', 'Curtis', 'Swan', 'Peck', 'Ahmed', 'Maxwell', 'Lennon', 'Barrett', 'Irvine', 'Dalgleish', 'McMillan', 'Somerville', 'Grierson', 'Malone', 'Dale', 'Cochran', 'McFarlane', 'Mann', 'McFazdean', 'Dean', 'Cox', 'Goodfellow', 'Whitmore', 'Muir', 'Hopkins', 'Dudley', 'Larson', 'MacRoberts', 'Langley', 'Muirhead', 'McDowell', 'MacAndrew', 'Ashford', 'Hamlin', 'McGill', 'Gately', 'Salmon', 'Harwood', 'Osborne', 'Wessing', 'Mason', 'MacFarlane', 'Hawthorn', 'Hemlock', 'Sycamore', 'Pine', 'Juniper', 'Elm', 'Whitebeam', 'Cedar', 'Aspen', 'Ash', 'Walnut', 'Willow', 'Cherry', 'Halford', 'Hardie', 'Smalls', 'Herd', 'Sterling', 'Lewin', 'Maguire', 'Watkins', 'Delaney', 'Poulson', 'Braithwaite', 'Christensan', 'Rafferty', 'Schwarz', 'Ketchum', 'Rowan', 'Brannigan', 'Rodríguez', 'Farnsworth', 'Conrad', 'Wong', 'Wernstrom', 'Nixon', 'Tate', 'McDougall', 'Abbett', 'Abrahams', 'Accord', 'Ackerman', 'Addington', 'Grimes', 'Colman', 'Siggard', 'Peletier', 'Morales', 'Jenner', 'Kutner', 'Foreman', 'Chase', 'Penn', 'Laurie', 'Jacoboson', 'Wilde', 'Dutton', 'McQueen', 'Durst', 'Alderson', 'Wellick', 'Cortez', 'Moss', 'Price', 'Goddard', 'Trenton', 'Goodwin', 'Reynolds', 'McIntyre', 'Healy', 'Patel', 'Flores', 'Nottingham', 'Whitaker', 'Walsh', 'Moreland', 'Fulton', 'Halpert', 'Vickers', 'Carell', 'Novak', 'Hannon', 'Sabre', 'Deluca', 'McKidd', 'Dempsey', 'Webber', 'Altman', 'Avery', 'Kepner', 'Riggs', 'Hahn', 'Chambers', 'Stevens', 'Robbins', 'Torres', 'Sloan', 'O\Malley', 'Schmitt', 'McDonnell', 'Spalding', 'Herrmann', 'Helm', 'Harper', 'Montgomery', 'Hutchison', 'Klein', 'Hutchins', 'Morgan', 'Kirkwood', 'Shelby', 'Solomans', 'Stark', 'Gold', 'Changretta', 'Bryne', 'Kimber', 'Boswell', 'Chaplin', 'MacMillan', 'Devlin', 'Strong', 'Fenton', 'McCumisky', 'McAnulty', 'Boyle', 'Maclean', 'Douglas', 'Donaldson', 'Santiago', 'Riley', 'Woods', 'MacTavish', 'Bowman', 'Booth', 'Coen', 'Foley', 'Valentia', 'Griggs', 'Ingram', 'Koopman', 'Markhov', 'McLaughlin', 'O\Leary', 'Ramirez', 'Rivers', 'Rutherford', 'Schmitt', 'Sumners', 'Marek', 'Wade', 'Weaver'];

// TODO HEADING GENERATE NAME FUNCTIONS

// TODO HEADING Generate firstName
function getFirstName() {
    return Math.floor(Math.random() * firstName.length);
}
console.log(getFirstName());

// TODO HEADING Generate Male Name
function getMaleName() {
    return Math.floor(Math.random() * maleName.length);
}
console.log(getMaleName());

// TODO HEADING Generate Female Name
function getFemaleName() {
    return Math.floor(Math.random() * femaleName.length);
}
console.log(getFemaleName());

//TODO HEADING Generate Surname
function getSurname() {
    return Math.floor(Math.random() * surname.length);
}
console.log(getSurname());

// TODO HEADING Variables for random names
const generatedFirstName = getFirstName();
console.log(generatedFirstName);

const generatedSurname = getSurname();
console.log(generatedSurname);

// TODO HEADING Change text box value to display function result
function generateName() {
    document.getElementById("fullname").value = firstName[generatedFirstName] + " " + surname[generatedSurname];
}

console.log("firstNames: " + firstName.length); // Output = 619
console.log("surname: " + surname.length); // Output = 635


// TODO HEADING NUMBERS


// TODO HEADING Test Number Generator
function getRndInteger1(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateNumber1() {
    document.getElementById('anothernumber').value = getRndInteger1(0,1000);
}

// TODO HEADING Copy button - Numers

function copynumber() {
    var copyText = document.getElementById("anothernumber");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }

// TODO HEADING Copy button - Name

function copyname() {
    var copyText = document.getElementById("fullname");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }


  // TODO HEADING Number function

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min; 
// }

// function generateNumber() {
//     document.getElementById('anothernumber').value = getRndInteger(0,10);
// }

// TODO HEADING Password Generator

// 1, i, l, 0, o removed (incl. caps) to avoid confusion between each other

function generatePassword(length) {
    var result           = '';
    var characters       = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const password = generatePassword(12);
console.log(password);

function assignValue() {
  document.getElementById("generatedPassword").value = password;
}

function copypassword() {
    var copyText = document.getElementById("generatedPassword");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }