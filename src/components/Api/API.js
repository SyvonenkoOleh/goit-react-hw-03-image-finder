import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';
axios.defaults.params = {
  key: '31446956-3401e915dba4e7bdf39ba13d6',
  per_page: 12,
};

const fetchImages = (value, page = 1) => {
  return axios
    .get('api/', {
      params: {
        q: value,
        page,
      },
    })
    .then(data => data);
};

export default fetchImages;