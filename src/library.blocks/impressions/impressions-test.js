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
const getAngle = (totalMarks) => (fullAngle) => (rate) => (
  rate / totalMarks * fullAngle
);
const getStartAngle = (gap) => (_, idx, angles) => (
  angles.slice(0, idx)
    .filter((angle) => angle)
    .reduce((acc, angle) => acc + angle + gap, gap / 2)
);
const getClass = (idx) => {
  const map = {
    0: 'amazing',
    1: 'cool',
    2: 'bad',
    3: 'veryBad'
  };
  return map[idx];
};
const getPoint = (r) => (angle) => {
  const angleRad = (angle + 90) * Math.PI / 180;
  const x = r * Math.cos(angleRad) + r;
  const y = Math.abs(r * Math.sin(angleRad) - r);
  return x + ' ' + y;
};
const getArc = (gap) => (r) => (getClass) => (getStartAngle) => (getPoint) => 
  (angle, idx, angles) => (
    `<path 
      class=${getClass(idx)}
      d="M${getPoint(getStartAngle(angle, idx, angles))} 
        A${r} ${r} 0 ${angle > 180 ? 1 : 0}
        0 ${getPoint(
      (getStartAngle(angle, idx + 1, angles) 
              || 360 + gap / 2) - gap, r
    )}" 
      fill="none"
      stroke=url(#${getClass(idx)})
      stroke-width="4"
     />`
  );
const ff = (insertArc) => (getArc) => (acc, a, idx, angles) => (
  a == 0 ? acc : insertArc (acc) (getArc (a, idx, angles))
);
const f = (gap) => (r) => (root) => (rating) => ( 
  root.insertAdjacentElement(
    'beforeend', 
    rating.map(
      getAngle (getTotalMarks (rating)) (getFullAngle (gap) (getNGaps (rating)))
    ).reduce(
      ff (insertArc) (
        getArc (gap) (r) (getClass) (getStartAngle (gap)) (getPoint (r))
      ),
      getTemplateElem (template)
    )
  )
);
const main = (root) => (
  f (4) (60) (root) (parseData(root))
);
document.querySelectorAll('.impressions__circle-container')
  .forEach((c) => main(c));

