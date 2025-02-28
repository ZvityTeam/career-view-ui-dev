// download_images.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the download path (absolute or relative)
// The script will create the folder if it does not exist.
const downloadPath = path.resolve(__dirname, 'downloaded_images');
if (!fs.existsSync(downloadPath)) {
  fs.mkdirSync(downloadPath, { recursive: true });
}

// JSON data with name and URL
const images = [
  {
    name: 'Andrew Korol',
    url: 'https://static.wixstatic.com/media/0e8fb1_577cc4997d0346b296976564fc6786d3~mv2.png',
  },
  {
    name: 'Edward Sawle',
    url: 'https://static.wixstatic.com/media/057a06_77e5ffd445f84c939cf7e369790ffef2~mv2.png',
  },
  {
    name: 'Stephanie Di Giovanni',
    url: 'https://static.wixstatic.com/media/057a06_970473a0b00e4b55ba59189596b274f0~mv2.png',
  },
  {
    name: 'Darren Sweeney',
    url: 'https://static.wixstatic.com/media/057a06_70a1a3c4579d4071ba2ce11ca7086f8a~mv2.png',
  },
  {
    name: 'Ben Manifold',
    url: 'https://static.wixstatic.com/media/057a06_3ffe8417abe042d184702b378b3ece08~mv2.png',
  },
  {
    name: 'Andrea McClure',
    url: 'https://static.wixstatic.com/media/057a06_9e0188ff6505415b8af96e6289734252~mv2.png',
  },
  {
    name: 'Calum Macdonald',
    url: 'https://static.wixstatic.com/media/057a06_512b5c093eb542e1bc373b92c7a888f3~mv2.png',
  },
  {
    name: 'Josh Di Grandi',
    url: 'https://static.wixstatic.com/media/057a06_1d7ee4d8ecce4d7a816da73d72832b72~mv2.png',
  },
  {
    name: 'Alice Huynh Tran',
    url: 'https://static.wixstatic.com/media/0e8fb1_106c54d55e704c59b2ac0708f54aae1e~mv2.png',
  },
  {
    name: 'Vanessa Liew',
    url: 'https://static.wixstatic.com/media/057a06_7da31be22e7742dab9b799d0c7df66c0~mv2.png',
  },
  {
    name: 'Hannah Nichol',
    url: 'https://static.wixstatic.com/media/057a06_78c14cc0c21048b3958c6cb2b570c553~mv2.png',
  },
  {
    name: 'Tom Payton',
    url: 'https://static.wixstatic.com/media/057a06_c741da21fd6449e9b16663b22905ff38~mv2.png',
  },
  {
    name: 'Mishna Nagda',
    url: 'https://static.wixstatic.com/media/057a06_4ae6165c921540029a9dba2296d740a0~mv2.png',
  },
  {
    name: 'Usaid Rana',
    url: 'https://static.wixstatic.com/media/057a06_28ab1a8072a14423a0ae1736dbfb2907~mv2.png',
  },
  {
    name: 'Merryl Sequeira',
    url: 'https://static.wixstatic.com/media/057a06_6e4b3dc8b5ee45a4a86938e59f8279dc~mv2.png',
  },
  {
    name: 'Ella Burnage',
    url: 'https://static.wixstatic.com/media/057a06_0096add96327403bbbb7a7a4c06d02e2~mv2.png',
  },
  {
    name: 'Peter Wu',
    url: 'https://static.wixstatic.com/media/057a06_fef64a82267c4e6fb9615af664dbd961~mv2.png',
  },
  {
    name: 'Sam Fatovich',
    url: 'https://static.wixstatic.com/media/057a06_7da9a5ade4524d4cafaec40f651a57e9~mv2.png',
  },
  {
    name: 'Helene Lesaffre',
    url: 'https://static.wixstatic.com/media/057a06_84d735817e46449fab289539f5ba67cd~mv2.png',
  },
  {
    name: 'Tammy Lee',
    url: 'https://static.wixstatic.com/media/057a06_67c2ab2047bd44f592f81145f5f15c70~mv2.png',
  },
  {
    name: 'Jordan Randazzo',
    url: 'https://static.wixstatic.com/media/057a06_020869dee8ea44b0ad021a494a20c7f9~mv2.png',
  },
  {
    name: 'Christian Portelli',
    url: 'https://static.wixstatic.com/media/057a06_ce55c6aabe29469e9f9ec79385d3de6f~mv2.png',
  },
  {
    name: 'Lara Urosevic',
    url: 'https://static.wixstatic.com/media/0e8fb1_f3bde8c8946f446abd4480cad91e9fab~mv2.png',
  },
  {
    name: 'Emma Wilkins - Brittain',
    url: 'https://static.wixstatic.com/media/0e8fb1_b3390489e4ec45269c73ddd252e2a29b~mv2.png',
  },
  {
    name: 'Zach Werner',
    url: 'https://static.wixstatic.com/media/057a06_23234617ad994c06ae788a28d17efffb~mv2.png',
  },
  {
    name: 'Hannah Ngo',
    url: 'https://static.wixstatic.com/media/057a06_8312b21bf2cd4a469b76d94585202fa6~mv2.png',
  },
  {
    name: 'Grace Lee',
    url: 'https://static.wixstatic.com/media/057a06_7b49ef41eb82463ab4eeed0003022646~mv2.png',
  },
  {
    name: 'Megan Aspinall',
    url: 'https://static.wixstatic.com/media/057a06_db28649d84af4a2e91c60aea156aec6f~mv2.png',
  },
  {
    name: 'Claudio Pizzirani',
    url: 'https://static.wixstatic.com/media/057a06_428d15900c7b4af482bb91e0feed2754~mv2.png',
  },
  {
    name: 'Georgia Parentich',
    url: 'https://static.wixstatic.com/media/057a06_d2e4c609ded74b78b903798a93640c0c~mv2.png',
  },
  {
    name: "Evan O'Keefe",
    url: 'https://static.wixstatic.com/media/057a06_3711b5b1c2ff46d1b59d055bac403221~mv2.png',
  },
  {
    name: 'Mitch Terry',
    url: 'https://static.wixstatic.com/media/057a06_eb5dd98758f340168ba1c59ebb79c183~mv2.png',
  },
  {
    name: 'Stephanie Munro',
    url: 'https://static.wixstatic.com/media/057a06_d6ca65fef77c4873826efcccf66f6d33~mv2.png',
  },
  {
    name: 'Logan Dongray',
    url: 'https://static.wixstatic.com/media/057a06_1b5df5182ca14043bf301118669a4015~mv2.png',
  },
  {
    name: 'Bronwen Prinsloo',
    url: 'https://static.wixstatic.com/media/0e8fb1_e6dcae7e58034c6e87208d0ef7b71f75~mv2.png',
  },
  {
    name: 'Callum Smith',
    url: 'https://static.wixstatic.com/media/0e8fb1_6f4311f6e4514705902ec7eee6601522~mv2.png',
  },
  {
    name: 'Jacky Lam',
    url: 'https://static.wixstatic.com/media/0e8fb1_a9f1fcdf443848f3b6149f0c36d6b4de~mv2.png',
  },
  {
    name: 'Naomi Crosby',
    url: 'https://static.wixstatic.com/media/0e8fb1_cdd07383e7344c1a85992037f6ce2126~mv2.png',
  },
  {
    name: 'Serena Rodrigues',
    url: 'https://static.wixstatic.com/media/0e8fb1_9e767f7fc0e64d99be12da7752c98966~mv2.png',
  },
  {
    name: 'Alex Mirco',
    url: 'https://static.wixstatic.com/media/0e8fb1_4f196266b8a4417f8346c1f08bc9654a~mv2.png',
  },
  {
    name: 'Paris Ward',
    url: 'https://static.wixstatic.com/media/0e8fb1_078268765d8e44dfa6cf8898d5660740~mv2.png',
  },
  {
    name: 'Anesu Dumba',
    url: 'https://static.wixstatic.com/media/0e8fb1_2b159a24c53f49b990b012a8d6207859~mv2.png',
  },
  {
    name: 'David Lu',
    url: 'https://static.wixstatic.com/media/0e8fb1_1cfbd22197f5461291d885a408f72839~mv2.png',
  },
  {
    name: 'Elishia Dunne',
    url: 'https://static.wixstatic.com/media/0e8fb1_91e87b9e4b6e4ea88b157c8a79d18cde~mv2.png',
  },
  {
    name: 'Jack Haladane',
    url: 'https://static.wixstatic.com/media/0e8fb1_cd4918bb2edb499499a24b3f8ab41521~mv2.png',
  },
  {
    name: 'Jason Wong',
    url: 'https://static.wixstatic.com/media/0e8fb1_f938ab2fc3ee4dadb40a3d3ccd9be082~mv2.png',
  },
  {
    name: 'Holly Thong',
    url: 'https://static.wixstatic.com/media/0e8fb1_9735838c95bb47ee91e258577f48877a~mv2.png',
  },
  {
    name: 'Joshua Bell',
    url: 'https://static.wixstatic.com/media/0e8fb1_f2b358b32e894b1cb1ba0b7b712a58ee~mv2.png',
  },
  {
    name: 'Jessie Somerville',
    url: 'https://static.wixstatic.com/media/0e8fb1_0658e035c29245d39fb401d86f97a822~mv2.png',
  },
  {
    name: 'Gabrielle Percic',
    url: 'https://static.wixstatic.com/media/0e8fb1_89b074e8b3b640a38912c43196207927~mv2.png',
  },
  {
    name: 'Shaun Chambers',
    url: 'https://static.wixstatic.com/media/0e8fb1_540e1828322b4c7fa38babfb3a4eeee7~mv2.png',
  },
  {
    name: 'Timothy Ly',
    url: 'https://static.wixstatic.com/media/0e8fb1_aeb5d2f17fce4bd78b175d3cc4cecc8a~mv2.png',
  },
  {
    name: 'Raman Kahlon',
    url: 'https://static.wixstatic.com/media/0e8fb1_e8c5daad653749cea23d464a38a7e92d~mv2.png',
  },
  {
    name: 'Roxanne Magniet',
    url: 'https://static.wixstatic.com/media/0e8fb1_7ee41c408dcc44d283277d5bda9c83ef~mv2.png',
  },
  {
    name: 'Joyti Mabruk',
    url: 'https://static.wixstatic.com/media/0e8fb1_bd4035a385584d11a73acbd89322fca5~mv2.png',
  },
  {
    name: 'Jarrod Morton',
    url: 'https://static.wixstatic.com/media/0e8fb1_2d5e31e6933a4fb8a01ad8a9dbe3c455~mv2.png',
  },
  {
    name: 'Nicolas Floan',
    url: 'https://static.wixstatic.com/media/0e8fb1_b7310cf9b1f04b4f9c05f1db4ed54cfd~mv2.png',
  },
  {
    name: 'Jack Seprarovic',
    url: 'https://static.wixstatic.com/media/0e8fb1_1c1b320f6f35450da7838bfe953e8724~mv2.png',
  },
  {
    name: 'Ali Nasiriy',
    url: 'https://static.wixstatic.com/media/0e8fb1_56057951ca004d10a1dd725223ce809b~mv2.png',
  },
  {
    name: 'Steve Rivas',
    url: 'https://static.wixstatic.com/media/0e8fb1_52c8cdbc44cf480b8f528d2421689c29~mv2.png',
  },
  {
    name: 'Kristina Constantinou',
    url: 'https://static.wixstatic.com/media/0e8fb1_1aaf6a598d344032aac24fae7430e8cd~mv2.png',
  },
  {
    name: 'Libby Perica',
    url: 'https://static.wixstatic.com/media/0e8fb1_f6b85fa685294f21a12e271c70433319~mv2.png',
  },
  {
    name: 'Jordy Skye',
    url: 'https://static.wixstatic.com/media/0e8fb1_414cf7bfb61040638fbad77f250c56b0~mv2.png',
  },
  {
    name: 'Elliot Charleston',
    url: 'https://static.wixstatic.com/media/0e8fb1_37191c6c95474049a27b1974bd9c5695~mv2.png',
  },
  {
    name: 'Simone Hammond',
    url: 'https://static.wixstatic.com/media/0e8fb1_2857aa1a8f72480bb6e15022bf1facfb~mv2.png',
  },
  {
    name: 'Izzy Rudy',
    url: 'https://static.wixstatic.com/media/0e8fb1_6f1adf67fe114f3782442408777dc638~mv2.png',
  },
  {
    name: 'Dien Nguyen',
    url: 'https://static.wixstatic.com/media/0e8fb1_4bd4ba11c45741c39ae044085bd040f4~mv2.png',
  },
  {
    name: 'Lauren Dornan',
    url: 'https://static.wixstatic.com/media/0e8fb1_9098fecb2e984a999053e54f17df326c~mv2.png',
  },
  {
    name: 'Jack Hallam',
    url: 'https://static.wixstatic.com/media/0e8fb1_4c6ea497c6184f1082a59da1ae640124~mv2.png',
  },
  {
    name: 'Zubair Shariff',
    url: 'https://static.wixstatic.com/media/0e8fb1_a4d563fe4f2148f4b1de41e7d7d3c6c0~mv2.png',
  },
  {
    name: 'James Fiori',
    url: 'https://static.wixstatic.com/media/0e8fb1_bcd9a4cf2f9b4c92ba529d0fadfc11d3~mv2.png',
  },
  {
    name: 'Brian Liu',
    url: 'https://static.wixstatic.com/media/0e8fb1_bedad7e3f57844efaccf34164b918ca1~mv2.png',
  },
  {
    name: 'Manu Nair',
    url: 'https://static.wixstatic.com/media/0e8fb1_1b28ae9bcc0e462f85953a1bfb573158~mv2.png',
  },
  {
    name: 'Pranab Pai',
    url: 'https://static.wixstatic.com/media/0e8fb1_94aa63c312324ae1b620c77117f91422~mv2.png',
  },
  {
    name: 'Thomas Clifton',
    url: 'https://static.wixstatic.com/media/057a06_39ba8b82eaec4a0fbfecbd5f79d9a1b2~mv2.png',
  },
  {
    name: 'Vatsla Trivedi',
    url: 'https://static.wixstatic.com/media/057a06_22c776d9a8c7457faacfc7eca4f766a8~mv2.png',
  },
  {
    name: 'Jessica Chia',
    url: 'https://static.wixstatic.com/media/057a06_c4c7c415e3a24e6dba4aefb4651ce7bf~mv2.png',
  },
  {
    name: 'Rebekah Jones',
    url: 'https://static.wixstatic.com/media/057a06_3d859441140f431f8846330fa2bdb923~mv2.png',
  },
  {
    name: 'Samuel Skuthorp',
    url: 'https://static.wixstatic.com/media/057a06_738575230c5447008b8317253d0225df~mv2.png',
  },
  {
    name: 'Thang Le',
    url: 'https://static.wixstatic.com/media/057a06_b5ad4114b6b643f794cad3f9a5f1ed4b~mv2.png',
  },
  {
    name: 'Nagham Sakhr',
    url: 'https://static.wixstatic.com/media/0e8fb1_1ffb5f6f92714e7590a05832e9b39ee3~mv2.png',
  },
];
// Function to sanitize file names: lowercases and replaces non-alphanumeric sequences with underscores.
function sanitizeFileName(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '_');
}

async function downloadImage(image) {
  const { name, url } = image;
  // Extract file extension from URL (default to .png if not jpg/jpeg/png)
  let ext = path.extname(url);
  if (!['.png', '.jpg', '.jpeg'].includes(ext.toLowerCase())) {
    ext = '.png';
  }
  const fileName = sanitizeFileName(name) + ext;
  const filePath = path.join(downloadPath, fileName);

  console.log(`Downloading ${name} -> ${fileName}`);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed to download ${url}: ${res.statusText}`);
      return;
    }
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));
  } catch (err) {
    console.error(`Error downloading ${url}:`, err);
  }
}

async function main() {
  // Download each image sequentially (or use Promise.all for parallel downloads)
  for (const image of images) {
    await downloadImage(image);
  }
  console.log('Download complete.');
}

main();
