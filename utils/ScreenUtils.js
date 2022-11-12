export function screenHeightPercentage(percentage){
  hundredth = Renderer.screen.getHeight() / 100
  return hundredth * percentage
}

export function screenWidthPercentage(percentage){
  hundredth = Renderer.screen.getWidth() / 100
  return hundredth * percentage
}
