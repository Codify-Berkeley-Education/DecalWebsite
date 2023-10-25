"use strict";(self.webpackChunkde_cal_website=self.webpackChunkde_cal_website||[]).push([[38],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const s={sidebar_position:4},r="Assignment 4 APIs",i={unversionedId:"Assignments/Assignment-4-APIs",id:"Assignments/Assignment-4-APIs",title:"Assignment 4 APIs",description:"Assignment Link",source:"@site/docs/Assignments/Assignment-4-APIs.md",sourceDirName:"Assignments",slug:"/Assignments/Assignment-4-APIs",permalink:"/DecalWebsite/docs/Assignments/Assignment-4-APIs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Assignments/Assignment-4-APIs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Assignment 3: Typescript Basics",permalink:"/DecalWebsite/docs/Assignments/Assignment-3-Typescript"},next:{title:"Assignment-5-Prisma",permalink:"/DecalWebsite/docs/Assignments/Assignment-5-Prisma"}},l={},p=[{value:"Assignment Link",id:"assignment-link",level:2},{value:"Assignment Overview",id:"assignment-overview",level:2},{value:"Setting up Bun",id:"setting-up-bun",level:2},{value:"Access the Spotify API",id:"access-the-spotify-api",level:2},{value:"Getting an access token",id:"getting-an-access-token",level:2},{value:"Problem 1: Get an artist id",id:"problem-1-get-an-artist-id",level:2},{value:"Checking your solution",id:"checking-your-solution",level:3},{value:"Problem 2: Get anything",id:"problem-2-get-anything",level:2},{value:"Problem 3: Get an artist&#39;s albums",id:"problem-3-get-an-artists-albums",level:2},{value:"Problem 4: Get and Album&#39;s Tracks",id:"problem-4-get-and-albums-tracks",level:2},{value:"Problem 5: Recommend me a song!",id:"problem-5-recommend-me-a-song",level:2},{value:"Problem 6: Recommend me some more!",id:"problem-6-recommend-me-some-more",level:2},{value:"Common Pitfalls and Useful Tips",id:"common-pitfalls-and-useful-tips",level:3},{value:"Optional extensions",id:"optional-extensions",level:2},{value:"Interactive CLI",id:"interactive-cli",level:3},{value:"Actual User Sign In",id:"actual-user-sign-in",level:3},{value:"Submission",id:"submission",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...s}=e;return(0,o.kt)(c,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"assignment-4-apis"},"Assignment 4 APIs"),(0,o.kt)("h2",{id:"assignment-link"},"Assignment Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://classroom.github.com/a/OVkTRCO2"},"Accept the Assignment")),(0,o.kt)("h2",{id:"assignment-overview"},"Assignment Overview"),(0,o.kt)("p",null,"In this assignment, you will use the Spotify API to recommended songs based on a user's favorite songs, albums, and artists. We will walk you through making a few simple API calls yourself, and then let you free."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For a variety of reasons, this assignment will not have auto grader tests. First, the Spotify recommendations API may change what it recommends over time as new songs come out. Second, in the time it would take to create robust auto grader test cases, the course staff could instead create more new assignments or better lecture slides. Our ultimate goal is to maximize learning, not maximize our ability to measure learning.")),(0,o.kt)("h2",{id:"setting-up-bun"},"Setting up Bun"),(0,o.kt)("p",null,"For this assignment, we are trying out a new package manager and NodeJs alternative. Bun! Check out ",(0,o.kt)("a",{parentName:"p",href:"https://bun.sh/docs/installation"},"the docs")," to install it, and instead of using the prefix npm/npx, use bun to install packages or execute files. If you encounter issues using Bun on Windows, it may make sense to delete the package.json, and recreate the project with npm. If you have issues with this, please message in the discord and/or come to office hours.Also check out the ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=BsnCpESUEqM"},"Bun Release Video")," for a rundown of the performance benefits over NodeJs."),(0,o.kt)("h2",{id:"access-the-spotify-api"},"Access the Spotify API"),(0,o.kt)("p",null,"In order to use the Spotify API, we need to get an access token. We will be following the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow"},"client credentials")," authorization flow."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a Spotify account if you do not already have one. It can be a free account."),(0,o.kt)("li",{parentName:"ol"},"Log into Spotify through the ",(0,o.kt)("a",{parentName:"li",href:"https://developer.spotify.com/"},"developer portal"),". Then view your Spotify ",(0,o.kt)("a",{parentName:"li",href:"https://developer.spotify.com/dashboard"},"developer dashboard"),' and click "Create app"'),(0,o.kt)("li",{parentName:"ol"},"Fill in all of the fields. We will not need a redirect URI, so just input any url (such as ",(0,o.kt)("a",{parentName:"li",href:"https://www.google.com/"},"https://www.google.com/"),")"),(0,o.kt)("li",{parentName:"ol"},"Once the app is created, click on the app and then click settings. We will use the copy Client ID and Client Secret into the .env file. Once you have them added to your .env file, add .env to the end of your .gitignore file so that you don't accidentally publish them to GitHub.")),(0,o.kt)("p",null,"Throughout this assignment, you can test your solutions and explore additional capabilities of the Spotify API through the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/web-api"},"Web API docs"),". I recommend you leave them open for reference throughout the assignment."),(0,o.kt)("h2",{id:"getting-an-access-token"},"Getting an access token"),(0,o.kt)("p",null,"Your Client ID and Client Secret are not enough to access the Spotify API. You need to ask Spotify to verify the Client ID and Client Secret and give you an access token to accompany all requests. This is handled for you with the getToken.ts file. Run the file with ",(0,o.kt)("strong",{parentName:"p"},">bun getToken.ts"),", and your .env file should be updated with an access token. Now we are ready to start requesting data from the API!"),(0,o.kt)("p",null,"Unfortunately, these access tokens expire every hour, and you will need to rerun ",(0,o.kt)("strong",{parentName:"p"},">bun getToken.ts")," every hour to get a new access token."),(0,o.kt)("h2",{id:"problem-1-get-an-artist-id"},"Problem 1: Get an artist id"),(0,o.kt)("p",null,"This first problem walks you through step by step how we will make a sample API call. We need to build out our request URI, and provide our access token in our headers. All of the requests we make in this assignment will look something like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Get the response\nconst response: any = await ky.get(encodeURI(request_uri), authOptions).json();\n// encodeURI replaces characters not allowed to be part of a URI with their URI equivalents.\n// For example, spaces are replaced with %20 and commas are replaced with %2C\n")),(0,o.kt)("p",null,"We already have the ",(0,o.kt)("strong",{parentName:"p"},"authOptions")," object set up for you, so all you need to do is import it from ",(0,o.kt)("strong",{parentName:"p"},"constants.ts"),". The only thing we need to change is the request_uri."),(0,o.kt)("p",null,"All of the request URIs for the Spotify API, and most web APIs, are structured like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const uri = "https://api.spotify.com/v1/{endpoint}/{query-parameters}";\n')),(0,o.kt)("p",null,"We have a base URI, an endpoint, and all of our query parameters."),(0,o.kt)("p",null,"For this problem, we are going to user the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/web-api/reference/search"},"search endpoint")," to find the id of a given artist after searching for them. We need to be able to get the id of artists, albums, and tracks, because we access these resources from the API using the id, not the name. The code is mostly scaffolded for you, so just fill in the blanks with the //TODO comments."),(0,o.kt)("h3",{id:"checking-your-solution"},"Checking your solution"),(0,o.kt)("p",null,"Because this assignment is not autograded, the best way to check your solution is by using the web api client in embedded in the API docs themselves. Run your file with your function, and log the output to the console. Then, you can see if the output matches the output you get from the web api client, or you can simply log into Spotify and verify the information for yourself."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"API-Client",src:n(4148).Z,width:"2278",height:"986"})),(0,o.kt)("p",null,"You can try running queries using either their built in web interface, or using the curl commands it outputs. For most questions, we will also provide a few sample outputs that you can check your answers against. For others, you can open the Spotify app and check the results yourself!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Expected Outputs\ngetArtistId("Taylor Swift"); //06HL4z0CvFAxyc27GXpf02\ngetArtistId("Kendrick Lamar"); //2YZyLoL8N0Wb9xBt1NhZWg\ngetArtistId("Taylor Swift"); //null (there is no artist with that exact name spelling)\n')),(0,o.kt)("h2",{id:"problem-2-get-anything"},"Problem 2: Get anything"),(0,o.kt)("p",null,"Besides artists, we also want to be able to get albums and individual tracks (songs). We also want to bundle the information about the name, id, and resource type (track, artist, or album) into a single Resource object (the Resource type is defined for you in types.ts). Build upon your getArtistId function to be able to return a resource object for any type of resource, given the name of the resource. Return null if there is no resource that matches the given name."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},'You only need to worry about implementing the a simple solution that assumes there is only one exact result for your search query. In reality, searching a track like "Skin" will match songs by Sabrina Carpenter, Rihanna, Mac Miller, and several other artists. Don\'t worry about implementing these edge cases right off the bat, but later feel free to modify your function to return all of the results that are an exact match.'),(0,o.kt)("p",{parentName:"admonition"},"While you are testing your solution, use unique track/album/artist names if you would like to avoid these edge cases.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Sample Inputs\nlet response1: Resource = await getItem("Olivia Rodrigo", "artist");\nlet response2: Resource = await getItem("Olivia Rodrigo", "album");\nlet response3: Resource = await getItem("Red (Taylor\'s Version)", "album");\nlet response4: Resource = await getItem("Plastic Hearts", "track");\n\n// Expected Outputs\nresponse1 = {\n  name: "Olivia Rodrigo",\n  SpotifyID: "1McMsnEElThX1knmY4oliG",\n  type: "artist",\n};\nresponse2 = null; // There is no album titled "Olivia Rodrigo"\nresponse3 = {\n  name: "Red (Taylor\'s Version)",\n  SpotifyID: "6kZ42qRrzov54LcAk4onW9",\n  type: "album",\n};\nresponse4 = {\n  name: "Plastic Hearts",\n  SpotifyID: "6qCsKKS7Ol63SJW3LOIX5R",\n  type: "track",\n};\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Completing this assignment would be all but impossible without referencing the Spotify API docs. For this question, reference their documentation on the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/web-api/reference/search"},"search endpoint"),". For each remaining question, we will link the corresponding endpoint in the Spotify docs.")),(0,o.kt)("h2",{id:"problem-3-get-an-artists-albums"},"Problem 3: Get an artist's albums"),(0,o.kt)("p",null,"Use your getItem function to get all of an artist's albums given the artist's name. Return an array of Resource objects, which should only contain albums. If the artist does not have any albums, return an empty array. If there is no artist with the given name, return null."),(0,o.kt)("p",null,"Reference the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/web-api/reference/get-an-artists-albums"},"artist's albums endpoint")," to help you with this problem."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'let response: Resource[] = await getAlbums("Travis Scott");\n\n// Expected response\nresponse = [\n  {\n    name: "UTOPIA",\n    SpotifyID: "18NOKLkZETa4sWwLMIm0UZ",\n    type: "album",\n  },\n  {\n    name: "JACKBOYS",\n    SpotifyID: "1Sf8GsXG32t0jNrX11xqWx",\n    type: "album",\n  },\n  {\n    name: "ASTROWORLD",\n    SpotifyID: "41GuZcammIkupMPKH2OJ6I",\n    type: "album",\n  },\n  {\n    name: "Huncho Jack, Jack Huncho",\n    SpotifyID: "6FED8aeieEnUWwQqAO9zT1",\n    type: "album",\n  },\n  {\n    name: "Birds In The Trap Sing McKnight",\n    SpotifyID: "42WVQWuf1teDysXiOupIZt",\n    type: "album",\n  },\n  {\n    name: "Rodeo",\n    SpotifyID: "4PWBTB6NYSKQwfo79I3prg",\n    type: "album",\n  },\n];\n')),(0,o.kt)("h2",{id:"problem-4-get-and-albums-tracks"},"Problem 4: Get and Album's Tracks"),(0,o.kt)("p",null,"Similarly to how you got an artist's albums, try getting all of the albums on a track given the album's name. Return an array of Resource objects, which should only contain tracks. If the album does not have any tracks, return an empty array. If there is no album with the given name, return null."),(0,o.kt)("p",null,"Reference the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/web-api/reference/get-an-albums-tracks"},"album's tracks endpoint")," to help you with this problem."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'let response: Resource[] = await getTracks("how i\'m feeling now");\n\n// Expected response\nresponse = [\n  {\n    name: "pink diamond",\n    SpotifyID: "3V0PgcsUMlAGXwCD0084pY",\n    type: "track",\n  },\n  {\n    name: "forever",\n    SpotifyID: "5GsJIVCBFjhCcUwJaTW2sB",\n    type: "track",\n  },\n  {\n    name: "claws",\n    SpotifyID: "7Dexi5Z2IowCkHrnzlWysc",\n    type: "track",\n  },\n  {\n    name: "7 years",\n    SpotifyID: "4jQDJPgw3qkc1T2f1safdy",\n    type: "track",\n  },\n  {\n    name: "detonate",\n    SpotifyID: "1M6VHCglQ2PLWeAsyhgEUH",\n    type: "track",\n  },\n  {\n    name: "enemy",\n    SpotifyID: "51qNCY0lUymE88LPDUqFXd",\n    type: "track",\n  },\n  {\n    name: "i finally understand",\n    SpotifyID: "2PBcNVg8jB1e5kVkjXJyZ5",\n    type: "track",\n  },\n  {\n    name: "c2.0",\n    SpotifyID: "5gNTRfMRPZg1U07j7KSSaG",\n    type: "track",\n  },\n  {\n    name: "party 4 u",\n    SpotifyID: "2RdEC8Ff83WkX7kDVCHseE",\n    type: "track",\n  },\n  {\n    name: "anthems",\n    SpotifyID: "2ljvO8ZpKFMT3HXwCjW4Yw",\n    type: "track",\n  },\n  {\n    name: "visions",\n    SpotifyID: "5oZIhePTCzvWskktjYgdjr",\n    type: "track",\n  },\n];\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"As an optional extension, try creating a function in a new file that combines your answers to problems 3 and 4 to get all of an artist's tracks given the artist's name.")),(0,o.kt)("h2",{id:"problem-5-recommend-me-a-song"},"Problem 5: Recommend me a song!"),(0,o.kt)("p",null,'So far we have done lots of querying, but we haven\'t actually gotten recommended any songs. To start, we will simply recommend the most popular song from an album or artist outside of a list of excluded songs that we have "already listened to."'),(0,o.kt)("p",null,"For getting an artist's most popular songs, use the pre defined ",(0,o.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/web-api/reference/get-an-artists-top-tracks"},"Artist's top tracks")," endpoint, and return the first result."),(0,o.kt)("p",null,"There is no endpoint for the most popular song in an album, but every track returned by the Spotify API has a popularity associated with it. To get the most popular song in an album, get all of the tracks in the album, and then return the track with the highest popularity. Use the same album's tracks endpoint that you used in problem 4."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Since our approach is different depending on if the resource is an album or an artist, you may want to create two separate functions to handle each case. Then, you can call the appropriate function from the recommendSong function.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const artistSeed: Resource = {\n  name: "Olivia Rodrigo",\n  SpotifyID: "1McMsnEElThX1knmY4oliG",\n  type: "artist",\n};\nconst albumSeed: Resource = {\n  name: "Red (Taylor\'s Version)",\n  SpotifyID: "6kZ42qRrzov54LcAk4onW9",\n  type: "album",\n};\n\n// excluded songs should not be returned, even if they are the most popular\nconst excludedSongs: Resource[] = [\n  {\n    name: "drivers license",\n    SpotifyID: "7lPN2DXiMsVn7XUKtOW1CS",\n    type: "track",\n  },\n  {\n    name: "deja vu",\n    SpotifyID: "6PERP62TejQjgHu81OHxgM",\n    type: "track",\n  },\n  {\n    name: "good 4 u",\n    SpotifyID: "6PERP62TejQjgHu81OHxgM",\n    type: "track",\n  },\n];\n\nlet response1: Resource = await recommendSong(artistSeed, []); // No excluded songs\n\n// Expected output\nresponse1 = {\n  name: "vampire",\n  SpotifyID: "1kuGVB7EU95pJObxwvfwKS",\n  type: "track",\n};\n\nlet response2: Resource = await recommendSong(artistSeed, excludedSongs); // With some excluded songs\n\n// Expected output\nresponse2 = {\n  name: "get him back!",\n  SpotifyID: "2gyxAWHebV7xPYVxqoi86f",\n  type: "track",\n};\n\nlet response3: Resource = await recommendSong(albumSeed, []); // Try an album this time\n\n// Expected output\nresponse3 = {\n  name: "All Too Well (10 Minute Version) (Taylor\'s Version) (From The Vault)",\n  SpotifyID: "5enxwA8aAbwZbf5qCHORXi",\n  type: "track",\n};\n')),(0,o.kt)("p",null,'You should also be able to verify that your recommendation function is returning an artist\'s top songs by checking them out in Spotify. As we can see (as of the date this assignment is created!) Olivia Rodrigo\'s most popular track is "vampire", and her most popular track not in our list of excluded tracks is "get him back!"'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Olivia&#39;s Top Tracks",src:n(7930).Z,width:"1594",height:"970"})),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The data for this problem is likely to become out of date very quickly. As a result, don't worry if you don't get exactly the same output.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Our current implementation returns a song recommendation based on popularity, but it does not actually say how popular the song it. As an optional extension, try modifying your function to return a tuple with the song resource, and the popularity of the song.")),(0,o.kt)("h2",{id:"problem-6-recommend-me-some-more"},"Problem 6: Recommend me some more!"),(0,o.kt)("p",null,"Getting a single song, the most popular one at that, isn't altogether too interesting. Fortunately, Spotify can recommend us a whole playlist of songs based on a set of criteria we specify. Given a list of artist resources and song resources to use as a seed, and a settings object (defined in types.ts), return Spotify's recommended tracks."),(0,o.kt)("p",null,"Reference the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/web-api/reference/get-recommendations"},"recommendations endpoint")," to see exactly how to format your request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Used to specify the target attributes of recommended from the /recommendations endpoint\n// All values are 0-1 except for popularity, which is 0-100\nconst options: Settings = {\n  target_danceability: 0.7,\n  target_energy: 0.7,\n  target_instrumentalness: 0.1,\n  target_popularity: 40,\n};\n\n// Admittedly, a very strange set of seed resources but if you want\n// to change it, help teach the education program next semester!\nconst seedResources: Resource[] = [\n  {\n    name: "vampire",\n    SpotifyID: "1kuGVB7EU95pJObxwvfwKS",\n    type: "track",\n  },\n  {\n    name: "bad idea right?",\n    SpotifyID: "3IX0yuEVvDbnqUwMBB3ouC",\n    type: "track",\n  },\n  {\n    name: "Kendrick Lamar",\n    SpotifyID: "2YZyLoL8N0Wb9xBt1NhZWg",\n    type: "artist",\n  },\n  {\n    name: "Kanye West",\n    SpotifyID: "5K4W6rqBFWDnAN6FQUkS6x",\n    type: "artist",\n  },\n];\n\nlet response = await recommendPlaylist(seedResources, options);\n\n// It is very likely you will not get this exact output, as the recommendations API changes over time\n// However, your output should be similar\nresponse = [\n  {\n    name: "Xscape (feat. A$AP Twelvyy)",\n    SpotifyID: "5suOxurRGMcdcPwJJjkgRG",\n    type: "track",\n  },\n  {\n    name: "Bop to the Top - Nini & Kourtney Version",\n    SpotifyID: "2po9ojtzr8XpirRFNHjO83",\n    type: "track",\n  },\n  {\n    name: "Crushing Me - From the Paramount+ Series \u2018Grease: Rise of the Pink Ladies\'",\n    SpotifyID: "3jcUMe0q7KTHfJsGaWU8Oa",\n    type: "track",\n  },\n  {\n    name: "Heard \'Em Say",\n    SpotifyID: "2PFNTHR4sA8m9rPPtYXhl7",\n    type: "track",\n  },\n  {\n    name: "21",\n    SpotifyID: "2D2lazsae9o1UoVPUAdxyT",\n    type: "track",\n  },\n  {\n    name: "Back Like That - Remix",\n    SpotifyID: "26E0bdbWy3ekgAMmHN9HlF",\n    type: "track",\n  },\n  {\n    name: "She\'s Pretty",\n    SpotifyID: "4DXO0suj4KLYTtO6L3gOby",\n    type: "track",\n  },\n  {\n    name: "Love the Haters",\n    SpotifyID: "1glFzU55j6ji6xYEMlvEUx",\n    type: "track",\n  },\n  {\n    name: "tired of california",\n    SpotifyID: "2SOhUiyKpnlshR3SFh733w",\n    type: "track",\n  },\n  {\n    name: "We Can Make It Better",\n    SpotifyID: "3NR4gpFhwBWJgUtkl8woeY",\n    type: "track",\n  },\n  {\n    name: "City Boy Summer",\n    SpotifyID: "4HArHoORbKn0ioYA6cDRhz",\n    type: "track",\n  },\n  {\n    name: "Fortunate (Feat. Kanye West, Dreezy & CHLLER)",\n    SpotifyID: "365eCTLl2eaWqrCGhnZu4e",\n    type: "track",\n  },\n  {\n    name: "Game Recognize Game (Interlude)",\n    SpotifyID: "0r1QdPRP58kJFeD2vlWvah",\n    type: "track",\n  },\n  {\n    name: "Bizaardvark Theme Song",\n    SpotifyID: "4lssBDAmUk4e7rv2ajY6H6",\n    type: "track",\n  },\n  {\n    name: "Average Joe",\n    SpotifyID: "3r4S1J4YCkx2fuqH2eL9fz",\n    type: "track",\n  },\n  {\n    name: "i\'m mad lol",\n    SpotifyID: "0A37VdcNRkc9QzOh4zM1j2",\n    type: "track",\n  },\n  {\n    name: "it could\u2019ve been u",\n    SpotifyID: "4kUs9LuptVXtLqm2CK9JA7",\n    type: "track",\n  },\n  {\n    name: "slivered heart",\n    SpotifyID: "4tZL4ZnwuBoGWBg8s8nSu1",\n    type: "track",\n  },\n  {\n    name: "SHE SAID HE SAID SHE SAID",\n    SpotifyID: "61SwOvGpjoANrBOVgBZvMi",\n    type: "track",\n  },\n  {\n    name: "The Comeback Song",\n    SpotifyID: "2WLp3CjnM7iLR7aTrNdwcX",\n    type: "track",\n  },\n];\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We only specify a subset of the possible query parameters in our settings object. Feel free to add more if you would like to experiment with the recommendations API more. You can also edit the Settings type in types.ts so that you can still pass your additional query parameters in the same settings object.")),(0,o.kt)("h3",{id:"common-pitfalls-and-useful-tips"},"Common Pitfalls and Useful Tips"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The keys of the settings object are the query parameters that you will need to use. You can use the ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"},"Object.entries")," function to get an array of all of the key value pairs in the object. I also used the filter function to filter out any undefined keys, the map function to format the key value pairs into a string, and the join function to ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"},"join")," all of the key value pairs together into a single string separated by '&' characters to chain together the query parameters."),(0,o.kt)("li",{parentName:"ol"},"The recommendations endpoint does not accept albums! If any albums are passed into the seedResources array, you should ignore them."),(0,o.kt)("li",{parentName:"ol"},"If you are having trouble properly formatting all of the query parameters, try to get the function working with a single song, a single artist, and an empty settings object before implementing the rest of the functionality."),(0,o.kt)("li",{parentName:"ol"},"Make sure that all of your settings are within the range expected by the API!")),(0,o.kt)("h2",{id:"optional-extensions"},"Optional extensions"),(0,o.kt)("h3",{id:"interactive-cli"},"Interactive CLI"),(0,o.kt)("p",null,"Currently all of the functionality of our application is hidden behind a function call. Try creating an interactive CLI that allows the user to input their favorite songs, albums, and artists, and then returns a list of recommended songs. Check out this ",(0,o.kt)("a",{parentName:"p",href:"https://www.codecademy.com/article/getting-user-input-in-node-js"},"codeacademy guide")," which shows you how to get user input in NodeJs."),(0,o.kt)("h3",{id:"actual-user-sign-in"},"Actual User Sign In"),(0,o.kt)("p",null,"Accessing the web API through the a client access token only gives us read access to general Spotify data, and doesn't let us read or write any personal user data. Try implementing the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow"},"authorization code")," authentication flow, which does let you directly edit your user data through the API. Once you are able to edit your personal account information, try saving our recommended playlists to your profile!"),(0,o.kt)("p",null,"If you want any help implementing any of these extensions, let course staff know and we would be happy to help during office hours!"),(0,o.kt)("h2",{id:"submission"},"Submission"),(0,o.kt)("p",null,"As stated, there are no autograder tests for this assignment. However, please still give it your best effort, and push your changes to GitHub so that course staff can view them."))}m.isMDXComponent=!0},7930:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Olivia-b0660adbd1ca7c4c44e41126316af2e5.png"},4148:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SpotifyApiClient-d4f9001e05d7f53dec9bd53990b30a29.png"}}]);