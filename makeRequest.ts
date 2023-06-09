import axios from 'axios';

export const makeRequest = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    Authorization:
      'bearer ' +
      '416d2f74d6641347090c61c1739c542a82a857a4f1536a5685f790b53b4950a3580246c9abe5b2544c33c965f22071f5656063f41f511e7cca534900fd543efc0fe6b1c72d3d430cbe6095e3f27e98c69791e841bc1a78a92d5dffe7885dcf53e56e517d91f478169071dde7a0e60494456a0ead45edb6e4b3af51bc64a406fb',
  },
});
