//TODO Names (array of name values and functions to select random value)

const maleName = ['Adam', 'Aaron', 'Alexander', 'Andrew', 'Arthur', 'Abraham', 'Adrian', 'Aiden', 'Abdul', 'Alfred', 'Alfie', 'Ash', 'Anthony', 'Axel', 'Archer', 'Allan', 'Allen', 'Alistair', 'Arnold', 'Amelio', 'Benjamin', 'Baxter', 'Bernard', 'Billy', 'Blair', 'Bruce', 'Bert', 'Blake', 'Barry', 'Ben', 'Bob', 'Brent', 'Brock', 'Bryan', 'Christopher', 'Chris', 'Charles', 'Charlie', 'Cory', 'Connor', 'Callan', 'Caleb', 'Cameron', 'Calvin', 'Callum', 'Calum', 'Casper', 'Craig', 'Carter', 'Cedric', 'Chad', 'Clive', 'Cliff', 'David', 'Darren', 'Daniel', 'Danny', 'Dominic', 'Dale', 'Damian', 'Dan', 'Danny', 'Darnell', 'Dave', 'Darryl', 'Daryl', 'Dean', 'Declan', 'Denis', 'Drew', 'Douglas', 'Ethan', 'Ed', 'Edd', 'Edgar', 'Eddy', 'Erwin', 'Edmond', 'Edward', 'Elliot', 'Ellis', 'Emanuel', 'Ezekiel', 'Eric', 'Ernist', 'Euan', 'Eugene', 'Evan', 'Ewan', 'Ezra', 'Elijah', 'Erwin', 'Flynt', 'Fanian', 'Findlay', 'Felix', 'Fernando', 'Fred', 'Finn', 'Fletcher', 'Floyd', 'Francis', 'Frank', 'Franklin', 'Fraser', 'Fredrick', 'Fry', 'Gabrial', 'Gabriel', 'Gareth', 'Garry', 'Gary', 'Gavin', 'Geoffrey', 'Gerald', 'George', 'Gerry', 'Gilbert', 'Gino', 'Glen', 'Gordon', 'Graham', 'Grant', 'Greg', 'Graeme', 'Gregor', 'Gus', 'Gregory', 'Harry', 'Henry', 'Hadyn', 'Hamish', 'Hamza', 'Haris', 'Harold', 'Harvey', 'Hugh', 'Iain', 'Ian', 'Idris', 'Igor', 'Imran', 'Irfan', 'Isaac', 'Isaiah', 'Jack', 'Jacob', 'Jackson', 'Jayden', 'Jamie', 'Jake', 'Jamal', 'James', 'John', 'Johnathan', 'Jarvis', 'Jason', 'Jasper', 'Jax', 'Jordan', 'Josh', 'Joshua', 'Joseph', 'Kyle', 'Kevin', 'Kai', 'Kian', 'Kane', 'Kaiden', 'Kalvin', 'Karl', 'Liam', 'Logan', 'Lachlan', 'Lance', 'Larry', 'Lars', 'Laurance', 'Lee', 'Leon', 'Leo', 'Leonard', 'Lenny', 'Lewis', 'Lincoln', 'Logan', 'Levi', 'Louis', 'Luca', 'Lucas', 'Luke', 'Michael', 'Mike', 'Max', 'Matthew', 'Mac', 'Mackenzie', 'Malcolm', 'Mark', 'Marc', 'Malik', 'Manuel', 'Mario', 'Marcus', 'Markus', 'Marty', 'Morty', 'Marshall', 'Martin', 'Martyn', 'Mason', 'Matt', 'Max', 'Maurice', 'Noah', 'Nathan', 'Nate', 'Nathanael', 'Neil', 'Nial', 'Nick', 'Nicky', 'Nicholas', 'Nigel', 'Nico', 'Nolan', 'Oliver', 'Odin', 'Oli', 'Olaf', 'Omar', 'Oscar', 'Otis', 'Otto', 'Owan', 'Ozzy', 'Owen', 'Peter', 'Patrick', 'Pablo', 'Paddy', 'Parker', 'Paul', 'Percy', 'Pete', 'Perry', 'Pedro', 'Paulo', 'Pharrell', 'Phillip', 'Philip', 'Pierce', 'Prince', 'Quinn', 'Riley', 'Ralf', 'Ralph', 'Regan', 'Reese', 'Reid', 'Reiley', 'Reilly', 'Reis', 'Reiss', 'Rex', 'Reuban', 'Rhys', 'Richard', 'Ricardo', 'Robert', 'Robbie', 'Rob', 'Roberto', 'Ragnar', 'Rodger', 'Roland', 'Roman', 'Romeo', 'Ronald', 'Ron', 'Ronan', 'Ronnie', 'Ross', 'Roy', 'Ruari', 'Rupert', 'Russell', 'Ryan', 'Ryhs', 'Rory', 'Samuel', 'Sam', 'Simon', 'Stephen', 'Steven', 'Samson', 'Scott', 'Sean', 'Shaun', 'Sebastian', 'Shane', 'Shay', 'Spencer', 'Stan', 'Stanley', 'Stevie', 'Stewart', 'Stirling', 'Stuart', 'Tom', 'Thomas', 'Ted', 'Teddie', 'Terrance', 'Terry', 'Theo', 'Theodore', 'Thor', 'Tim', 'Timmy', 'Toby', 'Todd', 'Tony', 'Travis', 'Trevor', 'Triston', 'Troy', 'Tucker', 'Taylor', 'Tyler', 'Tyrell', 'Tyresse', 'Tyrone', 'Tyson', 'Umar', 'Usman', 'Victor', 'Vaughn', 'Viktor', 'Vince', 'Vincent', 'Vinnie', 'William', 'Wade', 'Walter', 'Warren', 'Wayne', 'Wilfred', 'Winston', 'Xavier', 'Yanis', 'Zak', 'Zac', 'Zach', 'Zaine'];

const femaleName = ['Amelia', 'Anne', 'Adele', 'Antonia', 'Ashleigh', 'Abby', 'Abbigail', 'Alice', 'Alicia', 'Amber', 'Adelle', 'Aileen', 'Aiesha', 'Amy', 'Aimee', 'Alanna', 'Alexandra', 'Alexa', 'Alisa', 'Alison', 'Amanda', 'Anna', 'Arial', 'Bethany', 'Beth', 'Bryony', 'Bailey', 'Becky', 'Bella', 'Becca', 'Belle', 'Barbara', 'Brenda', 'Britany', 'Brooke', 'Caitlin', 'Clara', 'Carla', 'Carly', 'Charlie', 'Caroline', 'Catherine', 'Catrina', 'Cheryl', 'Chanelle', 'Candice', 'Chantelle', 'Charlotte', 'Chloe', 'Christina', 'Ciara', 'Claire', 'Carmel', 'Carol', 'Caroline', 'Carolyn', 'Crystal',  'Chantelle', 'Dianna', 'Danni', 'Donna', 'Danielle', 'Dawn', 'Daisey', 'Deborah', 'Denise', 'Dionne', 'Dianne', 'Dominique', 'Elaine', 'Elle', 'Ellie', 'Elspeth', 'Eva', 'Emma', 'Edith', 'Eileen', 'Eleonor', 'Erin', 'Elizabeth', 'Ellen', 'Ellie', 'Emily', 'Faith', 'Felecia', 'Fiona', 'Florence', 'Francesca', 'Grace', 'Gabrielle', 'Gabriella', 'Gemma', 'Grace', 'Gwen', 'Gail', 'Georgia', 'Gillian', 'Hailey', 'Holly', 'Hollie', 'Hannah', 'Harriet', 'Heather', 'Helen', 'Hazel', 'Heidi', 'Hope', 'Imogen', 'Irene', 'Isla', 'Ingreid', 'Isobel', 'Jocelyn', 'Jackie', 'Jade', 'Jodie', 'Jasmin', 'Janet', 'Joyce', 'Joy', 'Jemma', 'Jane', 'Janice', 'Jeanette', 'Jean', 'Jenny', 'Julie', 'Joan', 'Jennifer', 'Jessica', 'Joanne', 'Jody', 'Jordyn', 'Judith', 'Julia', 'Juliana', 'Jaqueline', 'Kelly', 'Kim', 'Kerry', 'Kylie', 'Kaitlin', 'Kaleigh', 'Kamila', 'Kiera', 'Kayleigh', 'Kelsey', 'Kimberley', 'Karen', 'Karina', 'Kate', 'Katie', 'Kendra', 'Kirsty', 'Kirsten', 'Lucy', 'Laura', 'Lauren', 'Lauryn', 'Leanne', 'Laurie', 'Leah', 'Lisa', 'Leah', 'Leana', 'Leigh', 'Leona', 'Lori', 'Lesley', 'Lexi', 'Linda', 'Lyndsey', 'Louis', 'Layla', 'Lorna', 'Lydia', 'Lynsey', 'Lidia', 'Lilly', 'Lindsey', 'Lorraine', 'Louise', 'Lynn', 'Maria', 'Margaret', 'Maddison', 'Maggie', 'Mandy', 'Molly', 'Morag', 'Myra', 'Marie', 'Mary-Ann', 'Melanie', 'Melinda', 'Melissa', 'Mhairi', 'Madaline', 'Megan', 'Mollie', 'Michelle', 'Nicola', 'Nikki', 'Nadine', 'Neve', 'Nicole', 'Niamh', 'Maomi', 'Nancy', 'Natalie', 'Natalia', 'Natasha', 'Olivia', 'Poppy', 'Pam', 'Pamela', 'Paige', 'Patricia', 'Pauline', 'Phoebe', 'Penny', 'Polly', 'Poppy', 'Rosie', 'Rachel', 'Rachael', 'Roslyn', 'Rebecca', 'Rhianna', 'Robyn', 'Rose', 'Ruby', 'Ruth', 'Sam', 'Sophie', 'Sarah', 'Sabrina', 'Sacha', 'Sophia', 'Samantha', 'Scarlett', 'Sandra', 'Sofia', 'Sasha', 'Savannah', 'Sally', 'Sandi', 'Sara', 'Selena', 'Shanna', 'Shannon', 'Sharon', 'Shauna', 'Shiela', 'Shirley', 'Stacey', 'Stephanie', 'Susan', 'Sue', 'Summer', 'Suzanne', 'Siobhan', 'Tamara', 'Tammy', 'Tara', 'Tayler', 'Tina', 'Tori', 'Toni', 'Tracey', 'Teresa', 'Theresa', 'Tiffany', 'Trish', 'Vanessa', 'Victoria', 'Vanessa', 'Veronica', 'Vicki', 'Valerie', 'Vicky', 'Wendy', 'Yasmin', 'Yvonne', 'Zara', 'Zahra', 'Zoe'];

const firstName = ['Adam', 'Aaron', 'Alexander', 'Andrew', 'Arthur', 'Abraham', 'Adrian', 'Aiden', 'Abdul', 'Alfred', 'Alfie', 'Ash', 'Anthony', 'Axel', 'Archer', 'Allan', 'Allen', 'Alistair', 'Arnold', 'Amelio', 'Benjamin', 'Baxter', 'Bernard', 'Billy', 'Blair', 'Bruce', 'Bert', 'Blake', 'Barry', 'Ben', 'Bob', 'Brent', 'Brock', 'Bryan', 'Christopher', 'Chris', 'Charles', 'Charlie', 'Cory', 'Connor', 'Callan', 'Caleb', 'Cameron', 'Calvin', 'Callum', 'Calum', 'Casper', 'Craig', 'Carter', 'Cedric', 'Chad', 'Clive', 'Cliff', 'David', 'Darren', 'Daniel', 'Danny', 'Dominic', 'Dale', 'Damian', 'Dan', 'Danny', 'Darnell', 'Dave', 'Darryl', 'Daryl', 'Dean', 'Declan', 'Denis', 'Drew', 'Douglas', 'Ethan', 'Ed', 'Edd', 'Edgar', 'Eddy', 'Erwin', 'Edmond', 'Edward', 'Elliot', 'Ellis', 'Emanuel', 'Ezekiel', 'Eric', 'Ernist', 'Euan', 'Eugene', 'Evan', 'Ewan', 'Ezra', 'Elijah', 'Erwin', 'Flynt', 'Fanian', 'Findlay', 'Felix', 'Fernando', 'Fred', 'Finn', 'Fletcher', 'Floyd', 'Francis', 'Frank', 'Franklin', 'Fraser', 'Fredrick', 'Fry', 'Gabrial', 'Gabriel', 'Gareth', 'Garry', 'Gary', 'Gavin', 'Geoffrey', 'Gerald', 'George', 'Gerry', 'Gilbert', 'Gino', 'Glen', 'Gordon', 'Graham', 'Grant', 'Greg', 'Graeme', 'Gregor', 'Gus', 'Gregory', 'Harry', 'Henry', 'Hadyn', 'Hamish', 'Hamza', 'Haris', 'Harold', 'Harvey', 'Hugh', 'Iain', 'Ian', 'Idris', 'Igor', 'Imran', 'Irfan', 'Isaac', 'Isaiah', 'Jack', 'Jacob', 'Jackson', 'Jayden', 'Jamie', 'Jake', 'Jamal', 'James', 'John', 'Johnathan', 'Jarvis', 'Jason', 'Jasper', 'Jax', 'Jordan', 'Josh', 'Joshua', 'Joseph', 'Kyle', 'Kevin', 'Kai', 'Kian', 'Kane', 'Kaiden', 'Kalvin', 'Karl', 'Liam', 'Logan', 'Lachlan', 'Lance', 'Larry', 'Lars', 'Laurance', 'Lee', 'Leon', 'Leo', 'Leonard', 'Lenny', 'Lewis', 'Lincoln', 'Logan', 'Levi', 'Louis', 'Luca', 'Lucas', 'Luke', 'Michael', 'Mike', 'Max', 'Matthew', 'Mac', 'Mackenzie', 'Malcolm', 'Mark', 'Marc', 'Malik', 'Manuel', 'Mario', 'Marcus', 'Markus', 'Marty', 'Morty', 'Marshall', 'Martin', 'Martyn', 'Mason', 'Matt', 'Max', 'Maurice', 'Noah', 'Nathan', 'Nate', 'Nathanael', 'Neil', 'Nial', 'Nick', 'Nicky', 'Nicholas', 'Nigel', 'Nico', 'Nolan', 'Oliver', 'Odin', 'Oli', 'Olaf', 'Omar', 'Oscar', 'Otis', 'Otto', 'Owan', 'Ozzy', 'Owen', 'Peter', 'Patrick', 'Pablo', 'Paddy', 'Parker', 'Paul', 'Percy', 'Pete', 'Perry', 'Pedro', 'Paulo', 'Pharrell', 'Phillip', 'Philip', 'Pierce', 'Prince', 'Quinn', 'Riley', 'Ralf', 'Ralph', 'Regan', 'Reese', 'Reid', 'Reiley', 'Reilly', 'Reis', 'Reiss', 'Rex', 'Reuban', 'Rhys', 'Richard', 'Ricardo', 'Robert', 'Robbie', 'Rob', 'Roberto', 'Ragnar', 'Rodger', 'Roland', 'Roman', 'Romeo', 'Ronald', 'Ron', 'Ronan', 'Ronnie', 'Ross', 'Roy', 'Ruari', 'Rupert', 'Russell', 'Ryan', 'Ryhs', 'Rory', 'Samuel', 'Sam', 'Simon', 'Stephen', 'Steven', 'Samson', 'Scott', 'Sean', 'Shaun', 'Sebastian', 'Shane', 'Shay', 'Spencer', 'Stan', 'Stanley', 'Stevie', 'Stewart', 'Stirling', 'Stuart', 'Tom', 'Thomas', 'Ted', 'Teddie', 'Terrance', 'Terry', 'Theo', 'Theodore', 'Thor', 'Tim', 'Timmy', 'Toby', 'Todd', 'Tony', 'Travis', 'Trevor', 'Triston', 'Troy', 'Tucker', 'Taylor', 'Tyler', 'Tyrell', 'Tyresse', 'Tyrone', 'Tyson', 'Umar', 'Usman', 'Victor', 'Vaughn', 'Viktor', 'Vince', 'Vincent', 'Vinnie', 'William', 'Wade', 'Walter', 'Warren', 'Wayne', 'Wilfred', 'Winston', 'Xavier', 'Yanis', 'Zak', 'Zac', 'Zach', 'Zaine', 'Amelia', 'Anne', 'Adele', 'Antonia', 'Ashleigh', 'Abby', 'Abbigail', 'Alice', 'Alicia', 'Amber', 'Adelle', 'Aileen', 'Aiesha', 'Amy', 'Aimee', 'Alanna', 'Alexandra', 'Alexa', 'Alisa', 'Alison', 'Amanda', 'Anna', 'Arial', 'Bethany', 'Beth', 'Bryony', 'Bailey', 'Becky', 'Bella', 'Becca', 'Belle', 'Barbara', 'Brenda', 'Britany', 'Brooke', 'Caitlin', 'Clara', 'Carla', 'Carly', 'Charlie', 'Caroline', 'Catherine', 'Catrina', 'Cheryl', 'Chanelle', 'Candice', 'Chantelle', 'Charlotte', 'Chloe', 'Christina', 'Ciara', 'Claire', 'Carmel', 'Carol', 'Caroline', 'Carolyn', 'Crystal',  'Chantelle', 'Dianna', 'Danni', 'Donna', 'Danielle', 'Dawn', 'Daisey', 'Deborah', 'Denise', 'Dionne', 'Dianne', 'Dominique', 'Elaine', 'Elle', 'Ellie', 'Elspeth', 'Eva', 'Emma', 'Edith', 'Eileen', 'Eleonor', 'Erin', 'Elizabeth', 'Ellen', 'Ellie', 'Emily', 'Faith', 'Felecia', 'Fiona', 'Florence', 'Francesca', 'Grace', 'Gabrielle', 'Gabriella', 'Gemma', 'Grace', 'Gwen', 'Gail', 'Georgia', 'Gillian', 'Hailey', 'Holly', 'Hollie', 'Hannah', 'Harriet', 'Heather', 'Helen', 'Hazel', 'Heidi', 'Hope', 'Imogen', 'Irene', 'Isla', 'Ingreid', 'Isobel', 'Jocelyn', 'Jackie', 'Jade', 'Jodie', 'Jasmin', 'Janet', 'Joyce', 'Joy', 'Jemma', 'Jane', 'Janice', 'Jeanette', 'Jean', 'Jenny', 'Julie', 'Joan', 'Jennifer', 'Jessica', 'Joanne', 'Jody', 'Jordyn', 'Judith', 'Julia', 'Juliana', 'Jaqueline', 'Kelly', 'Kim', 'Kerry', 'Kylie', 'Kaitlin', 'Kaleigh', 'Kamila', 'Kiera', 'Kayleigh', 'Kelsey', 'Kimberley', 'Karen', 'Karina', 'Kate', 'Katie', 'Kendra', 'Kirsty', 'Kirsten', 'Lucy', 'Laura', 'Lauren', 'Lauryn', 'Leanne', 'Laurie', 'Leah', 'Lisa', 'Leah', 'Leana', 'Leigh', 'Leona', 'Lori', 'Lesley', 'Lexi', 'Linda', 'Lyndsey', 'Louis', 'Layla', 'Lorna', 'Lydia', 'Lynsey', 'Lidia', 'Lilly', 'Lindsey', 'Lorraine', 'Louise', 'Lynn', 'Maria', 'Margaret', 'Maddison', 'Maggie', 'Mandy', 'Molly', 'Morag', 'Myra', 'Marie', 'Mary-Ann', 'Melanie', 'Melinda', 'Melissa', 'Mhairi', 'Madaline', 'Megan', 'Mollie', 'Michelle', 'Nicola', 'Nikki', 'Nadine', 'Neve', 'Nicole', 'Niamh', 'Maomi', 'Nancy', 'Natalie', 'Natalia', 'Natasha', 'Olivia', 'Poppy', 'Pam', 'Pamela', 'Paige', 'Patricia', 'Pauline', 'Phoebe', 'Penny', 'Polly', 'Poppy', 'Rosie', 'Rachel', 'Rachael', 'Roslyn', 'Rebecca', 'Rhianna', 'Robyn', 'Rose', 'Ruby', 'Ruth', 'Sam', 'Sophie', 'Sarah', 'Sabrina', 'Sacha', 'Sophia', 'Samantha', 'Scarlett', 'Sandra', 'Sofia', 'Sasha', 'Savannah', 'Sally', 'Sandi', 'Sara', 'Selena', 'Shanna', 'Shannon', 'Sharon', 'Shauna', 'Shiela', 'Shirley', 'Stacey', 'Stephanie', 'Susan', 'Sue', 'Summer', 'Suzanne', 'Siobhan', 'Tamara', 'Tammy', 'Tara', 'Tayler', 'Tina', 'Tori', 'Toni', 'Tracey', 'Teresa', 'Theresa', 'Tiffany', 'Trish', 'Vanessa', 'Victoria', 'Vanessa', 'Veronica', 'Vicki', 'Valerie', 'Vicky', 'Wendy', 'Yasmin', 'Yvonne', 'Zara', 'Zahra', 'Zoe']

const surname = ['Smith', 'Johnson', 'Williams', 'Jones', 'Garcia', 'Miller', 'David', 'Rodriguez', 'Martinez', 'Wilson', 'Anderson', 'Thomas', 'Tayler', 'Moore', 'Martin', 'Harris', 'Sanchez', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Forbes', 'Green', 'White', 'Black', 'Adams', 'MacDonald', 'McDonald', 'Dunn', 'Nelson', 'Baker', 'Hall', 'Campbell', 'Mitchell', 'Richardson', 'Brown', 'Turner', 'Diaz', 'Edwards', 'Collins', 'Stewart', 'Robertson', 'Murphy', 'Morris', 'Cook', 'Rogers', 'Cooper', 'Reed', 'Reid', 'Ward', 'Wood', 'Benne', 'Gray', 'Grey', 'Hughes', 'Prince', 'Sanders', 'Long', 'Foster', 'Taylor', 'Lee', 'Thompson', 'Jackson', 'Clarke', 'Knight', 'Fletcher', 'Wheeler', 'Chapman', 'Baxter', 'Lister', 'Tait', 'Davies', 'Fitz', 'Shaw', 'Townsend', 'Hill', 'Stevenson', 'Davidson', 'Richards', 'Calder', 'Clifford', 'Brooks', 'Watson', 'Payne', 'Burton', 'McLean', 'Macleod', 'Banks', 'Hynd', 'Kerr', 'Murray', 'Simpson', 'Clark', 'Pearce', 'Evans', 'McCarthy', 'Henderson', 'Rose',  'Walls', 'Hart', 'O\'Neill', 'McGowan', 'Patterson', 'Combs', 'Ramsey', 'Norton', 'Norman', 'Atkins', 'Shepherd', 'Parsons', 'Thornton', 'Birch', 'Oak', 'Marshall', 'O\'Connor', 'Rowe', 'Gregory', 'Kennedy', 'O\'Donnell', 'Phillips', 'Specter', 'Pearson', 'Benjamin', 'Ritchie', 'Rettie', 'Armstrong', 'Jamieson', 'Gibson', 'Cunningham', 'McGregor', 'Hay', 'McNab', 'Samson', 'Hancock', 'Haynes', 'Waters', 'West', 'Todd', 'Lloyd', 'Archer', 'Dawson', 'O\'Sullivan', 'Barber', 'Jennings', 'Lane', 'Wilkins', 'Middleton', 'Barnett', 'Robson', 'Briggs', 'Whitehouse', 'Reeves', 'Carpenter', 'Griffin', 'Hope', 'Newman', 'Fitzgerald', 'May', 'Holden', 'Bruce', 'Gould', 'Holland', 'Woodward', 'Bell', 'Poole', 'Day', 'Bird', 'Skinner', 'Watts', 'Holmes', 'Thorpe', 'Saunders', 'Kemp', 'Spencer', 'Vaughn', 'Simmons', 'Dixon', 'Duncan', 'Hunter', 'Slater', 'Davison', 'Welch', 'Clements', 'Wilkinson', 'Heath', 'Farrell', 'Abbott', 'Dyer', 'Rahmam', 'Gallagher', 'O\'Brien', 'Rice', 'Bates', 'Gordon', 'Bryant', 'Bray', 'Peacock', 'Dodd', 'Hilton', 'Sims', 'Page', 'Winter', 'Harrison', 'Davey', 'Marsden', 'Jenkins', 'Wallace', 'Little', 'Hannah', 'Howell', 'Farmer', 'Austin', 'Bradshaw', 'Henry', 'Elliot', 'Sanderson', 'Benson', 'Weston', 'Peters', 'Hobbs', 'Iqbal', 'Barker', 'Williamson', 'Atkinson', "Hutchinson", 'Sharp', 'Swift', 'Coates', 'Burns', 'Tomlinson', 'Cole', 'Fuller', 'Lees', 'Potter', 'Howard', 'Nash', 'Lamb', 'Manning', 'Duffy', 'Parker', 'Wells', 'McKenzie', 'MacKenzie', 'Browne', 'Houghton', 'Bolton', 'Nicholls', 'Harding', 'Warner', 'Marsh', 'Stephenson', 'Mellor', 'Chadwick', 'Wall', 'Bond', 'Kelly', 'Owens', 'Yates', 'Holloway', 'Bailey', 'Hartley', 'Glover', 'Webb', 'Sutton', 'Pollard', 'Baldwin', 'Bennett', 'Kirby', 'Stanley', 'Smart', 'Pepper', 'McColl', 'Greene', 'Cruickshank', 'Cosgrove', 'Ramsay', 'McCluskey', 'Cassells', 'Hume', 'Gent', 'Stiles', 'Christie', 'McKinnon', 'Pringle', 'McNab', 'Stokes', 'Field', 'Patel', 'Ross', 'Donnelly', 'Lambert', 'Gibbons', 'Jordan', 'Freeman', 'Burrows', 'Jarvis', 'Lynch', 'Craig', 'Parkes', 'Doyle', 'Rhodes', 'Ferguson', 'Ashton', 'Wyatt', 'Rowley', 'Hunt', 'Law', 'Holden', 'Turnbull', 'Preston', 'Newton', 'Hargreaves', 'Berry', 'Lyons', 'Fry', 'Powell', 'Carr', 'Sharpe', 'Schofield', 'Hawkins', 'Knowles', 'Reynolds', 'Butcher', 'Osbourne', 'Crawford', 'Faulkner', 'Burke', 'Pickering', 'Flynn', 'Fleming', 'Vincent', 'Noble', 'Kaur', 'Kirk', 'Greenwood', 'Webster', 'Kent', 'Quin', 'Hyde', 'Parkinson', 'Graham', 'Gardiner', 'Sinclair', 'Metcalfe', 'Welche', 'Morton', 'Ellis', 'Hanson', 'Cartwright', 'Sheppard', 'Tucker', 'Short', 'Carter', 'Hurst', 'Hicks', 'Russell', 'Dickson', 'Stone', 'Bull', 'Matthews', 'Walton', 'Buckley', 'Finch', 'Khan', 'Brent', 'Fairley', 'Deans', 'Blyth', 'Morrison', 'McKee', 'Brock', 'Dunlop', 'Hardy', 'Ball', 'McKenna', 'McKendrick','Roland', 'Devine', 'Pollock', 'Snow', 'Witcher', 'Glassford', 'Gillett', 'McKie', 'Purdie', 'Lucas', 'McGinty', 'Quinn', 'Blackburn', 'MacLachlan', 'MacKay', 'Fitzpatrick', 'Mills', 'Sweeney', 'Harte', 'Malik', 'McLennan', 'O\Connoll', 'Frost', 'Goodman', 'Nightingale', 'Moss', 'Bradford', 'MacInnes', 'Urban', 'Lowe', 'Whyte', 'Milne', 'MacNeil', 'McNeill', 'Flemming', 'Roberts', 'Fowler', 'McLaren', 'Clancy', 'Kim', 'Hogg', 'MacManus', 'Frankson', 'McCusker', 'Johnston', 'McPherson','Hodges', 'Ralston', 'MacGregor', 'Pettigrew', 'Hendry', 'Gilmour', 'Robins', 'Orr', 'Forrest', 'Sutherland', 'Lasky', 'Halsey', 'Thorne', 'Mendez', 'Ramos', 'Tanaka', 'Locke', 'Cutter',  'Keyes', 'Hood', 'Sullivan', 'Hendley', 'Vale', 'Demarco', 'Roland', 'Palmer', 'Vickers', 'Kellogg', 'Markle', 'Chang', 'Hooper', 'Park', 'Munro', 'McCormack', 'Doherty', 'Cavanagh', 'Gunn', 'Higgins', 'Curtis', 'Swan', 'Peck', 'Ahmed', 'Maxwell', 'Lennon', 'Barrett', 'Irvine', 'Dalgleish', 'McMillan', 'Somerville', 'Grierson', 'Malone', 'Dale', 'Cochran', 'McFarlane', 'Mann', 'McFazdean', 'Dean', 'Cox', 'Goodfellow', 'Whitmore', 'Muir', 'Hopkins', 'Dudley', 'Larson', 'MacRoberts', 'Langley', 'Muirhead', 'McDowell', 'MacAndrew', 'Ashford', 'Hamlin', 'McGill', 'Gately', 'Salmon', 'Harwood', 'Osborne', 'Wessing', 'Mason', 'MacFarlane', 'Hawthorn', 'Hemlock', 'Sycamore', 'Pine', 'Juniper', 'Elm', 'Whitebeam', 'Cedar', 'Aspen', 'Ash', 'Walnut', 'Willow', 'Cherry', 'Halford', 'Hardie', 'Smalls', 'Herd', 'Sterling', 'Lewin', 'Maguire', 'Watkins', 'Delaney', 'Poulson', 'Braithwaite', 'Christensan', 'Rafferty', 'Schwarz', 'Ketchum', 'Rowan', 'Brannigan', 'Rodríguez', 'Farnsworth', 'Conrad', 'Wong', 'Wernstrom', 'Nixon', 'Tate', 'McDougall', 'Abbett', 'Abrahams', 'Accord', 'Ackerman', 'Addington', 'Grimes', 'Colman', 'Siggard', 'Peletier', 'Morales', 'Jenner', 'Kutner', 'Foreman', 'Chase', 'Penn', 'Laurie', 'Jacoboson', 'Wilde', 'Dutton', 'McQueen', 'Durst', 'Alderson', 'Wellick', 'Cortez', 'Moss', 'Price', 'Goddard', 'Trenton', 'Goodwin', 'Reynolds', 'McIntyre', 'Healy', 'Patel', 'Flores', 'Nottingham', 'Whitaker', 'Walsh', 'Moreland', 'Fulton', 'Halpert', 'Vickers', 'Carell', 'Novak', 'Hannon', 'Sabre', 'Deluca', 'McKidd', 'Dempsey', 'Webber', 'Altman', 'Avery', 'Kepner', 'Riggs', 'Hahn', 'Chambers', 'Stevens', 'Robbins', 'Torres', 'Sloan', 'O\Malley', 'Schmitt', 'McDonnell', 'Spalding', 'Herrmann', 'Helm', 'Harper', 'Montgomery', 'Hutchison', 'Klein', 'Hutchins', 'Morgan', 'Kirkwood', 'Shelby', 'Solomans', 'Stark', 'Gold', 'Changretta', 'Bryne', 'Kimber', 'Boswell', 'Chaplin', 'MacMillan', 'Devlin', 'Strong', 'Fenton', 'McCumisky', 'McAnulty', 'Boyle', 'Maclean', 'Douglas', 'Donaldson', 'Santiago', 'Riley', 'Woods', 'MacTavish', 'Bowman', 'Booth', 'Coen', 'Foley', 'Valentia', 'Griggs', 'Ingram', 'Koopman', 'Markhov', 'McLaughlin', 'O\'Leary', 'Ramirez', 'Rivers', 'Rutherford', 'Schmitt', 'Sumners', 'Marek', 'Wade', 'Weaver', "Knott", "Posner", "Zane", "Murdock", "Becker", "Hogarth", "Phelps", "Hoffman", "Meyer", "Wynn", "Stein", "Schmidt", "Daniels", "Firth", "Robinovitch", "Milton", "Ducksworth", "Finley", "Sweeny", "McShane", "Blackwood", "Potts", "Gardner", "Cheney", "Hawking", "Runne", "Donnell", "Whitehead", 'O\'Malley'];

function generateName() {
    getFirstName = Math.floor(Math.random() * firstName.length);
    let generatedFirstName = firstName[getFirstName];
    getSurname = Math.floor(Math.random() * surname.length);
    let generatedSurname = surname[getSurname];
    document.getElementById("fullname").value = generatedFirstName + " " + generatedSurname;
}

function copyname() {
    var copyText = document.getElementById("fullname");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }

// TODO NUMBERS

// function generateRandomNumber() {
//     let RndInteger = Math.floor(Math.random() * 1000);
//     document.getElementById('generatedNumber').value = RndInteger;
// }

function getRandomAmount(min, max) {
    return Math.random() * (max - min) + min;
  }

function generateRandomNumber() {
    let number = parseFloat(getRandomAmount(0, 250000).toFixed(2));
    document.getElementById('generatedNumber').value = number;
}

function copyNumber() {
    var copyText = document.getElementById("generatedNumber");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }

// TODO Functions for random numbers and characters

function generateCharacter(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function generateNumber(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

// 1, i, l, 0, o removed (incl. caps) to avoid confusion between each other

function generateMixed(length) {
    var result           = '';
    var characters       = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

// TODO Password Generator

function assignPassword() {
    const password = generateMixed(12);
    document.getElementById("generatedPassword").value = password;
}

function copypassword() {
    var copyText = document.getElementById("generatedPassword");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

// TODO Chained Password

function assignApplePass() {
    const password1 = generateMixed(5)
    const password2 = generateMixed(5)
    const password3 = generateMixed(5)
    const applePass = password1 + "-" + password2 + "-" + password3;
    document.getElementById("generatedApplePass").value = applePass;
}
  
function copyApplePass() {
    var copyText = document.getElementById("generatedApplePass");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

// TODO Addresse Generator

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
    69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
    86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102,
    103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
    117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
    131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
    145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158,
    159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172,
    173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186,
    187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
    201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214,
    215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228,
    229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242,
    243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256,
    257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270,
    271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284,
    285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298,
    299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312,
    313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326,
    327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340,
    341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354,
    355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368,
    369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382,
    383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396,
    397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410,
    411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424,
    425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438,
    439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452,
    453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466,
    467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480,
    481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494,
    495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508,
    509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522,
    523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536,
    537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550,
    551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564,
    565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578,
    579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592,
    593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606,
    607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620,
    621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634,
    635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648,
    649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662,
    663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676,
    677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690,
    691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704,
    705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718,
    719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732,
    733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746,
    747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760,
    761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774,
    775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788,
    789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802,
    803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816,
    817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830,
    831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844,
    845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858,
    859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872,
    873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886,
    887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900,
    901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914,
    915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928,
    929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942,
    943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956,
    957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970,
    971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984,
    985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998,
    999, 1000];

const streetPrefix = ['Oak', 'Birch', 'Willow', 'Beech', 'Spruce', 'Walnut', 'Cherry', 'Maple', 'Alder', 'Ash', 'Aspen', 'Cedar', 'Elm', 'Hawthorn', 'Hemlock', 'Hornbeam', 'Juniper', 'Lime', 'Pine', 'Sycamore', 'Whitebeam', 'Yew', 'High', 'Church', 'Park', 'Main', 'Queens', 'Kings', 'Grange', 'New', 'Mill', 'North', 'East', 'South', 'West'];
 
const streetName = ['Road', 'Lane', 'Avenue', 'Boulevard', 'Street', 'Grove', 'Crescent', ]

const town = ['Avon', 'Bedfordshire', 'Berkshire', 'Buckinghamshire', 'Cambridgeshire', 'Cheshire', 'Cleveland', 'Cornwall', 'Cumbria', 'Derbyshire', 'Devon', 'Dorset', 'Durham', 'East-Sussex', 'Essex', 'Gloucestershire', 'Hampshire', 'Herefordshire', 'Hertfordshire', 'Isle-of-Wight', 'Kent', 'Lancashire', 'Leicestershire', 'Lincolnshire', 'London', 'Merseyside', 'Middlesex', 'Norfolk', 'Northamptonshire', 'Northumberland', 'North-Humberside', 'North-Yorkshire', 'Nottinghamshire', 'Oxfordshire', 'Rutland', 'Shropshire', 'Somerset', 'South-Humberside', 'South-Yorkshire', 'Staffordshire', 'Suffolk', 'Surrey', 'Tyne-and-Wear', 'Warwickshire', 'West-Midlands', 'West-Sussex', 'West-Yorkshire', 'Wiltshire', 'Worcestershire', 'Avon', 'Bedfordshire', 'Berkshire', 'Buckinghamshire', 'Cambridgeshire', 'Cheshire', 'Cleveland', 'Cornwall', 'Cumbria', 'Derbyshire', 'Devon', 'Dorset', 'Durham', 'East Sussex', 'Essex', 'Gloucestershire', 'Hampshire', 'Herefordshire', 'Hertfordshire', 'Isle of Wight', 'Kent', 'Lancashire', 'Leicestershire', 'Lincolnshire', 'London', 'Merseyside', 'Middlesex', 'Norfolk', 'Northamptonshire', 'Northumberland', 'North Humberside', 'North Yorkshire', 'Nottinghamshire', 'Oxfordshire', 'Rutland', 'Shropshire', 'Somerset', 'South Humberside', 'South Yorkshire', 'Staffordshire', 'Suffolk', 'Surrey', 'Tyne and Wear', 'Warwickshire', 'West Midlands', 'West Sussex', 'West Yorkshire', 'Wiltshire', 'Worcestershire', 'Clwyd', 'Dyfed', 'Gwent', 'Gwynedd', 'Mid-Glamorgan', 'Powys', 'South-Glamorgan', 'West-Glamorgan', 'Clwyd', 'Dyfed', 'Gwent', 'Gwynedd', 'Mid Glamorgan', 'Powys', 'South Glamorgan', 'West Glamorgan', 'Aberdeenshire', 'Angus', 'Argyll', 'Ayrshire', 'Banffshire', 'Berwickshire', 'Bute', 'Caithness', 'Clackmannanshire', 'Dumfriesshire', 'Dunbartonshire', 'East-Lothian', 'Fife', 'Inverness-shire', 'Kincardineshire', 'Kinross-shire', 'Kirkcudbrightshire', 'Lanarkshire', 'Midlothian', 'Moray', 'Nairnshire', 'Orkney', 'Peeblesshire', 'Perthshire', 'Renfrewshire', 'Ross-shire', 'Roxburghshire', 'Selkirkshire', 'Shetland', 'Stirlingshire', 'Sutherland', 'West Lothian', 'Wigtownshire', 'Aberdeenshire', 'Angus', 'Argyll', 'Ayrshire', 'Banffshire', 'Berwickshire', 'Bute', 'Caithness', 'Clackmannanshire', 'Dumfriesshire', 'Dunbartonshire', 'East Lothian', 'Fife', 'Inverness-shire', 'Kincardineshire', 'Kinross-shire', 'Kirkcudbrightshire', 'Lanarkshire', 'Midlothian', 'Moray', 'Nairnshire', 'Orkney', 'Peeblesshire', 'Perthshire', 'Renfrewshire', 'Ross-shire', 'Roxburghshire', 'Selkirkshire', 'Shetland', 'Stirlingshire', 'Sutherland', 'West Lothian', 'Wigtownshire', 'Antrim', 'Armagh', 'Down', 'Fermanagh', 'Londonderry', 'Tyrone']; 

// Generate random value from arrays
function getNumber() {
    return Math.floor(Math.random() * number.length);
}

function getStreetPrefix() {
    return Math.floor(Math.random() * streetPrefix.length);
}

function getStreetName() {
    return Math.floor(Math.random() * streetName.length);
}

function getTown() {
    return Math.floor(Math.random() * town.length);
}

// Onlick function
function assignAddress() {
    const generatedNumber = getNumber();
    const generatedStreetPrefix = getStreetPrefix();
    const generatedStreetName = getStreetName();
    const generatedTown = getTown();
    const generatedPostcode1 = generateCharacter(2);
    const generatedPostcode2 = generateNumber(2);
    const generatedPostcode3 = generateNumber(1)
    const generatedPostcode4 = generateCharacter(2)
    const fullPostcode = generatedPostcode1 + generatedPostcode2 + " " + generatedPostcode3 + generatedPostcode4;
    document.getElementById("generatedAddress").value = number[generatedNumber] + " " + streetPrefix[generatedStreetPrefix] + " " + streetName[generatedStreetName] + ", " + town[generatedTown] + ", " + fullPostcode;
}

// Copy button
function copyAddress() {
    var copyText = document.getElementById("generatedAddress");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

// TODO Mobile Number Generator

function assignMobile() {
    const mobileNumber = "07" + generateNumber(9);
    document.getElementById("mobilenumber").value = mobileNumber;
}

function copyMobileNumber() {
    var copyText = document.getElementById("mobilenumber");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//TODO: Generate sort code

function assignSortCode() {
    const sortcode1 = generateNumber(6)
    document.getElementById("generatedSortCode").value = sortcode1;
}

function copySortCode() {
    var copyText = document.getElementById("generatedSortCode");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//TODO: Generate account number

function assignAccountNumber() {
    const accountnumber1 = generateNumber(8)
    document.getElementById("generatedAccountNumber").value = accountnumber1;
}

function copyAccountNumber() {
    var copyText = document.getElementById("generatedAccountNumber");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

// TODO: Banks

const banks = ['Bank of Scotland', 'Halifax', 'Lloyds', 'Royal Bank of Scotland', 'NatWest', 'HSBC', 'Barclays', 'Clydesdale', 'Virgin Money', 'Santander', 'Nationwide Building Society', 'Bank of Ireland', 'Metro Bank', 'TSB Bank', 'Starling', 'Monzo', 'Tide', 'Yorkshire Building Society', 'Bank of Ireland', 'Accord Mortgages', 'First Direct', 'Sainsbury\'s Bank', 'Scottish Building Society', 'Tesco Bank', 'The Co-operative Bank', 'Couttes & Co', 'Coventry Building Society', 'M&S Bank', 'Aldermore', 'Atom Bank', 'Skipton Building Society', 'The Post Office', 'L&C', 'Leeds Building Society', 'Newcastle Building Society', 'Danske Bank', 'Coventry Building Society', 'Investec Specialist Bank', 'Masthaven Bank', 'Shawbrook Bank', 'Handelsbanken']

function generateBank() {
    getBanks = Math.floor(Math.random() * banks.length);
    let generatedBank = banks[getBanks];
    document.getElementById("generatedBankContainer").value = generatedBank;
}

function copyBank() {
    var copyText = document.getElementById("generatedBankContainer");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }

// TODO: IBAN

function generateIban() {
    const countryCode = generateCharacter(2);
    const checkDigits = generateNumber(2);
    const bban = generateCharacter(4) + generateNumber(6) + generateNumber(8);
    document.getElementById("iban").value = countryCode + checkDigits + bban;
}

function copyIban() {
    var copyText = document.getElementById("iban");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

// TODO: SWIFT

function generateSwift() {
    const bankCode = generateCharacter(4);
    const countryCode = generateNumber(2);
    const locationCode = generateCharacter(2);
    const branchCode = generateCharacter(2);
    document.getElementById("swiftCode").value = bankCode + countryCode + locationCode + branchCode;
}

function copySwift() {
    var copyText = document.getElementById("swiftCode");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}