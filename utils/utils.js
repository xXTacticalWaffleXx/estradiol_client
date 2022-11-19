export const screenHeightPercentage = (percentage) => {
    hundredth = Renderer.screen.getHeight() / 100
    return hundredth * percentage
}
export const screenWidthPercentage = (percentage) => {
    hundredth = Renderer.screen.getWidth() / 100
    return hundredth * percentage
}
export const inSkyblock = () => {
    let scoreboard = Scoreboard.getScoreboardTitle();
    if(scoreboard == "SKYBLOCK") return true;
    else return false;
}