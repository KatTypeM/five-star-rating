// Javascript Five Star Rating



// links to document elements
const containerSectionMovie = document.querySelector(".container-section-movie");
const containerIndividualMovie = document.querySelector(".container-individual-movie");


// array of movie objects
let movieList = [
	{
		movieID: "movie0001",
		title: "Saving Private Ryan",
		rate: 10,
	},
	{
		movieID: "movie0002",
		title: "Jingle All the Way",
		rate: 7,
	},
	{
		movieID: "movie0003",
		title: "The Matrix",
		rate: 10,
	},
	{
		movieID: "movie0004",
		title: "The King's Man",
		rate: 7,
	},
	{
		movieID: "movie0005",
		title: "Lightyear",
		rate: 1,
	},
];


// function for dynamically creating movie list and star ratings
function populateMovieList(){
	let result = "";
	for(let i = 0; i < movieList.length; i++){
		// variables to create individual id and name group
		let varMovieID = movieList[i].movieID;
		let varTitle = movieList[i].title;
		let varRate = movieList[i].rate;
		// individual movie title and star rating
		result = `
			<article class="container-individual-movie">
				<div class="display-movie-title">${varTitle}</div>
				<div class="container-star-rating">
					<input type="radio" id="${varMovieID}10" name="${varMovieID}" value="10" />
						<label for="${varMovieID}10" title="5 stars"></label>
					<input type="radio" id="${varMovieID}9" name="${varMovieID}" value="9" />
						<label class="half" for="${varMovieID}9" title="4 &#189; stars"></label>
					<input type="radio" id="${varMovieID}8" name="${varMovieID}" value="8" />
						<label for="${varMovieID}8" title="4 stars"></label>
					<input type="radio" id="${varMovieID}7" name="${varMovieID}" value="7" />
						<label class="half" for="${varMovieID}7" title="3 &#189; stars"></label>
					<input type="radio" id="${varMovieID}6" name="${varMovieID}" value="6" />
						<label for="${varMovieID}6" title="3 stars"></label>
					<input type="radio" id="${varMovieID}5" name="${varMovieID}" value="5" />
						<label class="half" for="${varMovieID}5" title="2 &#189; stars"></label>
					<input type="radio" id="${varMovieID}4" name="${varMovieID}" value="4" />
						<label for="${varMovieID}4" title="2 stars"></label>
					<input type="radio" id="${varMovieID}3" name="${varMovieID}" value="3" />
						<label class="half" for="${varMovieID}3" title="1 &#189; stars"></label>
					<input type="radio" id="${varMovieID}2" name="${varMovieID}" value="2" />
						<label for="${varMovieID}2" title="1 star"></label>
					<input type="radio" id="${varMovieID}1" name="${varMovieID}" value="1" />
						<label class="half" for="${varMovieID}1" title="&#189; star"></label>
					<input type="radio" id="${varMovieID}0" name="${varMovieID}" value="0" />
						<label for="${varMovieID}0" title="No star"></label>
				</div>
			</article>
		`;
		// add each movie to container
		containerSectionMovie.innerHTML += result;
	};
	// loop through each movie, check radio button
	for(let i = 0; i < movieList.length; i++){
		let varMovieID = movieList[i].movieID;
		let varRate = movieList[i].rate;
		let checked = varMovieID + varRate;
		document.getElementById(`${checked}`).checked = true;
	};
};
populateMovieList();












