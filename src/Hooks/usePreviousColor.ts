
const usePreviousColor = (color: string) => {
    const prev = color === "sky" ? "sun" : "sky";
    return prev
}

export default usePreviousColor;