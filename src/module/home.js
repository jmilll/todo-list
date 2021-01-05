function createMain() {
    const content = document.getElementById('content');
    const newMain = document.createElement('div');

    newMain.setAttribute('class', 'main-image');
        const imageMain = document.createElement('img');
            imageMain.setAttribute('class', 'fit');
            //imageMain.src = '../src/images/tap-room.jpg';//change for gh-pages to load img
            //https://raw.githubusercontent.com/jmilll/restaurant-page/master/src/images/tap-room.jpg
            imageMain.src = './src/images/tap-room.jpg';
            imageMain.alt = 'taproom-photo';
        const imageLogo = document.createElement('img');
            imageLogo.setAttribute('class', 'logo-overlay');
            //imageLogo.src = '../src/images/logo_white.png';//change for gh-pages to load img
            //https://raw.githubusercontent.com/jmilll/restaurant-page/master/src/images/logo_white.png
            imageLogo.src = './src/images/logo_white.png';
            imageLogo.alt = 'white-logo';
        const blackScreen = document.createElement('span');
            blackScreen.setAttribute('class', 'black-overlay');

    content.appendChild(newMain);
        newMain.appendChild(imageMain);
        newMain.appendChild(imageLogo);
        newMain.appendChild(blackScreen);
}

function createCopy() {
    const content = document.getElementById('content');
    const newCopy = document.createElement('div');
    
    newCopy.setAttribute('class', 'copy');
        const headTwo = document.createElement('h2');
            headTwo.textContent = 'The Taproom at Urbanrest';
            const tapDesc = `<p>Our spacious taproom at Urbanrest has a limited capacity, and operates on a first-come, first-served basis. We believe its the only fair way to do things.
            </p>
            <p>Our space is designed to bring the consumer in to the brewing process while also providing a comfortable atmosphere to spend time with friends, engage in conversation and enjoy the fruits of our brewing labor.
            </p>
            <p>We offer house-made charcuterie boards with meat and cheese from local producers. We have food trucks/pop-ups six days per week as well! You can order outside, bring your food in and sit down & enjoy a beer. Easy.
            </p>
            <p>We serve in 5oz sample, 12oz and 16oz sizes at various price ranges. Growler fills are also available to go.
            </p>
            <p>We tried our best to create an efficient filling process to make picking up a Growler of our beer as quick and painless as possible. First, check the board for today’s fill options. If you don’t have a bottle, both 750ml and 2L sizes are available for purchase. We also fill 32oz and 64oz growlers from any other brewery for the price of the 750ml and 2L.
            </p>
            <p>If you’d like a small sample of something before you buy, we are happy to accommodate.
            </p>
            <p>Our growlers are filled to order to maintain freshness. A blanket of CO2 purges out unwanted oxygen from the container ensuring a quality fill and giving us the peace of mind that you’ve received a beer that won’t break down quickly. Please keep your growler cold, drink it fresh and do not age. Growlers are a perishable product.</p>
            </p>`;

    content.appendChild(newCopy);
        newCopy.appendChild(headTwo);
        newCopy.insertAdjacentHTML("beforeend", tapDesc);
}

function loadHome() {
    createMain()
    createCopy() 
}

export default loadHome;