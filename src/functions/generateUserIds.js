function generateUserName(userNames) {
  const cleanName = Object.values(userNames)
    .join('')
    .replace(/ /g, '')
    .toLowerCase();

  let userId = cleanName;
  
  let checkUserId = false;

  if (checkUserId) {
    userId = Object.values(userNames)
      .reverse()
      .join('')
      .replace(/ /g, '')
      .toLowerCase();
  }

  return { userId };
}

module.exports={generateUserName}