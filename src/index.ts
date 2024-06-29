export const randomString = (length = 16): string => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};

export function formatDateTime(dateStr: string) {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("tr-TR", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
    .format(date)
    .replace(",", "");
}

export function calculateCRC32(str: string) {
  let crc = 0xffffffff; // Initialize with all bits set to 1
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    crc ^= charCode; // XOR with the next byte

    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ ((crc & 1) * 0xedb88320);
    }
  }
  crc = crc ^ 0xffffffff;
  return (crc >>> 0).toString(16);
}

export function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  const res = btoa(binary);
  return res;
}
export function base64ToArrayBuffer(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}
