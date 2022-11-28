import home from "./handlers/home.js"
import about from "./handlers/about.js"
import blog from "./handlers/blog.js"

function handleRequest(request) {
  const url = new URL(request.url)
  const [, base, ...args] = url.pathname.split("/")
  switch (base) {
    case "home":
      return home(...args)
    case "about":
      return about(...args)
    case "blog":
      return blog(...args)
    default:
      return { status: 404, body: "page not found" }
  }
}

function createRandomPathname() {
  const rand = Math.random()
  return rand < 0.2
    ? "home"
    : rand < 0.4
      ? "about"
      : rand < 0.6
        ? `blog/${Math.floor(Math.random() * 10) + 1}`
        : rand < 0.8
          ? "contact"
          : "does/not/exist"
}

function createRandomRequest() {
  return { method: "GET", url: `https://skillerwhale.com/${createRandomPathname()}` }
}

const request = createRandomRequest()
const response = await handleRequest(request)

console.log("Request:", request)
console.log("Response:", response)
