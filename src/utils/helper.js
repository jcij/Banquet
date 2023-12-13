// Base 64 Encode
export const ENCODE = (code) =>
  Buffer.from(
    `Procuelite-Coding-$2y.S/${Buffer.from(`${code}`).toString(
      "base64"
    )}/$2y.vin-Procuelite-Coding`
  ).toString("base64");

// Base 64 Decode
export const DECODE = (code) => {
  Buffer.from(
    `${Buffer.from(`${code}`, "base64").toString("ascii")}`.split("/")[1],
    "base64"
  ).toString("ascii");
};

export function setLocalData(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // console.log("error", error)
  }
}

export function removeLocalData(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    // console.log("error", error)
  }
}
export function getLocalData(key) {
  try {
    let data = localStorage.getItem(key);
    return data;
  } catch (error) {
    // console.log("error", error)
  }
}

export const ReduceImages = (data) => {
  try {
    if (!data || data?.length === 0) return [];
    return data?.reduce((acc, curr) => {
      const { images } = curr;
      images.forEach((el) => acc.push(el));
      return acc;
    }, []);
  } catch (error) {
    console.error("ReduceImages-error", error);
  }
};
export const isEmpty = (value) => {
  try {
    switch (value) {
      case "":
      case null:
      case undefined:
      case "undefined":
      case "null":
        return true;
      default:
        return false;
    }
  } catch (error) {
    console.log(error);
  }
};
