document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('filter-status');
    const dropdown = document.querySelector('.dropdown');
  
    dropdownToggle.addEventListener('click', function() {
      dropdown.classList.toggle('show');
    });
  
    document.querySelectorAll('.dropdown-item input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('click', function() {
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
  
    document.addEventListener('click', function(event) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
      }
    });

    const technologyDropdownToggle = document.getElementById('filter-technology');
    const technologyDropdown = document.querySelector('.technology-dropdown');

    technologyDropdownToggle.addEventListener('click', function() {
        technologyDropdown.classList.toggle('show');
    });

    document.querySelectorAll('.technology-dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            const selectedValue = this.getAttribute('data-value');
            // Update UI or perform actions based on the selected value
            console.log('Selected Technology:', selectedValue);
            // Close dropdown
            technologyDropdown.classList.remove('show');
        });
    });

    document.addEventListener('click', function(event) {
        if (!technologyDropdown.contains(event.target)) {
            technologyDropdown.classList.remove('show');
        }
    });
});
