/**
 * Web3Forms helper utility for DQNex
 * Submits form data directly to https://api.web3forms.com/submit
 */
export const submitWeb3Form = async (formData, defaultSubject = "New Form Submission from DQNex Website") => {
  const accessKey =
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

  // If access_key not in formData, add it
  if (!formData.has("access_key")) {
    formData.append("access_key", accessKey);
  }

  // If subject not in formData, add it
  if (!formData.has("subject")) {
    formData.append("subject", defaultSubject);
  }

  // If from_name not in formData, add it
  if (!formData.has("from_name")) {
    formData.append("from_name", "DQNex Website");
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data;
};
