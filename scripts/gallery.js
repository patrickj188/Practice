var galleryContainer = document.getElementById('gallery-container');
var gallery = document.createElement('div');
var galleryLabel = document.createElement('label');

galleryLabel.textContent = 'Gallery';
gallery.id = 'gallery';
galleryContainer.appendChild(gallery);
galleryContainer.appendChild(galleryLabel);

var imageList = getImageList();

/*
 * .forEach is a method on an array
 * you pass in a "callback function" that defines what to do with each item in the array
 * In this callback function, we name the item "image" since we are performing this on an array of images that we defined as "imageList" above
 */
imageList.forEach(function(image) {
    var div = document.createElement('div');
    div.classList.add('image');
    div.style.backgroundImage = `url(${image})`;
    div.onmouseover = onHover;
    div.onmouseout = offHover;
    gallery.appendChild(div);
});

// Difficult subject- but you will need to read up on JavaScript "Context" and "this"
function onHover() {
    this.style.width = '250px'
}

function offHover() {
    this.style.width = '200px'
}

function getImageList() {
    return [
        'https://vignette.wikia.nocookie.net/darksouls/images/b/b0/Darksoulsboss.jpg/revision/latest?cb=20120511183244',
        'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0026_Gaping%20Dragon.jpg',
        'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0020_Ornstein%20&%20Smough.jpg',
        'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0027_Four%20Kings.jpg',
        'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0031_Chaos%20Witch%20Quelaag.jpg',
    ];
}