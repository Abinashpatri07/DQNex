/**
 * Frontend Contact API Client for DQNex
 * Communicates with the Backend Express + Nodemailer SMTP server
 */

const getApiBaseUrl = () => {
  const url = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
  return url.replace(/\/+$/, ""); // remove trailing slashes
};

export const submitContactForm = async (formDataOrObj) => {
  const baseUrl = getApiBaseUrl();

  // Convert FormData to plain object
  let payload = {};
  if (formDataOrObj instanceof FormData) {
    for (const [key, value] of formDataOrObj.entries()) {
      payload[key] = value;
    }
  } else {
    payload = formDataOrObj;
  }

  const response = await fetch(`${baseUrl}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.message ||
        `Server responded with error (${response.status}). Please check SMTP backend.`
    );
  }

  return data;
};

export const submitNewsletter = async (email) => {
  const baseUrl = getApiBaseUrl();

  const response = await fetch(`${baseUrl}/newsletter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.message ||
        `Server responded with error (${response.status}). Please check SMTP backend.`
    );
  }

  return data;
};
