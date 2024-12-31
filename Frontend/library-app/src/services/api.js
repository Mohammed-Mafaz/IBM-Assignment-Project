import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

/**
 * Fetch all entities for the specified route.
 * @param {string} entity - The entity route (e.g., 'books', 'publishers', 'book-authors').
 * @returns {Promise} - Axios response promise.
 */
export const fetchEntities = async (entity) => {
  // If entity is 'authors', change the URL to '/book_authors'
  const entityUrl = entity === 'authors' ? 'book-authors' : entity;
  
  return axios.get(`${API_URL}/${entityUrl}`);
};

/**
 * Create a new entity for the specified route.
 * @param {string} entity - The entity route (e.g., 'books', 'publishers').
 * @param {Object} data - Data for the new entity.
 * @returns {Promise} - Axios response promise.
 */
export const createEntity = async (entity, data) => {
  // If entity is 'authors', change the URL to '/book_authors'
  const entityUrl = entity === 'authors' ? 'book-authors' : entity;
  
  return axios.post(`${API_URL}/${entityUrl}`, data);
};

/**
 * Update an existing entity by ID for the specified route.
 * @param {string} entity - The entity route (e.g., 'books', 'publishers').
 * @param {string} id - The ID of the entity to update.
 * @param {Object} data - Updated data for the entity.
 * @returns {Promise} - Axios response promise.
 */
export const updateEntity = async (entity, id, data) => {
  // If entity is 'authors', change the URL to '/book_authors'
  const entityUrl = entity === 'authors' ? 'book-authors' : entity;
  
  return axios.put(`${API_URL}/${entityUrl}/${id}`, data);
};

/**
 * Delete an entity by ID for the specified route.
 * @param {string} entity - The entity route (e.g., 'books', 'publishers').
 * @param {string} id - The ID of the entity to delete.
 * @returns {Promise} - Axios response promise.
 */
export const deleteEntity = async (entity, id) => {
  // If entity is 'authors', change the URL to '/book_authors'
  const entityUrl = entity === 'authors' ? 'book-authors' : entity;
  
  return axios.delete(`${API_URL}/${entityUrl}/${id}`);
};
