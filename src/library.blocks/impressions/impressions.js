let nameSpace = {
    r: 60,
    gap: 4,
    fullAngle: 360,
};

nameSpace.width = nameSpace.r * 2;
nameSpace.height = nameSpace.r * 2;

let impressions = `<svg class="impressions" width=\"${nameSpace.width}\" height=\"${nameSpace.width}\" viewBox="-2 0 124 120">
                       <defs></defs> 
                   </svg>`;

let defs = `<linearGradient id="amazing" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFE39C;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FFBA9C;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="cool" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#6FCF97;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#66D2EA;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="bad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#BC9CFF;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#8BA4F9;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="veryBad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#909090;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#3D4975;stop-opacity:1" />
            </linearGradient>`

document.querySelector('.svg').insertAdjacentHTML('afterbegin', impressions)
nameSpace.elem = document.querySelector('.impressions');
nameSpace.elem.querySelector('defs').insertAdjacentHTML('beforeend', defs);

drawImpressions({amazing: 4, cool: 2, bad: 2, veryBad: 0});

function drawImpressions(rating) {
    let {amazing = 0, cool = 0, bad = 0, veryBad = 0} = rating;
    let mark = [amazing, cool, bad, veryBad];
    calcGaps();
    getFullAngle();
    getClasses();
    calcAngles();
    nameSpace.angles.length == 1 ? drawCircle() : drawArcs();

    function calcGaps() {
        nameSpace.numberGaps = 0;
        mark.forEach(i => i && nameSpace.numberGaps++);
    }

    function getFullAngle() {
        nameSpace.fullAngle = 360 - nameSpace.gap * nameSpace.numberGaps;
    }

    function getClasses() {
        nameSpace.classes = [];
        for (let prop in rating) {
            if (rating[prop]) nameSpace.classes.push(prop);
        }
    }

    function calcAngles() {
        nameSpace.angles = [];
        let sum = mark.reduce((sum, current) => sum + current);
        mark.forEach(i => i && nameSpace.angles.push(nameSpace.fullAngle * i / sum));
        console.log(nameSpace.angles);
    }

    function drawCircle() {
        let circle = `<circle cx=\"${nameSpace.r}\" cy=\"${nameSpace.r}\" r=\"${nameSpace.r}\" stroke="black" stroke-width="3" fill="none" />`
        nameSpace.elem.insertAdjacentHTML('beforeend', circle);
    }

    function drawArcs() {
        let arc;
        let startArc = nameSpace.gap / 2;
        let endArc = nameSpace.angles[0] + nameSpace.gap / 2;

        for (let i = 0; i < nameSpace.angles.length; i++) {

            let largeArcFlag = nameSpace.angles[i] > 180 ? 1 : 0;
            if (i > 0) endArc += nameSpace.angles[i] + nameSpace.gap;

            arc = `<path 
                       class=\"${nameSpace.classes[i]}\"
                       d=\"M${getPoint(startArc)} A${nameSpace.r} ${nameSpace.r} 0 ${largeArcFlag} 0 ${getPoint(endArc)}\" 
                       fill="none"
                       stroke=\"url(#${nameSpace.classes[i]})\"
                       stroke-width="4"
                   />`;

            nameSpace.elem.insertAdjacentHTML('beforeend', arc);

            startArc += nameSpace.angles[i] + nameSpace.gap;
        }
    }
}

function getPoint(angle) {
    angle += 90;
    angleRad = angle * Math.PI / 180;
    let x = nameSpace.r * Math.cos(angleRad),
        y = nameSpace.r * Math.sin(angleRad);
    x += nameSpace.r;
    y = Math.abs(y - nameSpace.r);
    console.log(x, y, angle);
    return x + ' ' + y
}
