const details = {
      library: `<h2>Library & e-resources</h2><p>The college library houses a large collection of books across arts, science and commerce with reading rooms and digital access to e-journals.</p>`,
      labs: `<h2>Laboratories & Workshops</h2><p>Well-equipped labs for Physics, Chemistry, Botany, Zoology and workshops for hands-on training with safety protocols.</p>`,
      computer: `<h2>Computer Center & WiFi</h2><p>High-speed WiFi and computer labs with licensed software suites for learning, research and projects.</p>`,
      auditorium: `<h2>Auditorium & Seminar Halls</h2><p>Auditorium with modern AV equipment and multiple seminar halls for talks, events and conferences.</p>`,
      hostel: `<h2>Hostel & Transport</h2><p>On-campus hostel with mess facilities and transport services for major routes with 24/7 security.</p>`,
      sports: `<h2>Sports & Recreation</h2><p>Facilities for football, cricket, badminton, gym, yoga and regular inter-college sports activities.</p>`,
      canteen: `<h2>Canteen</h2><p>The canteen provides hygienic meals, snacks and beverages at affordable prices. It is a popular hangout spot for students to relax between classes.</p><ul><li>Vegetarian and non-vegetarian options</li><li>Open 8:00 AM – 7:00 PM</li><li>Maintains cleanliness and quality standards</li></ul>`
    };

    document.querySelectorAll('[data-open]').forEach(btn=>{
      btn.addEventListener('click', e=>{
        const key = e.currentTarget.getAttribute('data-open');
        openModal(key);
      })
    })

    function openModal(key){
      const modal = document.getElementById('modal');
      const body = document.getElementById('modal-body');
      body.innerHTML = details[key] || '<p>Details not found</p>';
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden','false');
    }
    function closeModal(){
      const modal = document.getElementById('modal');
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden','true');
    }
    function bookmark(name){
      alert(name + ' added to your bookmarks (demo)');
    }
    document.getElementById('modal').addEventListener('click', function(e){
      if(e.target === this) closeModal();
    })