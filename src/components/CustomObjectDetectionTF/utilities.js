const labelMap = {
    1: { name: 'Left', color: 'orange' },
    2: { name: 'Right', color: 'yellow' },
    3: { name: 'Super', color: 'lime' },
    4: { name: 'ThumbsDown', color: 'blue' },
    5: { name: 'ThumbsUp', color: 'aqua' },
    6: { name: 'happy', color: 'purple' },
    7: { name: 'sad', color: 'red' },
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx) => {
    try {
        for (let i = 0; i <= boxes.length; i++) {
            if (boxes[i] && classes[i] && scores[i] > threshold) {
                // Extract variables
                const [y, x, height, width] = boxes[i]
                const text = classes[i]

                // Set styling
                ctx.strokeStyle = labelMap[text]['color']
                ctx.lineWidth = 10
                ctx.fillStyle = 'white'
                ctx.font = '30px Arial'
                ctx.gustureName = labelMap[text]['name'];
                // DRAW!!
                ctx.beginPath()
                ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i] * 100) / 100, x * imgWidth, y * imgHeight - 10)
                ctx.rect(x * imgWidth, y * imgHeight, width * imgWidth / 2, height * imgHeight / 2);
                ctx.stroke()
            }
        }
    }
    catch (e) {
        console.log("drawRect:: " + e)
    }
}