document.addEventListener('DOMContentLoaded', function () {
  fetch('filter.json')
    .then((response) => response.json())
    .then((data) => {
      // Create checkbox dropdown for status
      createDropdowns(data);

      // Add event listener to dropdown toggles
      addDropdownEventListeners();

      // Add event listener to close dropdowns when clicking outside
      document.addEventListener('click', closeDropdownsOnClickOutside);
    })
    .catch((error) => {
      console.error('Error fetching filter data:', error);
    });

  function createDropdowns(data) {
    // Iterate over each category
    Object.keys(data).forEach((categoryName) => {
      createDropdown(categoryName, data[categoryName]);
    });
  }

  function createDropdown(categoryName, categoryData) {
    const parentContainer = document.querySelector('.filter-container');
    // Create dropdown container
    const dropdownContainer = document.createElement('div');
    dropdownContainer.classList.add('dropdown-container', 'dropdown');

    // Create dropdown toggle button
    const button = document.createElement('button');
    button.classList.add('dropdown-toggle');
    button.id = `filter-${categoryName}`;
    button.textContent = categoryName.charAt(0).toUpperCase() + categoryName.slice(1); // Capitalize first letter

    // Create dropdown menu
    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdown-menu');

    // Check the type of dropdown
    if (categoryData.type.includes('Checkbox')) {
      // Checkbox dropdown logic
      categoryData.data.forEach((item) => {
        const dropdownItem = document.createElement('div');
        dropdownItem.classList.add('dropdown-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = item.toLowerCase().replace(/\s+/g, '-');
        checkbox.setAttribute('data-state', 'neutral');

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = item;

        dropdownItem.appendChild(checkbox);
        dropdownItem.appendChild(label);
        dropdownMenu.appendChild(dropdownItem);

        // Checkbox event listener
        checkbox.addEventListener('click', function () {
          const states = ['include', 'exclude', 'neutral'];
          let currentState = this.getAttribute('data-state');
          let currentIndex = states.indexOf(currentState);
          let nextIndex = (currentIndex + 1) % states.length;
          this.setAttribute('data-state', states[nextIndex]);
          this.checked = states[nextIndex] === 'include';
          this.indeterminate = states[nextIndex] === 'exclude';
          if (states[nextIndex] === 'neutral') {
            this.checked = false;
          }
        });
      });
    } else if (categoryData.type.includes('Select')) {
      // Select dropdown logic
      categoryData.data.forEach((item) => {
        const dropdownItem = document.createElement('div');
        dropdownItem.classList.add('dropdown-item', 'select-dropdown-item');
        dropdownItem.setAttribute('data-value', item.toLowerCase().replace(/\s+/g, '-'));

        dropdownItem.textContent = item;
        dropdownMenu.appendChild(dropdownItem);

        // Select dropdown event listener
        dropdownItem.addEventListener('click', function () {
          const selectedValue = this.getAttribute('data-value');
          console.log(`Selected ${categoryName}:`, selectedValue);
          this.parentNode.parentNode.classList.remove('show');
        });
      });
    }

    // Append dropdown toggle button and dropdown menu to dropdown container
    dropdownContainer.appendChild(button);
    dropdownContainer.appendChild(dropdownMenu);

    // Append dropdown container to filter container
    parentContainer.appendChild(dropdownContainer);
  }

  function addDropdownEventListeners() {
    // Select all dropdown toggles and dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');
  
    // Add event listener to each dropdown toggle within its container
    dropdowns.forEach((dropdown) => {
      const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
  
      dropdownToggle.addEventListener('click', function () {
        // Check if the dropdown is already open
        const isOpen = dropdown.classList.contains('show');
  
        // Close all dropdowns
        closeAllDropdowns();
  
        // If the clicked dropdown was not already open, open it
        if (!isOpen) {
          dropdown.classList.add('show');
        }
      });
    });
  }

  function closeAllDropdowns() {
    // Select all dropdowns and remove the 'show' class
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove('show');
    });
  }

  function closeDropdownsOnClickOutside(event) {
    // Check if the clicked element is inside any dropdown
    const isInsideDropdown = event.target.closest('.dropdown');

    // If not, close all dropdowns
    if (!isInsideDropdown) {
      closeAllDropdowns();
    }
  }
});
