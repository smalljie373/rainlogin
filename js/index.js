const image = document.querySelector('.img');
image.onload = function() {
    const rainEffect = new RainDay({
        image: this,
        gravityAngle: Math.PI / 3,
        fps:30,
    })
    rainEffect.rain([
        [10,8,0.05],
        [7,4,0.5],
        [2,1,20]
    ],80,
    );
}