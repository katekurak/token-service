import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const directoryPath = '.'
const password = 'mjnj'

function encryptHtmlFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file)
    if (fs.statSync(filePath).isDirectory()) {
      encryptHtmlFiles(filePath)
    } else if (path.extname(file) === '.html') {
      execSync(`staticrypt ${filePath} ${password} -o ${filePath}`)
      console.log(`Encrypted: ${filePath}`)
    }
  })
}

encryptHtmlFiles(directoryPath)
