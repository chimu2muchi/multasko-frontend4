import axios from 'axios';
import BulkSearch from "bulksearch";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const MEMO_URL = "https://multasko-backend.herokuapp.com/api/memo";
const CATEGORY_URL = "https://multasko-backend.herokuapp.com/api/category";
// let lastMemoTime = 1610087437;

let multaskoHomeData = {
	data: [
		{
			date: 'January 6',
			memos: [
				[
					{
						text: 'Have a predefined category called "purely transferring", Have a predefined category called "purely transferring", Have a predefined category called "purely transferring",Have a predefined category called "purely transferring" Have a predefined category called "purely transferring", Have a predefined category called "purely transferring", Have a predefined category called "purely transferring",Have a predefined category called "purely transferring"',
						priority_level: 0,
						text_type: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
				],
			],
		},
		{
			date: 'January 6',
			memos: [
				[
					{
						text: 'Have a predefined category called "purely transferring", Have a predefined category called "purely transferring", Have a predefined category called "purely transferring",Have a predefined category called "purely transferring" ',
						priority_level: 0,
						text_type: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 1,
						text_type: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring", Have a predefined category called "purely transferring", Have a predefined category called "purely transferring",Have a predefined category called "purely transferring" ',
						priority_level: 2,
						text_type: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
				],
				[
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
				]
			],
		},
		{
			date: 'January 6',
			memos: [
				[
					{
						text: 'Have a predefined category called "purely transferring", Have a predefined category called "purely transferring", Have a predefined category called "purely transferring",Have a predefined category called "purely transferring" ',
						priority_level: 2,
						text_type: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring", Have a predefined category called "purely transferring", Have a predefined category called "purely transferring",Have a predefined category called "purely transferring"Have a predefined category called "purely transferring", Have a predefined category called "purely transferring", Have a predefined category called "purely transferring",Have a predefined category called "purely transferring"  ',
						priority_level: 2,
						text_type: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
				],
			],
		},
	],
};

let multaskoCategoriesData = {
	data: [
		{
			id: -1,
			name: 'Dancing',
			memos: [
				[
					{
						text: 'Have a predefined category called "purely transferring", Have a predefined category called "purely transferring", Have a predefined category called "purely transferring",Have a predefined category called "purely transferring" ',
						priority_level: 0,
						text_type: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 1,
						text_type: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
				],
				[
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
				]
			],
		},
		{
			id: -2,
			name: 'Singing',
			memos: [
				[
					{
						text: 'Have a predefined category called "purely transferring", Have a predefined category called "purely transferring", Have a predefined category called "purely transferring",Have a predefined category called "purely transferring" ',
						priority_level: 2,
						text_type: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						text_type: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
				],
			],
		},
	],
};

let multaskoListOfCategories = [
  "empty",
];

const bulkSearch = new BulkSearch();
const memoMap = {};

function populateListOfCategories() {
  multaskoListOfCategories.length = 0; // clear array
  for (const item of multaskoCategoriesData.data) {
    multaskoListOfCategories.push(item.name);
  }
}

function hmsToSeconds(hms) {
  const a = hms.split(':'); // split it at the colons
  // minutes are worth 60 seconds. Hours are worth 60 minutes.
  return (+a[0]) * 3600 + (+a[1]) * 60 + (+a[2]); 
}

function dateToString(dateStr) {
  const a = dateStr.split('-'); // split it at the colons
  if(a[2][0] == "0") {
    a[2] = a[2][1];
  }
  // minutes are worth 60 seconds. Hours are worth 60 minutes.
  return monthNames[+a[1] - 1] + " " + a[2]; 
}

function organiseMemos(memos) {
  let curDate = memos[0].date_posted[0];
  let curTime = hmsToSeconds(memos[0].date_posted[1]);
  const homeData = [];
  let dayGroup = [];
  let timeBoxGroup = [];
  for(const memo of memos) {
    const seconds = hmsToSeconds(memo.date_posted[1]);
    if (memo.date_posted[0] != curDate) {
      timeBoxGroup.reverse();
      dayGroup.push(timeBoxGroup);
      homeData.push({
        date: dateToString(curDate),
        memos: dayGroup,
      })
      dayGroup = [];
      timeBoxGroup = [];
    } else if (curTime - seconds > 300) {
      timeBoxGroup.reverse();
      dayGroup.push(timeBoxGroup);
      timeBoxGroup = [];
    }
    curTime = seconds;
    timeBoxGroup.push(memo);
  }

  dayGroup.push(timeBoxGroup);
  homeData.push({
    date: dateToString(curDate),
    memos: dayGroup,
  });
  return homeData;
}

export async function initHomeData() {
  const response = await axios.get(MEMO_URL);
  const memos = response.data.memos;
  if (memos.length == 0) {
    multaskoHomeData.data = [];
    return;
  }
  memos.forEach((memo) => {memoMap[memo.id] = memo});
  memos.forEach((memo) => {bulkSearch.add(memo.id, memo.text)});
  multaskoHomeData.data = organiseMemos(memos);
}

export async function initCategoriesData() {
  const response = await axios.get(CATEGORY_URL);
  multaskoCategoriesData.data = response.data.categories;

  populateListOfCategories();
}

export async function postMemo(text, priority_level) {
  const response = await axios.post(MEMO_URL, 
    {"text": text, "priority_level": priority_level});
  const newMemo = response.data;
  const lastPostedDate = multaskoHomeData.data[0].memos[0][0].date_posted;
  if (newMemo.date_posted[0] != lastPostedDate[0]) {
    multaskoHomeData.data.unshift({
      date: dateToString(newMemo.date_posted[0]),
      memos: [[newMemo]],
    })
  } else if (hmsToSeconds(newMemo.date_posted[1]) - hmsToSeconds(lastPostedDate[1]) > 300) {
    multaskoHomeData.data[0].memos.unshift([newMemo]);
  } else {
    multaskoHomeData.data[0].memos[0].push(newMemo);
  }
  memoMap[newMemo.id] = newMemo;
  bulkSearch.add(newMemo.id, newMemo.text);
}

export async function postCategory(categoryNames) {
  axios.post(CATEGORY_URL, categoryNames.map((name) => ({ "name": name })));
}

export async function putDatabaseMemo(id, text, priority_level) {
  axios.put(MEMO_URL + `?id=${id}`, {"text": text, "priority_level": priority_level});
}

export async function putDatabaseCategory(id, name) {
  axios.put(MEMO_URL + `?id=${id}`, {"name": name});
}

export async function deleteDatabaseMemo(id) {
  axios.delete(MEMO_URL, id);
}

export async function deleteDatabaseCategory(id) {
  axios.delete(CATEGORY_URL, id);
  // multaskoCategoriesData.data = multaskoCategoriesData.data.filter(item => item.id !== id);
}

export function searchMemo(query) {
  const result = bulkSearch.search(query);
  const resultMemos = result.map((id) => memoMap[id]);
  resultMemos.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)
  console.dir(resultMemos);
  if (resultMemos.length == 0) {
    return [];
  }
  return organiseMemos(resultMemos);
}

initHomeData();
initCategoriesData();
const service = {
  multaskoHomeData: multaskoHomeData,
  multaskoCategoriesData: multaskoCategoriesData,
  multaskoListOfCategories: multaskoListOfCategories, 
  searchMemo: searchMemo,
  postMemo: postMemo,
}

// putMemo("a test message", 1);
export default service;
