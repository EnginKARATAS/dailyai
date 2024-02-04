const fs = require("fs");

function getJsonSync(filePath) {
  //check if Deno is available

  if (typeof Deno !== "undefined") {
    return JSON.parse(Deno.readTextFileSync(filePath));
  }
  if (fs) {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  }
  throw new Error("No file system found");
}
var datas = getJsonSync("./data.json");
var randomFileNameStringArr = getJsonSync("./randomStrings.json");

function removeQueryString(url) {
  // Check if the URL contains a "?"
  const index = url.indexOf("?");

  if (index !== -1) {
    // If "?" is found, remove the text after it
    return url.substring(0, index);
  }

  return url; // Return the original URL if no "?" is found
}

function findYoutubeURL(arr) {
  const youtubeKeywordRegex = /youtube/i;
  // Loop through the array
  if (!arr) return null; // Return null if the array is null
  for (let x = 0; x < arr.length; x++) {
    // Check if the current element is a URL and contains "youtube"
    if (typeof arr[x] === "string" && youtubeKeywordRegex.test(arr[x])) {
      return arr[x]; // Return the YouTube URL if found
    }
  }
  return null; // Return null if a YouTube URL is not found in the array
}

function formatDate(date) {
  const day = String(date.getDate());
  const month = String(date.getMonth() + 1);
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

function generateDates(startDateStr, numberOfDays) {
  const dates = [];
  const startDate = new Date(startDateStr);

  // Check if the startDate is valid
  if (isNaN(startDate.getTime())) {
    console.error("Invalid start date");
    return dates;
  }

  // Generate dates day by day
  for (let i = 0; i < numberOfDays; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    // Format the date as dd.mm.yyyy using the formatDate function
    const formattedDate = formatDate(currentDate);
    dates.push(formattedDate);
  }

  return dates;
}

let todayDate = new Date("12.25.2023");
const generatedDates = generateDates(todayDate, datas.length);

let mappedAr = datas
  .map((item, i) => {
    if (findYoutubeURL(item.socialLinks)) {
      return {
        id: Math.floor(Math.random() * 10000000),
        date: generatedDates[i],
        aiName: item.toolName,
        aiWebsite: removeQueryString(item.websiteUrl),
        description: item.toolShortDescription,
        imagePath: item.mainImage.asset._ref,
        videoIframeAdress: findYoutubeURL(item.socialLinks),
      };
    }
    return {
      id: Math.floor(Math.random() * 10000000),
      date: generatedDates[i],
      aiName: item.toolName,
      aiWebsite: removeQueryString(item.websiteUrl),
      description: item.toolShortDescription,
      imagePath: randomFileNameStringArr[i] + ".jpg",
      videoIframeAdress: "Video is not available",
    };
  })
  .filter((item) => item != undefined);
console.dir(mappedAr, { depth: null });
JSON.stringify(mappedAr);
fs.writeFileSync("result.json", JSON.stringify(mappedAr));
