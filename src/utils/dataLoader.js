let cachedFilterData = null;
let cachedProjectsData = null;

export const getFilterData = () => {
  if (cachedFilterData) {
    return cachedFilterData;
  }

  const filterData = require('../data/filter.json');
  cachedFilterData = filterData;
  return filterData;
};
    
export const getProjectsData = () => {
  if (cachedProjectsData) {
    return cachedProjectsData;
  }

  const projectsData = require('../data/projects.json');
  cachedProjectsData = projectsData;
  return projectsData;
};