//require == import

const { faker, fakerFR } = require("@faker-js/faker"); //오브젝트만 가져오기
const koreanName = require("korean-name-generator");
// const k_maleName = koreanName.generate(true);
// const k_femaleName = koreanName.generate(false);

const { fakerKO } = require("@faker-js/faker");

// const namer = koreanName.generate(true);
const create = require("csv-writer").createObjectCsvWriter;

const csvWriter = create({
  path: "d:/yse_front_back/DB/CSV/test.csv",
  header: [
    { id: "id", title: "ID" },
    { id: "name", title: "NAME" },
    { id: "phone", title: "PHONE" },
    { id: "address", title: "ADDRESS" },
  ],
});

// const records = [
//   { name: "Alice", lang: "Korea, Js, React" },
//   { name: "James", lang: "Eng, Jpn" },
// ];

// const nameList = [
//   "Alice",
//   "Daniel",
//   "Yokee",
//   "Tom",
//   "Jerry",
//   "Edward",
//   "Joy",
//   "Sadness",
// ];

const langList = [
  "korean",
  "japanese",
  "chinese",
  "russian",
  "mongolian",
  "french",
  "german",
  "spanish",
];

const makePhone = () =>
  "010" +
  Array(8)
    .fill(0)
    .map(() => String(Math.floor(Math.random() * 9)))
    .join("");

const makeDatum = (id) => {
  // const nameRan = Math.floor(Math.random() * nameList.length);
  const langRan = Math.floor(Math.random() * langList.length);
  // return { name: nameList[nameRan], lang: langList[langRan] };
  // return { name: fakerFR.person.fullName(), lang: langList[langRan] };
  const gender = !!Math.floor(Math.random() * 1); // true or false
  return {
    id: id,
    name: koreanName.generate(gender),
    phone: makePhone(),
    address: fakerKO.location.city(),
  };
};

const newRecords = Array(1000)
  .fill(0)
  .map((v, i) => makeDatum(i));

csvWriter.writeRecords(newRecords);
