const messagesAndHistory = ( () => {
  const history = [];
  const messages = {
    doYouWantToPlay: 'Hello! Do you want to play? Press play if yes!',
  };

  let storyTree = {
    scene: 'You are walking down a road and you come to across a horse blocking your path. What do you do?',
    options: [
      {
        action: 'Walk around it',
        result: {
          scene: 'You walked around the horse only to find three sheep blocking your path. What do you do?',
          options: [
            {
              action: 'Pet the sheep',
              result: {
                scene: 'They "Baa" appreciatively and move aside.',
                options: [

                ]
              }
            },
            {
              action: 'Jump over the sheep.',
              result: {
                scene: 'Baaaaaahhhd idea. Your foot gets tangled in one of the sheeps long unshorn wool. Fortunatly, you land right on the sheep\'s soft wooly back',
                options: [

                ]
              }
            }
          ]
        }
      },
      {
        action: 'Try to ride it',
        result: {
          scene: 'Neigh neigh neigh! You are bucked right out of the saddle! Unfortunately, you land in the pond by the side of the road. What do you do',
          options: [

          ]
        }
      },
      {
        
      }
    ]
  };

  const scene =  (currentTree, selector) => {    
    const nextTree = currentTree.options 
      ? currentTree.options[selector]
      : currentTree.result.options[selector]
    return nextTree;
  }

  return {
    messages,
    history,
    storyTree,
    scene,
  };

})()


