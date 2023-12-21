module.exports = function getGrpedData(obj) {
  const groupedMap = {};

  for (const key in obj) {
    const digit = key.match(/\d+$/)?.[0]; // Extract the digit at the end of the key
    const pureKey = key.replace(/\d+$/, ''); // Remove the number from the key

    if (digit in groupedMap) {
      groupedMap[digit][pureKey] = obj[key];
    } else {
      groupedMap[digit] = { [pureKey]: obj[key] };
    }
  }

  return Object.values(groupedMap);
}



//   Sample input

// const data = {
//     roleName1: ' ice ',
//     company1: 'mradiafrica',
//     startDate1: '2023-11-30',
//     endDate1: '2023-12-29',
//     workDetails1: 'ponicenpe',
//     roleName2: ' ice ',
//     company2: 'mradiafrica',
//     startDate2: '2023-11-30',
//     endDate2: '2023-12-29',
//     workDetails2: 'ponicenpe',
//     roleName3: ' ice ',
//     company3: 'mradiafrica',
//     startDate3: '2023-11-30',
//     endDate3: '2023-12-29',
//     workDetails3: 'ponicenpe',
//     roleName: ' ice ',
//     company: 'mradiafrica',
//     startDate: '2023-11-30',
//     endDate: '2023-12-29',
//     workDetails: 'ponicenpe'
// };

// const groupedData = groupObjectByDigit(data);
// console.log(groupedData);
// [
//     {
//       roleName: ' ice ',
//       company: 'mradiafrica',
//       startDate: '2023-11-30',
//       endDate: '2023-12-29',
//       workDetails: 'ponicenpe'
//     },
//     {
//       roleName: ' ice ',
//       company: 'mradiafrica',
//       startDate: '2023-11-30',
//       endDate: '2023-12-29',
//       workDetails: 'ponicenpe'
//     },
//     {
//       roleName: ' ice ',
//       company: 'mradiafrica',
//       startDate: '2023-11-30',
//       endDate: '2023-12-29',
//       workDetails: 'ponicenpe'
//     },
//     {
//       roleName: ' ice ',
//       company: 'mradiafrica',
//       startDate: '2023-11-30',
//       endDate: '2023-12-29',
//       workDetails: 'ponicenpe'
//     }
//   ]