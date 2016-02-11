export function drawRect(context, body) {
    context.fillRect(body.position.x - body.size.x / 2,
        body.position.y - body.size.y / 2,
        body.size.x,
        body.size.y);
};