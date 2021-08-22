export function gradeCal(x) {
    return (x > 100) || (x < 50) ? 0 : (x >= 80) ? 4 : ((x - 40) / 10);
}
