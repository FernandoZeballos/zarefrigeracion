import fs from 'fs';
import path from 'path';
import https from 'https';

const brands = {
    "daikin": "https://cdn.worldvectorlogo.com/logos/daikin.svg",
    "mitsubishi": "https://cdn.worldvectorlogo.com/logos/mitsubishi-electric.svg",
    "lg": "https://cdn.worldvectorlogo.com/logos/lg-electronics.svg",
    "panasonic": "https://cdn.worldvectorlogo.com/logos/panasonic.svg",
    "samsung": "https://cdn.worldvectorlogo.com/logos/samsung.svg",
    "fujitsu": "https://cdn.worldvectorlogo.com/logos/fujitsu.svg",
    "gree": "https://cdn.worldvectorlogo.com/logos/gree-electric-appliances.svg",
    "midea": "https://cdn.worldvectorlogo.com/logos/midea.svg",
    "hisense": "https://cdn.worldvectorlogo.com/logos/hisense.svg",
    "toshiba": "https://cdn.worldvectorlogo.com/logos/toshiba-1.svg",
    "hitachi": "https://cdn.worldvectorlogo.com/logos/hitachi.svg",
    "trane": "https://cdn.worldvectorlogo.com/logos/trane-1.svg",
    "voltas": "https://cdn.worldvectorlogo.com/logos/voltas-1.svg",
    "bluestar": "https://cdn.worldvectorlogo.com/logos/blue-star.svg",
    "general": "https://cdn.worldvectorlogo.com/logos/general-electric-1.svg"
};

// Fallbacks if above fail
const fallbacks = {
    "lg": "https://cdn.worldvectorlogo.com/logos/lg-1.svg",
    "lg2": "https://cdn.worldvectorlogo.com/logos/lg.svg",
    "gree": "https://cdn.worldvectorlogo.com/logos/gree.svg",
    "general": "https://cdn.worldvectorlogo.com/logos/general.svg",
    "toshiba": "https://cdn.worldvectorlogo.com/logos/toshiba.svg",
    "trane": "https://cdn.worldvectorlogo.com/logos/trane.svg",
    "voltas": "https://cdn.worldvectorlogo.com/logos/voltas.svg",
    "mitsubishi": "https://cdn.worldvectorlogo.com/logos/mitsubishi.svg"
};

const dir = path.join(process.cwd(), 'public', 'brands');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

async function downloadFile(url, filename) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode === 200) {
                const file = fs.createWriteStream(filename);
                res.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve(true);
                });
            } else {
                res.resume();
                resolve(false);
            }
        }).on('error', (err) => {
            resolve(false);
        });
    });
}

async function main() {
    let downloaded = 0;
    for (const [key, url] of Object.entries(brands)) {
        const filename = path.join(dir, `${key}.svg`);
        console.log(`Downloading ${key}...`);
        let success = await downloadFile(url, filename);

        if (!success) {
            console.log(`Failed to download ${key}, trying fallbacks...`);
            // Try fallbacks just in case
            for (const [fbKey, fbUrl] of Object.entries(fallbacks)) {
                if (fbKey.startsWith(key)) {
                    console.log(`Trying fallback for ${key}: ${fbUrl}`);
                    success = await downloadFile(fbUrl, filename);
                    if (success) break;
                }
            }
        }

        if (success) {
            console.log(`Successfully downloaded ${key}`);
            downloaded++;
        } else {
            console.log(`Could not find SVG for ${key}, you may need to add it manually.`);
        }
    }
    console.log(`Finished downloading ${downloaded} out of ${Object.keys(brands).length} logos.`);
}

main().catch(console.error);
