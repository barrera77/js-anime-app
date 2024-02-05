const url = "https://api.jikan.moe/v4/top/anime?bypopularity";

async function animeData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Incorrect network response");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export default { animeData };
