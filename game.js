HTMLElement.prototype.text = function(str) {
	this.textContent = str;
}

const gameController = ( (gameData) => {
	const d = gameData;

	// DOM references
	const message = document.getElementById('message');
	const playGame = document.getElementById('play-game');
	const optionsWrapper = document.getElementById('options-wrapper');
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');

	// Event listeners
	playGame.addEventListener('click', startGame);
	optionsWrapper.addEventListener('click', loadNextScene); 

	const currentScene = loadNextScene()

	function loadNextScene (event) {
		if (event.target.className.includes('option-display')) {
			const selector = Number(event.target.attributes['data-id'].value);
			const nextScene = d.scene()
		}
	}	

	function startGame () {
		playGame.style.display = 'none';
		optionsWrapper.style.display = 'block';
		message.text(d.storyTree.scene);
		displayOptions(d.storyTree.options);
	}

	function displayOptions(options) {
		optionsWrapper.innerHTML = '';
		options.forEach((option, i) => {
			let optionDiv = document.createElement('div');
			optionDiv.setAttribute('class', 'option-display hello');
			optionDiv.setAttribute('data-id', i);
			optionDiv.text(option.action);
			optionsWrapper.appendChild(optionDiv);
		})

	
	}



	function main() {
		message.text(d.messages.doYouWantToPlay);

		
	

	}



	main();


})(messagesAndHistory);











