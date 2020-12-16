let nameSpace = {
    r: 60,
    gap: 1,
    fullAngle: 360,
};

let circle = `<svg class="impressions" width="120" height="120" viewBox="-2 0 124 120"></svg>`;

document.querySelector('.svg').insertAdjacentHTML('afterbegin', circle)
nameSpace.elem = document.querySelector('.impressions');

drawImpressions({cool: 4, bad: 3, veryBad: 1});

function drawImpressions(rating) {
    let {amazing = 0, cool = 0, bad = 0, veryBad = 0} = rating;
    let mark = [amazing, cool, bad, veryBad];
    let params = `${nameSpace.r} ${nameSpace.r}`;
    let lastPoint = `60 120`;
    let ellipse;

    ellipse = `<path class="hallo" d=\"M60 0 A ${params} 0 0 0 ${lastPoint}\" fill="none" stroke="green" stroke-width="4"/>`;
    nameSpace.elem.insertAdjacentHTML('beforeend', ellipse);
    ellipse = `<path d=\"M60 120 A60 60 0 0 0 60 0\" fill="none" stroke="blue" stroke-width="4"/>`;
    nameSpace.elem.insertAdjacentHTML('beforeend', ellipse);

    function calcAngles() {
        let angles = [];
        let sum = mark.reduce((sum, current) => sum + current);
        let percent = [];
        mark.forEach(i => i && angles.push(360 * (i / sum)));
        console.log(angles);
    }

    function calcGaps() {
        nameSpace.numberGaps = 0;
        mark.forEach(i => i && nameSpace.numberGaps++);
    }

    function getFullAngle() {
        nameSpace.fullAngle = 360 - nameSpace.gap * nameSpace.numberGaps;
    }

    function getPoint(angle) {
        let x = nameSpace.r * Math.cos(angle),
            y = nameSpace.r * Math.sin(angle);
        return 
    }
}
