const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const pointer = {
    x : window.innerWidth/2,
    y : window.innerHeight/2,
    prevX : window.innerWidth/2,
    prevY : window.innerHeight/2,
    vx : 0,
    vy : 0,
    lastMoveTime : 0
};

const gridSettings = {
    cellWidth : 50,
    cellHeight : 50,
    lineWidth : 0,
    color : "#333333",
    distortionRadius : 200,
    distortionStrength : 0.8,
    colorShiftStrength : 0.4,
    gaussianWidth : 40,
    discreteSteps : 5,
    fadeTime : 300,
    xPositiveColor: 'red',
    xNegativeColor: 'yellow',
    yPositiveColor: 'green',
    yNegativeColor: 'blue'
}

function updateMousePosition(eX, eY) {
    pointer.prevX = pointer.x;
    pointer.prevY = pointer.y;
    pointer.x = eX;
    pointer.y = eY;
    pointer.vx = pointer.x - pointer.prevX;
    pointer.vy = pointer.y - pointer.prevY;
    pointer.lastMoveTime = Date.now();
}

window.addEventListener("resize", setupCanvas);
window.addEventListener("mousemove", (e)=> {
    updateMousePosition(e.pageX, e.pageY);
});

setupCanvas();

function gaussianValue(x, sigma) {
    return Math.exp(-(x * x) / (2 * sigma * sigma));
}

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const timeSinceLastMove = Date.now() - pointer.lastMoveTime;
    const fadeFactor = Math.max(0, 1 - timeSinceLastMove/gridSettings.fadeTime);
    ctx.lineWidth = gridSettings.lineWidth;
    ctx.strokeStyle = gridSettings.color;
    const numCellsX = Math.ceil(canvas.width / gridSettings.cellWidth) + 1;
    const numCellsY = Math.ceil(canvas.height / gridSettings.cellHeight) + 1;
    const speed = Math.sqrt(pointer.vx * pointer.vx + pointer.vy * pointer.vy);
    const stepSize = Math.max(1, Math.floor(speed/5));

    for (let x = 0; x <= numCellsX; x++) {
        const baseX = x * gridSettings.cellWidth;
        const points = [];
        for (let y = 0; y < canvas.height; y += stepSize) {
            const distX = getDistortionX(baseX, y, fadeFactor);
            points.push({x: baseX + distX, y: y});
        }
        if (points.length > 0 && Math.abs(pointer.vx) > 0.1) {
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(points[i].x, points[i].y);
            }
            ctx.lineTo(baseX, canvas.height);
            ctx.lineTo(baseX, 0);
            if (pointer.vx > 0) {
                ctx.fillStyle = baseX > pointer.x ? gridSettings.xPositiveColor : gridSettings.xNegativeColor;
            } else {
                ctx.fillStyle = baseX < pointer.x ? gridSettings.xPositiveColor : gridSettings.xNegativeColor;
            }
            const dx = baseX - pointer.x;
            const dist = Math.abs(dx);
            if (dist <= gridSettings.distortionRadius) {
                const opacity = (1 - dist / gridSettings.distortionRadius) * fadeFactor * 0.3;
                ctx.globalAlpha = opacity;
                ctx.fill();
                ctx.globalAlpha = 1.0;
            }
        }
        ctx.beginPath();
        for (let i = 0; i < points.length; i++) {
            if (i == 0) {
                ctx.moveTo(points[i].x, points[i].y);
            } else {
                ctx.lineTo(points[i].x, points[i].y);
            }
        }
        ctx.stroke();
    }

    for (let y = 0; y <= numCellsY; y++) {
        const baseY = y * gridSettings.cellHeight;
        const points = [];
        for (let x = 0; x < canvas.width; x += stepSize) {
            const distY = getDistortionY(x, baseY, fadeFactor);
            points.push({x: x, y: baseY + distY});
        }
        if (points.length > 0 && Math.abs(pointer.vy) > 0.1) {
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(points[i].x, points[i].y);
            }
            ctx.lineTo(canvas.width, baseY);
            ctx.lineTo(0, baseY);
            if (pointer.vy > 0) {
                ctx.fillStyle = baseY > pointer.y ? gridSettings.yPositiveColor : gridSettings.yNegativeColor;
            } else {
                ctx.fillStyle = baseY < pointer.y ? gridSettings.yPositiveColor : gridSettings.yNegativeColor;
            }
            const dy = baseY - pointer.y;
            const dist = Math.abs(dy);
            if (dist <= gridSettings.distortionRadius) {
                const opacity = (1 - dist / gridSettings.distortionRadius) * fadeFactor * 0.3;
                ctx.globalAlpha = opacity;
                ctx.fill();
                ctx.globalAlpha = 1.0;
            }
        }
        ctx.beginPath();
        for (let i = 0; i < points.length; i++) {
            if (i == 0) {
                ctx.moveTo(points[i].x, points[i].y);
            } else {
                ctx.lineTo(points[i].x, points[i].y);
            }
        }
        ctx.stroke();
    }
}

function getDistortionX(x, y, fadeFactor) {
    if (Math.abs(pointer.vx) < 0.1) return 0;
    const dx = x - pointer.x;
    const dy = y - pointer.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > gridSettings.distortionRadius) return 0;
    const step = Math.floor(dist / gridSettings.distortionRadius);
    const gaussianHeight = gaussianValue(2*step,1);
    return gaussianHeight * gridSettings.distortionStrength * 30 * Math.sign(dx) * fadeFactor;
}

function getDistortionY(x, y, fadeFactor) {
    if (Math.abs(pointer.vy) < 0.1) return 0;
    const dx = x - pointer.x;
    const dy = y - pointer.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > gridSettings.distortionRadius) return 0;
    const step = Math.floor(dist / gridSettings.distortionRadius);
    const gaussianHeight = gaussianValue(2*step,1);
    return gaussianHeight * gridSettings.distortionStrength * 30 * Math.sign(dy) * fadeFactor;
}

let lastTime = 0;
const fps = 60;
const interval = 1000 / fps;

function animate(timestamp) {
    requestAnimationFrame(animate);
    if (timestamp - lastTime < interval) return;
    lastTime = timestamp;
    drawGrid();
}

animate(0);
