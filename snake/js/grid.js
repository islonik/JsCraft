
const GRID_SIZE = 21 // depends on the CSS style in index.html

export function randomGridPosition() {
    return {
        x : Math.floor(Math.random() * GRID_SIZE) + 1,
        y : Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )

}