
      document.querySelector('.hamburger').addEventListener('click', (e) => {
         document.querySelector('.nav-links').classList.toggle('expanded');
        e.currentTarget.classList.toggle('hamburger--expanded');
        console.log(e.currentTarget.getAttribute('aria-expanded'));
        if(e.currentTarget.getAttribute('aria-expanded') === 'true') {
          e.currentTarget.setAttribute('aria-expanded',false);
          e.currentTarget.setAttribute('aria-label', 'Open menu');
        }
        else {
          e.currentTarget.setAttribute('aria-expanded', true);
          e.currentTarget.setAttribute('aria-label', 'Close menu');
        }

      });
