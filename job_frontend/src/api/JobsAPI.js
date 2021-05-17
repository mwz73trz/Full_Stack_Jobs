const BASE_URL = 'http://localhost:8000/jobs';

const fetchJobByID = async (jobID) => {
  const response = await fetch(`${BASE_URL}/${jobID}`);
  const data = await response.json();
  return data;
};

const fetchJobs = async (filters = null) => {
  const url = filters ? `${BASE_URL}?filter={"where":${filters}}` : BASE_URL;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const addJob = (newJob) => {
  return fetch(`${BASE_URL}/`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(newJob)
  });
  };

  const editJob = (jobObject, jobID) => {
    return fetch(`${BASE_URL}/${jobID}/`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "PATCH",
      body: JSON.stringify(jobObject)
    });
  };

  const deleteJob = (jobID) => {
    return fetch(`${BASE_URL}/${jobID}/`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "DELETE",
      body: jobID
    });
  };

export {
  fetchJobByID, 
  fetchJobs,
  addJob,
  editJob,
  deleteJob
};