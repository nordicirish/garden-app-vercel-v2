export const getImageFromWikipedia = async (plant_name) => {
    const image_url = `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages|pageterms&piprop=original&titles=${plant_name}`
    const images = await fetch(image_url, { method: "GET", headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    }})
    const data = await images.json()
    // console.log("SOURCE DATA")
    // console.log(data)
    if (data.query) {
      return data.query.pages[0];
      } else {
        return null
      }
}

export const getThumbnailFromWikipedia = async (plant_name) => {
    const image_url = `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages|pageterms&piprop=thumbnail&pithumbsize=600&titles=${plant_name}`
    const images = await fetch(image_url, { method: "GET", headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    }})
    const data = await images.json()
    // console.log("SOURCE DATA")
    // console.log(data)
    if (data.query) {
      return data.query.pages[0];
      } else {
        return null
      }
}