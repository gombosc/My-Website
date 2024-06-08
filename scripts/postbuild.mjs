import rss from './rss/index.js'

async function postbuild() {
  await rss()
}

postbuild()
