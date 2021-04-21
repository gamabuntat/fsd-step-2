const template = (
  `<svg 
    class="impressions__circle" 
    width="120"
    height="120"
    viewBox="-2 0 124 120">
    <defs>
      <linearGradient id="amazing" x1="0%" y1="0%" x2="0%" y2="100%">
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
      </linearGradient>
    </defs> 
  </svg>`
);
const getTemplateElem = (template) => {
  const temp = document.createElement('div');
  temp.insertAdjacentHTML('afterbegin', template);
  return temp.firstChild;
};
const insertArc = (templateElem) => (arc) => {
  templateElem.insertAdjacentHTML('beforeend', arc);
  return templateElem;
};
const parseData = (root) => {
  const {amazing = 0, cool = 0, bad = 0, veryBad = 0} = root.dataset;
  return [+amazing, +cool, +bad, +veryBad];
};
const getNGaps = (rating) => rating.filter((r) => r).length;
const getFullAngle = (gap) => (nGaps) => 360 - gap * nGaps;
const getTotalMarks = (rating) => rating.reduce((s, r) => s + r);
const getAngles = (totalMarks) => (fullAngle) => (rate) => (
  rate / totalMarks * fullAngle
);
const getStartAngle = (gap) => (_, idx, angles) => (
  angles.slice(0, idx)
    .filter((angle) => angle)
    .reduce((acc, angle) => acc + angle + gap, gap / 2)
);
const getClass = (idx) => ( 
  {0: 'amazing', 1: 'cool', 2: 'bad', 3: 'veryBad'}[idx]
);
const getPoint = (r) => (angle) => {
  const angleRad = (angle + 90) * Math.PI / 180;
  const x = r * Math.cos(angleRad) + r;
  const y = Math.abs(r * Math.sin(angleRad) - r);
  return x + ' ' + y;
};
const getArc = (gap) => (r) => (getStartAngle) => (getPoint) => 
  (angle, idx, angles) => (
    `<path 
      class=${getClass(idx)}
      d="M${getPoint(getStartAngle(angle, idx, angles))} 
        A${r} ${r} 0 ${angle > 180 ? 1 : 0}
        0 ${getPoint(
      (getStartAngle(angle, idx + 1, angles) || 360 + gap / 2) - gap, r
    )}" 
      fill="none"
      stroke=url(#${getClass(idx)})
      stroke-width="4"
     />`
  );
const insertSign = (totalMarks) => (templateElem) => (
  templateElem.insertAdjacentHTML(
    'beforeend', 
    `<text 
      class="impressions__room-number" 
      text-anchor="middle" 
      x="60" 
      y="65" 
      fill="url(#bad)">${totalMarks}
    </text>
    <text 
      class="impressions__room-votes" 
      text-anchor="middle" 
      x="60" 
      y="81" 
      fill="url(#bad)">голосов
    </text>`
  ), templateElem
);
const main = (gap) => (r) => (root) => (rating) => (totalMarks) => ( 
  root.insertAdjacentElement(
    'beforeend', 
    insertSign (totalMarks) (
      rating.map(
        getAngles (totalMarks) (
          getFullAngle (gap) (getNGaps (rating))
        )
      ).reduce((template, a, idx, angles) => (
        a == 0 ? template : insertArc (template) (
          getArc (gap) (r) (getStartAngle (gap)) (getPoint (r)) (a, idx, angles)
        )
      ), getTemplateElem (template))
    )
  )
);
const bind = (main) => (a) => (fn) => {
  const newA = fn(a);
  return bind(main(newA)) (newA);
};
const init = (root) => (
  bind (main(4)(60)(root)) (root) (parseData) (getTotalMarks)
)
document.querySelectorAll('.impressions__circle-container')
  .forEach((c) => init(c));

