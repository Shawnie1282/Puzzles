function updateQuote() {
	let quotes = [
		"You’re off to great places, today is your day. Your mountain is waiting, so get on your way. ~Dr. Seus",
		"You always pass failure on the way to success. ~Mickey Rooney",
		"Only surround yourself with people who will lift you HIGHER. ~Oprah Winfrey",
		"It always seems impossible until it is done. ~Nelson Mandela",
		"All your dreams can come true if your have the COURAGE to pursue them. ~Walt Disney",
		"Keep your face to the sunshine and you cannot see a shadow. ~Helen Keller",
		"Once you replace negative thoughts with positive ones, you’ll start having positive results. ~Willie Nelson",
		"Positive thinking will let you do everything better than negative thinking will. ~Zig Zeglar",
		"It makes a big difference in your life when you stay positive. ~Ellen DeGeneres",
		"I love you. ~Shawnie",
		"You are never too old to set another goal or dream a new dream. ~Les Brown",
		"The sun himself is weak when he first rises, and gathers strength and courage as the day gets on. ~Charles Dickens",
		"The way I see it, if you want the rainbow, you gotta put up with the rain. ~Dolly Parton",
		"Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes! ~Billy Connolly",
		"Never follow anyone else's path. Unless you're in the woods and you're lost and you see a path. Then by all means follow that path. ~Ellen De'Generes",
		"I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with 'em later. ~Mitch Hedberg",
		"My mother always used to say: The older you get, the better you get, unless you're a banana. ~Betty White",
		"Clothes make the man. Naked people have little or no influence in society. ~Mark Twain",
		"Before your marry a person, you should first make them use a computer with slow internet to see who they really are. ~Will Ferrell",
		"I want my children to have all the things I couldn't afford. Then I want to move in with them. ~Phyllis Diller",
		"Truth Hurts. Maybe not as much as jumping on a bicycle with a seat missing, but it hurts. ~Leslie Nielsen",
		"A good rule to remember for life is that when it comes to plastic surgery and sushi, never be attracted by a bargain. ~Graham Norton",
		"Does it disturb anyone else that 'The Los Angeles Angels' baseball team translates directly to 'The The Angels Angels'? ~Neil DeGrasse Tyson",
		"A day without sunshine is like, you know, night. ~Steve Martin",
		"I grew up with six brothers. That's how I learned to dance: waiting for the bathroom. ~Bob Hope",
		"Never put off till tomorrow what you can do the day after tomorrow just as well. ~Mark Twain",
		"Anyone who lives within their means suffers from a lack of imagination. ~Oscar Wilde",
		"The worst part of online shopping is having to get up and get your credit card from your purse. ~Anonymous",
		"People say, ‘But Betty, Facebook is a great way to connect with old friends.’ Well, at my age, if I want to connect with old friends I need a Ouija board. ~Betty White"
	];

	$(".quote")[0].innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}