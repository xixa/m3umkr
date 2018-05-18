const fs = require("fs")

const PATH = process.argv[2] || "."
const SEPARATOR = process.argv[3] || ";"
const FILENAME = process.argv[4] || "index"

let list, filename, chaptername, time, line
let output = "#EXTM3U\n"

try {
  list = fs.readFileSync(PATH + `/${FILENAME}.txt`, "utf8")
} catch (err) {
  console.log(err)
}

const strToSeconds = (time) =>
  time.split(":")
      .reverse()
      .reduce(
        (acc, curr, i) => i === 0 ? Number(curr) :
                          i === 1 ? acc + (curr * 60) :
                          i === 2 ? acc + (curr * 3600) :
                          void(0), 0)

list.split("\n")
  .forEach(chapter => {
    line = chapter.split(SEPARATOR)
    if (line.length === 1)
    {
      filename = chapter
    }
    else
    {
      [chaptername, startTime, endTime] = line
      output += `#EXTINF: 0, ${chaptername}\n`
      output += `#EXTVLCOPT:start-time=${strToSeconds(startTime)}\n`
      if (endTime) output += `#EXTVLCOPT:stop-time=${strToSeconds(endTime)}\n`
      output += `${filename}\n\n`
    }
  })

fs.writeFile(PATH + `/${FILENAME}.m3u`, output, (err) => {
  console.log(err ? err : "The list was created!")
})
