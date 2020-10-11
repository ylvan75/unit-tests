export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;
  if (type === "string" && stringArrayOrObject === "") {
    console.log("String");
    return true;
  } else if (
    Array.isArray(stringArrayOrObject) &&
    stringArrayOrObject.length === 0
  ) {
    console.log("array");
    return true;
  } else if (
    type === "object" &&
    Object.keys(stringArrayOrObject).length === 0
  ) {
    console.log("object");
    return true;
  } else return false;
};
